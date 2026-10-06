## 2025-05-18 - Semantic Landmarks and Repetitive Link ARIA Labels
**Learning:** Repetitive action links (such as "Explore" or "Request a copy") across repeated card grid items lack context for screen reader users. Additionally, fixed header elements require a accessible skip link targeting `<main id="main-content">` to enable direct keyboard navigation past repetitive headers.
**Action:** Always wrap primary content in `<main id="main-content">`, provide a skip-to-content link, and append contextual item titles to action link `aria-label`s (e.g., `aria-label="Request a copy of Book Title"`).
