## 2025-05-15 - Standardizing Core Accessibility Patterns

**Learning:** Enhancing a portfolio for cultural diplomacy and heritage (like Prince Edward Walugembe's) requires balancing high-end aesthetics with robust accessibility. Key patterns discovered include:
1. **Bypass Links:** A "Skip to content" link must target a `<main id="main-content" tabIndex={-1}>` element to correctly move focus for screen readers and keyboard users.
2. **Metadata Granularity:** Visual separators in metadata (e.g., "Year · Genre") should be wrapped in `aria-hidden="true"` to prevent them from being announced as "dot" or "middle dot" by screen readers. For dynamic data, this requires a `.split().map()` approach in JSX.
3. **Interactive Semantics:** Container elements should not have `cursor-pointer` if they aren't the primary interactive element; interaction should be handled by semantic links/buttons with descriptive `aria-label` attributes (e.g., "Explore [Project Name]").
4. **Branding Continuity:** The logo link in both header and footer should be focusable and use a standardized `aria-label` (e.g., "[Name] - Home").

**Action:** Always wrap the core layout in `<main id="main-content" tabIndex={-1}>`, implement the standard `.skip-to-content` utility class, and use descriptive ARIA labels for repetitive "Explore" or "View" links.
