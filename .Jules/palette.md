## 2025-05-18 - Skip Link & Accessible Semantic Layout

**Learning:** Adding a visible-on-focus skip link targeting a focused `<main>` element (`#main-content` with `tabIndex={-1}`) significantly improves keyboard and screen-reader navigation efficiency on content-dense landing pages.
**Action:** Always pair a skip-to-content link with a proper `<main id="main-content" tabIndex={-1}>` container that excludes global navigation and footers.
