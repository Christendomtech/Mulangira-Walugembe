# Palette UX/Accessibility Journal

## 2025-03-05 - [Skip-to-Content Link & Semantic Wrapping in Tailwind v4]
**Learning:** For a clean accessibility (a11y) navigation bypass, implementing a skip-to-content mechanism requires wrapping the main page contents with a semantic `<main>` element with `tabIndex={-1}` and an ID matching the skip link's target, while keeping global navigations and footers as external siblings. In Tailwind v4, state variant definitions inside `@utility` blocks must be declared nested (e.g., using `&:focus`), as separate utility declarations are invalid.
**Action:** Always wrap main sections in a single `<main id="main-content" tabIndex={-1} className="outline-none">` element, and define focusable skip links styling using Tailwind v4 compatible nesting syntax inside `@utility`.

## 2025-03-05 - [Decorative Metadata Separators and Icon/Link Labeling]
**Learning:** Screen readers verbally announce decorative character separators (e.g., "dot" or "middot" inside "Year · Genre" strings) which disrupts the reading flow of key information. Splitting dynamic metadata strings programmatically and inserting `aria-hidden="true"` spans for separators keeps screen reader narration clean. Additionally, non-unique repetitive link texts like "Explore" or "Request a copy" must carry context-rich `aria-label` tags referencing the specific item to prevent screen reader ambiguity.
**Action:** Split dynamic meta strings programmatically using `Fragment` to wrap separators in `<span aria-hidden="true">`, and always provide custom, item-specific dynamic `aria-label` properties for standard repetitive link patterns.
