## 2025-05-17 - Improved Accessibility and Keyboard Navigation
**Learning:** Repetitive call-to-action links (like "Explore" or "Request a copy") in mapping components lack context for screen reader users when listed out of context. Additionally, missing focus-visible styles make keyboard navigation difficult to track.
**Action:** Always provide unique `aria-label` context for repetitive links using associated data (e.g., `${item.title}`) and ensure consistent `focus-visible` ring styles on all interactive elements.

## 2025-05-17 - Skip to Content and Semantic Content
**Learning:** Standard navigation blocks can be cumbersome for keyboard users to bypass. Semantic `<main>` tags combined with a "Skip to Content" link significantly improve the navigation experience.
**Action:** Implement a "Skip to Content" link at the very top of the DOM targeting a focusable `<main id="main-content">` wrapper with `tabIndex={-1}` and `outline-none`.
