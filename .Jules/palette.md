## 2025-03-08 - Tailwind CSS v4 @utility Pseudo-State Syntax
**Learning:** In Tailwind CSS v4, defining pseudo-class variants as separate utilities (e.g., `@utility skip-to-content:focus`) is invalid and causes build errors. State variants must be nested within the main utility rule using nested selectors (e.g., `&:focus`).
**Action:** Always nest pseudo-state rules (`&:focus`, `&:hover`) inside the main `@utility` block when configuring custom utilities in CSS.
