# Data Readiness Platform — Draft User Requirements Document

## 1. Product Name

**Data Readiness** — a multi-topic regulatory compliance readiness platform.

## 2. Purpose

Provide companies with self-service readiness assessment sites for 12 data regulation frameworks. Each regulation gets its own standalone Astro site (modeled after the existing SOC 2 project at `c:\projects\soc2`). A top-level collector site presents all 12 topics in a unified interface and automatically discovers new topic sites as they are added — no manual wiring required.

## 3. Core Concept

The platform is a hub-and-spoke architecture:

- **Hub (top-level site):** A collector site at the root that provides a unified landing page, cross-topic navigation, and a registry of all available regulation sites. It auto-discovers spokes by scanning the `github/` directory for valid sub-site folders.
- **Spokes (topic sites):** Each regulation topic is an independent Astro static site under `github/{topic}/`. Every spoke follows the same structural template derived from the SOC 2 project: content collections for controls, advisory modules, services, and tools; a consistent page set; shared design tokens and components.

The first two spokes are SOC 2 (`github/soc2/`) and CCPA/CPRA (`github/cppa/`). The remaining 10 topics will be added incrementally using the same template.

## 4. Primary User Goal

A compliance or security professional visits the top-level site, sees the full landscape of supported regulation topics, navigates to the regulation relevant to their company, and uses the topic site to understand what readiness looks like — control domains, evidence requirements, tool options, and available advisory services.

## 5. System Architecture

### 5.1 Repository and Folder Layout

```
data-readiness/
  CLAUDE.md
  sdlc/                          # SDLC document pipeline (prompts, docs, plans)
  github/
    _hub/                        # Top-level collector site (Astro)
    cppa/                        # CCPA/CPRA topic site (Astro)
    soc2/                        # SOC 2 topic site (Astro, adapted from c:\projects\soc2)
    gdpr/                        # Future
    coppa/                       # Future
    ftc-safeguards/              # Future
    hipaa/                       # Future
    pci-dss/                     # Future
    ny-shield/                   # Future
    state-privacy/               # Future
    sec-cyber/                   # Future
    ai-governance/               # Future
    eu-dora/                     # Future
```

Each folder under `github/` (except `_hub/`) is a self-contained Astro project with its own `package.json`, `astro.config.mjs`, content collections, and pages. The `_hub/` folder is the top-level collector site.

### 5.2 Top-Level Collector Site (`_hub/`)

The hub site:

1. **Auto-discovers topic sites.** At build time, scans sibling directories under `github/` for folders containing a valid manifest file (e.g., `site.json` or a known marker in `package.json`). Each discovered topic is added to the hub's registry without editing hub source files.
2. **Renders a topic catalog.** The home page displays a card grid of all discovered topics, each showing the topic name, short description, status (live / coming soon), and a link to the deployed topic site.
3. **Provides cross-topic navigation.** A shared nav bar or sidebar lets users jump between the hub and any live topic site.
4. **Indicates topic status.** Topics with a deployed site link to it. Topics with only a placeholder folder show a "coming soon" state. The hub distinguishes between the two automatically based on the manifest.
5. **Requires zero hub edits to add a new topic.** Adding a new folder under `github/` with the correct manifest is sufficient — the next hub build picks it up.

### 5.3 Topic Site Template (Spoke Pattern)

Each topic site follows the architecture established by the SOC 2 project:

**Tech stack:** Astro 5.x, TypeScript (strict), custom CSS with design tokens, Sharp for images, sitemap integration. No React/Vue/Svelte — pure Astro components. GitHub Pages deployment.

**Content collections (4 per topic):**

| Collection | Schema Fields | Purpose |
|------------|---------------|---------|
| `controls` | domain, order, description, requirements[], evidence_examples[], criteria[] | Regulation-specific control domains and evidence requirements |
| `advisory` | module_name, order, why_credible, additions[] | Optional enhancement modules (e.g., AI-specific layers) |
| `services` | name, order, duration, price_range, deliverables[] | Service offerings for that regulation |
| `tools` | name, category, good_fit, cautions | Tool evaluations relevant to that regulation |

**Standard page set (9 pages per topic):**

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero + value props + service overview |
| What Is [Regulation] | `/what-is-{topic}` | Educational foundation: scope, key terms, readiness checklist |
| Readiness Process | `/readiness-process` | Phase timeline, deliverables |
| Controls & Evidence | `/controls-evidence` | Control domains with evidence tables |
| AI & Data Advisory | `/ai-data` | Optional enhancement modules |
| Services | `/services` | Service packages + RACI matrix |
| Tools | `/tools` | Tool landscape by category |
| About | `/about` | Company positioning, staffing, approach |
| 404 | `/404` | Error page |

**Reusable components (10):**

BaseLayout, Nav, Footer, HeroSection, TimelineDiagram, DisclaimerBanner, ControlCard, ServiceCard, ToolCard, AdvisoryCard.

**Styling:** Dark slate color scheme (#0f172a base), Inter font, CSS design tokens, responsive breakpoints at 768px and 480px. Consistent across all topic sites.

### 5.4 Hub Manifest Contract

Each topic site provides a manifest file (`site.json` at the topic root) that the hub reads at build time:

```json
{
  "id": "soc2",
  "name": "SOC 2 Readiness",
  "shortDescription": "Prepare for SOC 2 Type 1 or Type 2 audits",
  "regulation": "SOC 2",
  "status": "live",
  "url": "https://soc2.johnboen.com",
  "order": 12,
  "category": "audit-framework",
  "icon": "shield-check"
}
```

The hub builds its catalog from these manifests. A topic folder without a `site.json` is ignored. A topic with `"status": "placeholder"` renders as "coming soon."

## 6. Primary User Flows

### Flow 1: Discover the Platform (Hub)

1. User lands on the top-level Data Readiness site.
2. Sees a hero section explaining the platform's purpose.
3. Scrolls to a card grid showing all 12 regulation topics.
4. Each card shows topic name, one-line description, and status badge (Live / Coming Soon).
5. User clicks a live topic card and navigates to that topic's standalone site.

### Flow 2: Assess Readiness for a Specific Regulation (Spoke)

1. User arrives at a topic site (e.g., CCPA Readiness).
2. Reads the "What Is [Regulation]" page to understand scope and key terms.
3. Reviews the Controls & Evidence page to see what controls apply and what evidence is needed.
4. Optionally reviews AI & Data Advisory for industry-specific enhancements.
5. Reviews the Tools page to evaluate technology options.
6. Reviews the Services page to understand available advisory support.

### Flow 3: Add a New Regulation Topic (Developer)

1. Developer creates a new folder under `github/` (e.g., `github/hipaa/`).
2. Copies the topic site template (or scaffolds from a generator).
3. Populates content collections with regulation-specific controls, advisory, services, and tools.
4. Creates a `site.json` manifest with topic metadata and `"status": "live"`.
5. Builds and deploys the topic site.
6. Rebuilds the hub — the new topic appears automatically in the catalog.

## 7. Functional Requirements

**FR-1: Hub auto-discovery.** The hub site must discover topic sites at build time by scanning `github/*/site.json`. No hardcoded topic list in hub source code.

**FR-2: Hub topic catalog.** The hub home page must render a card for every discovered topic, sorted by the `order` field in each manifest, displaying name, description, status badge, and link.

**FR-3: Hub status distinction.** Topics with `"status": "live"` link to their deployed URL. Topics with `"status": "placeholder"` display a "coming soon" badge and no link.

**FR-4: Topic site structural consistency.** Every topic site must use the same Astro content collection schemas, the same 9-page structure, and the same component set as the SOC 2 site.

**FR-5: Shared design system.** All topic sites and the hub must use the same CSS design tokens, color scheme, typography, and responsive breakpoints. Design tokens are defined once and imported by each site.

**FR-6: Independent deployment.** Each topic site must be independently buildable and deployable to its own GitHub Pages domain without affecting other sites or the hub.

**FR-7: SOC 2 adaptation.** The existing SOC 2 project (`c:\projects\soc2`) must be adapted into the spoke format and placed at `github/soc2/`. Content and functionality are preserved; structural changes are limited to conforming to the shared template and adding a `site.json` manifest.

**FR-8: CCPA site creation.** A CCPA/CPRA topic site must be created at `github/cppa/` using the spoke template, populated with CCPA-specific controls, advisory modules, services, and tools.

**FR-9: Template extractability.** The shared components, styles, and page structure must be organized so that creating a new topic site is a copy-and-populate operation, not a rebuild-from-scratch operation.

## 8. Non-Goals

- **No user accounts or authentication.** These are static informational sites.
- **No interactive assessments or scoring.** The sites present readiness information; they do not collect user data or compute readiness scores.
- **No CMS or admin interface.** Content is managed as markdown files in version control.
- **No backend services or APIs.** All sites are statically generated.
- **No real-time updates.** Content changes require a rebuild and deploy.
- **No cross-topic data aggregation.** The hub links to topic sites but does not merge or query their content at runtime.

## 9. Privacy and Storage Expectations

- All sites are static HTML — no cookies, no analytics, no tracking, no data collection.
- No personal data is stored or processed.
- Content is public and informational.

## 10. Acceptance Criteria

- [ ] Hub site at `github/_hub/` builds successfully with `npx astro build`.
- [ ] Hub auto-discovers topic sites from `github/*/site.json` at build time.
- [ ] Hub displays topic cards with correct name, description, status, and link for each discovered manifest.
- [ ] Adding a new `site.json` in a new `github/{topic}/` folder causes it to appear in the hub on next build — no hub source edits required.
- [ ] SOC 2 site at `github/soc2/` preserves all content and functionality from `c:\projects\soc2`.
- [ ] SOC 2 site includes a valid `site.json` manifest.
- [ ] CCPA site at `github/cppa/` follows the same template structure as SOC 2.
- [ ] CCPA site has populated content collections (controls, advisory, services, tools) with CCPA-specific content.
- [ ] All three sites (hub, soc2, cppa) share the same design tokens and visual appearance.
- [ ] Each site builds and deploys independently.

## 11. Implementation Sequence

The work proceeds in three ordered phases:

1. **Top-level hub site** — Build the collector site with auto-discovery, catalog rendering, and the shared design system. Validate with placeholder manifests.
2. **SOC 2 spoke adaptation** — Fork the existing `c:\projects\soc2` into `github/soc2/`, restructure to match the spoke template, add `site.json`, verify hub integration. This phase establishes the definitive spoke pattern.
3. **CCPA spoke creation** — Create `github/cppa/` from the spoke template established by SOC 2, populate with CCPA/CPRA-specific content. This phase validates that the template is truly reusable.

After these three phases, the remaining 10 topics can be added incrementally using the same template.

## 12. Open Questions / Coverage Gaps

<!-- WARNING: The following topics were NOT discussed in the initial requirements and need explicit decisions before design proceeds. -->

1. **Deployment topology.** Will each topic site deploy to its own subdomain (e.g., `soc2.johnboen.com`, `ccpa.johnboen.com`) or as path-prefixed routes under a single domain (e.g., `datareadiness.com/soc2/`)? This affects `astro.config.mjs` base paths and hub link generation.
2. **Shared dependency management.** Should the design tokens and shared components live in a shared npm package, a git submodule, or simply be copied into each topic site? Trade-offs between consistency and independence.
3. **Content authorship.** Who writes the regulation-specific content for each of the 12 topics? Is it AI-generated from authoritative sources, manually authored, or a hybrid?
4. **SOC 2 retirement plan.** When the SOC 2 spoke is live, what happens to `c:\projects\soc2` and `soc2.johnboen.com`? Redirect? Archive? Immediate teardown?
5. **Build orchestration.** Is there a single build command that builds all sites, or does each site build independently? The hub needs to rebuild whenever a new topic is added.
6. **CCPA content depth.** Should the CCPA site match the SOC 2 site's content depth (12 control domains, 7 advisory modules, 4 service tiers, 13 tool evaluations), or start with a subset?
