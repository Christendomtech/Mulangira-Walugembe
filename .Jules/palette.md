# Palette's UX & Accessibility Journal

Guidelines and critical UX/accessibility learnings for the portfolio project.

## 2025-03-05 - Semantic Structure & Keyboard Bypass
**Learning:** Fixed navigation headers obscure hash targets if scroll-padding is missing, and visually busy pages without bypass options present obstacles to keyboard-only users.
**Action:** Always apply `scroll-pt-20` on the `html` element for fixed headers and include a robust, focusable skip-to-content bypass link styled with standardized utilities.

## 2025-03-05 - Dynamic Metadata Dividers & ARIA Labels
**Learning:** Middle dot separators in metadata strings are often read aloud by screen readers, causing noise, and generic links like "Explore" lack proper descriptive context.
**Action:** Programmatically split metadata strings to wrap decorative characters in `aria-hidden="true"`, and supply descriptive ARIA labels to repetitive action links following the "[Action] [Item Name]" pattern.
