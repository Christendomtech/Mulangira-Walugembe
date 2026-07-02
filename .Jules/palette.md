## 2025-05-14 - Standardized Accessibility Patterns
**Learning:** Home.tsx serves as a reference implementation for accessibility standards, featuring a 'Skip to content' bypass link, a <main id="main-content" tabIndex={-1} className="outline-none"> wrapper, and decorative icons or characters (like branding dots) with aria-hidden="true".
**Action:** Always implement these landmarks and bypass links in new pages. Use focus-visible:ring-2 for consistent keyboard navigation markers.
