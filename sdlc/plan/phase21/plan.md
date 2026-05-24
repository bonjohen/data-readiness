---
phase: "21"
title: "Hub Infrastructure — Components, Schema, Navigation"
depends_on: "Phase 20"
goal: "The hub has all shared components, an extended topic schema with what-is metadata, and a topic-aware Nav/BaseLayout. Hub builds and serves the home page with relative topic links."
status: "open"
---

# Phase 21: Hub Infrastructure — Components, Schema, Navigation

## Overview

The hub currently has only its own components (TopicCard, HeroSection, Nav, Footer, BaseLayout). It needs the regulation-site components (ControlCard, ServiceCard, ToolCard, AdvisoryCard, DisclaimerBanner, TimelineDiagram) and a refactored Nav that can render topic-scoped navigation. The topic schema also needs `whatIsLabel` and `whatIsSlug` fields so each topic's nav can link to its regulation-specific "What is X?" page.

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 21.1 | Open | | | Copy 6 regulation-site components into hub: `ControlCard`, `ServiceCard`, `ToolCard`, `AdvisoryCard`, `DisclaimerBanner`, `TimelineDiagram` from `github/soc2/src/components/` → `github/_hub/src/components/` |
| 21.2 | Open | | | Extend `topic-schema.ts` — add `whatIsLabel: z.string()` and `whatIsSlug: z.string()` fields. Remove the `.refine()` that requires `url` when status is `"live"`. Keep `url` as optional but unused. |
| 21.3 | Open | | | Update all 12 `site.json` files — add `whatIsLabel` and `whatIsSlug` per the site configuration matrix. Remove `url` field. |
| 21.4 | Open | | | Refactor `Nav.astro` — accept optional `topic` prop (TopicManifest). When topic is set, render topic-scoped nav links (prefixed `/{topic.id}/`). When unset, render hub-level nav (Home, About). |
| 21.5 | Open | | | Refactor `BaseLayout.astro` — accept optional `topic` prop, pass to Nav, use topic name in `<title>` when set. |
| 21.6 | Open | | | Update `TopicCard.astro` — link to `/${topic.id}/` instead of `${topic.url}`. Remove the `url`-based conditional; live topics always link to their relative path. |
| 21.7 | Open | | | Update `discover-topics.ts` — no logic changes needed (schema change in 21.2 handles validation), but verify the function still returns all 12 topics after schema changes. |
| 21.8 | Open | | | Build and verify: `npx astro build` succeeds, hub home page renders 12 topic cards with relative links. |

<details>
<summary>Phase 21 Context</summary>

**site.json additions per topic (whatIsSlug / whatIsLabel):**

| Site ID | whatIsSlug | whatIsLabel |
|---------|-----------|------------|
| cppa | what-is-ccpa | What is CCPA? |
| gdpr | what-is-gdpr | What is GDPR? |
| coppa | what-is-coppa | What is COPPA? |
| ftc-safeguards | what-is-safeguards-rule | What is the Safeguards Rule? |
| hipaa | what-is-hipaa | What is HIPAA? |
| pci-dss | what-is-pci-dss | What is PCI DSS? |
| ny-shield | what-is-shield-act | What is the SHIELD Act? |
| state-privacy | state-privacy-laws | State Privacy Laws |
| sec-cyber | what-is-sec-cyber | What is SEC Cyber Disclosure? |
| ai-governance | what-is-ai-governance | What is AI Governance? |
| eu-dora | what-is-dora | What is DORA? |
| soc2 | what-is-soc2 | What is SOC 2? |

**Nav.astro refactored pages array (when topic is set):**
```typescript
const pages = topic ? [
  { href: `/${topic.id}/${topic.whatIsSlug}`, label: topic.whatIsLabel },
  { href: `/${topic.id}/readiness-process`, label: 'Process' },
  { href: `/${topic.id}/controls-evidence`, label: 'Controls' },
  { href: `/${topic.id}/ai-data`, label: 'AI & Data' },
  { href: `/${topic.id}/services`, label: 'Services' },
  { href: `/${topic.id}/tools`, label: 'Tools' },
  { href: `/${topic.id}/about`, label: 'About' },
] : [
  { href: '/about', label: 'About' },
];
```

**TopicCard.astro link change:**
```astro
// Before: <a href={url}>
// After:  <a href={`/${id}/`}>
```

**Existing files to modify:**
- `github/_hub/src/data/topic-schema.ts` (line 13: remove refine, add fields)
- `github/_hub/src/components/TopicCard.astro` (line 17-18: change link)
- `github/_hub/src/components/Nav.astro` (full refactor for topic prop)
- `github/_hub/src/components/BaseLayout.astro` (add topic prop passthrough)
- 12x `github/{id}/site.json` (add whatIsSlug, whatIsLabel, remove url)

</details>
