## 2025-08-22 - Keyboard Navigation & Skip-to-Content Pattern

**Learning:** Fixed navigation bars obscure section anchor targets unless `scroll-pt-20` (scroll-padding-top) is set on `html`, and keyboard users need a high-contrast focusable `.skip-to-content` link that bypasses header links directly to `<main id="main-content">`.

**Action:** Always include `.skip-to-content` utility in `index.css` paired with `scroll-pt-20` on `html` and wrap primary view contents in `<main id="main-content" tabIndex={-1} className="outline-none">`.
