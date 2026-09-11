# Palette's Journal

## 2025-05-18 - Keyboard Bypass Links & Tailwind v4 Utilities
**Learning:** Skip-to-content links require specific CSS utility structuring in Tailwind CSS v4 using nested `&:focus` rules and `scroll-pt-20` on `html` so hash targets aren't obscured under fixed headers.
**Action:** Always define `.skip-to-content` inside `@utility` with nested `&:focus` selectors and ensure `<main>` is targetable via `tabIndex={-1}`.
