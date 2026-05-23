---
phase: 03
title: "Content Pages"
depends_on: "Phase 02"
goal: "All hub pages have real content, complete layouts, and responsive design."
source_pdr_sections: ["5.1", "5.2"]
source_user_stories: ["US-001", "US-004", "US-005", "NFR-003"]
status: "open"
---

# Phase 03: Content Pages

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 03.1 | Open | | | Finalize `src/pages/index.astro` — add "How It Works" three-step section below topic grid, footer CTA linking to About page (PDR §5.1) |
| 03.2 | Open | | | Create `src/pages/about.astro` — platform positioning paragraphs, regulation coverage table (from discoverTopics()), site structure explanation, contact CTA (PDR §5.2) |
| 03.3 | Open | | | Verify responsive layout: all pages at 1200px, 768px, 480px, 375px — grids reflow, text readable, no overflow |
| 03.4 | Open | | | Verify accessibility: Lighthouse audit ≥ 90 for Accessibility on all pages; check keyboard tab order; verify skip-link |

## Context

### Files to Create or Modify

- `github/_hub/src/pages/index.astro` — Add "How It Works" section and footer CTA below the topic grid added in Phase 02
- `github/_hub/src/pages/about.astro` — New page: platform overview with regulation table

### Key Patterns and Imports

**index.astro — final structure (PDR §5.1):**

The page has four sections in order:

1. **HeroSection** — already in place from Phase 01/02
2. **Topic Catalog Grid** — already in place from Phase 02
3. **"How It Works" section** — new in this phase
4. **Footer CTA** — new in this phase

"How It Works" is a three-step explanation:

```astro
<section class="container how-it-works">
  <h2>How It Works</h2>
  <div class="steps-grid">
    <div class="step">
      <span class="step-number">1</span>
      <h3>Pick a Regulation</h3>
      <p>Browse the catalog above and select the framework that applies to your business.</p>
    </div>
    <div class="step">
      <span class="step-number">2</span>
      <h3>Review Controls & Evidence</h3>
      <p>Each topic site breaks down the control domains and evidence your organization needs.</p>
    </div>
    <div class="step">
      <span class="step-number">3</span>
      <h3>Prepare for Readiness</h3>
      <p>Use the tools landscape and service options to build your compliance program.</p>
    </div>
  </div>
</section>
```

Steps grid CSS:
```css
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.step {
  text-align: center;
  padding: 1.5rem;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--color-accent);
  color: var(--color-bg);
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
```

Footer CTA:
```astro
<section class="container" style="text-align: center; padding-bottom: var(--spacing-section);">
  <p>Want to learn more about the platform?</p>
  <a href="/about" class="cta-button">About Data Readiness</a>
</section>
```

**about.astro — full page structure (PDR §5.2):**

```astro
---
import BaseLayout from '../components/BaseLayout.astro';
import { discoverTopics } from '../data/discover-topics';

const topics = discoverTopics();
---
<BaseLayout title="About" description="About the Data Readiness platform">
  <section class="container">
    <h1>About Data Readiness</h1>

    <!-- Section 1: Platform positioning -->
    <div class="content">
      <p>Data Readiness helps technology companies understand and prepare for
      regulatory compliance obligations. The platform covers 12 data regulation
      frameworks spanning privacy, security, governance, and audit requirements.</p>

      <p>Each regulation topic has its own dedicated site with control domain
      breakdowns, evidence requirements, tool evaluations, and advisory service
      descriptions. Sites are designed for compliance professionals, security
      leads, and executive sponsors who need practical readiness guidance.</p>
    </div>

    <!-- Section 2: Regulation coverage table -->
    <h2>Regulation Coverage</h2>
    <table>
      <thead>
        <tr>
          <th>Regulation</th>
          <th>Category</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {topics.map((topic) => (
          <tr>
            <td>
              {topic.status === 'live'
                ? <a href={topic.url}>{topic.name}</a>
                : topic.name
              }
            </td>
            <td><span class="badge">{topic.category}</span></td>
            <td>
              {topic.status === 'live'
                ? <span class="badge-live">Live</span>
                : <span class="badge-coming-soon">Coming Soon</span>
              }
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <!-- Section 3: How topic sites are structured -->
    <h2>How Each Topic Site Works</h2>
    <div class="content">
      <p>Every topic site follows the same structure:</p>
      <ul>
        <li><strong>Controls & Evidence</strong> — the specific control domains
        for that regulation, with evidence requirements and artifact types.</li>
        <li><strong>Tools Landscape</strong> — evaluations of compliance platforms
        and operational tools relevant to that framework.</li>
        <li><strong>Advisory Services</strong> — service packages for readiness
        assessment, remediation, and audit support.</li>
        <li><strong>AI & Data Advisory</strong> — optional enhancement modules
        for companies with AI/ML workloads.</li>
      </ul>
    </div>

    <!-- Section 4: Contact CTA -->
    <h2>Get in Touch</h2>
    <div class="content">
      <p>Interested in regulatory readiness consulting? Reach out to discuss
      how we can help your organization prepare.</p>
    </div>
  </section>
</BaseLayout>
```

### Design Notes

- **The about page uses `discoverTopics()` for the regulation table.** This means the table is always in sync with the actual topic manifests — no hardcoded regulation list on this page.
- **Table styling** uses the existing `.card`-style table rules from global.css (the SOC 2 project already has table styles with dark slate backgrounds, border, and hover row highlights). If the copied global.css doesn't include table styles, add them.
- **"How It Works" content** is hardcoded in the page, not driven by data. This is intentional — it's platform-level messaging that doesn't change per topic.
- **No contact form or email link.** The CTA is informational text only, matching the non-goal of "no user input." If the user wants a contact method, it can be added later.
- **Responsive verification** at 375px specifically targets iPhone SE — the narrowest common viewport. At this width, ensure no horizontal overflow on the regulation table (it may need horizontal scroll or a card layout on mobile).

### Verification

- [ ] Home page renders all four sections: Hero, Topic Grid (12 cards), How It Works (3 steps), Footer CTA
- [ ] "How It Works" steps grid reflows from 3 columns to 1 column at ≤768px
- [ ] Footer CTA links to `/about` and the link works
- [ ] About page renders with all four sections: positioning, regulation table, site structure, contact CTA
- [ ] Regulation table shows all 12 topics from `discoverTopics()` with correct names, categories, and status badges
- [ ] At 375px viewport: no horizontal overflow on any page; table is readable (horizontal scroll or responsive cards)
- [ ] At 768px viewport: topic grid is 2 columns, steps grid is 1 column
- [ ] At 1200px viewport: topic grid is 3 columns, steps grid is 3 columns
- [ ] Lighthouse Accessibility score ≥ 90 on index.astro
- [ ] Lighthouse Accessibility score ≥ 90 on about.astro
- [ ] Keyboard tab order is logical: skip-link → nav → main content sections → footer
- [ ] `npx astro build` succeeds with zero errors

## Phase Summary

_To be filled after completion._

- **Changes:** TBD
- **Commit:** TBD
