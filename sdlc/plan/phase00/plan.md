---
phase: 00
title: "Project Scaffold & Design System"
depends_on: "none"
goal: "A buildable Astro project at github/_hub/ with the shared design system CSS, site config, and public assets."
source_pdr_sections: ["1.2", "1.3", "3", "7.1"]
source_user_stories: []
status: "open"
---

# Phase 00: Project Scaffold & Design System

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 00.1 | Completed | 2026-05-23 12:00 PM | 2026-05-23 12:02 PM | Create `github/_hub/package.json` with name `data-readiness-hub`, type `module`, scripts (dev port 4339, build, preview), dependencies (astro ^5.8.0, @astrojs/sitemap ^3.7.2, sharp ^0.33.5) |
| 00.2 | Completed | 2026-05-23 12:02 PM | 2026-05-23 12:03 PM | Create `github/_hub/astro.config.mjs` — site URL, port 4339, sitemap integration |
| 00.3 | Completed | 2026-05-23 12:02 PM | 2026-05-23 12:03 PM | Create `github/_hub/tsconfig.json` — extends `astro/tsconfigs/strict` |
| 00.4 | Completed | 2026-05-23 12:02 PM | 2026-05-23 12:03 PM | Create `github/_hub/src/config.ts` — SITE constant with title, description, url, author |
| 00.5 | Completed | 2026-05-23 12:03 PM | 2026-05-23 12:05 PM | Create `github/_hub/src/styles/global.css` — copy SOC 2 design tokens, add `.badge-live` and `.badge-coming-soon` styles per PDR §7.1 |
| 00.6 | Completed | 2026-05-23 12:02 PM | 2026-05-23 12:03 PM | Create `github/_hub/public/favicon.svg` and `github/_hub/public/CNAME` |
| 00.7 | Completed | 2026-05-23 12:05 PM | 2026-05-23 12:07 PM | Run `npm install` and verify `npx astro build` succeeds (empty project, no pages yet — just confirm toolchain works) |

## Context

### Files to Create or Modify

- `github/_hub/package.json` — Project manifest with Astro dependencies and dev scripts
- `github/_hub/astro.config.mjs` — Astro framework configuration
- `github/_hub/tsconfig.json` — TypeScript configuration
- `github/_hub/src/config.ts` — Site-wide constants used by components
- `github/_hub/src/styles/global.css` — Shared design system (tokens + base styles + badge additions)
- `github/_hub/public/favicon.svg` — Site icon
- `github/_hub/public/CNAME` — Custom domain for GitHub Pages

### Key Patterns and Imports

**package.json structure (from SOC 2 reference):**

```json
{
  "name": "data-readiness-hub",
  "type": "module",
  "scripts": {
    "dev": "astro dev --port 4339",
    "build": "astro build",
    "preview": "astro preview --port 4339"
  },
  "dependencies": {
    "astro": "^5.8.0",
    "@astrojs/sitemap": "^3.7.2",
    "sharp": "^0.33.5"
  }
}
```

**astro.config.mjs:**

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://datareadiness.johnboen.com',
  integrations: [sitemap()],
  server: { port: 4339 },
});
```

**tsconfig.json:**

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

**src/config.ts:**

```typescript
export const SITE = {
  title: 'Data Readiness',
  description: 'Regulatory compliance readiness for technology companies',
  url: 'https://datareadiness.johnboen.com',
  author: 'John Boen',
};
```

**global.css design tokens (copy from SOC 2 at `c:\projects\soc2\src\styles\global.css`):**

The SOC 2 file defines the full design system. Copy it verbatim, then append these hub-specific additions:

```css
/* === Hub additions === */
.badge-live {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-coming-soon {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**CNAME content:**

```
datareadiness.johnboen.com
```

**favicon.svg:** Copy from SOC 2 at `c:\projects\soc2\public\favicon.svg`, or create a simple shield/document icon in SVG.

### Design Notes

- Port 4339 is assigned to this project in the global port registry. Do not use another port.
- The `site` value in `astro.config.mjs` must match `SITE.url` in `config.ts`. Both are used — Astro uses `site` for sitemap generation, components use `SITE` for display.
- The project at `github/_hub/` does NOT need an `src/content/` directory or content collections. The hub's data comes from sibling `site.json` files discovered at build time (Phase 02).
- Astro 5.x requires `type: "module"` in package.json for ESM imports.
- The `global.css` is the canonical design system file. When spoke sites are built later, they will copy this file. Keeping it identical across hub and spokes is a manual discipline for now — no shared npm package.

### Verification

- [ ] `github/_hub/package.json` exists with correct name, scripts, and dependencies
- [ ] `github/_hub/astro.config.mjs` exists with site URL and port 4339
- [ ] `github/_hub/tsconfig.json` exists and extends astro/tsconfigs/strict
- [ ] `github/_hub/src/config.ts` exports SITE constant
- [ ] `github/_hub/src/styles/global.css` contains design tokens including `.badge-live` and `.badge-coming-soon`
- [ ] `github/_hub/public/favicon.svg` and `github/_hub/public/CNAME` exist
- [ ] `cd github/_hub && npm install` completes without errors
- [ ] `cd github/_hub && npx astro build` exits 0 (may warn about no pages — that's OK at this stage)

## Phase Summary

- **Changes:** Created `github/_hub/` Astro project scaffold with `package.json`, `astro.config.mjs` (port 4339, sitemap), `tsconfig.json` (strict), `src/config.ts` (SITE constant), `src/styles/global.css` (SOC 2 design tokens + `.badge-live`, `.badge-coming-soon`, `.badge` styles), `public/favicon.svg`, `public/CNAME`. Installed 296 npm packages. Verified `npx astro build` succeeds (0 pages, expected).
- **Commit:** `Phase 00: Project Scaffold & Design System — Astro hub site with shared design tokens`
