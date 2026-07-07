## 2025-05-15 - Improving Portfolio Accessibility
**Learning:** Repetitive call-to-action links (e.g., "Explore", "Request a copy") without unique context create a poor experience for screen reader users who navigate by links. Providing dynamic ARIA labels based on the item title (e.g., "Explore [Venture] details") significantly improves clarity and navigation speed. Additionally, ensuring fixed headers have matching `scroll-padding-top` on the HTML element is critical for maintaining visual context during anchor navigation.

**Action:** Always implement unique, descriptive ARIA labels for repetitive interactive elements and ensure global focus-visible styles are consistently applied to all semantic interactive tags (a, button) via the base layer of the CSS theme.
