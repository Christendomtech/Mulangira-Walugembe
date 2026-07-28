# Palette's Journal - Critical Learnings Only

This journal contains critical UX and accessibility learnings from the portfolio project for HRH Prince Edward Fredrick Walugembe.

## 2025-07-28 - Skip Link Styling in Tailwind CSS v4
**Learning:** In Tailwind CSS v4, defining state variants as separate utilities (e.g., `@utility skip-to-content:focus`) is invalid. State variants must be nested inside the main utility block using nested selectors (e.g., `&:focus`).
**Action:** When defining custom utility classes with interactive states in Tailwind CSS v4, always nest state variants using standard CSS nesting or ampersand notation inside the main utility block.
