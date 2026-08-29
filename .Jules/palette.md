# Palette's Journal

## 2025-05-20 - Accessible Skip-To-Content Bypass and Specific ARIA Action Labels
**Learning:** Decorative inline separators (e.g., `·`) inside brand logos or metadata text strings get announced abruptly by screen readers. Furthermore, repetitive link texts like "Explore" or "Request a copy" lack contextual meaning when navigating by links list or screen reader landmarks.
**Action:** Always wrap decorative dot separators in `span` elements with `aria-hidden="true"`, ensure brand identity logos use standard focusable `Link` components with explicit `aria-label`, and append item titles to link ARIA labels (`aria-label="Explore [Item] details"`).
