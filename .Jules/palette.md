## 2025-05-15 - Enhancing Context for Repetitive Links
**Learning:** Screen reader users often navigate via link lists. Generic link text like "Explore" or "Read more" becomes ambiguous when multiple instances exist on a page. Providing descriptive ARIA labels improves navigation clarity without altering the visual design.
**Action:** Always add descriptive `aria-label` attributes to repetitive call-to-action links (e.g., `aria-label={`Explore ${item.title}`}`) to provide necessary context for assistive technology.

## 2025-05-15 - Standardized Skip-to-Content Implementation
**Learning:** A "Skip to Content" link is a vital keyboard accessibility feature. For it to work effectively across all browsers, the target container (e.g., `<main id="main-content">`) should have `tabIndex={-1}` and `outline-none` to receive programmatic focus without an unwanted visual ring.
**Action:** Implement bypass links targeting a `<main>` element with `id="main-content"`, `tabIndex={-1}`, and `outline-none`. Use a consistent utility class for the hidden-until-focused link.
