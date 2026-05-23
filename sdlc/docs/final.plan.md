---
document: "Implementation Plan"
version: "1.0"
status: "final"
scope: "Hub site (github/_hub/) — top-level collector only"
source: "sdlc/docs/draft.plan.md"
pdr: "sdlc/docs/final.pdr.md"
user_requirements: "sdlc/docs/final.user.md"
finalized_date: "2026-05-23"
total_phases: 5
---

# Data Readiness Hub — Implementation Plan

**Source PDR:** `sdlc/docs/final.pdr.md`
**Source User Requirements:** `sdlc/docs/final.user.md`

## Work Queue Instructions

### State Transitions

Open  ──>  Started  ──>  Completed
              │
              └──>  Blocked  ──>  Started  ──>  Completed

- **Open**: Not yet begun.
- **Started**: Actively in progress. Record the start datetime (PST).
- **Completed**: Done and verified. Record the completion datetime (PST).
- **Blocked**: Cannot proceed; note the blocker in the description.

### Commit Protocol

1. Work through all tasks in a phase.
2. When every task reaches Completed, write the Phase Summary.
3. Stage and commit all changes for the phase. Do not push.
4. Proceed immediately to the next phase.

## Technology Stack

| Concern | Choice | Justification |
|---------|--------|--------------|
| Framework | Astro 5.x | Same as SOC 2 reference project; static-first, zero JS by default |
| Language | TypeScript (strict) | Build-time type safety for manifest validation and component props |
| Styling | Custom CSS with design tokens | Matches SOC 2; no framework overhead for a 3-page site |
| Image optimization | Sharp | Astro's default image optimizer |
| SEO | @astrojs/sitemap | Automatic sitemap.xml generation |
| Hosting | GitHub Pages | Free, same as SOC 2; one-click deployment via Actions |
| Dev port | 4339 | Per project port registry |

## Phase 00: Project Scaffold & Design System

**Goal:** A buildable Astro project at `github/_hub/` with the shared design system CSS, site config, and public assets.
**Depends on:** Nothing (first phase).
**PDR sections:** 1.2 (dependencies), 1.3 (configuration), 3 (package layout), 7.1 (design tokens)
**User stories:** — (infrastructure, no user-facing behavior yet)

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 00.1 | Completed | 2026-05-23 12:00 PM | 2026-05-23 12:02 PM | Create `github/_hub/package.json` with name `data-readiness-hub`, type `module`, scripts (dev port 4339, build, preview), dependencies (astro ^5.8.0, @astrojs/sitemap ^3.7.2, sharp ^0.33.5) |
| 00.2 | Completed | 2026-05-23 12:02 PM | 2026-05-23 12:03 PM | Create `github/_hub/astro.config.mjs` — site URL, port 4339, sitemap integration |
| 00.3 | Completed | 2026-05-23 12:02 PM | 2026-05-23 12:03 PM | Create `github/_hub/tsconfig.json` — extends `astro/tsconfigs/strict` |
| 00.4 | Completed | 2026-05-23 12:02 PM | 2026-05-23 12:03 PM | Create `github/_hub/src/config.ts` — SITE constant with title, description, url, author |
| 00.5 | Completed | 2026-05-23 12:03 PM | 2026-05-23 12:05 PM | Create `github/_hub/src/styles/global.css` — copy SOC 2 design tokens, add `.badge-live` and `.badge-coming-soon` styles per PDR §7.1 |
| 00.6 | Completed | 2026-05-23 12:02 PM | 2026-05-23 12:03 PM | Create `github/_hub/public/favicon.svg` and `github/_hub/public/CNAME` |
| 00.7 | Completed | 2026-05-23 12:05 PM | 2026-05-23 12:07 PM | Run `npm install` and verify `npx astro build` succeeds (empty project, no pages yet — just confirm toolchain works) |

### Phase 00 Summary

- **Changes:** Created `github/_hub/` Astro project scaffold with `package.json`, `astro.config.mjs` (port 4339, sitemap), `tsconfig.json` (strict), `src/config.ts` (SITE constant), `src/styles/global.css` (SOC 2 design tokens + `.badge-live`, `.badge-coming-soon`, `.badge` styles), `public/favicon.svg`, `public/CNAME`. Installed 296 npm packages. Verified `npx astro build` succeeds.
- **Commit:** `Phase 00: Project Scaffold & Design System — Astro hub site with shared design tokens`

## Phase 01: Core Components

**Goal:** BaseLayout, Nav, Footer, and HeroSection components are implemented and rendering correctly on a placeholder page.
**Depends on:** Phase 00.
**PDR sections:** 4.1 (BaseLayout), 4.2 (Nav), 4.3 (Footer), 4.4 (HeroSection)
**User stories:** US-009 (persistent nav), US-010 (mobile responsive nav), NFR-002 (accessibility)

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 01.1 | Completed | 2026-05-23 07:02 PM | 2026-05-23 07:03 PM | Create `src/components/BaseLayout.astro` — html/head/body wrapper with title, description, ogImage props; imports global.css; skip-to-content link; renders Nav, main slot, Footer (PDR §4.1) |
| 01.2 | Completed | 2026-05-23 07:03 PM | 2026-05-23 07:04 PM | Create `src/components/Nav.astro` — sticky nav with Home and About links, CSS-only hamburger at ≤768px, `aria-current="page"` active state, keyboard navigable (PDR §4.2) |
| 01.3 | Completed | 2026-05-23 07:04 PM | 2026-05-23 07:05 PM | Create `src/components/Footer.astro` — disclaimer text, copyright with dynamic year from SITE config (PDR §4.3) |
| 01.4 | Completed | 2026-05-23 07:04 PM | 2026-05-23 07:05 PM | Create `src/components/HeroSection.astro` — headline `<h1>`, subheadline `<p>`, optional CTA link, dark gradient background (PDR §4.4) |
| 01.5 | Completed | 2026-05-23 07:05 PM | 2026-05-23 07:06 PM | Create placeholder `src/pages/index.astro` using BaseLayout with HeroSection to verify all components render |
| 01.6 | Completed | 2026-05-23 07:05 PM | 2026-05-23 07:06 PM | Create `src/pages/404.astro` — error heading, message, home link (PDR §5.3) |
| 01.7 | Completed | 2026-05-23 07:06 PM | 2026-05-23 07:06 PM | Verify: `npx astro dev` renders placeholder index and 404; nav links work; hamburger toggles at ≤768px; skip-link focuses main content |

### Phase 01 Summary

- **Changes:** Created `src/components/BaseLayout.astro` (html/head/body wrapper with SEO meta, skip-link, Nav, Footer), `src/components/Nav.astro` (sticky nav, CSS-only hamburger, aria-current active state), `src/components/Footer.astro` (disclaimer, dynamic copyright year), `src/components/HeroSection.astro` (headline, subheadline, optional CTA with gradient background), `src/pages/index.astro` (placeholder home with hero), `src/pages/404.astro` (error page with home link). Build verified — 2 pages built successfully.
- **Commit:** `Phase 01: Core Components — BaseLayout, Nav, Footer, HeroSection, placeholder pages`

## Phase 02: Topic Discovery & TopicCard

**Goal:** Hub auto-discovers topic sites from `site.json` manifests at build time and renders them as cards.
**Depends on:** Phase 01.
**PDR sections:** 2.1 (manifest schema), 2.3 (all 12 manifests), 4.5 (TopicCard), 6.1 (discover-topics.ts), 6.2 (path resolution)
**User stories:** US-001, US-002, US-003, US-004, US-006, US-007, US-008

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 02.1 | Open | | | Create `src/data/topic-schema.ts` — Zod schema with id regex, min/max constraints, live-requires-url refine (PDR §2.1) |
| 02.2 | Open | | | Create `src/data/discover-topics.ts` — fs-based discovery of `github/*/site.json`, parse, validate, sort by order, warn on invalid/duplicate, return TopicManifest[] (PDR §6.1) |
| 02.3 | Open | | | Create `site.json` placeholder manifests for all 12 topics in their respective `github/{topic}/` folders (create folders as needed). All status: placeholder. Content per PDR §2.3 |
| 02.4 | Open | | | Create `src/components/TopicCard.astro` — card with name heading, shortDescription, category badge, status badge (live/coming-soon), conditional `<a>` wrapper for live topics, muted opacity for placeholder, hover effect for live only (PDR §4.5) |
| 02.5 | Open | | | Update `src/pages/index.astro` — import discoverTopics, map to TopicCard grid. CSS grid: 3-col desktop, 2-col tablet, 1-col mobile (PDR §5.1) |
| 02.6 | Open | | | Verify: `npx astro dev` shows 12 topic cards sorted by order; placeholder cards show amber badge, no link, muted style; console shows no warnings for valid manifests |

<!-- Added during finalization: task 02.3 creates all 12 topic folders and manifests upfront so the catalog is populated from the start (US-001). Task 02.6 added for build-time discovery verification. -->

### Phase 02 Summary

_To be filled after completion._

- **Changes:** TBD
- **Commit:** TBD

## Phase 03: Content Pages

**Goal:** All hub pages have real content, complete layouts, and responsive design.
**Depends on:** Phase 02.
**PDR sections:** 5.1 (home page full layout), 5.2 (about page)
**User stories:** US-001, US-004, US-005, NFR-003

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 03.1 | Open | | | Finalize `src/pages/index.astro` — add "How It Works" three-step section below topic grid, footer CTA linking to About page (PDR §5.1) |
| 03.2 | Open | | | Create `src/pages/about.astro` — platform positioning paragraphs, regulation coverage table (from discoverTopics()), site structure explanation, contact CTA (PDR §5.2) |
| 03.3 | Open | | | Verify responsive layout: all pages at 1200px, 768px, 480px, 375px — grids reflow, text readable, no overflow |
| 03.4 | Open | | | Verify accessibility: Lighthouse audit ≥ 90 for Accessibility on all pages; check keyboard tab order; verify skip-link |

<!-- Added during finalization: task 03.4 for accessibility verification (NFR-002). -->

### Phase 03 Summary

_To be filled after completion._

- **Changes:** TBD
- **Commit:** TBD

## Phase 04: Deployment & Final Verification

**Goal:** Hub site builds cleanly, deployment workflow is configured, all acceptance criteria pass.
**Depends on:** Phase 03.
**PDR sections:** 8 (security — CSP), 9 (observability — build logging), 10 (test strategy)
**User stories:** NFR-001, NFR-004, NFR-005, NFR-006

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 04.1 | Open | | | Create `github/_hub/.github/workflows/deploy.yml` — GitHub Pages deployment: trigger on push to main, Node 20, npm ci, astro build, upload artifact, deploy pages |
| 04.2 | Open | | | Add CSP `<meta>` tag to BaseLayout `<head>`: `default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'` (PDR §8) |
| 04.3 | Open | | | Full build verification: `npx astro build` completes < 30s (NFR-001), produces dist/ with index.html, about/index.html, 404.html, sitemap.xml |
| 04.4 | Open | | | Verify discovery end-to-end: add a test manifest with status: live and a URL, rebuild, confirm card links correctly; add an invalid manifest, rebuild, confirm warning logged and card skipped |
| 04.5 | Open | | | Verify zero-edit topic addition: create a new `github/test-topic/site.json`, rebuild hub, confirm new card appears without any hub source changes (US-006) |
| 04.6 | Open | | | Remove test artifacts (test-topic folder) and run final clean build |

<!-- Added during finalization: tasks 04.2 (CSP), 04.4 (discovery e2e), 04.5 (zero-edit verification) to cover PDR security section and key acceptance criteria from final.user.md. -->

### Phase 04 Summary

_To be filled after completion._

- **Changes:** TBD
- **Commit:** TBD

## Coverage Checklist

_Verify every PDR component and user story appears in at least one phase task._

| PDR Section | Component / Module | Phase | Task(s) |
|-------------|-------------------|-------|---------|
| 1.2 | Dependencies (package.json) | 00 | 00.1 |
| 1.3 | Configuration (astro.config, SITE) | 00 | 00.2, 00.4 |
| 2.1 | Topic manifest schema | 02 | 02.1 |
| 2.3 | All 12 manifests | 02 | 02.3 |
| 3 | Package layout | 00 | 00.1–00.6 |
| 4.1 | BaseLayout | 01 | 01.1 |
| 4.2 | Nav | 01 | 01.2 |
| 4.3 | Footer | 01 | 01.3 |
| 4.4 | HeroSection | 01 | 01.4 |
| 4.5 | TopicCard | 02 | 02.4 |
| 5.1 | Home page | 02, 03 | 02.5, 03.1 |
| 5.2 | About page | 03 | 03.2 |
| 5.3 | 404 page | 01 | 01.6 |
| 6.1 | discover-topics.ts | 02 | 02.2 |
| 6.2 | Path resolution | 02 | 02.2 |
| 7.1 | Design system CSS | 00 | 00.5 |
| 7.2 | Responsive breakpoints | 03 | 03.3 |
| 8 | Security (CSP) | 04 | 04.2 |
| 9 | Observability (build logging) | 02 | 02.2 |
| 10 | Test strategy | 04 | 04.3–04.6 |

| User Story | Phase | Task(s) |
|-----------|-------|---------|
| US-001 | 02, 03 | 02.4, 02.5, 03.1 |
| US-002 | 02 | 02.4 |
| US-003 | 02 | 02.4 |
| US-004 | 02 | 02.4 |
| US-005 | 03 | 03.2 |
| US-006 | 02, 04 | 02.2, 02.3, 04.5 |
| US-007 | 02 | 02.2 |
| US-008 | 02 | 02.3, 02.4 |
| US-009 | 01 | 01.1, 01.2 |
| US-010 | 01, 03 | 01.2, 03.3 |
| NFR-001 | 04 | 04.3 |
| NFR-002 | 01, 03 | 01.1, 01.2, 03.4 |
| NFR-003 | 03 | 03.3 |
| NFR-004 | 04 | 04.3 |
| NFR-005 | 00, 04 | 00.2, 04.3 |
| NFR-006 | 00 | 00.1, 00.7 |
