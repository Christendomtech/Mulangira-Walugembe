## 2025-03-25 - Accessibility Foundations and Repetitive CTAs
**Learning:** Repetitive CTA links (e.g., "Explore", "Request a copy") in loops lack context for screen reader users, and the absence of a "Skip to Content" link hinders keyboard navigation efficiency on pages with heavy navigation.
**Action:** Always implement a "Skip to Content" link targeting a `<main id="main-content" tabIndex={-1}>` wrapper and provide unique `aria-label` attributes for repetitive links using the `[Action] [Item Name]` pattern.
