# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-18 - Semantic Link Navigation & ARIA Enhancements in Portfolio
**Learning:** Decorative elements in brand titles (e.g., middle dots) and repetitive link labels ("Explore", "Request a copy") reduce screen reader clarity. Navigational brand logos in headers and footers should be implemented as semantic `Link` elements with explicit home ARIA labels.
**Action:** Always wrap middle dots/decorative separators with `aria-hidden="true"`, provide explicit `aria-label`s on brand links ("Prince Edward Walugembe - Home"), and use contextual `aria-label`s for generic CTA links (e.g., "Explore Coffee details").
