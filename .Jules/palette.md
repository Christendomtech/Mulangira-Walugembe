## 2025-09-03 - Accessible Bypass Navigation and Landmark Structure
**Learning:** Fixed header navigation obscure target sections upon hash jump unless `scroll-pt-*` (e.g., `scroll-pt-20`) is set on the `html` root element. Keyboard users also require an explicit "Skip to content" link targeting `<main id="main-content" tabIndex={-1}>` to bypass repetitive top-level navigation links cleanly.
**Action:** Always pair a fixed header with `scroll-pt-*` on `html` and provide an off-screen `.skip-to-content` link that becomes visible on `:focus`.
