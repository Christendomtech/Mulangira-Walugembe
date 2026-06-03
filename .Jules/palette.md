## 2025-05-22 - Accessibility Foundations for Portfolio
**Learning:** For single-page portfolios with complex navigation, "Skip to Content" links and explicit `main` landmarks are critical for keyboard and screen reader accessibility. Consistent `focus-visible` ring styles ensure navigational clarity without cluttering the mouse-driven experience.
**Action:** Always implement the `.skip-to-content` utility, wrap primary content in `<main id="main-content" tabIndex={-1}>`, and apply `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2` to all interactive elements.
