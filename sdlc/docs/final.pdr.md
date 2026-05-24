---
document: "Physical Design Requirements"
version: "1.0"
status: "final"
scope: "Hub site (github/_hub/) — top-level collector only"
source: "sdlc/docs/draft.pdr.md"
user_requirements: "sdlc/docs/final.user.md"
finalized_date: "2026-05-23"
---

# Data Readiness Hub — Physical Design Requirements

**Source document:** `sdlc/docs/final.user.md`
**Project root:** `C:\Projects\data-readiness`
**Date:** 2026-05-23

## 1. System Context

### 1.1 Existing Infrastructure to Reuse

| Asset | Location | Reuse Strategy |
|-------|----------|---------------|
| SOC 2 global.css | `c:\projects\soc2\src\styles\global.css` | Copy as starting point for hub's `global.css`. Preserve all design tokens. Add badge styles for live/placeholder status. |
| SOC 2 BaseLayout pattern | `c:\projects\soc2\src\components\BaseLayout.astro` | Structural reference: html/head/body wrapper, SEO meta tags, slot-based content injection. Rewrite for hub-specific needs. |
| SOC 2 Nav pattern | `c:\projects\soc2\src\components\Nav.astro` | CSS-only hamburger toggle, sticky positioning, active-page detection via pathname. Simplify for hub's 2-link nav. |
| SOC 2 Footer pattern | `c:\projects\soc2\src\components\Footer.astro` | Disclaimer + copyright. Adapt text for platform-level messaging. |
| SOC 2 HeroSection pattern | `c:\projects\soc2\src\components\HeroSection.astro` | Reusable hero with headline, subheadline, CTA. Copy and adapt. |
| SOC 2 deploy workflow | `c:\projects\soc2\.github\workflows\deploy.yml` | GitHub Pages deployment. Copy and update CNAME/site URL. |

### 1.2 New Dependencies

| Package | Purpose | Version Constraint | License |
|---------|---------|-------------------|---------|
| `astro` | Static site generator | `^5.8.0` | MIT |
| `@astrojs/sitemap` | Sitemap generation for SEO (NFR-005) | `^3.7.2` | MIT |
| `sharp` | Image optimization | `^0.33.5` | Apache-2.0 |

No additional dependencies. The hub is intentionally minimal.

### 1.3 Configuration

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `SITE.title` | string | `"Data Readiness"` | Site title for `<title>` and nav branding |
| `SITE.description` | string | `"Regulatory compliance readiness for technology companies"` | Meta description for SEO |
| `SITE.url` | string | `"https://datareadiness.johnboen.com"` | Canonical URL for sitemap and og:tags |
| `SITE.author` | string | `"John Boen"` | Copyright attribution in footer |
| `site` (astro.config) | string | Same as `SITE.url` | Astro's site URL for sitemap |
| `server.port` (astro.config) | number | `4339` | Dev server port (port registry) |

<!-- Added during finalization: SITE constants documented explicitly to match SOC 2's src/config.ts pattern (US-009, NFR-005). -->

## 2. Data Model

No database. No content collections. The hub's data source is the set of `site.json` manifest files in sibling directories.

### 2.1 Topic Manifest Schema (`site.json`)

Each topic site provides a `site.json` at its root:

```typescript
// src/data/topic-schema.ts
import { z } from 'astro/zod';

export const topicManifestSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, 'id must be lowercase alphanumeric with hyphens'),
  name: z.string().min(1),
  shortDescription: z.string().min(10).max(200),
  regulation: z.string().min(1),
  status: z.enum(['live', 'placeholder']),
  url: z.string().url().optional(),
  order: z.number().int().min(1).max(99),
  category: z.string().min(1),
  icon: z.string().optional(),
}).refine(
  (data) => data.status !== 'live' || (data.url !== undefined && data.url !== ''),
  { message: 'url is required when status is "live"', path: ['url'] }
);

export type TopicManifest = z.infer<typeof topicManifestSchema>;
```

<!-- Added during finalization: validation constraints (regex on id, min/max on shortDescription, refine for live+url) to enforce data quality at build time (US-007). -->

### 2.2 Manifest Examples

**Live topic:**
```json
{
  "id": "soc2",
  "name": "SOC 2 Readiness",
  "shortDescription": "Prepare for SOC 2 Type 1 or Type 2 audits with controls, evidence workflows, and tool evaluations",
  "regulation": "SOC 2",
  "status": "live",
  "url": "https://soc2.johnboen.com",
  "order": 12,
  "category": "audit-framework",
  "icon": "shield-check"
}
```

**Placeholder topic:**
```json
{
  "id": "hipaa",
  "name": "HIPAA Security Rule Readiness",
  "shortDescription": "Document ePHI safeguards, access controls, audit logging, and risk analysis",
  "regulation": "HIPAA Security Rule",
  "status": "placeholder",
  "order": 5,
  "category": "security"
}
```

### 2.3 All 12 Topic Manifests (Initial Set)

| order | id | name | category |
|-------|----|------|----------|
| 1 | cppa | CCPA / CPRA Privacy Readiness | privacy |
| 2 | gdpr | GDPR Operational Readiness | privacy |
| 3 | coppa | COPPA Readiness | privacy |
| 4 | ftc-safeguards | FTC Safeguards Rule Readiness | security |
| 5 | hipaa | HIPAA Security Rule Readiness | security |
| 6 | pci-dss | PCI DSS v4.0.1 Readiness | security |
| 7 | ny-shield | NY SHIELD Act Readiness | security |
| 8 | state-privacy | State Privacy Law Patchwork | privacy |
| 9 | sec-cyber | SEC Cybersecurity Disclosure Readiness | governance |
| 10 | ai-governance | AI Governance / AI Regulatory Readiness | governance |
| 11 | eu-dora | EU DORA Readiness | governance |
| 12 | soc2 | SOC 2 Readiness | audit-framework |

All start as `status: "placeholder"` until their topic sites are built and deployed.

## 3. Package Layout

```
github/_hub/
├── package.json                          # name: "data-readiness-hub", type: module
├── astro.config.mjs                      # site URL, port 4339, sitemap integration
├── tsconfig.json                         # extends astro/tsconfigs/strict
├── .github/
│   └── workflows/
│       └── deploy.yml                    # GitHub Pages deployment
├── public/
│   ├── favicon.svg                       # Site icon
│   └── CNAME                            # Custom domain pointer
└── src/
    ├── config.ts                         # SITE constant: title, description, url, author
    ├── styles/
    │   └── global.css                    # Design tokens (shared with spoke sites)
    ├── data/
    │   ├── topic-schema.ts               # Zod schema for site.json manifest
    │   └── discover-topics.ts            # Build-time discovery logic
    ├── components/
    │   ├── BaseLayout.astro              # HTML document wrapper
    │   ├── Nav.astro                     # Sticky top navigation
    │   ├── Footer.astro                  # Site footer
    │   ├── HeroSection.astro             # Reusable hero banner
    │   └── TopicCard.astro               # Topic catalog card
    └── pages/
        ├── index.astro                   # Home: hero + topic catalog grid
        ├── about.astro                   # Platform overview
        └── 404.astro                     # Error page
```

## 4. Component Designs

### 4.1 BaseLayout

- **Purpose:** HTML document wrapper for all hub pages.
- **Location:** `src/components/BaseLayout.astro`
- **Implements:** US-009 (persistent nav), NFR-002 (semantic HTML, skip-link), NFR-005 (meta tags)
- **Interface:**
  ```typescript
  interface Props {
    title: string;
    description: string;
    ogImage?: string;
  }
  ```
- **Behavior:** Renders `<!DOCTYPE html>`, `<html lang="en">`, `<head>` with charset, viewport, title, meta description, og:tags, global.css import. Body contains skip-to-content link, `<Nav />`, `<main id="main-content">` with default slot, `<Footer />`.
- **Dependencies:** Nav, Footer, global.css, SITE config.

### 4.2 Nav

- **Purpose:** Sticky navigation bar for hub pages.
- **Location:** `src/components/Nav.astro`
- **Implements:** US-009 (persistent nav), US-010 (mobile hamburger), NFR-002 (keyboard navigable)
- **Interface:** No props. Reads `Astro.url.pathname` for active state.
- **Behavior:**
  - Renders site title/logo linking to `/`.
  - Two nav links: Home (`/`), About (`/about`).
  - Active page gets `aria-current="page"` attribute and visual highlight.
  - At ≤768px: links collapse behind hamburger menu (CSS checkbox toggle — no JavaScript).
  - Sticky positioning (`position: sticky; top: 0`).
- **Dependencies:** SITE config for branding text.

### 4.3 Footer

- **Purpose:** Site footer with disclaimer and copyright.
- **Location:** `src/components/Footer.astro`
- **Implements:** NFR-002 (semantic HTML)
- **Interface:** No props. Reads SITE config for author and current year.
- **Behavior:** Renders `<footer>` with disclaimer text ("Data Readiness provides informational guidance only..."), copyright line with dynamic year.

### 4.4 HeroSection

- **Purpose:** Reusable hero banner for landing pages.
- **Location:** `src/components/HeroSection.astro`
- **Implements:** US-001 (topic visibility from hero context)
- **Interface:**
  ```typescript
  interface Props {
    headline: string;
    subheadline: string;
    ctaText?: string;
    ctaHref?: string;
  }
  ```
- **Behavior:** Renders headline in `<h1>`, subheadline in `<p>`, optional CTA as styled link. Dark gradient background with accent color treatment.

### 4.5 TopicCard

- **Purpose:** Renders one regulation topic as a card in the catalog grid.
- **Location:** `src/components/TopicCard.astro`
- **Implements:** US-001 (topic display), US-002 (status badges), US-003 (link to live site), US-004 (category badge)
- **Interface:**
  ```typescript
  interface Props {
    id: string;
    name: string;
    shortDescription: string;
    regulation: string;
    status: 'live' | 'placeholder';
    url?: string;
    order: number;
    category: string;
    icon?: string;
  }
  ```
- **Behavior:**
  - Renders as `<article class="card topic-card">`.
  - Shows `name` as heading, `shortDescription` as body text.
  - Category badge: styled `<span class="badge">` with category text (e.g., "privacy", "security").
  - **Live state:** Green `.badge-live` status indicator. Entire card is wrapped in `<a href={url}>` with hover effect.
  - **Placeholder state:** Amber `.badge-coming-soon` status indicator. Card is not a link. Muted opacity (`opacity: 0.7`). No hover effect.
  - Hover effect (live only): card shadow deepens, slight translateY(-2px).
- **Dependencies:** None.

<!-- Added during finalization: detailed hover/opacity behavior and semantic article element for accessibility (NFR-002). -->

## 5. Page Designs

### 5.1 Home Page (`pages/index.astro`)

- **Implements:** US-001, US-002, US-003, US-004, US-005
- **Data source:** `discoverTopics()` from `src/data/discover-topics.ts`
- **Sections:**
  1. **HeroSection** — "Data Readiness" headline, subheadline about 12 regulations, CTA scrolling to catalog.
  2. **Topic Catalog Grid** — Maps discovered topics to TopicCard components. CSS grid: `grid-template-columns: repeat(3, 1fr)` desktop, `repeat(2, 1fr)` at 768px, `1fr` at 480px. Gap: `1.5rem`.
  3. **How It Works** — Three-step explanation: (1) Pick a regulation, (2) Review controls & evidence, (3) Prepare for readiness. Rendered as a three-column layout with numbered steps.
  4. **Footer CTA** — "Learn more about the platform" linking to About page.

### 5.2 About Page (`pages/about.astro`)

- **Implements:** US-005
- **Sections:**
  1. **Platform Positioning** — What Data Readiness is and who it serves. 2-3 paragraphs.
  2. **Regulation Coverage Table** — All 12 topics with regulation name, category, and current status. Rendered as a styled `<table>`. Data from `discoverTopics()`.
  3. **Site Structure** — How each topic site is organized (controls, evidence, tools, services). Brief description of the spoke pattern for visitors who want to understand the depth.
  4. **Contact CTA** — How to get in touch.

### 5.3 404 Page (`pages/404.astro`)

- **Sections:** Error heading, brief message, link back to home.

## 6. Discovery Module Design

### 6.1 `discover-topics.ts`

- **Purpose:** Build-time topic discovery.
- **Location:** `src/data/discover-topics.ts`
- **Implements:** US-006, US-007, US-008

```typescript
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { topicManifestSchema, type TopicManifest } from './topic-schema';

export function discoverTopics(): TopicManifest[] {
  const hubDir = resolve(import.meta.dirname, '../../..'); // github/_hub/ → github/
  const githubDir = resolve(hubDir, '..');
  const entries = readdirSync(githubDir, { withFileTypes: true });
  const topics: TopicManifest[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === '_hub') continue;
    const manifestPath = join(githubDir, entry.name, 'site.json');
    if (!existsSync(manifestPath)) continue;

    try {
      const raw = JSON.parse(readFileSync(manifestPath, 'utf-8'));
      const parsed = topicManifestSchema.safeParse(raw);
      if (parsed.success) {
        topics.push(parsed.data);
      } else {
        console.warn(`[discover-topics] Invalid manifest at ${manifestPath}:`, parsed.error.issues);
      }
    } catch (err) {
      console.warn(`[discover-topics] Failed to read ${manifestPath}:`, err);
    }
  }

  // Sort by order, tie-break by id
  topics.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));

  // Warn on duplicate ids
  const seen = new Set<string>();
  for (const t of topics) {
    if (seen.has(t.id)) {
      console.warn(`[discover-topics] Duplicate topic id: "${t.id}" — keeping first occurrence`);
    }
    seen.add(t.id);
  }

  return topics.filter((t, i, arr) => arr.findIndex(x => x.id === t.id) === i);
}
```

<!-- Added during finalization: full implementation with error handling, duplicate detection, and warning logging to satisfy US-007. -->

### 6.2 Path Resolution

The discovery module resolves paths relative to its own location:
- `src/data/discover-topics.ts` is at `github/_hub/src/data/`.
- Two levels up (`../../`) reaches `github/_hub/`.
- One more level up (`../../../`) reaches `github/`.
- Sibling directories of `_hub/` are the topic folders.

This works both in dev mode (`astro dev`) and at build time (`astro build`) because `import.meta.dirname` resolves to the source file's directory.

## 7. Design System

### 7.1 Shared CSS Tokens (`src/styles/global.css`)

Copied from SOC 2 project with these additions:

```css
/* === Existing SOC 2 tokens (preserved verbatim) === */
:root {
  --color-bg: #0f172a;
  --color-bg-alt: #1e293b;
  --color-text: #cbd5e1;
  --color-heading: #f1f5f9;
  --color-accent: #60a5fa;
  --color-accent-strong: #3b82f6;
  --color-border: #334155;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'Cascadia Code', 'Fira Code', monospace;
  --max-width: 72rem;
  --content-width: 52rem;
  --spacing-page: 2rem;
  --spacing-section: 4rem;
  --radius: 0.5rem;
  --radius-sm: 0.375rem;
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.3);
  --shadow-card-hover: 0 4px 12px rgba(0, 0, 0, 0.4);
}

/* === Hub additions === */
.badge-live {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-coming-soon {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### 7.2 Responsive Breakpoints

| Breakpoint | Width | Layout Change |
|-----------|-------|--------------|
| Desktop | ≥1200px | Topic grid: 3 columns |
| Tablet | ≤768px | Topic grid: 2 columns; nav collapses to hamburger |
| Mobile | ≤480px | Topic grid: 1 column; reduced font sizes, spacing |

## 8. Security Design

Minimal attack surface — static HTML, no user input, no backend:

- **No forms, no input fields.** No injection vectors.
- **No cookies or localStorage.** No session management.
- **No JavaScript frameworks.** Astro outputs zero client-side JS by default (no islands needed for this site).
- **CSP headers.** Configure via deployment platform or meta tag: `default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'`.
- **External links.** Topic site links open in the same tab (no `target="_blank"` with `rel="noopener"` needed — same-origin navigation is not a security concern, and topic sites are first-party).

<!-- Added during finalization: CSP header recommendation and external link policy for static site security baseline (NFR-002 adjacent). -->

## 9. Observability

- **Build-time logging.** Discovery module logs warnings to stderr for invalid/missing manifests (US-007). No runtime logging needed.
- **No health check endpoint.** Static site — the CDN/hosting handles availability.
- **No metrics.** No analytics by design. Hosting platform (GitHub Pages) provides basic traffic data if needed.

## 10. Test Strategy

| Test Type | What | How |
|-----------|------|-----|
| Build verification | Site builds without errors | `npx astro build` exits 0 |
| Discovery unit test | Manifest parsing and sorting | Create temp directory with valid/invalid manifests, call `discoverTopics()`, assert results |
| Visual verification | Pages render correctly at all breakpoints | Manual: `npx astro dev`, inspect at 1200px, 768px, 480px, 375px |
| Link verification | Live topic URLs are reachable | Manual or simple `curl` script checking HTTP 200 for each `url` in live manifests |
| Accessibility check | WCAG compliance | Lighthouse audit in Chrome DevTools, target score ≥ 90 for Accessibility |

<!-- Added during finalization: test strategy section — the draft had testing but not structured as test types with methods (NFR-002, NFR-003). -->

## 11. Traceability Matrix

| User Story | PDR Section | Component | Page |
|-----------|-------------|-----------|------|
| US-001 | 4.5, 5.1 | TopicCard | index.astro |
| US-002 | 4.5 | TopicCard | index.astro |
| US-003 | 4.5 | TopicCard | index.astro |
| US-004 | 4.5, 5.1 | TopicCard | index.astro |
| US-005 | 5.2 | — | about.astro |
| US-006 | 6.1, 2.1 | discover-topics.ts | — (build-time) |
| US-007 | 6.1 | discover-topics.ts | — (build-time) |
| US-008 | 4.5, 6.1 | TopicCard, discover-topics.ts | index.astro |
| US-009 | 4.1, 4.2 | BaseLayout, Nav | all pages |
| US-010 | 4.2, 7.2 | Nav | all pages |
| NFR-001 | 6.1 | discover-topics.ts | — |
| NFR-002 | 4.1, 4.2, 4.5, 7.1 | BaseLayout, Nav, TopicCard | all pages |
| NFR-003 | 7.2 | — | all pages |
| NFR-004 | — (static site, inherent) | — | all pages |
| NFR-005 | 1.3, 4.1 | BaseLayout | all pages |
| NFR-006 | 1.2 | — | — |
