## 2025-05-20 - Skip Link & Semantic Landmark Navigation Pattern
**Learning:** Fixed header navigation without a skip link prevents efficient keyboard navigation to main content. Using `@utility skip-to-content` in Tailwind CSS v4 with `:focus` styles cleanly overlays the header on focus, and wrapping page body content in `<main id="main-content" tabIndex={-1}>` enables seamless screen reader landmark navigation.
**Action:** Always pair fixed/sticky headers with a skip-to-content link and wrap primary page content inside `<main id="main-content" tabIndex={-1}>`.
