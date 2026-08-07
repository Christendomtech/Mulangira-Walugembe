# Palette's Journal - Critical Learnings

This journal documents critical UX and accessibility learnings from this repository.

## 2025-08-07 - Skip Link Utility & Custom Focus States in Tailwind CSS v4
**Learning:** In Tailwind CSS v4, defining state variants as separate utilities (e.g., `@utility skip-to-content:focus`) is invalid and fails compilation. Instead, state variants must be nested inside the main utility block using nested selectors (e.g., `&:focus`).
**Action:** Wrap focus states nested inside the main utility block with standard CSS nesting (`&:focus`) and use `@apply` to keep the definition highly readable.

## 2025-08-07 - Semantic Focusable Branding & Descriptive Repetitive Links
**Learning:** Repetitive non-descriptive link labels like "Explore" or "Request a copy" fail screen reader experience checks. Standardizing descriptive ARIA labels using the dynamic pattern `Explore [Venture Title] details` and `Request a copy of [Book Title]` dramatically improves UX and passes automated accessibility checks. Non-interactive elements should never use the `cursor-pointer` class.
**Action:** Always verify branding links are semantic focusable `Link` components in both header and footer, hide decorative characters like middle dots using `aria-hidden="true"`, and remove `cursor-pointer` from non-interactive containers.
