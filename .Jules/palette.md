## 2025-05-15 - [Accessibility Infrastructure]
**Learning:** Fixed navigation headers often obscure content targets during anchor navigation. Implementing `scroll-pt-20` (scroll-padding-top) on the `html` element ensures that section headings remain visible after skip-link or nav-link clicks. Additionally, skip-to-content links must be explicitly styled for high visibility on focus.
**Action:** Always pair fixed headers with `scroll-padding-top` and ensure a standardized `.skip-to-content` utility is present in the design system.
