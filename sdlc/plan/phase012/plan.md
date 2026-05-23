---
phase: "012"
title: "Site Scaffold & Build — All 11 Regulation Sites"
depends_on: "Phase 011"
goal: "Every regulation topic site is a fully buildable, servable Astro project with regulation-specific pages, shared components, and deploy workflows. All 12 sites (including SOC 2) build successfully and the hub shows all 12 as Live."
source_pdr_sections: ["2.3", "6.1"]
source_user_stories: ["US-003", "US-006", "US-008"]
status: "open"
---

# Phase 012: Site Scaffold & Build — All 11 Regulation Sites

## Overview

Phase 011 created the content collections (controls, advisory, services, tools markdown files) for all 11 regulation sites. Phase 012 adds the Astro project scaffold — config, components, pages, styles, and deploy workflows — so each site builds and serves as a standalone static site, matching the SOC 2 reference architecture.

**Reference implementation:** `github/soc2/` (Phase 010)

### Per-Site File Inventory (27 files per site)

| Category | Files | Shared vs Unique |
|----------|-------|-----------------|
| Config (package.json, astro.config.mjs, tsconfig.json) | 3 | Unique (port, URL, name) |
| src/config.ts (SITE constant) | 1 | Unique (title, description, URL) |
| src/styles/global.css | 1 | Shared (identical copy) |
| src/content/config.ts | 0 | Already exists (Phase 011) |
| Components (10 total) | 10 | 9 shared + Nav unique |
| Pages (9 total) | 9 | 5 shared + 4 unique |
| public/ (favicon.svg, CNAME) | 2 | favicon shared, CNAME unique |
| .github/workflows/deploy.yml | 1 | Unique (working-directory, concurrency) |
| **Total** | **27** | |

**Grand total: 297 new files + 11 site.json updates + npm install × 11**

### Site Configuration Matrix

| Site ID | Port | CNAME | SITE.title | "What is" Route | "What is" Label |
|---------|------|-------|------------|----------------|-----------------|
| cppa | 4341 | cppa.johnboen.com | CCPA / CPRA Privacy Readiness | /what-is-ccpa | What is CCPA? |
| gdpr | 4342 | gdpr.johnboen.com | GDPR Operational Readiness | /what-is-gdpr | What is GDPR? |
| coppa | 4343 | coppa.johnboen.com | COPPA Readiness | /what-is-coppa | What is COPPA? |
| ftc-safeguards | 4344 | ftc-safeguards.johnboen.com | FTC Safeguards Rule Readiness | /what-is-safeguards-rule | What is the Safeguards Rule? |
| hipaa | 4345 | hipaa.johnboen.com | HIPAA Security Rule Readiness | /what-is-hipaa | What is HIPAA? |
| pci-dss | 4346 | pci-dss.johnboen.com | PCI DSS v4.0.1 Readiness | /what-is-pci-dss | What is PCI DSS? |
| ny-shield | 4347 | ny-shield.johnboen.com | NY SHIELD Act Readiness | /what-is-shield-act | What is the SHIELD Act? |
| state-privacy | 4348 | state-privacy.johnboen.com | State Privacy Law Patchwork | /state-privacy-laws | State Privacy Laws |
| sec-cyber | 4349 | sec-cyber.johnboen.com | SEC Cybersecurity Disclosure Readiness | /what-is-sec-cyber | What is SEC Cyber Disclosure? |
| ai-governance | 4350 | ai-governance.johnboen.com | AI Governance / AI Regulatory Readiness | /what-is-ai-governance | What is AI Governance? |
| eu-dora | 4351 | eu-dora.johnboen.com | EU DORA Readiness | /what-is-dora | What is DORA? |

---

## Phases

### Phase 012-A: Common Scaffold — Config, Styles, Shared Components

**Goal:** All 11 sites have their Astro project config, shared styles, and 9 shared components (everything except Nav). Each site can `npx astro build` (empty — no pages yet).
**Depends on:** Phase 011 (content collections must exist).

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| A.1 | Open | | | Create `package.json` for all 11 sites — name `{id}-readiness`, type module, scripts (dev port per matrix, build, preview), deps (astro ^5.8.0, @astrojs/sitemap ^3.7.2, sharp ^0.33.5) |
| A.2 | Open | | | Create `astro.config.mjs` for all 11 sites — site URL per matrix, base `/`, sitemap integration, server port per matrix |
| A.3 | Open | | | Create `tsconfig.json` for all 11 sites — extends `astro/tsconfigs/strict` |
| A.4 | Open | | | Create `src/config.ts` for all 11 sites — SITE constant with title, description, URL, author per matrix |
| A.5 | Open | | | Copy `github/soc2/src/styles/global.css` to all 11 sites |
| A.6 | Open | | | Copy `github/soc2/public/favicon.svg` to all 11 sites |
| A.7 | Open | | | Create `public/CNAME` for all 11 sites per matrix |
| A.8 | Open | | | Copy 9 shared components from `github/soc2/src/components/` to all 11 sites: BaseLayout, Footer, HeroSection, ControlCard, ServiceCard, ToolCard, AdvisoryCard, TimelineDiagram, DisclaimerBanner |
| A.9 | Open | | | Run `npm install` in all 11 sites |

<details>
<summary>Phase 012-A Context</summary>

**Package.json template:**
```json
{
  "name": "{id}-readiness",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev --port {port}",
    "build": "astro build",
    "preview": "astro preview --port {port}"
  },
  "dependencies": {
    "@astrojs/sitemap": "^3.7.2",
    "astro": "^5.8.0",
    "sharp": "^0.33.5"
  }
}
```

**Astro config template:**
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://{cname}',
  base: '/',
  integrations: [sitemap()],
  server: { port: {port} },
});
```

**SITE config template:**
```typescript
export const SITE = {
  title: '{title}',
  description: '{description}',
  url: 'https://{cname}',
  author: 'John Boen',
};
```

**Shared components (copy verbatim from SOC 2):**
- `BaseLayout.astro` — HTML wrapper, CSP meta tag, Nav + Footer slots
- `Footer.astro` — Disclaimer + copyright from SITE config
- `HeroSection.astro` — Props: headline, subheadline, ctaText?, ctaHref?
- `ControlCard.astro` — Props: domain, description, requirements, evidence_examples, criteria
- `ServiceCard.astro` — Props: name, duration, price_range, deliverables, ctaHref
- `ToolCard.astro` — Props: name, category, good_fit, cautions
- `AdvisoryCard.astro` — Props: module_name, why_credible, additions
- `TimelineDiagram.astro` — Hardcoded phases (will be overridden per-site in 012-C)
- `DisclaimerBanner.astro` — Props: statements[]

**Note:** TimelineDiagram has hardcoded SOC 2 phases. In Phase 012-C, each site's `readiness-process.astro` page will define its own phases inline rather than using the shared component's default data.

</details>

---

### Phase 012-B: Shared Pages — Data-Driven Pages Identical Across Sites

**Goal:** The 5 data-driven pages that are structurally identical across all sites are in place.
**Depends on:** Phase 012-A.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| B.1 | Open | | | Copy `controls-evidence.astro` from SOC 2 to all 11 sites — `getCollection('controls')` sorted by order, mapped to ControlCard |
| B.2 | Open | | | Copy `ai-data.astro` from SOC 2 to all 11 sites — `getCollection('advisory')` sorted by order, mapped to AdvisoryCard |
| B.3 | Open | | | Copy `services.astro` from SOC 2 to all 11 sites — `getCollection('services')` sorted by order, mapped to ServiceCard + DisclaimerBanner |
| B.4 | Open | | | Copy `tools.astro` from SOC 2 to all 11 sites — `getCollection('tools')` filtered by category, mapped to ToolCard |
| B.5 | Open | | | Copy `404.astro` from SOC 2 to all 11 sites — error heading, message, home link |

<details>
<summary>Phase 012-B Context</summary>

These 5 pages are data-driven — they render content collections using shared components. The page structure is identical across all sites because the Zod schemas and component interfaces are the same. The only difference is the data (which Phase 011 already created per-regulation).

**controls-evidence.astro pattern:**
```astro
---
import BaseLayout from '../components/BaseLayout.astro';
import ControlCard from '../components/ControlCard.astro';
import { getCollection } from 'astro:content';
const controls = (await getCollection('controls')).sort((a, b) => a.data.order - b.data.order);
---
<BaseLayout title="Controls & Evidence" description="...">
  {controls.map(control => <ControlCard {...control.data} />)}
</BaseLayout>
```

Same pattern for ai-data (AdvisoryCard), services (ServiceCard), tools (ToolCard filtered by category).

</details>

---

### Phase 012-C: Unique Pages — Regulation-Specific Content

**Goal:** Each site has its 4 unique pages: index (hero + value prop), what-is-X (regulation explainer), readiness-process (timeline), and about.
**Depends on:** Phase 012-A.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| C.1 | Open | | | Create Nav.astro for all 11 sites — pages array with regulation-specific "What is X?" route/label per matrix, other 6 nav items identical |
| C.2 | Open | | | Create `index.astro` for all 11 sites — HeroSection with regulation-specific headline/subheadline, "Why {Regulation} Matters" value grid (4 items), "How We Help" service overview cards, CTA section |
| C.3 | Open | | | Create `what-is-{x}.astro` for all 11 sites — regulation framework definition, scope, key requirements table, readiness checklist, CTA |
| C.4 | Open | | | Create `readiness-process.astro` for all 11 sites — regulation-specific timeline phases (Intake, Assessment, Outputs, Follow-on) with activities per phase, RACI context |
| C.5 | Open | | | Create `about.astro` for all 11 sites — company info, approach, regulation-specific positioning, DisclaimerBanner |

<details>
<summary>Phase 012-C Context</summary>

**Nav.astro pages array template:**
```typescript
const pages = [
  { href: '/{what-is-route}', label: '{what-is-label}' },
  { href: '/readiness-process', label: 'Process' },
  { href: '/controls-evidence', label: 'Controls' },
  { href: '/ai-data', label: 'AI & Data' },
  { href: '/services', label: 'Services' },
  { href: '/tools', label: 'Tools' },
  { href: '/about', label: 'About' },
];
```

**index.astro structure (from SOC 2 reference):**
- HeroSection: `{Regulation} Readiness for Technology Companies`
- "Why {Regulation} Matters" — 4 value items explaining business impact
- "How We Help" — 4 service overview cards linking to /services
- CTA section linking to /about

**what-is-X.astro structure (from SOC 2 reference):**
- Framework definition and history
- Who it applies to (scope)
- Key requirements or control areas table
- Type/tier/level comparison table (where applicable)
- Readiness checklist
- CTA to /readiness-process

**readiness-process.astro structure:**
Each site defines its own timeline phases inline:
```typescript
const phases = [
  { name: 'Intake & Scoping', duration: 'Week 1', activities: ['...'] },
  { name: 'Assessment', duration: 'Week 2–3', activities: ['...'] },
  { name: 'Outputs', duration: 'Week 3–4', activities: ['...'] },
  { name: 'Follow-on', duration: 'Ongoing', activities: ['...'] },
];
```

Activities should be regulation-specific (e.g., GDPR: "ROPA development", "Lawful basis mapping"; PCI DSS: "CDE scoping", "SAQ/ROC determination").

**Per-regulation page content guidance:**

| Site | Hero Headline | "Why Matters" Focus | Key Requirements |
|------|--------------|--------------------|--------------------|
| cppa | CCPA / CPRA Privacy Readiness | Enterprise privacy, CA market access, consumer trust, litigation risk | PI categories, consumer rights, service provider contracts, SPI |
| gdpr | GDPR Operational Readiness | EU market access, €20M/4% fines, processor obligations, cross-border data | Lawful basis, data subject rights, DPIA, international transfers |
| coppa | COPPA Readiness | Children's trust, FTC enforcement, safe harbor, parental consent | Verifiable parental consent, privacy notice, age gating, vendor liability |
| ftc-safeguards | FTC Safeguards Rule Readiness | Financial sector compliance, FTC enforcement, customer trust, data protection | Qualified individual, risk assessment, encryption, MFA, incident response |
| hipaa | HIPAA Security Rule Readiness | Healthcare market, OCR enforcement, ePHI protection, BA requirements | Risk analysis, access controls, audit logging, BAAs, contingency planning |
| pci-dss | PCI DSS v4.0.1 Readiness | Payment processing, acquiring bank requirements, SAQ/ROC, brand protection | 12 requirements, CDE scoping, network segmentation, ASV scans |
| ny-shield | NY SHIELD Act Readiness | NY market access, AG enforcement, breach notification, reasonable safeguards | Administrative/technical/physical safeguards, breach notification, disposal |
| state-privacy | State Privacy Law Patchwork | Multi-state operations, patchwork compliance, consumer rights harmonization | Cross-state rights, GPC/universal opt-out, PIAs, data broker registration |
| sec-cyber | SEC Cybersecurity Disclosure | Public company compliance, investor confidence, 8-K filing, board governance | Materiality determination, 4-day filing, 10-K disclosure, board oversight |
| ai-governance | AI Governance Readiness | Responsible AI, regulatory readiness, enterprise AI trust, risk management | AI system inventory, risk categorization, bias testing, transparency, human oversight |
| eu-dora | EU DORA Readiness | EU financial sector, operational resilience, ICT risk, third-party oversight | ICT risk management, incident reporting, resilience testing, third-party ICT |

**about.astro structure:**
- Company positioning for this regulation
- Approach and methodology
- Staffing and expertise
- DisclaimerBanner with regulation-appropriate disclaimer

**Disclaimer text per category:**
- Privacy sites: "We provide privacy readiness and operational guidance. We do not provide legal advice or regulatory representation."
- Security sites: "We provide security readiness, remediation, and audit support. We do not issue audit reports or certifications."
- Governance sites: "We provide governance readiness and risk management guidance. We do not provide legal, audit, or regulatory representation."
- Audit-framework sites (SOC 2): "We provide SOC 2 readiness, remediation, evidence preparation, and audit support. We do not issue SOC 2 reports or provide attestations."

</details>

---

### Phase 012-D: Deploy Workflows & Hub Integration

**Goal:** Each site has a GitHub Pages deploy workflow and is registered as "live" in the hub.
**Depends on:** Phase 012-B, Phase 012-C.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| D.1 | Open | | | Create `.github/workflows/deploy.yml` for all 11 sites — GitHub Pages deployment (trigger on push to main, Node 20, `working-directory: github/{id}`, concurrency group `pages-{id}`) |
| D.2 | Open | | | Update `site.json` for all 11 sites — set `status` to `"live"`, add `url: "https://{cname}"` |
| D.3 | Open | | | Rebuild hub (`npx astro build` in `github/_hub/`) and verify all 12 topics show green "Live" badge with clickable links |

<details>
<summary>Phase 012-D Context</summary>

**Deploy workflow template:**
```yaml
name: Deploy {title} to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages-{id}
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: github/{id}/package-lock.json
      - name: Install dependencies
        run: npm ci
        working-directory: github/{id}
      - name: Build
        run: npx astro build
        working-directory: github/{id}
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: github/{id}/dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**site.json update:** Change `"status": "placeholder"` to `"status": "live"` and add `"url": "https://{cname}"`.

**Hub verification:** After rebuilding `github/_hub/`, the index page should show all 12 topic cards with green "Live" badges and clickable links. The about page regulation table should show all 12 as "Live".

</details>

---

### Phase 012-E: Build Verification & Cross-Site Consistency

**Goal:** All 11 sites build successfully, produce the expected page count + sitemap, and share consistent design tokens.
**Depends on:** Phase 012-D.

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| E.1 | Open | | | Build all 11 sites (`npx astro build` in each `github/{id}/`) — verify each produces 9 pages + sitemap, zero errors, < 30s build time |
| E.2 | Open | | | Verify cross-site consistency: all sites use same design tokens (color palette, typography, spacing), same skip-link pattern, same footer disclaimer style |
| E.3 | Open | | | Verify hub integration: rebuild hub, confirm all 12 topics show "Live" badge with correct URLs in both index cards and about page table |

<details>
<summary>Phase 012-E Context</summary>

**Expected build output per site:**
```
9 page(s) built in <30s
├── index.html
├── what-is-{x}/index.html
├── readiness-process/index.html
├── controls-evidence/index.html
├── ai-data/index.html
├── services/index.html
├── tools/index.html
├── about/index.html
├── 404.html
└── sitemap-index.xml
```

**Cross-site checks:**
- All sites share `global.css` design tokens (verified by comparing `--color-bg`, `--color-accent`, font stacks)
- All sites have `<a href="#main-content" class="skip-link">Skip to content</a>`
- All sites have `<meta http-equiv="Content-Security-Policy" ...>` in BaseLayout
- All sites have footer disclaimer appropriate to their category
- Nav hamburger menu works at ≤768px viewport

</details>

---

## File Count Summary

| Phase | Description | Files per Site | Total Files |
|-------|-------------|---------------|-------------|
| 012-A | Config, styles, shared components | 16 | 176 |
| 012-B | Data-driven pages | 5 | 55 |
| 012-C | Nav + unique pages | 5 | 55 |
| 012-D | Deploy + hub integration | 2 | 22 |
| 012-E | Verification only | 0 | 0 |
| **Total** | | **28** | **308** |

Plus 11 npm installs (A.9) and 11 site.json updates (D.2).

## Execution Notes

1. **Parallelization:** Phases 012-A and 012-B are mechanical copy operations — highly parallelizable across all 11 sites. Phase 012-C requires regulation-specific content but all 11 sites are independent and can be parallelized with agents.

2. **Component reuse:** 9 of 10 components are byte-identical copies from SOC 2. Only Nav.astro differs (pages array). TimelineDiagram is copied as-is but the readiness-process page overrides the timeline data inline.

3. **Page reuse:** 5 of 9 pages are byte-identical copies. The 4 unique pages (index, what-is-X, readiness-process, about) follow the SOC 2 structure but with regulation-specific content.

4. **npm install:** Each site needs its own `npm install` to create `node_modules/` and `package-lock.json`. The dependencies are identical across all sites.

5. **Commit cadence:** One commit per phase (012-A through 012-E). Each commit independently valid.

6. **Port registry update:** Ports 4341–4351 are assigned to the 11 new sites. These should be added to the global port registry in `CLAUDE.md` after completion.
