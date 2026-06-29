## 2026-06-29 - Accessibility and Semantic HTML Patterns

**Learning:** Repetitive interactive elements like "Explore" or "Request a copy" in lists provide poor context for screen reader users when navigated in isolation. Using descriptive ARIA labels that include the item's name (e.g., "Explore [Venture Title] details") significantly improves the experience. Additionally, visual separators in metadata or branding should be hidden from screen readers to prevent them from being announced as "middle dot" or similar.

**Action:** Always implement unique, descriptive `aria-label` attributes for repetitive links and use `aria-hidden="true"` for decorative characters or separators.
