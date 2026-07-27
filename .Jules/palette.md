## 2025-07-27 - Tailwind CSS v4 Utility Definition and Nested State Classes
**Learning:** In Tailwind CSS v4, defining state variants as separate utilities (e.g., `@utility skip-to-content:focus`) is invalid and causes the build process to fail. State variants must be nested inside the main utility block using nested selectors (e.g., `&:focus`).
**Action:** When creating high-impact custom keyboard navigation helpers like skip links, nest state rules such as focus inside the parent `@utility` selector.
