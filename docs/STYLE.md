# Styling & Design System Guide

This document maps the spacing systems, design tokens, color variables (OKLCH), and the custom `.lms-` layout rules used across the application.

---

## 1. OKLCH Theme Variables
The application uses modern **OKLCH CSS variables** defined in [app/globals.css](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/globals.css) to support themes. OKLCH provides perceptually uniform color adjustments.

Standard mapping between `:root` (light mode) and `.dark` variables:

| CSS Variable | Light Mode Value (`:root`) | Dark Mode Value (`.dark`) | UI Purpose |
|--------------|---------------------------|--------------------------|------------|
| `--background` | `oklch(1 0 0)` | `oklch(0.141 0.005 285.823)` | Base page background |
| `--foreground` | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)` | Base body text color |
| `--primary` | `oklch(0.21 0.006 285.885)` | `oklch(0.92 0.004 286.32)` | Call-to-actions & primary buttons |
| `--primary-foreground`| `oklch(0.985 0 0)` | `oklch(0.21 0.006 285.885)` | Text inside primary buttons |
| `--muted` | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Secondary backgrounds & panels |
| `--muted-foreground` | `oklch(0.552 0.016 285.938)` | `oklch(0.705 0.015 286.067)` | Inactive text & labels |
| `--border` | `oklch(0.92 0.004 286.32)` | `oklch(1 0 0 / 10%)` | Form borders & page dividers |

---

## 2. Spacing Rules & Rhythm
To maintain visual consistency, follow these vertical rhythm and width constraints:

### Grid Spacing Standards
- **Containers**: Use standard Tailwind padding and margin increments (`p-4`, `p-6`, `gap-4`, `gap-6`) for standard card layouts and grids.
- **Section Dividers**: Separate sections in page components with a vertical margin of `my-8` or `space-y-8`.

### LMS Layout Spacing & Constraints
The LMS lesson viewing layout is controlled by width constraints inside `.lms-lesson-shell`:
- **Main Shell Content**: Has a default `max-width: 64rem` (`max-w-4xl`) to optimize line length for reading.
- **Collapsed Sidebar Mode**: When the sidebar is collapsed, max-width expands to `82rem` (`max-w-7xl`) for lessons, and custom constraints are applied to media:
  - `.lms-media-block[data-lms-media-layout="quarter"]`: `width: min(100%, 34rem)`
  - `.lms-media-block[data-lms-media-layout="half"]`: `width: min(100%, 56rem)`
  - `.lms-media-block[data-lms-media-layout="threeQuarter"]`: `width: min(100%, 72rem)`
  - `.lms-media-block[data-lms-media-layout="full"]`: `width: min(100%, 82rem)`

---

## 3. Custom LMS System (`.lms-` classes)
For the course dashboard and lesson paths (`/lms-course/*` pages), you **must** use the custom `.lms-` wrapper layer defined in [app/globals.css](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/globals.css). These variables automatically adjust based on the `data-lms-theme="dark"` or `"light"` attribute on the `.lms-shell` container:

```css
/* Color overrides inside LMS */
--lms-bg: #070f1e;
--lms-surface: #0d1628;
--lms-surface-2: #141f33;
--lms-border: #24324a;
--lms-text: #e2e8f0;
--lms-text-muted: #8ea2c4;
--lms-accent: #60a5fa;
--lms-accent-2: #fbbf24;
```

### Core LMS utility classes:
- **`.lms-shell`**: Root wrapper with radial gradient. Sets the local CSS variables.
- **`.lms-sidebar`**: Background and borders specifically for the navigation sidebar.
- **`.lms-surface`**: Card backgrounds within the course panel (uses `--lms-surface-2`).
- **`.lms-chapter-item-active`**: Sets the active link background and creates a left border using `--lms-accent-2` (yellow/amber).
- **`.lms-callout`**: Base class for callout notes (info, warning, danger, success). Extends with `.lms-callout-info`, etc.
- **`.lms-quiz-option`**: Styling for selectable multiple choice options, which automatically maps options to active states:
  - `.lms-quiz-option-selected`: Adds the active blue outline.
  - `.lms-quiz-option-correct`: Green success border and dark green background.
  - `.lms-quiz-option-wrong`: Red danger border and dark red background.

---

## 4. Design Tokens & Radii
- **Radii**: 
  - Standard border radius: `--radius: 0.625rem`.
  - Mapped sub-scales: 
    - `rounded-sm` $\rightarrow$ `calc(var(--radius) - 4px)` (6px)
    - `rounded-md` $\rightarrow$ `calc(var(--radius) - 2px)` (8px)
    - `rounded-lg` $\rightarrow$ `var(--radius)` (10px)
    - `rounded-xl` $\rightarrow$ `calc(var(--radius) + 4px)` (14px)
- **Transitions & Animations**: 
  - Use `transition-all duration-200 ease-in-out` for standard hovers (buttons, sidebar items).
  - Uses `@import "tw-animate-css"` for page entry effects and modal triggers.
- **Scrollbars**: Apply the `.custom-scrollbar` class to sidebars and scroll-areas. It overrides browser defaults with a sleek, semi-transparent rounded thumb (`--lms-accent` with 25% opacity) that widens on hover.
