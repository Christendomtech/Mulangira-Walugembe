## 2025-02-24 - Accessibility Standards & Keyboard Bypass Links
**Learning:** Single-page landing applications with fixed headers require a bypass "Skip to content" link targeting `<main id="main-content" tabIndex={-1}>` so keyboard users can navigate directly to primary content. Repeating action labels (e.g. "Explore", "Request a copy") without unique ARIA labels create ambiguity for screen reader users.
**Action:** Always include a `.skip-to-content` link when fixed navigation is present, assign `<main>` tabIndex={-1}, and add contextual `aria-label` attributes to repetitive action links.
