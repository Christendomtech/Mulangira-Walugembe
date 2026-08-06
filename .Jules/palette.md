## 2025-05-15 - Enhancing Keyboard Navigation and Screen Reader Flow in Heritage Portfolios

**Learning:** Fixed header structures and visually heavy grid containers (like book covers) often create common accessibility barriers:
1. Interactive elements must be semantically linked and support standard focus indicators, ensuring screen readers do not hit redundant or generic landmarks (such as reading "·" in logo text or "Explore" repetitively).
2. Containers with `cursor-pointer` but no interactive role confuse both screen-reader users and sighted keyboard navigators, as they falsely imply the entire card block is clickable.
3. Separators in meta strings (like `·`) must be wrapped with `aria-hidden="true"` to prevent screen readers from reading them out loud as noise.

**Action:** Always wrap dot dividers and other decorative characters in `aria-hidden="true"`, convert raw text logo blocks in footers to semantic `Link` elements, and dynamically inject detailed ARIA labels on repetitive actions (e.g., "Explore [Item] details"). Avoid placing `cursor-pointer` on card layout wrappers that contain explicit interactive elements.
