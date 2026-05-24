# Data Readiness Hub — Draft Physical Design Requirements

**Scope:** Top-level collector site (`github/_hub/`) only. Individual topic sites (SOC 2, CCPA, etc.) are out of scope for this document.

**Source document:** `sdlc/docs/draft.user.md`
**Project root:** `C:\Projects\data-readiness`
**Date:** 2026-05-23

## 1. System Context

### 1.1 Existing Infrastructure to Reuse

| Asset | Location | Reuse Strategy |
|-------|----------|---------------|
| SOC 2 site | `c:\projects\soc2` | Reference architecture: component patterns, CSS design tokens, Astro content collection patterns, GitHub Pages deployment workflow |
| SOC 2 global.css | `c:\projects\soc2\src\styles\global.css` | Copy and adapt as shared design token file — dark slate palette, Inter font, spacing/radius tokens |
| SOC 2 BaseLayout | `c:\projects\soc2\src\components\BaseLayout.astro` | Structural pattern for hub's BaseLayout (head/nav/main/footer wrapper) |
| SOC 2 Nav | `c:\projects\soc2\src\components\Nav.astro` | Pattern for hub Nav (hamburger toggle, active state, sticky positioning) |
| SOC 2 deploy workflow | `c:\projects\soc2\.github\workflows\deploy.yml` | Copy and adapt for hub deployment |
| SDLC pipeline | `data-readiness/sdlc/` | Document pipeline for this and future spoke sites |

### 1.2 New Dependencies

| Package | Purpose | Version Constraint |
|---------|---------|-------------------|
| `astro` | Static site generator | `^5.8.0` |
| `@astrojs/sitemap` | Automatic sitemap generation | `^3.7.2` |
| `sharp` | Image optimization | `^0.33.5` |

No additional dependencies beyond what the SOC 2 site uses. The hub is a simpler site with fewer pages.

### 1.3 Configuration

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `site` (astro.config) | string | TBD (e.g., `https://datareadiness.johnboen.com`) | Hub site URL for sitemap and canonical links |
| `server.port` | number | `4339` | Dev server port (per port registry) |

## 2. Package Layout

```
github/_hub/
  package.json
  astro.config.mjs
  tsconfig.json
  .github/
    workflows/
      deploy.yml
  public/
    favicon.svg
    CNAME
  src/
    config.ts                    # SITE constant (title, description, url, author)
    styles/
      global.css                 # Design tokens — identical to spoke sites
    components/
      BaseLayout.astro           # <html> wrapper with head, nav, main, footer slots
      Nav.astro                  # Hub navigation (Home, About + discovered topics)
      Footer.astro               # Footer with disclaimer and copyright
      HeroSection.astro          # Reusable hero banner
      TopicCard.astro            # Renders one topic from site.json manifest
    pages/
      index.astro                # Hero + topic catalog grid
      about.astro                # Platform overview and positioning
      404.astro                  # Error page
    data/
      discover-topics.ts         # Build-time topic discovery from sibling site.json files
      topic-schema.ts            # Zod schema for site.json manifest validation
```

## 3. Auto-Discovery Mechanism

### 3.1 Discovery Logic (`src/data/discover-topics.ts`)

At build time:

1. Resolve the `github/` parent directory (one level up from `_hub/`).
2. List all sibling directories (everything in `github/` except `_hub/`).
3. For each directory, check if `site.json` exists.
4. If it exists, read and validate against the topic manifest Zod schema.
5. If validation passes, include in the topics array.
6. If validation fails or file missing, skip silently (log a warning in dev mode).
7. Sort by `order` field ascending.
8. Return the sorted array.

This runs once at build time. No runtime discovery.

### 3.2 Manifest Schema (`src/data/topic-schema.ts`)

```typescript
import { z } from 'astro/zod';

export const topicManifestSchema = z.object({
  id: z.string(),                                          // folder name / slug
  name: z.string(),                                        // display name
  shortDescription: z.string(),                            // one-line for card
  regulation: z.string(),                                  // formal regulation name
  status: z.enum(['live', 'placeholder']),                 // determines link vs "coming soon"
  url: z.string().url().optional(),                        // deployed URL (required if live)
  order: z.number().int().min(1).max(99),                  // sort order
  category: z.string(),                                    // grouping (e.g., "privacy", "audit-framework", "security")
  icon: z.string().optional(),                             // icon identifier for card rendering
});

export type TopicManifest = z.infer<typeof topicManifestSchema>;
```

### 3.3 Manifest Validation Rules

- `status: "live"` requires `url` to be present and non-empty.
- `status: "placeholder"` ignores `url` (may be absent or empty).
- Duplicate `id` values across manifests are rejected (first wins, warning logged).
- Duplicate `order` values are allowed (tie-broken alphabetically by `id`).

## 4. Component Designs

### 4.1 BaseLayout

- **Purpose:** HTML document wrapper for all hub pages.
- **Location:** `src/components/BaseLayout.astro`
- **Pattern:** Identical structural pattern to SOC 2's BaseLayout.
- **Props:** `title: string`, `description: string`, `ogImage?: string`
- **Slots:** default slot for page content.
- **Behavior:** Renders `<html>`, `<head>` with meta/SEO tags, `<body>` with Nav, `<main>`, Footer.

### 4.2 Nav

- **Purpose:** Sticky top navigation for the hub.
- **Location:** `src/components/Nav.astro`
- **Links:** Home, About. Does NOT dynamically list topic sites in the nav — topics are in the catalog grid.
- **Pattern:** CSS-only hamburger toggle (checkbox hack), active page detection via `Astro.url.pathname`.

### 4.3 Footer

- **Purpose:** Site footer.
- **Location:** `src/components/Footer.astro`
- **Content:** Disclaimer text, copyright year from SITE config, author name.

### 4.4 HeroSection

- **Purpose:** Reusable hero banner for landing pages.
- **Location:** `src/components/HeroSection.astro`
- **Props:** `headline: string`, `subheadline: string`, `ctaText?: string`, `ctaHref?: string`

### 4.5 TopicCard

- **Purpose:** Renders one regulation topic as a card in the catalog grid.
- **Location:** `src/components/TopicCard.astro`
- **Props:** Full `TopicManifest` object.
- **Behavior:**
  - Displays topic name, shortDescription, category badge.
  - If `status === "live"`: renders as a clickable link to `url`, shows green "Live" badge.
  - If `status === "placeholder"`: renders as non-clickable card, shows amber "Coming Soon" badge, muted styling.
- **Styling:** Same `.card` pattern as SOC 2's cards (border, shadow, hover effect for live cards only).

## 5. Page Designs

### 5.1 Home (`pages/index.astro`)

1. HeroSection — headline about the Data Readiness platform, subheadline about the 12 regulations, CTA to scroll to catalog.
2. Topic catalog grid — calls `discoverTopics()`, maps results to TopicCard components. CSS grid: 3 columns desktop, 2 tablet, 1 mobile.
3. Brief "How It Works" section — 3-step explanation (Pick a regulation → Review controls → Prepare evidence).
4. Footer CTA — link to About page.

### 5.2 About (`pages/about.astro`)

1. Platform positioning — what Data Readiness is and who it serves.
2. Regulation coverage summary — table of all 12 topics with regulation name, category, and status.
3. Approach description — how topic sites are structured (controls, evidence, tools, services).
4. Contact CTA.

### 5.3 404 (`pages/404.astro`)

Simple error page with link back to home.

## 6. Design System (Shared CSS)

The `global.css` file is the source of truth for the visual language. It is identical across the hub and all spoke sites. Key tokens:

```css
--color-bg: #0f172a;
--color-bg-alt: #1e293b;
--color-text: #cbd5e1;
--color-heading: #f1f5f9;
--color-accent: #60a5fa;
--color-accent-strong: #3b82f6;
--color-border: #334155;
--font-body: 'Inter', system-ui, sans-serif;
--max-width: 72rem;
--content-width: 52rem;
```

The hub adds two token-driven badge styles not present in SOC 2:
- `.badge-live` — green background (#22c55e on dark), used for live status.
- `.badge-coming-soon` — amber background (#f59e0b on dark), used for placeholder status.

## 7. Deployment

GitHub Pages via GitHub Actions workflow, identical pattern to SOC 2:

1. Trigger: push to main branch of hub repo.
2. Node 20 + npm ci.
3. `npx astro build`.
4. Upload dist/ to GitHub Pages.
5. Custom domain via CNAME.

## 8. Testing Approach

Given this is a static site with no backend:

- **Build verification:** `npx astro build` succeeds with zero errors.
- **Discovery verification:** Create test manifests in a temp directory, run discovery logic, assert correct parsing and sorting.
- **Visual verification:** `npx astro dev` and manual inspection of catalog grid with mix of live and placeholder topics.
- **Link verification:** All live topic links point to valid URLs (manual check or simple link checker script).
