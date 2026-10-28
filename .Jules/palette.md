# Palette's Journal

## 2025-05-18 - Accessibility Landmark and Link Clarity Patterns
**Learning:** Repetitive inline links like "Explore" or "Request a copy" across cards produce ambiguous screen reader link destinations; adding contextual dynamic ARIA labels (e.g. `aria-label="Explore Coffee details"`) significantly improves navigation clarity without altering visual design.
**Action:** Always inspect `.map()` rendered links in card lists to ensure each interactive element carries distinct, descriptive action text for assistive technologies.
