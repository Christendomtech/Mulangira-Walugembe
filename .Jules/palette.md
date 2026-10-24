# Palette's UX Journal

## 2025-05-18 - Keyboard Navigation & Skip Link Support
**Learning:** Main content areas obscured by fixed navigation require both a semantic `<main>` landmark with `tabIndex={-1}` and a visible-on-focus skip link to allow screen readers and keyboard users to bypass sticky navigation header.
**Action:** Always include a `.skip-to-content` link at the top of top-level page templates and wrap primary content in `<main id="main-content" tabIndex={-1}>`.
