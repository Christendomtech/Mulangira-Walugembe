## 2025-05-15 - [Accessibility Baseline for Portfolio]
**Learning:** Standardizing accessibility features like 'Skip to content' links and semantic landmarks (e.g., `<main>`) provides a solid baseline for navigational ease in single-page portfolio sites. Using `tabIndex={-1}` and `outline-none` on the target container allows for programmatic focus without visual clutter.
**Action:** Always implement a 'Skip to content' link as the first interactive element and ensure primary content is wrapped in a `<main>` landmark with a corresponding ID.
