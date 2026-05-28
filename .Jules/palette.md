## 2025-05-15 - Accessibility Foundations for Portfolio
**Learning:** This project emphasizes cultural diplomacy and heritage, making high accessibility standards crucial for diverse international audiences. Standardized skip-to-content links and descriptive ARIA labels for repetitive "Explore" links are essential patterns for this UI's layout.
**Action:** Always implement a skip-to-content link targeting a `<main id="main-content" tabIndex={-1}>` wrapper on primary pages. Ensure repetitive call-to-action links include unique titles in their `aria-label`.
