# Palette's Journal - Critical UX/Accessibility Learnings

This journal documents critical UX and accessibility insights discovered during the development of this project.

## 2025-05-22 - Metadata Separator Accessibility
**Learning:** Visual separators like '·' in metadata strings (e.g., "Year · Genre") are announced by screen readers, which can be noisy and distracting.
**Action:** Wrap decorative separators in metadata strings with `<span aria-hidden="true">` to keep them visual-only.
