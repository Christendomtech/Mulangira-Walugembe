## 2025-05-18 - Tailwind CSS v4 Utility & Focus-Visible States
**Learning:** In Tailwind CSS v4, defining state variants within custom utilities (like `.skip-to-content`) requires nested selectors using `&:focus` inside the `@utility` directive rather than separate class definitions.
**Action:** When adding custom utility classes in `index.css`, nest focus and hover state modifiers inside the `@utility` definition.
