## 2025-05-15 - Accessibility Bypasses & Semantic Structure
**Learning:** For single-page portfolios with complex fixed navigation, a 'Skip to Content' link is critical for keyboard efficiency. Using `tabIndex={-1}` and `outline-none` on the `#main-content` target (the `<main>` tag) allows programmatic focus without unwanted visual rings on the container itself.
**Action:** Always wrap primary content in `<main id="main-content" tabIndex={-1} className="outline-none">` and provide a visually-hidden-until-focused bypass link at the very top of the DOM.

## 2025-05-15 - Micro-UX Diff Management
**Learning:** To adhere to micro-UX line count constraints (e.g., < 50 lines) while improving page structure, it is often necessary to avoid full-file re-indentation when wrapping existing elements in new semantic tags like `<main>`.
**Action:** Use targeted search-and-replace to insert opening and closing tags without changing the indentation of the existing content block.
