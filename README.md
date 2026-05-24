# Data Readiness

Multi-topic regulatory compliance readiness platform. Provides self-assessment tools, control inventories, advisory guidance, and service/tool catalogs for 12 data regulation frameworks.

## Topics

| Topic | Regulation | Category |
|---|---|---|
| CCPA/CPRA | California Consumer Privacy Act | privacy |
| GDPR | General Data Protection Regulation | privacy |
| COPPA | Children's Online Privacy Protection Act | privacy |
| FTC Safeguards | FTC Safeguards Rule | privacy |
| HIPAA | HIPAA Security Rule | security |
| PCI DSS | PCI DSS v4.0.1 | security |
| NY SHIELD | NY SHIELD Act | privacy |
| State Privacy | State Privacy Law Patchwork | privacy |
| SEC Cyber | SEC Cybersecurity Disclosure | governance |
| AI Governance | NIST AI RMF | governance |
| EU DORA | EU Digital Operational Resilience Act | governance |
| SOC 2 | SOC 2 Type II | security |

## Architecture

All 12 topics are rendered by a single consolidated Astro 5 static site at `github/_hub/`. Each topic produces 9 pages (home, controls, advisory, services, tools, about, what-is, readiness, 404) plus 3 hub-level pages (home, about, 404) for a total of 111 pages.

Content lives in `github/_hub/src/content/` organized into 4 data collections (`controls/`, `advisory/`, `services/`, `tools/`) with per-topic subdirectories, plus a `pages/` collection (MDX).

Each topic directory (`github/{topic}/`) retains a `site.json` manifest with metadata (name, regulation, status, category, display order).

## Getting Started

```bash
cd github/_hub
npm install
npm run dev       # http://localhost:4339
```

### Build

```bash
npm run build     # output in dist/
npm run preview   # preview the build at http://localhost:4339
```

## Project Structure

```
data-readiness/
  github/
    _hub/                   # Consolidated Astro 5 hub site
      src/
        components/         # Astro components
        content/            # Content collections (controls, advisory, services, tools, pages)
        data/               # Topic schema and data loaders
        pages/              # Astro page routes
      public/               # Static assets
      astro.config.mjs
      package.json
    {topic}/                # Per-topic directories (site.json manifests)
      site.json
  sdlc/                     # SDLC document pipeline
    docs/                   # Design documents (user reqs, PDR, plan)
    plan/                   # Per-phase execution plans
    prompts/                # Pipeline prompt templates
```

## Tech Stack

- [Astro 5](https://astro.build/) - static site generator
- [MDX](https://mdxjs.com/) - content authoring
- [Sharp](https://sharp.pixelplumbing.com/) - image processing

## License

Private repository. All rights reserved.
