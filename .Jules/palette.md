## 2025-05-15 - [Accessibility Pass: Focus, Bypass, and Navigation]
**Learning:** Fixed navigation headers often obscure content targets when using anchor links (#about, #work, etc.), which is frustrating for users and breaks visual context. Keyboard users also lack a way to bypass heavy navigation menus.
**Action:** Always implement `scroll-padding-top` on the `html` element to account for fixed headers, and include a "Skip to content" bypass link as the first focusable element.
