## 2025-05-18 - Keyboard Navigation & Skip Link Support in Single-Page Portfolios
**Learning:** Fixed header navigation in single-page React apps often hides focus targets unless `scroll-pt-*` (e.g. `scroll-pt-20`) is set on `html`, and repetitive generic call-to-action links ("Explore", "Request a copy") need explicit dynamic `aria-label` attributes to distinguish them for screen reader users.
**Action:** Always include a `.skip-to-content` link that targets `#main-content`, set `scroll-pt-20` on `html`, and construct descriptive `aria-label`s for repetitive links.
