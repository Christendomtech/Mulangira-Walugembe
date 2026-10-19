## 2025-05-18 - Keyboard Navigation and Accessible Context in Portfolio Layouts
**Learning:** Fixed navigation headers without a bypass link force keyboard users to tab through every nav item on every page load, while repetitive generic link labels (e.g., "Explore", "Request a copy") lack context for screen reader users.
**Action:** Always include a focusable `.skip-to-content` link targeting a `<main id="main-content" tabIndex={-1}>` element, assign descriptive `aria-label` attributes to repetitive action links, and hide decorative elements like bullet separators with `aria-hidden="true"`.
