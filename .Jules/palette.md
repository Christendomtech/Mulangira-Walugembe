## 2025-09-06 - Skip Links and Keyboard Landmarks in Tailwind v4
**Learning:** Tailwind CSS v4 `@utility` directives require nested state selectors (`&:focus`) and `@apply` rules for focus-visible skip links overlaying fixed headers.
**Action:** Always define `.skip-to-content` using `@utility` with `&:focus` state styling and set `scroll-pt-20` on `html` so hash targets remain visible below fixed headers.
