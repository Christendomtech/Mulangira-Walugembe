## 2025-05-14 - Skip Link and Descriptive Labels for Screen Readers
**Learning:** Fixed headers can obscure content during hash navigation, and generic links like "Explore" provide poor context for screen reader users.
**Action:** Always add `scroll-pt-[header-height]` to the `html` element when using fixed headers, and use descriptive `aria-label` attributes for repetitive action links.
