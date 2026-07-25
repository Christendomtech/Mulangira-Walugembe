# Palette Journal

## 2025-03-05 - [Initial Setup]
**Learning:** Initializing the UX/Accessibility guidelines journal.
**Action:** Follow the custom formatting to document micro-UX improvements.

## 2025-03-05 - [Enhancing Single-Page App Keyboard Navigation and Focus Flow]
**Learning:** Single-page app layouts require explicit skip-to-content bypass links to facilitate efficient keyboard navigation over dense headers. Additionally, using standard cursor styling on non-interactive components (like placeholder book covers) confuses users into expecting interaction; interactive anchors inside must be distinct. Custom string formatting (like dynamic separators) must be programmatically split and wrapped with aria-hidden tags to prevent screen-readers from reading aloud meaningless characters.
**Action:** Always wrap key page sections in a `<main id="main-content" tabIndex={-1}>` wrapper with a corresponding hidden skip-link focused with clear outline-ring styling. Map metadata arrays to inject aria-hidden dividers. Ensure interactive styling remains isolated to truly interactive elements.
