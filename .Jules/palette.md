## 2025-05-18 - Tailwind CSS v4 `@utility` Nested Focus Selectors & Keyboard Skip Link
**Learning:** In Tailwind CSS v4, state variants must be nested directly inside `@utility` directives using `&:focus` rather than created as separate utility classes. Fixed headers also obscure anchor navigation targets unless `scroll-pt-20` is defined on `html`.
**Action:** Nest state variants inside `@utility` blocks with `&:focus` and include `scroll-pt-20` on `html` when adding focusable skip-to-content links.
