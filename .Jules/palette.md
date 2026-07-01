## 2025-05-14 - Standardizing Accessibility Patterns
**Learning:** For portfolio sites with repetitive calls to action (e.g., "Explore", "Request a copy"), generic link text fails to provide sufficient context for screen reader users. Standardizing on descriptive ARIA labels following the `[Action] [Item Name]` pattern significantly improves navigation clarity.
**Action:** Always implement unique ARIA labels for repetitive links and ensure branding elements are semantic focusable links with proper labels.

## 2025-05-14 - Handling Metadata Separators
**Learning:** Visual separators like " · " in metadata strings (e.g., 'Year · Genre') are announced by screen readers, which can disrupt the flow of information.
**Action:** Wrap metadata separators in `<span aria-hidden="true"> · </span>` to maintain visual structure while keeping the screen reader experience clean.
