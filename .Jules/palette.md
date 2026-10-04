## 2025-05-18 - Landmark wrappers and skip link utility setup in Tailwind v4
**Learning:** Adding a `#main-content` skip link and wrapping primary sections in a focusable `<main>` landmark element allows keyboard and screen reader users to bypass fixed header navigation seamlessly. In Tailwind CSS v4, custom utility classes like `.skip-to-content` inside `@utility` directives require `@apply` and nested `&:focus` rules.
**Action:** Always complement fixed header navigation with a skip link utility and a focusable main landmark (`tabIndex={-1}`) on top-level pages.
