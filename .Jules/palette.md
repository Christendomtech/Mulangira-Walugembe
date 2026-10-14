## 2025-05-18 - Keyboard Navigation and Landmark Structure for Fixed Header Portfolios
**Learning:** Fixed navigation headers can obscure content or capture initial tab focus, preventing screen reader and keyboard users from jumping straight to the primary page content without passing through repetitive navigation links.
**Action:** Always provide a visual skip-to-content bypass link (`.skip-to-content`) as the first interactive element and wrap the core page sections in a semantic `<main id="main-content" tabIndex={-1}>` landmark wrapper.
