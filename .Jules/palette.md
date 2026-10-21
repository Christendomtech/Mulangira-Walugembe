## 2025-05-18 - Skip to content bypass link and interactive ARIA labels

**Learning:** Fixed header navigation blocks keyboard users from quickly reaching main page content, and repetitive generic link labels ("Explore", "Request a copy") lack context for screen readers.
**Action:** Always include a `.skip-to-content` link targeting `<main id="main-content" tabIndex={-1}>`, set `scroll-pt-20` on `html` for smooth header offset, and provide descriptive `aria-label` attributes for context-dependent links.
