## 2025-05-18 - Keyboard Bypass Nav & Semantic Main Landmark Integration

**Learning:** Single-page portfolio applications with fixed navigation bars obscure target content when focused via hash anchors unless `scroll-pt-20` padding is applied at the root. Additionally, screen readers need unique `aria-label` context for repetitive link texts (e.g., "Explore", "Request a copy") and a dedicated `<main id="main-content">` target for the skip link.
**Action:** When adding skip links, ensure `<main id="main-content" tabIndex={-1}>` wraps primary content, apply `scroll-pt-20` on `html`, and construct distinct `aria-label`s for generic repeated action buttons.
