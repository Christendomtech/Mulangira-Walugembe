## 2025-05-22 - [Accessibility: Skip Link & Semantic ARIA]
**Learning:** Repetitive CTA links like "Explore" or "Request a copy" lack context for screen reader users. Additionally, keyboard users benefit significantly from bypass links and a clear `<main>` landmark.
**Action:** Always implement a "Skip to content" link targeting `#main-content` (with `tabIndex={-1}`), use descriptive `aria-label` for repetitive links, and hide decorative icons with `aria-hidden="true"`.
