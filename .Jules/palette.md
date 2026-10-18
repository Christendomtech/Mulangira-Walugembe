## 2025-02-18 - Skip Link & Fixed Header Anchor Offset Pattern
**Learning:** When using fixed header navigation across single-page portfolio layouts, keyboard skip-links targeting `#main-content` require `scroll-padding-top` on the root `html` element so that focused target landmarks are not visually obscured behind the fixed header.
**Action:** Always complement skip-to-content links with `scroll-padding-top: 5rem` (or equivalent header height utility) on `html`.
