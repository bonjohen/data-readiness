---
document: "User Requirements"
version: "1.0"
status: "final"
scope: "Hub site (github/_hub/) — top-level collector only"
source: "sdlc/docs/draft.user.md"
finalized_date: "2026-05-23"
---

# Data Readiness Hub — User Requirements

## 1. Overview

Data Readiness is a multi-topic regulatory compliance readiness platform. It provides informational sites for 12 data regulation frameworks, each built as an independent Astro static site. A top-level collector site (the "hub") presents all topics in a unified interface and automatically discovers new topic sites as they are added.

This document covers the hub site only. Individual topic sites (SOC 2, CCPA, etc.) will have their own user requirements documents produced separately.

The hub's primary value is orientation: helping visitors find the regulation that applies to them, understand what readiness means at a high level, and navigate to the detailed topic site. The hub does not duplicate topic-site content — it links to it.

## 2. Personas

### 2.1 Compliance Professional

- **Role:** Security, compliance, or privacy lead at a technology company evaluating regulatory obligations.
- **Goals:** Quickly identify which regulations apply to their company; navigate to the relevant topic site for detailed readiness guidance.
- **Technical level:** Intermediate. Comfortable reading structured documents but not a developer.

### 2.2 Executive Sponsor

- **Role:** CTO, VP Engineering, or CISO evaluating the scope of compliance work across multiple regulations.
- **Goals:** See the full landscape of supported regulations at a glance; understand which are live and which are coming soon; share the platform link with their team.
- **Technical level:** Novice to intermediate.

### 2.3 Developer (Internal)

- **Role:** Engineer adding a new topic site to the platform.
- **Goals:** Add a new regulation topic by creating a folder with a manifest file and have it appear in the hub automatically on next build. No hub source code changes required.
- **Technical level:** Expert.

<!-- Added during finalization: System actor persona for build-time discovery process. -->

### 2.4 Build System (Actor)

- **Role:** Automated process that runs `npx astro build` for the hub site.
- **Goals:** Discover all topic manifests at build time, validate them, and produce a static site with a complete topic catalog.
- **Technical level:** N/A (automated).

## 3. User Stories

### 3.1 Topic Discovery (Hub Visitors)

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|-------------|-----------|----------|-------------------|
| US-001 | Compliance Professional | see all available regulation topics on the hub home page | I can quickly identify which regulations the platform covers | Must | Given the hub is loaded, when I view the home page, then I see a card for each regulation topic with its name and one-line description, sorted by display order |
| US-002 | Compliance Professional | distinguish between live and coming-soon topics | I know which topic sites are available now vs. planned | Must | Given a topic has `status: "live"`, when I view its card, then it shows a green "Live" badge and links to the deployed site. Given `status: "placeholder"`, the card shows an amber "Coming Soon" badge and is not clickable |
| US-003 | Compliance Professional | click a live topic card and navigate to its site | I can access detailed readiness guidance for that regulation | Must | Given I click a live topic card, when the page loads, then I am on the topic site's home page at the URL specified in its manifest |
| US-004 | Executive Sponsor | see the regulation landscape at a glance | I can assess our compliance exposure across multiple frameworks | Should | Given the hub is loaded, when I view the home page, then topic cards are visually grouped or badged by category (privacy, security, audit-framework, etc.) |
| US-005 | Compliance Professional | understand what the platform offers before diving into a topic | I have context about how readiness sites are structured | Should | Given I navigate to the About page, then I see a description of the platform, the regulation coverage table, and how each topic site is organized |

<!-- Added during finalization: category filtering/grouping story (US-004) for executive overview use case. -->

### 3.2 Topic Site Registration (Developer)

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|-------------|-----------|----------|-------------------|
| US-006 | Developer | add a new topic by creating a folder with a `site.json` manifest | the hub picks it up automatically on next build without editing hub source code | Must | Given I create `github/hipaa/site.json` with valid manifest fields, when I rebuild the hub, then a new topic card appears in the catalog |
| US-007 | Developer | get a build-time warning if a manifest is invalid | I can fix it before deploying a broken catalog | Should | Given a `site.json` has a missing required field, when the hub builds, then a warning is logged to stderr and the invalid topic is skipped (build does not fail) |
| US-008 | Developer | set a topic to placeholder status | the hub shows "Coming Soon" while I'm still building the topic site | Must | Given I set `"status": "placeholder"` in `site.json`, when the hub builds, then the card renders without a link and with an amber badge |

### 3.3 Platform Navigation

| ID | As a... | I want to... | So that... | Priority | Acceptance Criteria |
|----|---------|-------------|-----------|----------|-------------------|
| US-009 | Compliance Professional | navigate between hub pages using a persistent nav bar | I can move between Home and About without losing context | Must | Given any hub page, when I view the top of the page, then I see a sticky navigation bar with links to Home and About |
| US-010 | Compliance Professional | view the hub on mobile devices | I can browse on any screen size | Must | Given I load the hub on a 375px-wide screen, when the page renders, then topic cards stack to single column, nav collapses to hamburger menu, and all text is readable |

## 4. Non-Functional Requirements

| ID | Category | Requirement | Target | Priority |
|----|----------|------------|--------|----------|
| NFR-001 | Build time | Hub build completes in reasonable time | < 30 seconds for `npx astro build` with 12 manifests | Should |
| NFR-002 | Accessibility | Hub meets WCAG 2.1 Level AA | Color contrast ratios ≥ 4.5:1 for body text, ≥ 3:1 for large text; keyboard navigable; semantic HTML | Must |
| NFR-003 | Responsiveness | Hub renders correctly at all standard breakpoints | Desktop (1200px+), tablet (768px), mobile (480px, 375px) | Must |
| NFR-004 | Performance | Static pages load quickly | Largest Contentful Paint < 2.5s on 3G connection | Should |
| NFR-005 | SEO | Hub is discoverable by search engines | Valid sitemap.xml, semantic HTML, meta descriptions on all pages | Should |
| NFR-006 | Portability | Hub builds on any machine with Node 20+ | No OS-specific dependencies; no native modules beyond Sharp | Must |

<!-- Added during finalization: NFR-001 through NFR-006 — the draft had no non-functional requirements section. Static sites still need accessibility, performance, and build-time targets. -->

## 5. Constraints and Assumptions

- **Static only.** The hub is a static Astro site. No server-side rendering, no API routes, no database.
- **Build-time discovery.** Topic discovery happens at build time only. Adding or changing a manifest requires a hub rebuild.
- **No cross-site runtime integration.** The hub links to topic sites via URL. It does not embed, iframe, or fetch from topic sites at runtime.
- **Same design system.** The hub and all topic sites share the same CSS design tokens (global.css). Drift between them is a maintenance problem, not a technical failure.
- **GitHub Pages hosting.** Each site (hub + each spoke) deploys to its own GitHub Pages instance with a custom domain.
- **Subdomain topology assumed.** Each topic site gets its own subdomain (e.g., `soc2.johnboen.com`). The hub gets a root or subdomain (e.g., `datareadiness.johnboen.com` or `ready.johnboen.com`). Path-prefixed deployment is not planned.
- **Port 4339.** Hub dev server runs on port 4339 per the project port registry.

<!-- Added during finalization: explicit subdomain topology assumption to resolve Open Question #1 from the draft. -->

## 6. Out of Scope

- **User accounts, authentication, or authorization.** All content is public.
- **Interactive assessments or scoring.** The hub is informational — no data collection, no forms, no user input.
- **CMS or admin interface.** Content is managed as files in version control.
- **Backend services or APIs.** No server processes.
- **Analytics or tracking.** No cookies, no JavaScript analytics, no tracking pixels.
- **Cross-topic content aggregation.** The hub does not merge or query content from topic sites. It reads manifests, not topic content.
- **Topic site implementation.** Building SOC 2, CCPA, or any other topic site is out of scope for this document. Each gets its own SDLC pipeline.
- **Shared npm package for design tokens.** Design tokens are copied into each site (simple file copy). A shared npm package is deferred to a future iteration if drift becomes a problem.
- **Build orchestration across sites.** Each site builds independently. A mono-repo build script that builds all sites is out of scope.

<!-- Added during finalization: explicit exclusions for shared npm package and build orchestration to resolve Open Questions #2 and #5 from the draft. Consider for future iteration if managing 12+ sites becomes unwieldy. -->
