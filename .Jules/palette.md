## 2025-05-15 - Accessibility and Semantic Structure
**Learning:** Home.tsx lacked a skip-to-content bypass and semantic main landmark, and repetitive links (Explore/Request) were ambiguous for screen readers. Using `aria-label` with dynamic item names and wrapping visual separators in `aria-hidden="true"` significantly improves context.
**Action:** Always include a `.skip-to-content` utility, wrap core content in `<main id="main-content">`, and ensure all repetitive or icon-only links have descriptive, unique ARIA labels.
