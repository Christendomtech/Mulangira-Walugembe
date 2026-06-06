# Palette's Journal - Critical UX & Accessibility Learnings

## 2025-05-14 - Standardized Accessibility & Keyboard Navigation Patterns
**Learning:** Foundational accessibility in this portfolio is achieved through a combination of bypass links, semantic containment, and explicit focus management. Repetitive "Explore" and "Request" links need context for screen readers, and decorative icons should be explicitly hidden.

**Action:**
1. Implement "Skip to content" links using the `.skip-to-content` utility targeting a `<main id="main-content" tabIndex={-1} className="outline-none">` wrapper.
2. Apply standardized focus styles to all interactive elements: `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none rounded-sm`.
3. Use descriptive ARIA labels for repetitive actions: `aria-label={`Explore ${item.title} details`}`.
4. Apply `aria-hidden="true"` to all decorative Lucide icons.
5. Ensure branding elements are semantic focusable `Link` components.
