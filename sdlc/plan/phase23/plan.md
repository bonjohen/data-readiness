---
phase: "23"
title: "Unique Pages as Content — MDX-Driven Regulation Pages"
depends_on: "Phase 22"
goal: "The 4 regulation-specific pages (index, what-is-X, readiness-process, about) are content-driven via a `pages` MDX collection. Each topic has 4 MDX files containing the regulation-specific HTML. Shared Astro templates render them under `[topic]/` routes."
status: "open"
---

# Phase 23: Unique Pages as Content — MDX-Driven Regulation Pages

## Overview

The 4 unique pages per topic (index, what-is-X, readiness-process, about) currently contain hardcoded regulation-specific HTML. To render them from a single hub, we convert them to MDX content files with structured frontmatter, stored in a new `pages` content collection. Four template pages under `[topic]/` render the MDX body for the matching topic.

This converts 48 hardcoded `.astro` files (4 pages x 12 topics) into 48 MDX data files and 4 shared templates.

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 23.1 | Open | | | Install `@astrojs/mdx` in the hub. Add the MDX integration to `astro.config.mjs`. |
| 23.2 | Open | | | Add `pages` collection to `github/_hub/src/content/config.ts` — schema: `page` (enum: index, what-is, readiness-process, about), `title`, `description`, plus page-specific optional fields (hero headline/subheadline for index, disclaimer category for about, timeline phases for readiness-process). |
| 23.3 | Open | | | Extract index page content from all 12 sites into `src/content/pages/{topic}/index.mdx` — hero props in frontmatter, "Why X Matters" value grid and "How We Help" cards as MDX body. |
| 23.4 | Open | | | Extract what-is page content from all 12 sites into `src/content/pages/{topic}/what-is.mdx` — regulation definition, scope, requirements tables, readiness checklist as MDX body. |
| 23.5 | Open | | | Extract readiness-process content from all 12 sites into `src/content/pages/{topic}/readiness-process.mdx` — timeline phases in frontmatter (array of {name, duration, activities[]}), phase details and deliverables as MDX body. |
| 23.6 | Open | | | Extract about page content from all 12 sites into `src/content/pages/{topic}/about.mdx` — disclaimer statements in frontmatter, company positioning and staffing as MDX body. |
| 23.7 | Open | | | Create template `src/pages/[topic]/index.astro` — reads `pages` collection entry for `{topic}/index`, renders HeroSection from frontmatter props, renders MDX body. |
| 23.8 | Open | | | Create template `src/pages/[topic]/[whatIs].astro` — dynamic slug from `topic.whatIsSlug`, reads `pages` collection entry for `{topic}/what-is`, renders MDX body inside BaseLayout. |
| 23.9 | Open | | | Create template `src/pages/[topic]/readiness-process.astro` — reads `pages` collection entry, renders TimelineDiagram from frontmatter phases, renders MDX body for phase details. |
| 23.10 | Open | | | Create template `src/pages/[topic]/about.astro` — reads `pages` collection entry, renders MDX body, appends DisclaimerBanner from frontmatter statements. |
| 23.11 | Open | | | Build and verify: `npx astro build` produces 9 pages per topic (108 total) + 3 hub pages = 111 pages. Navigate key routes in dev mode. |

<details>
<summary>Phase 23 Context</summary>

**Pages collection schema:**
```typescript
const pageSchema = z.object({
  page: z.enum(['index', 'what-is', 'readiness-process', 'about']),
  title: z.string(),
  description: z.string(),
  // index-specific
  heroHeadline: z.string().optional(),
  heroSubheadline: z.string().optional(),
  // readiness-process-specific
  timelinePhases: z.array(z.object({
    name: z.string(),
    duration: z.string(),
    activities: z.array(z.string()),
  })).optional(),
  // about-specific
  disclaimers: z.array(z.string()).optional(),
});
```

**MDX content file example (`src/content/pages/soc2/index.mdx`):**
```mdx
---
page: "index"
title: "Home"
description: "SOC 2 readiness and audit support for technology companies."
heroHeadline: "SOC 2 Readiness for Technology Companies"
heroSubheadline: "Close enterprise deals faster. Reduce procurement friction. Get audit-ready with confidence."
---

<section class="content section">
  <h2>Why SOC 2 Matters</h2>
  <!-- value grid HTML -->
</section>

<section class="content section">
  <h2>How We Help</h2>
  <!-- service overview cards HTML -->
</section>
```

**Template page pattern (`src/pages/[topic]/index.astro`):**
```astro
---
import BaseLayout from '../../components/BaseLayout.astro';
import HeroSection from '../../components/HeroSection.astro';
import { getCollection } from 'astro:content';
import { discoverTopics } from '../../data/discover-topics';

export function getStaticPaths() {
  const topics = discoverTopics();
  return topics.map((t) => ({ params: { topic: t.id }, props: { topic: t } }));
}

const { topic } = Astro.props;
const pages = await getCollection('pages');
const entry = pages.find((p) => p.id === `${topic.id}/index`);
const { Content } = await entry.render();
---
<BaseLayout title={entry.data.title} description={entry.data.description} topic={topic}>
  <HeroSection
    headline={entry.data.heroHeadline}
    subheadline={entry.data.heroSubheadline}
    ctaText="Get Started"
    ctaHref={`/${topic.id}/about`}
  />
  <Content />
</BaseLayout>
```

**Internal link rewriting:** MDX body content uses root-relative links like `/controls-evidence`. These need to be prefixed with `/{topic-id}`. Options:
1. Write links as relative in MDX: `controls-evidence` (no leading slash) — Astro resolves relative to current path
2. Use a remark plugin to rewrite `/` links
3. Manually prefix in each MDX file

Option 1 (relative links) is simplest if the page is at `/{topic}/index` — a link to `controls-evidence` resolves to `/{topic}/controls-evidence`.

**Source files to extract from (per topic):**
- `github/{id}/src/pages/index.astro` → frontmatter + body → `src/content/pages/{id}/index.mdx`
- `github/{id}/src/pages/what-is-*.astro` → `src/content/pages/{id}/what-is.mdx`
- `github/{id}/src/pages/readiness-process.astro` → `src/content/pages/{id}/readiness-process.mdx`
- `github/{id}/src/pages/about.astro` → `src/content/pages/{id}/about.mdx`

</details>
