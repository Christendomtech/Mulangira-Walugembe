# Palette's Journal

## 2025-05-18 - Keyboard Navigation & Screen Reader Experience Enhancements
**Learning:** Fixed header layouts in single-page portfolio applications obscure focused content and lack accessible bypass mechanisms for keyboard users unless a skip-to-content link targeting `<main tabIndex={-1}>` is explicitly provided.
**Action:** Always include a skip-to-content utility and wrap primary content in `<main id="main-content" tabIndex={-1}>` when building or enhancing page layouts.
