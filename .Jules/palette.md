# Palette's UX Journal

## 2025-08-11 - Semantic Navigation and Content Skip Improvements
**Learning:** Adding skip-to-content bypass links and semantic focusable links for logo/branding helps keyboard-only and screen reader users navigate headers and footers effectively without getting trapped or lost. Additionally, wrapping text delimiters (e.g. dot or bullet separators) in `aria-hidden="true"` and programmatically parsing dynamic metadata ensures screen readers don't read them as confusing symbols, and avoiding `cursor-pointer` on non-interactive containers prevents deceptive hover behaviors.
**Action:** Always implement a dedicated `<main id="main-content" tabIndex={-1} className="outline-none">` wrapper with a `.skip-to-content` skip link, map metadata with programmatic `aria-hidden` spans for delimiters, structure branding logos as focusable links with descriptive ARIA labels, and ensure only interactive elements are focusable/styled with pointer cursors.
