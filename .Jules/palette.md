# Palette's Journal - Critical Learnings

## 2025-02-17 - Skip Link and Focus Management in Portfolio Layouts
**Learning:** Skip-to-content bypass links must target a `<main id="main-content" tabIndex={-1}>` wrapper outside the global `<nav>` and `<footer>` elements, with `scroll-pt-20` on `html` to prevent fixed header overlap on focus.
**Action:** Always wrap main page content in a focusable `<main>` container and apply proper scroll offsets for fixed navigation elements.
