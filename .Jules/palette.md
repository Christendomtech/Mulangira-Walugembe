## 2025-05-22 - Accessibility Enhancements in Portfolio
**Learning:** Repetitive CTA links like "Explore" or "Request a copy" lack context for screen reader users when navigating by links. Implementing "Skip to Content" links requires the target container to have tabIndex={-1} and outline-none to avoid visual focus rings on the whole page.
**Action:** Always add descriptive aria-labels to repetitive CTA links and ensure main content wrappers are programmatically focusable but visually clean.
