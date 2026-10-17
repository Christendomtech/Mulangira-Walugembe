## 2025-05-18 - Tailwind CSS v4 Utility State Selectors
**Learning:** In Tailwind CSS v4, defining state variants as separate utilities (e.g. `@utility skip-to-content:focus`) is invalid and causes build errors. State variants must be nested inside the main `@utility` block using nested selectors (e.g., `&:focus`).
**Action:** When adding custom utility classes in Tailwind CSS v4 `index.css`, nest pseudo-class rules like `&:focus` inside the `@utility` block using `@apply`.
