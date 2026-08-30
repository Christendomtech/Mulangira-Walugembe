## 2025-05-15 - Dynamic Link Accessibility & Skip Links in Single-Page Portfolios

**Learning:** Repeating generic link labels like "Explore" or "Request a copy" hinder screen reader navigation when presented out of context. Additionally, fixed header navigation overlays main content on focus jump unless `scroll-pt-*` is applied.

**Action:** Always provide unique, contextual `aria-label`s for repetitive action links (e.g., `aria-label="Explore [Item] details"`), implement a visible skip-to-content link, and ensure proper `<main>` landmark structure.
