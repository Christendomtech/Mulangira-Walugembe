## 2025-02-18 - [Framer Motion Ease Castings & Tailwind v4 Custom Utilities]
**Learning:** Framer Motion variants require explicit type assertions (e.g., `ease: "easeOut" as const`) under strict TypeScript configurations to align with allowed Easing union types. Additionally, in Tailwind v4, state variants must be nested using selectors (e.g., `&:focus`) within the `@utility` block rather than declared as standalone class names.
**Action:** Always cast Framer Motion easing strings with `as const` and leverage nested state selectors inside CSS `@utility` rules.

## 2025-02-18 - [Accessibility for Repetitive Navigation and Bypass Links]
**Learning:** Repetitive text link elements like 'Explore' or 'Request a copy' present navigation barriers on screen readers. Wrapping layout sections in a `<main id="main-content" tabIndex={-1} className="outline-none">` element combined with a `.skip-to-content` skip link and `scroll-pt-20` on the `html` element ensures proper keyboard navigation and bypass capabilities.
**Action:** Implement a semantic `<main>` tag, a corresponding keyboard-accessible skip link, and descriptive `aria-label` additions to repetitive CTA link elements.
