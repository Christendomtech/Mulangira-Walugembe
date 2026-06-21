## 2025-05-15 - Standardizing Keyboard Navigation
**Learning:** Keyboard users benefit from visible focus indicators and bypass links. Using `focus-visible` ensures these indicators only appear when navigating via keyboard, maintaining the visual design for mouse users. A skip-to-content link requires a target with `tabIndex={-1}` to receive programmatic focus correctly.
**Action:** Always implement a skip-to-content link targeting a `<main tabIndex={-1}>` element and apply global `focus-visible:ring` styles to interactive elements.
