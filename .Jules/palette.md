## 2025-02-23 - Skip to content & Tailwind v4 `@utility` state nesting

**Learning:** In Tailwind CSS v4, state modifiers like `:focus` must be nested directly within the `@utility` block (e.g. `&:focus { @apply top-6; }`) rather than created as separate `@utility` variant classes. Combining fixed position offset with `@apply scroll-pt-20` on `html` ensures screen reader bypass links work cleanly over fixed headers.

**Action:** Implement `skip-to-content` using nested `&:focus` inside `@utility` and add `scroll-pt-20` to `html` whenever sticky or fixed headers are present.
