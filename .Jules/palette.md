## 2025-05-18 - Tailwind v4 Custom Utilities & Focus Ring Styling
**Learning:** In Tailwind CSS v4, custom utility classes defined inside `@utility` directives must use `@apply` and nested pseudo-selectors (`&:focus`) for state variants rather than separate class definitions.
**Action:** Define single `@utility` blocks with nested `&:focus` rules and explicit focus rings (`focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`) for skip links and interactive elements.

## 2025-05-18 - Semantic Navigation & Screen Reader Separation
**Learning:** Generic call-to-action text like "Explore" or "Request a copy" repeated across multiple grid cards creates ambiguous screen reader link lists.
**Action:** Always complement generic CTA text with dynamic descriptive `aria-label`s (e.g. `aria-label={`Explore ${venture.title} details`}`), and wrap non-semantic decorative separators (like `·`) in `aria-hidden="true"`.
