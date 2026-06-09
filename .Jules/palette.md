## 2026-06-09 - Accessibility Overhaul
**Learning:** Portfolio sites with dynamic lists (like ventures or books) often have repetitive link text ("Explore", "Request a copy") which is poor for screen reader users. Global focus-visible styles in CSS provide a cleaner way to ensure keyboard accessibility than adding classes to every JSX element. Skip-to-content links are essential for single-page portfolios with large hero sections.
**Action:** Always implement descriptive ARIA labels for repetitive links using template literals and ensure a skip-to-content bypass is present.
