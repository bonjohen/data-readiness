---
phase: "010"
title: "SOC 2 Topic Site Integration"
depends_on: "Phase 04"
goal: "The SOC 2 readiness site from c:\\projects\\soc2 is fully integrated into github/soc2/ as a standalone Astro site, with its manifest updated to live status so the hub discovers and links to it."
source_pdr_sections: ["2.3", "6.1"]
source_user_stories: ["US-003", "US-006", "US-008"]
status: "open"
---

# Phase 010: SOC 2 Topic Site Integration

## Overview

Migrate the existing SOC 2 readiness site (`c:\projects\soc2`, GitHub: `@bonjohen/soc2`) into `github/soc2/` as a self-contained Astro project. The SOC 2 site has 9 pages, 10 components, 4 content collections (38 markdown files), and its own build/deploy pipeline. After integration, the hub's `site.json` manifest is updated to `status: "live"` so the hub auto-discovers SOC 2 as a clickable topic.

## Phases

### Phase 010-A: Project Scaffold & Configuration

**Goal:** A buildable Astro project at `github/soc2/` with correct config, dependencies, and public assets — no pages or components yet.
**Depends on:** Phase 04 (hub deployment complete).

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| A.1 | Completed | 2026-05-23 07:33 PM | 2026-05-23 07:34 PM | Create `github/soc2/package.json` — name `soc2-readiness`, type module, scripts (dev port 4333, build, preview), dependencies (astro ^5.8.0, @astrojs/sitemap ^3.7.2, sharp ^0.33.5) |
| A.2 | Completed | 2026-05-23 07:33 PM | 2026-05-23 07:34 PM | Create `github/soc2/astro.config.mjs` — site `https://soc2.johnboen.com`, base `/`, sitemap integration, server port 4333 |
| A.3 | Completed | 2026-05-23 07:33 PM | 2026-05-23 07:34 PM | Create `github/soc2/tsconfig.json` — extends `astro/tsconfigs/strict` |
| A.4 | Completed | 2026-05-23 07:33 PM | 2026-05-23 07:34 PM | Create `github/soc2/src/config.ts` — SITE constant: title `SOC 2 Readiness`, description, url `https://soc2.johnboen.com`, author `John Boen` |
| A.5 | Completed | 2026-05-23 07:33 PM | 2026-05-23 07:34 PM | Copy `github/_hub/src/styles/global.css` to `github/soc2/src/styles/global.css` (shared design tokens — identical baseline) |
| A.6 | Completed | 2026-05-23 07:33 PM | 2026-05-23 07:34 PM | Create `github/soc2/public/favicon.svg` (blue rounded-rect with checkmark, from reference) and `github/soc2/public/CNAME` (`soc2.johnboen.com`) |
| A.7 | Completed | 2026-05-23 07:35 PM | 2026-05-23 07:35 PM | Run `npm install` in `github/soc2/` and verify `npx astro build` succeeds (empty project, no pages yet) |

<details>
<summary>Phase 010-A Context</summary>

**Source reference:** `c:\projects\soc2\package.json`, `c:\projects\soc2\astro.config.mjs`, `c:\projects\soc2\tsconfig.json`

**Config values:**
- Port: 4333 (per port registry)
- Site URL: `https://soc2.johnboen.com`
- CNAME: `soc2.johnboen.com`
- Dependencies: same as hub (astro ^5.8.0, @astrojs/sitemap ^3.7.2, sharp ^0.33.5)

**Design tokens:** The hub's `global.css` was originally copied from the SOC 2 project and extended with `.badge-live`, `.badge-coming-soon`, and `.badge` classes. The SOC 2 site doesn't need those badge classes but they are harmless. Using the hub's `global.css` as-is keeps the design system consistent across all sites.

**favicon.svg content:**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#3b82f6"/>
  <path d="M10 17l4 4 8-8" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>
```

</details>

### Phase 010-A Summary

- **Changes:** Created `github/soc2/` Astro project scaffold with package.json, astro.config.mjs (port 4333, sitemap), tsconfig.json (strict), src/config.ts (SITE constant), src/styles/global.css (copied from hub), public/favicon.svg, public/CNAME. Installed npm packages. Verified empty build succeeds.
- **Commit:** `Phase 010-A: SOC 2 project scaffold — Astro config, design tokens, public assets`

---

### Phase 010-B: Content Collections

**Goal:** All 4 content collections (controls, advisory, services, tools) with their 38 markdown files are migrated and validated by Astro's schema.
**Depends on:** Phase 010-A.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| B.1 | Completed | 2026-05-23 07:36 PM | 2026-05-23 07:37 PM | Create `github/soc2/src/content/config.ts` — define 4 collections (controls, advisory, services, tools) with Zod schemas matching the reference project's `c:\projects\soc2\src\content\config.ts` |
| B.2 | Completed | 2026-05-23 07:36 PM | 2026-05-23 07:37 PM | Copy all 12 files from `c:\projects\soc2\src\content\controls\` to `github/soc2/src/content/controls/` (asset-inventory, backup-availability, change-management, data-handling, encryption-secrets, incident-response, logging-monitoring, logical-access, privacy, privileged-access-mfa, vendor-management, vulnerability-management) |
| B.3 | Completed | 2026-05-23 07:36 PM | 2026-05-23 07:37 PM | Copy all 7 files from `c:\projects\soc2\src\content\advisory\` to `github/soc2/src/content/advisory/` (ai-assisted-sdlc, human-review-agent-gates, model-provider-vendor-risk, prompt-response-logging, rag-vector-store-controls, training-inference-data-governance, warehouse-analytics-governance) |
| B.4 | Completed | 2026-05-23 07:36 PM | 2026-05-23 07:37 PM | Copy all 4 files from `c:\projects\soc2\src\content\services\` to `github/soc2/src/content/services/` (audit-support, continuous-compliance, readiness-sprint, remediation-program) |
| B.5 | Completed | 2026-05-23 07:36 PM | 2026-05-23 07:37 PM | Copy all 15 files from `c:\projects\soc2\src\content\tools\` to `github/soc2/src/content/tools/` (aws-azure-gcp, drata, github-gitlab, google-microsoft-365, jira-confluence, linear, notion, okta-auth0-entra, onetrust, secureframe, slack, sprinto, strike-graph, thoropass, vanta) |
| B.6 | Completed | 2026-05-23 07:37 PM | 2026-05-23 07:37 PM | Verify: `npx astro build` succeeds with content synced and schemas validated (Astro validates all frontmatter against Zod schemas at build time) |

<details>
<summary>Phase 010-B Context</summary>

**Content collection schemas (from `c:\projects\soc2\src\content\config.ts`):**

```typescript
import { z, defineCollection } from 'astro:content';

const controlSchema = z.object({
  domain: z.string(),
  order: z.number(),
  description: z.string(),
  requirements: z.array(z.string()),
  evidence_examples: z.array(z.object({
    artifact: z.string(),
    owner: z.string(),
    frequency: z.string(),
  })),
  criteria: z.array(z.string()),
});

const advisorySchema = z.object({
  module_name: z.string(),
  order: z.number(),
  why_credible: z.string(),
  additions: z.array(z.string()),
});

const serviceSchema = z.object({
  name: z.string(),
  order: z.number(),
  duration: z.string(),
  price_range: z.string(),
  deliverables: z.array(z.string()),
});

const toolSchema = z.object({
  name: z.string(),
  category: z.enum(['compliance', 'operational']),
  good_fit: z.string(),
  cautions: z.string(),
});

export const collections = {
  controls: defineCollection({ type: 'content', schema: controlSchema }),
  advisory: defineCollection({ type: 'content', schema: advisorySchema }),
  services: defineCollection({ type: 'content', schema: serviceSchema }),
  tools: defineCollection({ type: 'content', schema: toolSchema }),
};
```

**File counts:** 12 controls + 7 advisory + 4 services + 15 tools = 38 markdown files total.

**Copy strategy:** Verbatim copy from reference project. No content modifications needed — the frontmatter structure and body content are production-ready.

</details>

### Phase 010-B Summary

- **Changes:** Created `src/content/config.ts` with 4 Zod collection schemas (controls, advisory, services, tools). Copied 38 markdown content files: 12 controls, 7 advisory, 4 services, 15 tools. Build verified — Astro validated all frontmatter against schemas.
- **Commit:** `Phase 010-B: SOC 2 content collections — 4 schemas, 38 markdown files`

---

### Phase 010-C: Components

**Goal:** All 10 Astro components are migrated and importable. No pages yet — components are verified by build in the next phase.
**Depends on:** Phase 010-B (content schemas must exist for type inference in components).

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| C.1 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/BaseLayout.astro` — html/head/body wrapper with title, description, ogImage props; imports global.css, Nav, Footer; skip-link; CSP meta tag (from hub's BaseLayout pattern + reference `c:\projects\soc2\src\components\BaseLayout.astro`) |
| C.2 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/Nav.astro` — sticky nav with 7 page links (What is SOC 2?, Process, Controls, AI & Data, Services, Tools, About), CSS-only hamburger, aria-current active state (from reference `c:\projects\soc2\src\components\Nav.astro`) |
| C.3 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/Footer.astro` — disclaimer text, copyright with dynamic year (from reference) |
| C.4 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/HeroSection.astro` — headline, subheadline, CTA link, gradient background (from reference) |
| C.5 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/ControlCard.astro` — domain heading with criteria tags, description, requirements list, evidence table. Props: domain, description, requirements[], evidence_examples[], criteria[] (from reference `c:\projects\soc2\src\components\ControlCard.astro`) |
| C.6 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/ServiceCard.astro` — name, duration badge, price range, deliverables list, CTA. Props: name, duration, price_range, deliverables[], ctaHref (from reference) |
| C.7 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/ToolCard.astro` — name + category badge, good-fit section, cautions section. Props: name, category, good_fit, cautions (from reference) |
| C.8 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/AdvisoryCard.astro` — module name, credibility note, additions list. Props: module_name, why_credible, additions[] (from reference) |
| C.9 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/TimelineDiagram.astro` — 4-phase sprint timeline with numbered markers, duration badges, activity lists; horizontal desktop, vertical mobile (from reference) |
| C.10 | Completed | 2026-05-23 07:38 PM | 2026-05-23 07:39 PM | Create `github/soc2/src/components/DisclaimerBanner.astro` — "Important Disclaimers" heading with statements list. Props: statements[] (from reference) |

<details>
<summary>Phase 010-C Context</summary>

**Component interfaces (all from reference project):**

```typescript
// BaseLayout.astro
interface Props { title: string; description: string; ogImage?: string; }

// HeroSection.astro
interface Props { headline: string; subheadline: string; ctaText: string; ctaHref: string; }

// ControlCard.astro
interface Props {
  domain: string;
  description: string;
  requirements: string[];
  evidence_examples: { artifact: string; owner: string; frequency: string; }[];
  criteria: string[];
}

// ServiceCard.astro
interface Props { name: string; duration: string; price_range: string; deliverables: string[]; ctaHref: string; }

// ToolCard.astro
interface Props { name: string; category: 'compliance' | 'operational'; good_fit: string; cautions: string; }

// AdvisoryCard.astro
interface Props { module_name: string; why_credible: string; additions: string[]; }

// DisclaimerBanner.astro
interface Props { statements: string[]; }

// Nav.astro — no props (hardcoded pages array, reads Astro.url.pathname)
// Footer.astro — no props (reads SITE config)
// TimelineDiagram.astro — no props (hardcoded phases array)
```

**Nav pages array:**
```typescript
const pages = [
  { href: '/what-is-soc2', label: 'What is SOC 2?' },
  { href: '/readiness-process', label: 'Process' },
  { href: '/controls-evidence', label: 'Controls' },
  { href: '/ai-data', label: 'AI & Data' },
  { href: '/services', label: 'Services' },
  { href: '/tools', label: 'Tools' },
  { href: '/about', label: 'About' },
];
```

**TimelineDiagram phases array:**
```typescript
const phases = [
  { name: 'Intake & Scoping', duration: 'Week 1', activities: ['Stakeholder interviews', 'System boundary definition', 'TSC selection', 'Type recommendation'] },
  { name: 'Assessment', duration: 'Week 2–3', activities: ['Controls inventory', 'Evidence collection audit', 'Gap identification', 'Risk ranking'] },
  { name: 'Outputs', duration: 'Week 3–4', activities: ['Remediation roadmap', 'Evidence collection plan', 'Policy backlog', 'Executive readout'] },
  { name: 'Follow-on', duration: 'Ongoing', activities: ['Remediation support', 'Audit preparation', 'Continuous compliance'] },
];
```

**Copy strategy:** Copy component source files verbatim from `c:\projects\soc2\src\components\`. The only modification is adding the CSP `<meta>` tag to BaseLayout (consistent with hub's Phase 04 security work). All scoped styles carry over as-is since they reference the same CSS custom properties from `global.css`.

**Key pattern notes:**
- Nav uses `currentPath.startsWith(href)` for active detection (handles trailing slashes)
- Nav uses `aria-hidden="true"` on the checkbox input and `aria-label` on the hamburger label
- Nav background is `var(--color-bg-alt)` (differs from hub Nav which uses `var(--color-bg)`)
- All components use Astro's scoped `<style>` blocks — no CSS module imports

</details>

### Phase 010-C Summary

- **Changes:** Copied all 10 Astro components from reference project: BaseLayout, Nav, Footer, HeroSection, ControlCard, ServiceCard, ToolCard, AdvisoryCard, TimelineDiagram, DisclaimerBanner. Added CSP meta tag to BaseLayout for security consistency with hub.
- **Commit:** `Phase 010-C: SOC 2 components — 10 Astro components with CSP meta tag`

---

### Phase 010-D: Pages

**Goal:** All 9 pages are migrated and rendering correctly. The site builds and serves locally.
**Depends on:** Phase 010-C (all components must exist).

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| D.1 | Open | | | Create `github/soc2/src/pages/index.astro` — hero section, "Why SOC 2 Matters" value grid, "How We Help" service overview cards, CTA section (from reference `c:\projects\soc2\src\pages\index.astro`) |
| D.2 | Open | | | Create `github/soc2/src/pages/what-is-soc2.astro` — framework definitions, scope, TSC table, Type 1 vs 2 table, readiness checklist (from reference) |
| D.3 | Open | | | Create `github/soc2/src/pages/readiness-process.astro` — TimelineDiagram, RACI context, deliverables breakdown (from reference) |
| D.4 | Open | | | Create `github/soc2/src/pages/controls-evidence.astro` — `getCollection('controls')` sorted by order, mapped to ControlCard (from reference) |
| D.5 | Open | | | Create `github/soc2/src/pages/ai-data.astro` — `getCollection('advisory')` sorted by order, mapped to AdvisoryCard (from reference) |
| D.6 | Open | | | Create `github/soc2/src/pages/services.astro` — `getCollection('services')` sorted by order, mapped to ServiceCard, DisclaimerBanner, RACI table (from reference) |
| D.7 | Open | | | Create `github/soc2/src/pages/tools.astro` — `getCollection('tools')` filtered by category (compliance/operational), mapped to ToolCard (from reference) |
| D.8 | Open | | | Create `github/soc2/src/pages/about.astro` — company info, staffing, approach, launch metrics, DisclaimerBanner (from reference) |
| D.9 | Open | | | Create `github/soc2/src/pages/404.astro` — error heading, message, home link (from reference) |
| D.10 | Open | | | Verify: `npx astro build` in `github/soc2/` succeeds — 9 pages built, sitemap generated, zero errors |
| D.11 | Open | | | Verify: `npx astro dev --port 4333` serves all pages; nav links work; content collections render; hamburger toggles at mobile widths |

<details>
<summary>Phase 010-D Context</summary>

**Page data sources:**

| Page | Route | Data Source |
|------|-------|-------------|
| index.astro | `/` | Static content only |
| what-is-soc2.astro | `/what-is-soc2` | Static content only |
| readiness-process.astro | `/readiness-process` | Static (TimelineDiagram has hardcoded data) |
| controls-evidence.astro | `/controls-evidence` | `getCollection('controls')` — 12 entries sorted by order |
| ai-data.astro | `/ai-data` | `getCollection('advisory')` — 7 entries sorted by order |
| services.astro | `/services` | `getCollection('services')` — 4 entries sorted by order |
| tools.astro | `/tools` | `getCollection('tools')` — 15 entries filtered by category |
| about.astro | `/about` | Static content only |
| 404.astro | `/404` | Static content only |

**Content collection imports pattern:**
```astro
---
import { getCollection } from 'astro:content';
const controls = (await getCollection('controls')).sort((a, b) => a.data.order - b.data.order);
---
```

**Copy strategy:** Copy page source files verbatim from `c:\projects\soc2\src\pages\`. No content modifications — all routes, imports, and scoped styles carry over directly since the component names and data schemas are identical.

**Build output (expected):**
```
dist/
├── index.html
├── 404.html
├── what-is-soc2/index.html
├── readiness-process/index.html
├── controls-evidence/index.html
├── ai-data/index.html
├── services/index.html
├── tools/index.html
├── about/index.html
├── sitemap-index.xml
└── _astro/  (bundled CSS)
```

</details>

### Phase 010-D Summary

_To be filled after completion._

- **Changes:** TBD
- **Commit:** TBD

---

### Phase 010-E: Hub Integration & Deployment

**Goal:** The hub discovers SOC 2 as a live topic, the SOC 2 site has its own deploy workflow, and all acceptance criteria pass.
**Depends on:** Phase 010-D.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| E.1 | Open | | | Update `github/soc2/site.json` — set `status` to `live`, add `url: "https://soc2.johnboen.com"` |
| E.2 | Open | | | Create `github/soc2/.github/workflows/deploy.yml` — GitHub Pages deployment (trigger on push to main, Node 20, npm ci in `github/soc2/`, astro build, upload dist, deploy pages) |
| E.3 | Open | | | Rebuild hub site (`npx astro build` in `github/_hub/`): verify SOC 2 card shows green "Live" badge and links to `https://soc2.johnboen.com` |
| E.4 | Open | | | Verify hub about page: SOC 2 row in regulation coverage table shows "Live" badge with clickable link |
| E.5 | Open | | | Verify SOC 2 site build: `npx astro build` in `github/soc2/` completes < 30s, produces 9 pages + sitemap |
| E.6 | Open | | | Verify cross-site consistency: both hub and SOC 2 site use same design tokens (color palette, typography, spacing), same skip-link pattern, same footer disclaimer style |

<details>
<summary>Phase 010-E Context</summary>

**Updated site.json:**
```json
{
  "id": "soc2",
  "name": "SOC 2 Readiness",
  "shortDescription": "Prepare for SOC 2 Type 1 or Type 2 audits with controls, evidence workflows, and tool evaluations",
  "regulation": "SOC 2",
  "status": "live",
  "url": "https://soc2.johnboen.com",
  "order": 12,
  "category": "audit-framework"
}
```

**Deploy workflow structure:**
The SOC 2 deploy workflow is structurally identical to the hub's but with `working-directory: github/soc2` and `cache-dependency-path: github/soc2/package-lock.json`. The path to `dist/` for artifact upload is `github/soc2/dist`.

Note: Like the hub workflow, this workflow lives inside `github/soc2/.github/workflows/` for organizational clarity, but GitHub only recognizes workflows at the repo root (`.github/workflows/`). If this repo is deployed as a monorepo, the workflow will need to be moved to the repo root with path filters.

**Hub verification:**
After updating `site.json` to live, rebuilding the hub (`npx astro build` in `github/_hub/`) should:
- Show SOC 2 card with green `.badge-live` class and text "Live"
- Wrap the card in `<a href="https://soc2.johnboen.com">`
- Show the link in the about page regulation table

**Cross-site consistency checks:**
- Both sites share the same `global.css` design tokens (verified by visual comparison of colors, fonts, spacing)
- Both use `skip-link` for accessibility
- Both use `BaseLayout` with CSP meta tag
- Both use sticky nav with CSS-only hamburger at <=768px

</details>

### Phase 010-E Summary

_To be filled after completion._

- **Changes:** TBD
- **Commit:** TBD

---

## Coverage Summary

| SOC 2 Asset | File Count | Phase |
|-------------|-----------|-------|
| Scaffold (package.json, config, tsconfig, styles, public) | 6 files | 010-A |
| Content collections (config.ts + markdown) | 39 files | 010-B |
| Components | 10 files | 010-C |
| Pages | 9 files | 010-D |
| Deploy workflow + hub integration | 3 files | 010-E |
| **Total** | **67 files** | |
