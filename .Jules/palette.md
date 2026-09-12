## 2025-05-18 - Portfolio Accessibility & Micro-UX Standards
**Learning:** Adding a "Skip to content" bypass link alongside semantic `<main>` wrappers and descriptive `aria-label`s on generic links ("Explore", "Request a copy") drastically improves screen reader and keyboard navigation efficiency.
**Action:** Always include skip links targeting `#main-content`, wrap main page content in `<main id="main-content" tabIndex={-1}>`, and provide unique `aria-label`s for repetitive action links.
