## 2025-05-14 - [Accessibility & Semantic Foundations]
**Learning:** Standardizing accessibility foundations (skip links, global focus-visible styles, and semantic landmarks) significantly improves the baseline UX for keyboard and screen reader users without impacting the visual design for mouse users. Additionally, repetitive links (e.g., "Explore") must have unique, descriptive ARIA labels to be meaningful in isolation.
**Action:** Always implement a "Skip to content" link, wrap main content in a `<main>` landmark, and ensure all buttons/links have clear focus-visible indicators. Use template literals for ARIA labels in mapped components to provide specific context.

## 2025-05-14 - [Framer Motion Type Mismatches]
**Learning:** Framer Motion's 'ease' property in transition objects often fails TypeScript checks when passed a string (like "easeOut") in strict environments.
**Action:** Cast string easing values as `as const` (e.g., `ease: "easeOut" as const`) to satisfy type definitions.
