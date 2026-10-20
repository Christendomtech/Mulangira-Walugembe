## 2025-05-18 - Keyboard Navigation and Focus Bypass Links
**Learning:** Fixed header navigation overlays content when navigating via anchor links unless scroll padding (`scroll-pt-20`) is added to the root `html` tag. Additionally, keyboard-only users need an explicit "Skip to content" link targeting `<main id="main-content" tabIndex={-1}>` positioned off-screen until focused.
**Action:** Always include a `.skip-to-content` focusable link at top of page layouts and configure `scroll-pt-20` on `html` element to support seamless keyboard navigation.
