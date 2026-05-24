---
phase: "20"
title: "Content Consolidation into Hub"
depends_on: "Phase 012"
goal: "All content collections (controls, advisory, services, tools) from 12 regulation sites are consolidated into the hub's src/content/ with subdirectory-per-topic organization. Hub builds successfully with the merged content."
source_pdr_sections: ["2.3", "6.1"]
status: "open"
---

# Phase 20: Content Consolidation into Hub

## Overview

The current architecture has 12 separate Astro projects, each with its own copy of components, pages, and content collections. The user's intent is ONE site that renders all 12 regulation topics from their data files. This phase moves all content collections into the hub site, organized by topic subdirectories.

**Why:** The hub should be self-contained. External URLs (johnboen.com subdomains) were never requested. The SOC 2 site is a reference for how to format/render data, not a model for 12 independent deployments.

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 20.1 | Started | 2026-05-23 09:30 PM | | Update `github/_hub/src/content/config.ts` — add the four content collection schemas (controls, advisory, services, tools) from `github/soc2/src/content/config.ts`. Keep existing hub collections if any. |
| 20.2 | Open | | | Copy content files from all 12 sites into hub using subdirectory-per-topic layout: `github/{id}/src/content/{collection}/*.md` → `github/_hub/src/content/{collection}/{id}/*.md` |
| 20.3 | Open | | | Verify content loads: run `npx astro build` in `github/_hub/` and confirm zero content schema errors. Fix any issues. |

<details>
<summary>Phase 20 Context</summary>

**Content collection schema (identical across all 12 sites, from `github/soc2/src/content/config.ts`):**
```typescript
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
```

**Target directory layout after move:**
```
github/_hub/src/content/
├── controls/
│   ├── soc2/
│   │   ├── logical-access.md
│   │   └── ...
│   ├── gdpr/
│   │   ├── lawful-basis.md
│   │   └── ...
│   └── {11 topic directories}
├── advisory/
│   ├── soc2/
│   ├── gdpr/
│   └── ...
├── services/
│   ├── soc2/
│   ├── gdpr/
│   └── ...
└── tools/
    ├── soc2/
    ├── gdpr/
    └── ...
```

**Content entry IDs in Astro 5:** When content is in subdirectories, the entry ID includes the path: `soc2/logical-access`. This allows filtering by topic at query time: `entry.id.startsWith('soc2/')`.

**File counts per site (from Phase 011):**
- soc2: controls=12, advisory=7, services=4, tools=15
- gdpr: controls=12, advisory=7, services=4, tools=15
- All other sites: similar counts (8-12 controls, 7 advisory, 4 services, 15 tools)

**Total content files to move: ~456 files (38 avg per site x 12 sites)**

</details>
