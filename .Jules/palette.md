## 2025-05-15 - [Accessibility] Navigation Bypass and Semantic Structure
**Learning:** Fixed headers can obscure content when using hash navigation (#about, #work). Screen reader users and keyboard users benefit from a 'Skip to content' link and clear semantic regions.
**Action:** Always add `scroll-pt-[header-height]` to the `html` element when using fixed headers. Implement a `.skip-to-content` utility and wrap main page content in a `<main id="main-content">` tag.

## 2025-05-15 - [Accessibility] Metadata Typography
**Learning:** Decorative separators in metadata strings (e.g., "Year · Genre") are read by screen readers, creating "noise".
**Action:** Programmatically split metadata strings and wrap separators in `<span aria-hidden="true">` to preserve visual design while improving the accessible name.
