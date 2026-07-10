## 2025-05-15 - [Metadata Separator Accessibility]
**Learning:** Decorative separators in metadata strings (e.g., "Year · Genre") can be confusing when announced by screen readers.
**Action:** Wrap separators in an `aria-hidden="true"` span or programmatically inject them to ensure they are ignored by assistive technologies while remaining visually present.

## 2025-05-15 - [Fixed Header Anchor Obscuration]
**Learning:** Fixed navigation headers often obscure the top portion of the target section when using hash/anchor navigation.
**Action:** Apply `scroll-padding-top` (e.g., Tailwind's `scroll-pt-20`) to the `html` or `body` element to ensure enough clearance for the fixed header when navigating to page sections.
