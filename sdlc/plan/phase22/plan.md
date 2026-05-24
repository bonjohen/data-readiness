---
phase: "22"
title: "Dynamic Routes — Data-Driven Pages"
depends_on: "Phase 21"
goal: "The hub renders the 5 data-driven pages (controls-evidence, ai-data, services, tools, 404) for all 12 topics via dynamic `[topic]/` routes. Each page filters its content collection by topic ID."
status: "open"
---

# Phase 22: Dynamic Routes — Data-Driven Pages

## Overview

Create dynamic route pages under `src/pages/[topic]/` that use `getStaticPaths()` to generate pages for all 12 topics. Each page filters its content collection by topic prefix (e.g., `entry.id.startsWith('soc2/')`). These are the 5 pages whose structure is identical across all topics — they only differ by data.

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 22.1 | Open | | | Create `src/pages/[topic]/controls-evidence.astro` — `getStaticPaths()` returns 12 topic IDs from `discoverTopics()`, page fetches `getCollection('controls')` filtered by `entry.id.startsWith(topic + '/')`, renders ControlCards. Pass topic to BaseLayout. |
| 22.2 | Open | | | Create `src/pages/[topic]/ai-data.astro` — same pattern, filters `advisory` collection, renders AdvisoryCards with distinction grid and CTA. |
| 22.3 | Open | | | Create `src/pages/[topic]/services.astro` — same pattern, filters `services` collection, renders ServiceCards with RACI table and DisclaimerBanner. |
| 22.4 | Open | | | Create `src/pages/[topic]/tools.astro` — same pattern, filters `tools` collection by topic, then splits into compliance/operational categories. |
| 22.5 | Open | | | Create `src/pages/[topic]/404.astro` — static error page with topic-aware "Back to Home" link pointing to `/{topic}/`. |
| 22.6 | Open | | | Build and verify: `npx astro build` produces 60 pages (5 pages x 12 topics) under the `[topic]/` routes plus the 3 hub pages. Navigate to `/soc2/controls-evidence` and `/gdpr/tools` in dev mode to confirm data renders correctly. |

<details>
<summary>Phase 22 Context</summary>

**Dynamic route pattern (all 5 pages follow this):**
```astro
---
import BaseLayout from '../../components/BaseLayout.astro';
import ControlCard from '../../components/ControlCard.astro';
import { getCollection } from 'astro:content';
import { discoverTopics } from '../../data/discover-topics';

export function getStaticPaths() {
  const topics = discoverTopics();
  return topics.map((t) => ({ params: { topic: t.id }, props: { topic: t } }));
}

const { topic } = Astro.props;
const controls = (await getCollection('controls'))
  .filter((e) => e.id.startsWith(topic.id + '/'))
  .sort((a, b) => a.data.order - b.data.order);
---
<BaseLayout title="Controls & Evidence" description="..." topic={topic}>
  <!-- render controls -->
</BaseLayout>
```

**Page content adaption:** The data-driven pages (controls-evidence, ai-data, services, tools) currently contain SOC 2-specific descriptive text (e.g., "A SOC 2 audit evaluates your controls across multiple domains"). This text should be generalized to work across all regulations, or parameterized from the topic metadata. Reasonable approach: use the topic's `regulation` field from site.json to replace "SOC 2" references.

**Expected build output:**
```
github/_hub/dist/
├── index.html           (hub home)
├── about/index.html     (hub about)
├── 404.html             (hub 404)
├── soc2/
│   ├── controls-evidence/index.html
│   ├── ai-data/index.html
│   ├── services/index.html
│   ├── tools/index.html
│   └── 404.html
├── gdpr/
│   ├── controls-evidence/index.html
│   └── ...
└── {10 more topic directories}
```

**Files to create:**
- `github/_hub/src/pages/[topic]/controls-evidence.astro`
- `github/_hub/src/pages/[topic]/ai-data.astro`
- `github/_hub/src/pages/[topic]/services.astro`
- `github/_hub/src/pages/[topic]/tools.astro`
- `github/_hub/src/pages/[topic]/404.astro`

**Reference pages (SOC 2, adapt from these):**
- `github/soc2/src/pages/controls-evidence.astro`
- `github/soc2/src/pages/ai-data.astro`
- `github/soc2/src/pages/services.astro`
- `github/soc2/src/pages/tools.astro`
- `github/soc2/src/pages/404.astro`

</details>
