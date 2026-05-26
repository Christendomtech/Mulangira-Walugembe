## 2025-05-15 - Accessibility Baseline for Portfolio
**Learning:** The portfolio project lacked standard accessibility landmarks and bypass links. Repetitive links like "Explore" and "Request a copy" were ambiguous for screen reader users.
**Action:** Always implement a 'Skip to Content' link targeting a `<main>` element with `tabIndex={-1}`. Use `aria-label` to provide context for repetitive link text (e.g., `aria-label={\`Explore \${venture.title}\`}`).
