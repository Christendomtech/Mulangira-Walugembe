## 2025-05-15 - Standardizing Accessibility Foundations
**Learning:** Portfolio sites often lack basic accessibility landmarks like skip-to-content links and main landmark tags, which significantly hinders keyboard navigation. Standardizing these at the start of a project or during micro-UX audits ensures a baseline level of inclusivity.
**Action:** Always verify the presence of a `<main>` landmark and a skip-to-content utility when auditing a new project.

## 2025-05-15 - Unique ARIA Labels for Repeated CTAs
**Learning:** Generic "Explore" or "Read More" links in mapped collections create ambiguity for screen reader users. Injecting item-specific context into `aria-label` provides necessary clarity.
**Action:** When mapping over items with repetitive CTAs, always use a template literal to provide context (e.g., `aria-label={\`Explore \${item.name} details\`}`).
