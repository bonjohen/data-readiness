---
phase: 02
title: "Topic Discovery & TopicCard"
depends_on: "Phase 01"
goal: "Hub auto-discovers topic sites from site.json manifests at build time and renders them as cards."
source_pdr_sections: ["2.1", "2.3", "4.5", "6.1", "6.2"]
source_user_stories: ["US-001", "US-002", "US-003", "US-004", "US-006", "US-007", "US-008"]
status: "open"
---

# Phase 02: Topic Discovery & TopicCard

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 02.1 | Open | | | Create `src/data/topic-schema.ts` — Zod schema with id regex, min/max constraints, live-requires-url refine (PDR §2.1) |
| 02.2 | Open | | | Create `src/data/discover-topics.ts` — fs-based discovery of `github/*/site.json`, parse, validate, sort by order, warn on invalid/duplicate, return TopicManifest[] (PDR §6.1) |
| 02.3 | Open | | | Create `site.json` placeholder manifests for all 12 topics in their respective `github/{topic}/` folders (create folders as needed). All status: placeholder. Content per PDR §2.3 |
| 02.4 | Open | | | Create `src/components/TopicCard.astro` — card with name heading, shortDescription, category badge, status badge (live/coming-soon), conditional `<a>` wrapper for live topics, muted opacity for placeholder, hover effect for live only (PDR §4.5) |
| 02.5 | Open | | | Update `src/pages/index.astro` — import discoverTopics, map to TopicCard grid. CSS grid: 3-col desktop, 2-col tablet, 1-col mobile (PDR §5.1) |
| 02.6 | Open | | | Verify: `npx astro dev` shows 12 topic cards sorted by order; placeholder cards show amber badge, no link, muted style; console shows no warnings for valid manifests |

## Context

### Files to Create or Modify

- `github/_hub/src/data/topic-schema.ts` — Zod schema definition for site.json manifests
- `github/_hub/src/data/discover-topics.ts` — Build-time manifest discovery module
- `github/_hub/src/components/TopicCard.astro` — Topic catalog card component
- `github/_hub/src/pages/index.astro` — Update placeholder to include real topic grid
- `github/cppa/site.json` — CCPA manifest (folder exists)
- `github/soc2/site.json` — SOC 2 manifest (folder exists)
- `github/gdpr/site.json` — Create folder and manifest
- `github/coppa/site.json` — Create folder and manifest
- `github/ftc-safeguards/site.json` — Create folder and manifest
- `github/hipaa/site.json` — Create folder and manifest
- `github/pci-dss/site.json` — Create folder and manifest
- `github/ny-shield/site.json` — Create folder and manifest
- `github/state-privacy/site.json` — Create folder and manifest
- `github/sec-cyber/site.json` — Create folder and manifest
- `github/ai-governance/site.json` — Create folder and manifest
- `github/eu-dora/site.json` — Create folder and manifest

### Data Model

**Topic manifest Zod schema (PDR §2.1):**

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

**All 12 placeholder manifests (PDR §2.3):**

| order | id | name | shortDescription | category |
|-------|----|------|-----------------|----------|
| 1 | cppa | CCPA / CPRA Privacy Readiness | Help companies map personal data, update privacy notices, and prepare evidence for California privacy obligations | privacy |
| 2 | gdpr | GDPR Operational Readiness | Help U.S. SaaS companies identify controller/processor roles, map data flows, and document lawful processing | privacy |
| 3 | coppa | COPPA Readiness | Help children-facing websites and apps review data collection, parental consent flows, and vendor handling | privacy |
| 4 | ftc-safeguards | FTC Safeguards Rule Readiness | Help non-bank financial-service businesses build information security programs and risk assessments | security |
| 5 | hipaa | HIPAA Security Rule Readiness | Help health-tech vendors document ePHI safeguards, access controls, audit logging, and risk analysis | security |
| 6 | pci-dss | PCI DSS v4.0.1 Readiness | Help companies that touch payment-card data reduce scope and document cardholder-data flows | security |
| 7 | ny-shield | NY SHIELD Act Readiness | Help companies holding New York resident data create reasonable security programs and breach-response procedures | security |
| 8 | state-privacy | State Privacy Law Patchwork | Help companies build reusable privacy operations for Virginia, Colorado, Texas, and similar state laws | privacy |
| 9 | sec-cyber | SEC Cybersecurity Disclosure Readiness | Help public or pre-IPO companies document cyber-risk governance and incident materiality workflows | governance |
| 10 | ai-governance | AI Governance / AI Regulatory Readiness | Help AI companies build model inventories, risk classifications, and NIST AI RMF mappings | governance |
| 11 | eu-dora | EU DORA Readiness | Help fintech and ICT vendors document operational resilience, incident reporting, and third-party risk | governance |
| 12 | soc2 | SOC 2 Readiness | Prepare for SOC 2 Type 1 or Type 2 audits with controls, evidence workflows, and tool evaluations | audit-framework |

All manifests have `"status": "placeholder"` and no `url` field.

### Key Patterns and Imports

**Discovery module (PDR §6.1, §6.2):**

```typescript
// src/data/discover-topics.ts
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { topicManifestSchema, type TopicManifest } from './topic-schema';

export function discoverTopics(): TopicManifest[] {
  // Path resolution: src/data/ → ../../ → _hub/ → ../ → github/
  const hubDir = resolve(import.meta.dirname, '../../..');
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

  topics.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));

  // Deduplicate by id (keep first occurrence)
  const seen = new Set<string>();
  return topics.filter((t) => {
    if (seen.has(t.id)) {
      console.warn(`[discover-topics] Duplicate topic id: "${t.id}" — keeping first occurrence`);
      return false;
    }
    seen.add(t.id);
    return true;
  });
}
```

**TopicCard.astro interface (PDR §4.5):**

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

Component behavior:
- Wraps in `<article class="card topic-card">`.
- Shows `name` as `<h3>`, `shortDescription` as `<p>`.
- Category badge: `<span class="badge">{category}</span>`.
- Live: green `.badge-live` with text "Live". Entire card wrapped in `<a href={url}>`. Hover: `translateY(-2px)` + deeper shadow.
- Placeholder: amber `.badge-coming-soon` with text "Coming Soon". No link wrapper. `opacity: 0.7`. No hover effect.

**Using discoverTopics in index.astro:**

```astro
---
import BaseLayout from '../components/BaseLayout.astro';
import HeroSection from '../components/HeroSection.astro';
import TopicCard from '../components/TopicCard.astro';
import { discoverTopics } from '../data/discover-topics';

const topics = discoverTopics();
---
<BaseLayout title="Home" description="...">
  <HeroSection ... />
  <section class="container" id="topics">
    <h2>Regulation Topics</h2>
    <div class="topic-grid">
      {topics.map((topic) => <TopicCard {...topic} />)}
    </div>
  </section>
</BaseLayout>
```

**Topic grid CSS:**
```css
.topic-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .topic-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .topic-grid {
    grid-template-columns: 1fr;
  }
}
```

### Design Notes

- **Path resolution is critical.** The discovery module uses `import.meta.dirname` to find its own location, then walks up to the `github/` directory. This works in both dev and build mode. If the hub is ever moved to a different location relative to the sibling topic folders, the path resolution must be updated.
- **`import.meta.dirname`** is available in Node 21.2+ and in Astro's build pipeline. Since Astro 5.x targets modern Node, this is safe. If running Node 20.x where `import.meta.dirname` is not available, use `import.meta.url` with `fileURLToPath` instead:
  ```typescript
  import { fileURLToPath } from 'node:url';
  import { dirname } from 'node:path';
  const __dirname = dirname(fileURLToPath(import.meta.url));
  ```
- **Zod import path:** In Astro projects, Zod is available from `'astro/zod'` — no separate `zod` package needed.
- **Manifest files live in the topic folders, not in the hub.** The hub reads from sibling directories. This means topic teams control their own manifests.
- **The `_hub` prefix** (underscore) ensures the hub directory sorts first in file listings and is clearly distinguished from topic folders. The underscore convention also makes it easy to exclude from discovery (`entry.name === '_hub'`).
- **Console warnings for invalid manifests** are intentional (US-007). They appear during dev and build but do not fail the build — the invalid topic is simply omitted.
- **Folders not in the 12-topic list** (like `sdlc/`, `_hub/`) don't have `site.json` files and are silently skipped. No special filtering beyond `_hub` is needed.

### Verification

- [ ] `src/data/topic-schema.ts` exports `topicManifestSchema` and `TopicManifest` type
- [ ] `src/data/discover-topics.ts` exports `discoverTopics()` function
- [ ] All 12 `github/{topic}/site.json` files exist and pass schema validation
- [ ] `npx astro dev` shows 12 topic cards on the home page, sorted by order (cppa first, soc2 last)
- [ ] All cards show amber "Coming Soon" badge (all are placeholder status)
- [ ] No console warnings during build with valid manifests
- [ ] Intentionally break one manifest (e.g., remove `name` field) and rebuild — warning appears, card is skipped, build still succeeds
- [ ] Category badges display correctly (privacy, security, governance, audit-framework)
- [ ] Grid reflows: 3 columns at desktop, 2 at 768px, 1 at 480px
- [ ] `npx astro build` succeeds with zero errors

## Phase Summary

_To be filled after completion._

- **Changes:** TBD
- **Commit:** TBD
