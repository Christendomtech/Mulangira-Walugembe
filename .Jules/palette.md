## 2026-09-22 - Skip Link and Accessible Decorative Separators in Single-Page Layouts
**Learning:** In fixed-header portfolio sites, generic action links ("Explore", "Request a copy") and decorative separator characters ("·") inside dynamic strings hinder screen reader navigation without explicit ARIA attributes and skip-to-content bypass points.
**Action:** Always provide a `.skip-to-content` focus link paired with `scroll-pt-20` on `html`, wrap decorative separators with `<span aria-hidden="true">`, and add descriptive dynamic `aria-label`s to repeated action links.
