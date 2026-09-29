# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-18 - Tailwind CSS v4 `@utility` State Variants & Prettier Formatting
**Learning:** In Tailwind CSS v4, utility state variants (such as `:focus`) must be nested using `&:focus` inside the main `@utility` block rather than defined as separate utility variants. Additionally, Framer Motion variant transition objects require `ease` strings to be typed `as const` to pass `tsc` typechecks cleanly.
**Action:** Always nest pseudo-class variants in `@utility` directives using `&:focus` and cast Framer Motion easing strings with `as const`.
