## 2025-05-14 - Standardizing Bypass Navigation
**Learning:** Implementing a 'Skip to content' link targeting a `<main id="main-content" tabIndex={-1} className="outline-none">` wrapper ensures keyboard users can bypass repetitive navigation while avoiding accidental focus rings on the entire content area.
**Action:** Always include this pattern in portfolio layouts and ensure repetitive links (e.g., 'Explore', 'Request a copy') are given unique ARIA labels using the '[Action] [Item Name]' format to provide context for screen readers.
