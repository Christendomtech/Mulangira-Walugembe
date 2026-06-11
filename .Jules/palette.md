## 2026-06-11 - Standardizing Accessibility Bypass and Focus States
**Learning:** For portfolios using Tailwind v4 and Framer Motion, implementing a 'Skip to Content' link combined with a `tabIndex={-1}` main container provides a robust keyboard navigation bypass. Using `focus-visible` ensures accessibility markers don't interfere with the premium visual aesthetic for pointer users.
**Action:** Apply the `.skip-to-content` utility and global `@layer base` focus-visible rings as a default starting point for UX enhancements in this design system.
