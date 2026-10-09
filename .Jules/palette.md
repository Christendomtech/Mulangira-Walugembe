## 2025-05-10 - Skip Link Keyboard Navigation with Fixed Header
**Learning:** Fixed header navigation obscuring anchor focus targets requires `scroll-pt-20` on `html` and a high z-index skip-link component using Tailwind v4 `@utility` syntax (`@apply` inside main block).
**Action:** When implementing skip-to-content bypass links on pages with sticky/fixed headers, combine `<main id="main-content" tabIndex={-1}>` with `html { @apply scroll-pt-20; }` and `.skip-to-content` utility.
