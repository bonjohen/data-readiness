---
phase: "24"
title: "Cleanup & Verification"
depends_on: "Phase 23"
goal: "Remove redundant scaffolding from 12 site directories (keep only site.json), verify full build produces 111 pages, all internal links work, and the hub is self-contained with no external URL references."
status: "open"
---

# Phase 24: Cleanup & Verification

## Overview

After consolidation, the 12 regulation site directories contain redundant scaffolding (package.json, astro.config.mjs, components, pages, styles, node_modules). The content has been moved into the hub. This phase removes the scaffolding, keeping only `site.json` (required by `discover-topics.ts`) in each directory, then runs full verification.

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 24.1 | Open | | | Remove scaffolding from all 12 site directories — delete `src/`, `public/`, `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.github/`, `node_modules/`, `dist/` from each `github/{id}/`. Keep only `site.json`. |
| 24.2 | Open | | | Remove `johnboen.com` references — grep for any remaining external URL references in the hub and remove/replace them. Check `astro.config.mjs` site field (keep as-is or remove if not needed for local dev). |
| 24.3 | Open | | | Full build verification: `npx astro build` in `github/_hub/` — confirm 111 pages (9 per topic x 12 + 3 hub), zero errors, < 30s build time. |
| 24.4 | Open | | | Link verification: in dev mode, navigate each topic's 9 pages and confirm all internal links resolve correctly (no broken links to external domains, no 404s within the site). Spot-check at least 3 topics. |
| 24.5 | Open | | | Update `CLAUDE.md` port registry — remove ports 4341-4351 (individual site ports no longer needed). The hub runs on port 4339. |
| 24.6 | Open | | | Update hub deploy workflow at `github/_hub/.github/workflows/deploy.yml` if needed — single deployment for the consolidated site. Remove deploy workflows from the 12 site directories (already deleted in 24.1). |

<details>
<summary>Phase 24 Context</summary>

**What stays in each regulation directory after cleanup:**
```
github/soc2/
└── site.json       ← required by discover-topics.ts

github/gdpr/
└── site.json

... (same for all 12)
```

**What gets deleted from each:**
- `src/` (content moved to hub, pages/components/styles redundant)
- `public/` (favicon, CNAME — hub has its own)
- `package.json`, `package-lock.json`, `tsconfig.json`, `astro.config.mjs`
- `node_modules/`, `dist/`
- `.github/workflows/deploy.yml`

**johnboen.com references to check:**
- `github/_hub/astro.config.mjs` — `site: 'https://datareadiness.johnboen.com'` (may keep for sitemap generation or remove)
- Any remaining `site.json` files with `url` field (should have been removed in Phase 21)
- Any MDX content with hardcoded external links

**Expected final build output:**
```
github/_hub/dist/
├── index.html                          (hub home)
├── about/index.html                    (hub about)
├── 404.html                            (hub 404)
├── soc2/
│   ├── index.html                      (topic home)
│   ├── what-is-soc2/index.html         (what-is page)
│   ├── readiness-process/index.html
│   ├── controls-evidence/index.html
│   ├── ai-data/index.html
│   ├── services/index.html
│   ├── tools/index.html
│   ├── about/index.html
│   └── 404.html
├── gdpr/
│   ├── index.html
│   ├── what-is-gdpr/index.html
│   └── ... (7 more)
└── {10 more topic directories, same structure}
```

Total: 3 hub pages + (9 x 12 topics) = 111 pages

</details>
