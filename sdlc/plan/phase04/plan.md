---
phase: 04
title: "Deployment & Final Verification"
depends_on: "Phase 03"
goal: "Hub site builds cleanly, deployment workflow is configured, all acceptance criteria pass."
source_pdr_sections: ["8", "9", "10"]
source_user_stories: ["NFR-001", "NFR-004", "NFR-005", "NFR-006"]
status: "open"
---

# Phase 04: Deployment & Final Verification

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 04.1 | Completed | 2026-05-23 07:15 PM | 2026-05-23 07:16 PM | Create `github/_hub/.github/workflows/deploy.yml` — GitHub Pages deployment: trigger on push to main, Node 20, npm ci, astro build, upload artifact, deploy pages |
| 04.2 | Completed | 2026-05-23 07:15 PM | 2026-05-23 07:16 PM | Add CSP `<meta>` tag to BaseLayout `<head>`: `default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'` (PDR §8) |
| 04.3 | Completed | 2026-05-23 07:16 PM | 2026-05-23 07:16 PM | Full build verification: `npx astro build` completes < 30s (NFR-001), produces dist/ with index.html, about/index.html, 404.html, sitemap.xml |
| 04.4 | Completed | 2026-05-23 07:16 PM | 2026-05-23 07:18 PM | Verify discovery end-to-end: add a test manifest with status: live and a URL, rebuild, confirm card links correctly; add an invalid manifest, rebuild, confirm warning logged and card skipped |
| 04.5 | Completed | 2026-05-23 07:18 PM | 2026-05-23 07:19 PM | Verify zero-edit topic addition: create a new `github/test-topic/site.json`, rebuild hub, confirm new card appears without any hub source changes (US-006) |
| 04.6 | Completed | 2026-05-23 07:19 PM | 2026-05-23 07:19 PM | Remove test artifacts (test-topic folder) and run final clean build |

## Context

### Files to Create or Modify

- `github/_hub/.github/workflows/deploy.yml` — CI/CD workflow for GitHub Pages
- `github/_hub/src/components/BaseLayout.astro` — Add CSP meta tag to `<head>` section

### Key Patterns and Imports

**deploy.yml (based on SOC 2's `c:\projects\soc2\.github\workflows\deploy.yml`):**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: github/_hub/package-lock.json

      - name: Install dependencies
        run: npm ci
        working-directory: github/_hub

      - name: Build
        run: npx astro build
        working-directory: github/_hub

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: github/_hub/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Important workflow considerations:**
- The `working-directory` is `github/_hub` because the hub is a subdirectory, not the repo root.
- `cache-dependency-path` must point to `github/_hub/package-lock.json` for npm caching to work.
- The `checkout@v4` step checks out the entire repo (including sibling `github/{topic}/` folders), so the discovery module can read their `site.json` manifests during the build step.
- `concurrency.cancel-in-progress: false` ensures in-flight deployments complete rather than being canceled by new pushes.

**CSP meta tag (PDR §8):**

Add to BaseLayout.astro's `<head>`:
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'" />
```

The `'unsafe-inline'` for `style-src` is needed because Astro's scoped component styles are injected as inline `<style>` blocks. This is a known trade-off — Astro's architecture requires it.

### Design Notes

- **The deploy workflow lives inside `github/_hub/.github/workflows/`, not at the repo root.** If this repo is eventually pushed to GitHub as a single repository, the workflow file needs to be at the repo root (`.github/workflows/`), not inside the hub subdirectory. GitHub only recognizes workflows at the repo root. Adjust the path if the deployment topology changes.
- **`npm ci` vs `npm install`:** The workflow uses `npm ci` for deterministic builds. This requires `package-lock.json` to exist. Run `npm install` locally first (Phase 00) to generate it, then commit it.
- **Build time target (NFR-001):** < 30 seconds for a static site with 3 pages and 12 manifest reads should be trivially achievable. If it's not, something is wrong with the discovery module (e.g., blocking I/O in a hot loop).
- **Sitemap verification:** After `npx astro build`, check that `dist/sitemap-index.xml` (or `dist/sitemap-0.xml`) exists and contains entries for `/` and `/about`. Astro's sitemap integration generates this automatically.
- **Test-topic cleanup (task 04.6):** The `github/test-topic/` folder created in task 04.5 must be removed after verification. It is not one of the 12 real topics and should not persist in the repo.
- **Zero-edit verification (task 04.5):** This is the key acceptance criterion — it proves the hub's auto-discovery contract works. Create a completely new folder (e.g., `github/test-topic/`) with a valid `site.json`, rebuild, and confirm the card appears without touching any file in `github/_hub/`.

**Test manifest for task 04.4 (live status):**
```json
{
  "id": "soc2",
  "name": "SOC 2 Readiness",
  "shortDescription": "Prepare for SOC 2 Type 1 or Type 2 audits with controls, evidence workflows, and tool evaluations",
  "regulation": "SOC 2",
  "status": "live",
  "url": "https://soc2.johnboen.com",
  "order": 12,
  "category": "audit-framework"
}
```
Temporarily update `github/soc2/site.json` to live status with a URL, rebuild, and verify the card renders with a green "Live" badge and is a clickable link to `https://soc2.johnboen.com`. Then revert to placeholder.

**Invalid manifest for task 04.4 (warning test):**
Create `github/test-invalid/site.json` with a missing required field:
```json
{
  "id": "test-invalid",
  "shortDescription": "Missing name field"
}
```
Rebuild and check stderr for `[discover-topics] Invalid manifest` warning. Confirm the invalid topic does not appear in the catalog. Remove `github/test-invalid/` after testing.

### Verification

- [ ] `github/_hub/.github/workflows/deploy.yml` exists with correct working-directory and cache paths
- [ ] BaseLayout.astro `<head>` contains CSP meta tag
- [ ] `npx astro build` completes in < 30 seconds
- [ ] `dist/` contains `index.html`, `about/index.html`, `404.html`
- [ ] `dist/` contains `sitemap-index.xml` or `sitemap-0.xml` with entries for `/` and `/about`
- [ ] After updating `github/soc2/site.json` to `status: "live"` with a URL: rebuild shows SOC 2 card with green "Live" badge and clickable link
- [ ] After creating `github/test-invalid/site.json` with missing fields: rebuild shows warning in console, invalid topic does not appear in catalog
- [ ] After creating `github/test-topic/site.json` with valid placeholder fields: rebuild shows new topic card without any hub source changes (US-006 acceptance criterion)
- [ ] After removing test artifacts: `npx astro build` succeeds, catalog shows exactly 12 topics
- [ ] No runtime JavaScript is shipped to the browser (verify `dist/` has no `.js` files in `_astro/` or equivalent — Astro may output a small module script for view transitions, which is acceptable if zero-JS was not used)

## Phase Summary

- **Changes:** Created `.github/workflows/deploy.yml` (GitHub Pages deployment workflow with working-directory for hub subdirectory). Added CSP `<meta>` tag to BaseLayout. Verified: build completes in ~2s (NFR-001 < 30s), produces index.html, about/index.html, 404.html, sitemap-index.xml. Verified live manifest renders green badge with clickable link. Verified invalid manifest logs warning and skips card. Verified zero-edit topic addition (US-006 acceptance criterion). Cleaned up test artifacts, final build confirmed 12 topics.
- **Commit:** `Phase 04: Deployment & Final Verification — deploy workflow, CSP, end-to-end verification`
