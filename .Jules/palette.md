# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-20 - Keyboard Bypass & Fixed Header Scroll Offsets in Single-Page Portfolios
**Learning:** In single-page portfolio layouts with fixed navigation headers, screen reader and keyboard users lack direct bypass mechanisms unless explicit landmark structures (`<main id="main-content" tabIndex={-1}>`) and focusable skip links (`.skip-to-content`) are implemented. Additionally, hash navigation (e.g., `#work`, `#books`) can obscure section headings beneath fixed navbars unless `scroll-pt-*` offset utilities are configured at the HTML root element.
**Action:** When working on single-page landing or portfolio layouts, always pair a top-level `.skip-to-content` link and `<main>` landmark with `scroll-pt-20` on the `html` element in CSS.
