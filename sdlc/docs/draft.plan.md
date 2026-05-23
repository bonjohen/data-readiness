# Data Readiness Hub — Draft Implementation Plan

**Scope:** Top-level collector site (`github/_hub/`) only.

**Source PDR:** `sdlc/docs/draft.pdr.md`
**Source User Requirements:** `sdlc/docs/draft.user.md`

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

| Concern | Choice |
|---------|--------|
| Framework | Astro 5.x |
| Language | TypeScript (strict) |
| Styling | Custom CSS with design tokens (no Tailwind) |
| Image optimization | Sharp |
| SEO | @astrojs/sitemap |
| Hosting | GitHub Pages |
| Dev port | 4339 |

## Phase 00: Project Scaffold

**Goal:** A buildable, runnable Astro project at `github/_hub/` with the shared design system.
**Depends on:** Nothing (first phase).

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 00.1 | Open | | | Initialize Astro project at `github/_hub/` with `package.json`, `astro.config.mjs` (port 4339, site URL), `tsconfig.json` |
| 00.2 | Open | | | Create `src/config.ts` with SITE constant (title: "Data Readiness", url, author) |
| 00.3 | Open | | | Copy and adapt `global.css` from SOC 2 project into `src/styles/global.css`, adding `.badge-live` and `.badge-coming-soon` token styles |
| 00.4 | Open | | | Create `public/favicon.svg` and `public/CNAME` |
| 00.5 | Open | | | Verify: `npm install && npx astro build` succeeds (empty site) |

### Phase 00 Summary

_To be filled after completion._

## Phase 01: Shared Components

**Goal:** BaseLayout, Nav, Footer, and HeroSection components render correctly.
**Depends on:** Phase 00.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 01.1 | Open | | | Create `BaseLayout.astro` — html/head/body wrapper with title, description, ogImage props, imports global.css |
| 01.2 | Open | | | Create `Nav.astro` — sticky nav with Home and About links, hamburger toggle, active state detection |
| 01.3 | Open | | | Create `Footer.astro` — disclaimer, copyright year from SITE config |
| 01.4 | Open | | | Create `HeroSection.astro` — headline, subheadline, optional CTA link |
| 01.5 | Open | | | Create placeholder `index.astro` and `404.astro` pages using BaseLayout to verify component rendering |
| 01.6 | Open | | | Verify: `npx astro dev` renders pages with nav, footer, correct styling |

### Phase 01 Summary

_To be filled after completion._

## Phase 02: Topic Discovery & TopicCard

**Goal:** Hub auto-discovers topic sites from `site.json` manifests and renders them as cards.
**Depends on:** Phase 01.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 02.1 | Open | | | Create `src/data/topic-schema.ts` — Zod schema for site.json manifest validation |
| 02.2 | Open | | | Create `src/data/discover-topics.ts` — reads sibling `github/*/site.json`, validates, sorts by order |
| 02.3 | Open | | | Create test `site.json` manifests in `github/soc2/site.json` (status: placeholder) and `github/cppa/site.json` (status: placeholder) for development |
| 02.4 | Open | | | Create `TopicCard.astro` — renders manifest data as card with name, description, category badge, status badge (live/coming soon), conditional link |
| 02.5 | Open | | | Verify: discovery finds both test manifests, TopicCard renders correctly for both live and placeholder states |

### Phase 02 Summary

_To be filled after completion._

## Phase 03: Hub Pages

**Goal:** All hub pages are complete with real content and layout.
**Depends on:** Phase 02.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 03.1 | Open | | | Build `index.astro` — HeroSection + topic catalog grid (3-col desktop, 2-col tablet, 1-col mobile) + "How It Works" section + footer CTA |
| 03.2 | Open | | | Build `about.astro` — platform positioning, regulation coverage table (all 12 topics), approach description, contact CTA |
| 03.3 | Open | | | Build `404.astro` — error message with home link |
| 03.4 | Open | | | Verify: all pages render correctly at desktop, tablet, and mobile breakpoints |

### Phase 03 Summary

_To be filled after completion._

## Phase 04: Deployment & Final Verification

**Goal:** Hub site builds cleanly, all manifests are in place, deployment workflow is ready.
**Depends on:** Phase 03.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 04.1 | Open | | | Create `.github/workflows/deploy.yml` — GitHub Pages deployment (Node 20, npm ci, astro build, deploy) |
| 04.2 | Open | | | Create placeholder `site.json` manifests for all 12 topic folders (10 with status: placeholder, soc2 and cppa with status: placeholder until their sites are built) |
| 04.3 | Open | | | Verify: `npx astro build` produces clean dist/ with all pages, catalog shows all 12 topics |
| 04.4 | Open | | | Verify: responsive design works at all breakpoints, live/placeholder badges render correctly, navigation works |

### Phase 04 Summary

_To be filled after completion._
