# Palette's Journal - Critical UX/Accessibility Learnings

This journal records critical, app-specific UX and accessibility insights discovered during development.

Format:
## YYYY-MM-DD - [Title]
**Learning:** [UX/a11y insight]
**Action:** [How to apply next time]

---

## 2025-03-03 - [Skip-to-Content & Scroll Padding Alignment]
**Learning:** Fixed header/nav components can obscure target section content when using hash navigation (e.g. #main-content) or skip links. Standard scroll behaviors jump precisely to the element top, hiding content underneath the fixed navbar overlay. In addition, state-based utility variants in Tailwind CSS v4 must be nested directly within the main utility declaration using nested selectors rather than declared as standalone focus utilities.
**Action:** Always include a `scroll-pt-X` class (such as `scroll-pt-20` for fixed headers around 5rem high) on the `html` element or root layout container when fixed headers are present. For custom focus utilities (such as a skip-to-content bypass link), nest the state using the `&:focus` selector inside the `@utility` directive.
