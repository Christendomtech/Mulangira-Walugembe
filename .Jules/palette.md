## 2025-05-20 - Skip Links and Framer Motion Types in Monorepo Portfolio
**Learning:** In Tailwind CSS v4, utility classes under `@utility` directives must nest state variants inside the utility block, while Framer Motion transition `ease` strings require `as const` type assertions in TypeScript to avoid variant type mismatches.
**Action:** Always define state focus variants inside `@utility` blocks and apply `as const` to Framer Motion transition string parameters across portfolio pages.
