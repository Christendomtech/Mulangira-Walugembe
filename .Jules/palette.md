## 2025-05-15 - [Scroll Padding and Anchor Navigation]
**Learning:** Fixed navigation headers often obscure the target section when using anchor/fragment navigation (e.g., #about), creating a poor user experience.
**Action:** Always apply `scroll-padding-top` (matching the header height, e.g., `5rem`) to the `html` element in CSS to ensure section headings are visible after navigation.
