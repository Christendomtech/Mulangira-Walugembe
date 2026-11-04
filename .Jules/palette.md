## 2025-05-18 - Centered Skip Link & Fixed Header Stacking
**Learning:** Fixed navigation bars set to `z-50` will visually obscure or clash with standard skip links unless the skip link is given a higher stacking context (`z-50` vs navbar `z-40`) and centered horizontally (`left-1/2 -translate-x-1/2`) to prevent collision with top-left brand wordmarks.
**Action:** When implementing skip links with fixed headers, set the skip link to `z-50` centered horizontally, the navbar to `z-40`, and ensure `scroll-padding-top` is configured on the `html` root for proper anchor positioning.
