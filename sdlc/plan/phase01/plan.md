---
phase: 01
title: "Core Components"
depends_on: "Phase 00"
goal: "BaseLayout, Nav, Footer, and HeroSection components are implemented and rendering correctly on a placeholder page."
source_pdr_sections: ["4.1", "4.2", "4.3", "4.4"]
source_user_stories: ["US-009", "US-010", "NFR-002"]
status: "open"
---

# Phase 01: Core Components

## Tasks

| No | Status | Started (PST) | Completed (PST) | Description |
|----|--------|---------------|------------------|-------------|
| 01.1 | Open | | | Create `src/components/BaseLayout.astro` — html/head/body wrapper with title, description, ogImage props; imports global.css; skip-to-content link; renders Nav, main slot, Footer (PDR §4.1) |
| 01.2 | Open | | | Create `src/components/Nav.astro` — sticky nav with Home and About links, CSS-only hamburger at ≤768px, `aria-current="page"` active state, keyboard navigable (PDR §4.2) |
| 01.3 | Open | | | Create `src/components/Footer.astro` — disclaimer text, copyright with dynamic year from SITE config (PDR §4.3) |
| 01.4 | Open | | | Create `src/components/HeroSection.astro` — headline `<h1>`, subheadline `<p>`, optional CTA link, dark gradient background (PDR §4.4) |
| 01.5 | Open | | | Create placeholder `src/pages/index.astro` using BaseLayout with HeroSection to verify all components render |
| 01.6 | Open | | | Create `src/pages/404.astro` — error heading, message, home link (PDR §5.3) |
| 01.7 | Open | | | Verify: `npx astro dev` renders placeholder index and 404; nav links work; hamburger toggles at ≤768px; skip-link focuses main content |

## Context

### Files to Create or Modify

- `github/_hub/src/components/BaseLayout.astro` — Master page wrapper
- `github/_hub/src/components/Nav.astro` — Sticky navigation bar
- `github/_hub/src/components/Footer.astro` — Site footer
- `github/_hub/src/components/HeroSection.astro` — Hero banner
- `github/_hub/src/pages/index.astro` — Placeholder home page (replaced with full content in Phase 03)
- `github/_hub/src/pages/404.astro` — Error page

### Key Patterns and Imports

**BaseLayout.astro interface (PDR §4.1):**

```typescript
interface Props {
  title: string;
  description: string;
  ogImage?: string;
}
```

Structure:
```astro
---
import Nav from './Nav.astro';
import Footer from './Footer.astro';
import { SITE } from '../config';
import '../styles/global.css';

const { title, description, ogImage } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | {SITE.title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {ogImage && <meta property="og:image" content={ogImage} />}
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <Nav />
  <main id="main-content">
    <slot />
  </main>
  <Footer />
</body>
</html>
```

**Nav.astro (PDR §4.2):**

- No props. Reads `Astro.url.pathname` for active state.
- Two links: Home (`/`), About (`/about`).
- Uses `aria-current="page"` on the active link.
- CSS-only hamburger: hidden checkbox + label styled as hamburger icon. When checked, nav links become visible. At desktop widths, links are always visible and checkbox/label are hidden.
- `position: sticky; top: 0; z-index: 100;`
- Background: `var(--color-bg)` with subtle border-bottom.

**SOC 2 Nav reference pattern (at `c:\projects\soc2\src\components\Nav.astro`):**
```astro
---
import { SITE } from '../config';
const pathname = Astro.url.pathname;
---
<nav>
  <div class="nav-container">
    <a href="/" class="nav-brand">{SITE.title}</a>
    <input type="checkbox" id="nav-toggle" class="nav-toggle" />
    <label for="nav-toggle" class="nav-toggle-label" aria-label="Toggle navigation">
      <span></span>
    </label>
    <ul class="nav-links">
      <li><a href="/" aria-current={pathname === '/' ? 'page' : undefined}>Home</a></li>
      <li><a href="/about" aria-current={pathname === '/about' || pathname === '/about/' ? 'page' : undefined}>About</a></li>
    </ul>
  </div>
</nav>
```

The hub Nav is simpler than SOC 2's (2 links vs 7) but follows the same checkbox-toggle pattern.

**Footer.astro (PDR §4.3):**

```astro
---
import { SITE } from '../config';
---
<footer>
  <div class="container">
    <p class="disclaimer">Data Readiness provides informational guidance only. It does not provide legal, audit, or certification services.</p>
    <p>&copy; {new Date().getFullYear()} {SITE.author}. All rights reserved.</p>
  </div>
</footer>
```

**HeroSection.astro (PDR §4.4):**

```typescript
interface Props {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
}
```

Structure: `<section class="hero">` containing `<h1>`, `<p>`, and optional `<a class="cta-button">`. Background uses a gradient over `var(--color-bg-alt)`.

**Skip-link CSS (add to global.css or scoped in BaseLayout):**
```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 200;
  padding: 0.5rem 1rem;
  background: var(--color-accent);
  color: var(--color-bg);
  border-radius: var(--radius-sm);
  text-decoration: none;
}
.skip-link:focus {
  top: 1rem;
}
```

**Placeholder index.astro:**
```astro
---
import BaseLayout from '../components/BaseLayout.astro';
import HeroSection from '../components/HeroSection.astro';
---
<BaseLayout title="Home" description="Regulatory compliance readiness for technology companies">
  <HeroSection
    headline="Data Readiness"
    subheadline="Self-service readiness assessment for 12 data regulation frameworks"
    ctaText="Explore Regulations"
    ctaHref="#topics"
  />
  <section class="container" id="topics">
    <p>Topic catalog will appear here in Phase 02.</p>
  </section>
</BaseLayout>
```

**404.astro:**
```astro
---
import BaseLayout from '../components/BaseLayout.astro';
---
<BaseLayout title="Page Not Found" description="The requested page could not be found">
  <section class="container" style="text-align: center; padding: 4rem 0;">
    <h1>404</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/" class="cta-button">Back to Home</a>
  </section>
</BaseLayout>
```

### Design Notes

- **No JavaScript in components.** All interactivity (hamburger toggle) is CSS-only via the checkbox hack. Astro ships zero client-side JS by default for these components.
- **Active state detection** uses `Astro.url.pathname` which includes the trailing slash in some deployment modes. Check both `/about` and `/about/` to be safe.
- **The skip-link pattern** is a WCAG requirement (NFR-002). It must be the first focusable element in the DOM, visually hidden until focused.
- **`ogImage` prop** is optional on BaseLayout. Most hub pages won't have a custom OG image — the meta tag simply won't render.
- **The placeholder index.astro** will be replaced with the full topic catalog in Phase 02/03. Its purpose here is to verify the component stack renders.

### Verification

- [ ] `npx astro dev` starts on port 4339 without errors
- [ ] Home page renders with hero section (headline, subheadline, CTA button visible)
- [ ] Nav bar is sticky at top with "Data Readiness" branding and Home/About links
- [ ] Active nav link shows visual highlight when on the corresponding page
- [ ] At ≤768px viewport: nav links collapse behind hamburger; toggling hamburger reveals/hides links
- [ ] Footer renders with disclaimer text and copyright year
- [ ] Navigating to a non-existent route shows the 404 page
- [ ] Tab key moves through skip-link → nav links → page content → footer in order
- [ ] Skip-link appears on focus and jumps to `#main-content`
- [ ] `npx astro build` succeeds with zero errors

## Phase Summary

_To be filled after completion._

- **Changes:** TBD
- **Commit:** TBD
