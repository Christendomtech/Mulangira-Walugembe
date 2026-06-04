## 2025-05-14 - Standardized Skip-to-Content Pattern
**Learning:** Accessibility bypass links are crucial for long-scrolling portfolio pages with fixed navigation. Using a standardized utility class ensures consistency across different pages.
**Action:** Apply the `.skip-to-content` utility class to a link targeting `#main-content` at the start of the `<body>` or root container, and ensure the target has `tabIndex={-1}` and `outline-none`.

## 2025-05-14 - Contextual ARIA Labels for Repetitive Links
**Learning:** Repetitive link text like "Explore" or "Request a copy" provides poor context for screen reader users when navigated out of context.
**Action:** Use template literals to provide specific context in `aria-label` attributes (e.g., `aria-label={\`Explore \${item.title}\`}`).
