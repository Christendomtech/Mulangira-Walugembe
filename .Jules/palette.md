## 2025-05-14 - Standardized Accessibility Patterns
**Learning:** For portfolio landing pages, a "Skip to Content" link targeting a semantic <main> wrapper with tabIndex={-1} is a high-impact, low-effort accessibility win. Repetitive links like "Explore" require ARIA labels for context.
**Action:** Always implement a skip-link and <main> wrapper on primary entry pages. Ensure all decorative icons are hidden with aria-hidden="true".
