# Palette's Journal - UX & Accessibility Learnings

## 2025-05-18 - Header scroll offset & skip-to-content focus positioning
**Learning:** Fixed navigation headers obscure target heading elements during anchor hash navigation or skip link focus unless scroll-padding-top is specified on the root html element.
**Action:** Always include `scroll-pt-[header-height]` on `html` and use fixed positioning with focus state overlays for skip-to-content links.
