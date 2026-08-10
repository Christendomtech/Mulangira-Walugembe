# Palette UX/Accessibility Journal

## 2025-03-09 - Keyboard Accessibility Testing in Automated Browsers
**Learning:** Programmatic `.focus()` invocations in Playwright often fail to trigger `:focus-visible` styles on bypass components like "Skip to content" links, preventing visual verification in headless screenshots. To reliably test keyboard focus styling, developers must simulate real user keyboard navigation using sequential page tab inputs (`page.keyboard.press('Tab')`).
**Action:** Always simulate physical tab key presses instead of calling `.focus()` when verifying `:focus-visible` states and styling in automated visual tests.

## 2025-03-09 - Accessible Separation of Text Metadata
**Learning:** Screen readers read decorative delimiters (like middle dots "·" or slashes) literally, which interrupts the reading flow of metadata strings (e.g., "Year · Genre"). Wrapping these characters in an `aria-hidden="true"` span programmatically via string split and map ensures clean screen reader narration while retaining correct visual designs.
**Action:** Programmatically parse all composite metadata strings using split and map arrays to inject `aria-hidden` tags around design separators.
