# Palette UX & Accessibility Journal

## 2025-03-09 - Tailwind CSS v4 Utility State Nesting
**Learning:** In Tailwind CSS v4, defining state variants as separate utilities (e.g., `@utility skip-to-content:focus`) is invalid. State variants must be nested inside the main utility block using nested selectors (such as `&:focus`).
**Action:** Always nest pseudo-classes and state transitions inside the main `@utility` block with `&` when using Tailwind CSS v4.

## 2025-03-09 - Programmatic Metadata Separator Hiding
**Learning:** Separators in metadata strings (e.g., `'Year · Genre'`) should be wrapped in an `aria-hidden="true"` span so that screen readers do not read the separator aloud as a word. When mapping over dynamic items, splitting the string by the separator and mapping with `Fragment` allows programmatically inserting `aria-hidden` separators.
**Action:** Use `.split(" · ")` and a React `.map()` with `Fragment` to cleanly insert `aria-hidden` separator spans around visual divider symbols.

## 2025-03-09 - Framer Motion Transition Ease Type Casting
**Learning:** Transition properties (like `ease: "easeOut"`) can fail strict TypeScript Variants checks in Framer Motion because the base `Variants` type requires specific easing enum types rather than broad string types.
**Action:** Always cast named easing functions with `as const` (e.g., `ease: "easeOut" as const`) to prevent compilation errors.
