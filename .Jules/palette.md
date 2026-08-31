# Palette's Journal - Critical Learnings Only

## 2025-08-31 - Accessible Skip Link & Semantic Main Landmark Pattern
**Learning:** In Tailwind CSS v4 monorepo setups, `@utility skip-to-content` with `@apply` allows clean off-screen positioning (`fixed left-6 -top-20 z-[100]`) that moves smoothly on focus (`focus:top-6`). Wrapping primary sections in `<main id="main-content" tabIndex={-1} className="outline-none">` while keeping `<nav>` and `<footer>` as siblings outside `<main>` ensures standard landmark navigation for keyboard and screen-reader users without interfering with fixed header layouts.
**Action:** Always verify landmark navigation structure and implement `.skip-to-content` targeting `#main-content` for single-page portfolio layouts.
