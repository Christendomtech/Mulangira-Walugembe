## 2025-02-15 - Interactive Cursors on Containers
**Learning:** Applying `cursor-pointer` to non-interactive containers (like card wrappers) is confusing for users of assistive technology or keyboard navigation, as it falsely suggests the entire element is clickable when only child elements are semantic interactive triggers.
**Action:** Remove `cursor-pointer` from wrapping containers and rely purely on semantic interactive children, ensuring that pointer styles and focus rings are only active on actual interactive elements.
