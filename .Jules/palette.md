# Palette's Journal

## 2025-02-18 - Playwright Verification of Interactive Focus States
**Learning:** Simulating native keyboard navigation via `page.keyboard.press("Tab")` in Playwright is far more robust than programmatic `.focus()` calls for verifying skip-to-content links, ensuring transitions and real-world rendering trigger properly.
**Action:** Always prefer keyboard sequence simulation when testing on-focus accessibility elements like bypass links.
