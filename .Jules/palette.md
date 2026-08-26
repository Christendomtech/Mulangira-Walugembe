# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-08-26 - Keyboard Navigation & Skip Link Support with Fixed Headers
**Learning:** Fixed header navigation overlays content when users navigate using anchor links or bypass links, obscuring target focus unless scroll padding is defined. Decorative separators (like `·`) in metadata and titles create noise for screen reader users when not explicitly hidden.
**Action:** Always add `scroll-pt-[header-height]` (e.g. `scroll-pt-20`) to `html` when introducing fixed headers, wrap decorative separators in `<span aria-hidden="true">`, and include a accessible `.skip-to-content` link pointing to `<main id="main-content" tabIndex={-1}>`.
