## 2025-06-10 - Accessibility Landmarks and Bypass Links
**Learning:** For a single-page portfolio with high-contrast, image-heavy sections, providing a 'Skip to Content' link and semantic landmarks (<main>) is critical for screen reader users and keyboard navigators to bypass repetitive headers and decorative hero content.
**Action:** Implement a .skip-to-content utility and <main id="main-content" tabIndex={-1}> wrapper as a standard starting pattern for all portfolio projects.

## 2025-06-10 - Descriptive ARIA Labels for Repetitive CTAs
**Learning:** Repeated "Explore" or "Request a copy" links across ventures and books lack context for screen reader users. Dynamic labels using item titles provide the necessary clarity.
**Action:** Always use aria-label={`[Action] ${item.title}`} for repetitive list-based interactive elements.
