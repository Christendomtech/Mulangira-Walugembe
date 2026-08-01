## 2025-08-01 - Skip link positioning in Tailwind CSS v4
**Learning:** Standard state-based utility classes (such as `@utility skip-to-content:focus`) are not supported directly in Tailwind CSS v4; instead, state selectors must be nested inside the primary utility class block using nesting syntax (e.g., `&:focus`).
**Action:** When creating utility classes that target focus, hover, or other interactive states under Tailwind CSS v4, always nest selectors inside the class block using nested selectors.

## 2025-08-01 - Dynamic metadata text accessibility
**Learning:** Hard-coded separators (like bullet points or middots `·`) in dynamic data loops (e.g., books meta lists) are read as words or clicks by screen readers, degrading the screen-reading experience.
**Action:** Programmatically split the metadata string and wrap separators in a `span` containing `aria-hidden="true"`, ensuring only the meaningful content is read.
