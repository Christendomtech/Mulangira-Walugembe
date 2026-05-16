## 2025-05-22 - Skip to Content and Semantic Structure
**Learning:** Single-page portfolios often lack a quick way for keyboard users to bypass navigation. Implementing a 'Skip to Content' link targeting a `<main>` element with `tabIndex={-1}` and `outline-none` provides a smooth, accessible experience without visual artifacts.
**Action:** Always include a 'Skip to Content' link as the first focusable element on large pages or when long navigation menus are present.

## 2025-05-22 - Descriptive Labels for Repetitive Links
**Learning:** Repeated "Explore" or "Read more" links are unhelpful for screen reader users as they lack context. Using template literals in `aria-label` (e.g., `aria-label={\`Explore \${item.title}\`}`) solves this while maintaining visual minimalism.
**Action:** Proactively identify repetitive link text in loops and add context-rich `aria-label` attributes using available data properties.
