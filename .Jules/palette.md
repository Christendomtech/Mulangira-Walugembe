# Palette's UX & Accessibility Journal

## 2025-03-05 - Metadata Separators and Screen Reader Clarity
**Learning:** Separators in metadata strings (like 'Year · Genre') read aloud as raw characters (such as "middle dot" or "dot") for screen readers, which breaks natural reading flow.
**Action:** When rendering meta strings, programmatically split by the separator and map over them, wrapping visual separators (e.g., `·`) inside a span with `aria-hidden="true"` to prevent them from being read aloud.

## 2025-03-05 - Interactive Cursor Indicators vs Static Containers
**Learning:** Adding interactive class triggers like `cursor-pointer` to non-interactive containers (such as book preview cards) misleads keyboard and screen reader users into expecting clickable behavior where none exists.
**Action:** Retain standard cursor pointers exclusively on interactive semantic components (like anchors or buttons) and let wrappers remain static.
