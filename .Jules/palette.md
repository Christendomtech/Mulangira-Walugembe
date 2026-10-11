## 2025-05-18 - Tailwind CSS v4 Utility Classes for Focus States
**Learning:** In Tailwind CSS v4, defining pseudo-class variants (such as `:focus`) on `@utility` definitions must use nested selectors (`&:focus`) within the main directive rather than suffixing the utility name.
**Action:** Always format `@utility` declarations in `index.css` using nested `&:focus` blocks with `@apply` for focus state styling.
