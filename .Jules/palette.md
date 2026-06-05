## 2025-05-15 - Contextual ARIA Labels for Repetitive Links
**Learning:** Repetitive links like "Explore" or "Request a copy" in grid layouts are ambiguous for screen reader users. Providing unique `aria-label`s by incorporating the item title (e.g., `aria-label={Explore ${venture.title}}`) significantly improves navigation clarity.
**Action:** Always check for repeated CTA text in loops and enhance with descriptive ARIA labels.

## 2025-05-15 - Skip to Content Implementation
**Learning:** A "Skip to Content" link is a baseline accessibility requirement for sites with sticky or complex navigation. Using a standardized utility class and targeting a `<main id="main-content" tabIndex={-1}>` element ensures consistent behavior.
**Action:** Implement "Skip to Content" as the first focusable element in all primary page layouts.
