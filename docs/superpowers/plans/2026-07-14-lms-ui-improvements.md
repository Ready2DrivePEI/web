# LMS UI Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve critical and high-priority UI/UX issues in the LMS, including dark mode contrast failures (white-on-white continue prompt, hardcoded text-black callout buttons), inert CTAs, sub-legible typography, non-sticky desktop sidebar scrolling, and raw prompt placeholder displays.

**Architecture:** 
1. Force root-level theme application inside the LMS shell by appending the `.dark` class to the shell container when the theme is dark.
2. Restrict the shell's height to `h-dvh overflow-hidden` (dynamic viewport height) to trigger internal scroll containment in the main panel, fixing sticky sidebar scrolling.
3. Replace raw AI generation prompts with a clean, branded image fallback card.
4. Convert static CTA buttons into dynamic interactive links using navigation utilities.

**Tech Stack:** Next.js, Tailwind CSS v4, Lucide Icons, TypeScript

## Global Constraints
- Do not introduce new runtime dependencies without explicit justification.
- Ensure all styling changes adhere to the `.lms-` utility systems mapped in `docs/STYLE.md`.
- Keep component interfaces unchanged unless strictly required.

---

### Task 1: Dark Mode Boundary & Contrast Fixes

**Files:**
- Modify: [app/lms-course/_components/lms-shell.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/lms-shell.tsx)
- Modify: [app/lms-course/_components/quizView.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/quizView.tsx)

**Interfaces:**
- Consumes: LMS Layout Shell & Quiz layout
- Produces: Mapped `.dark` class scope and correct text contrast for button variants

- [ ] **Step 1: Inject dark mode class at lms-shell boundary**

Modify line 295 in [lms-shell.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/lms-shell.tsx) to append the `dark` class conditionally:
```tsx
    <div
      className={`lms-shell flex flex-col sm:flex-row min-h-screen ${
        theme === "dark" ? "dark" : ""
      }`}
      data-lms-theme={theme}
```

- [ ] **Step 2: Remove hardcoded text colors from Go to Lesson buttons inside quiz callouts**

Modify line 155 in [quizView.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/quizView.tsx):
```tsx
                  <Button variant="outline" asChild className="lms-button-outline">
```

- [ ] **Step 3: Verify typecheck passes**

Run: `npx tsc --noEmit`
Expected: Success

- [ ] **Step 4: Commit changes**

```bash
git add app/lms-course/_components/lms-shell.tsx app/lms-course/_components/quizView.tsx
git commit -m "style: apply dark mode class scope and fix quiz button contrast"
```

---

### Task 2: Remove Raw Image Placeholders & Fix Links

**Files:**
- Modify: [app/lms-course/_components/lessonView.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/lessonView.tsx)

**Interfaces:**
- Consumes: Static content blocks
- Produces: User-facing fallback graphic card and accessible links

- [ ] **Step 1: Import ImageOff from lucide-react**

Import `ImageOff` at the top of [lessonView.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/lessonView.tsx):
```tsx
import { ImageOff } from "lucide-react";
```

- [ ] **Step 2: Replace raw prompt text with a clean placeholder visual card**

Modify lines 166-185 in [lessonView.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/lessonView.tsx):
```tsx
        if (block.type === "imagePlaceholder") {
          const layout = block.layout ?? "half";

          return (
            <figure
              key={idx}
              data-lms-media-layout={layout}
              className={`lms-image-frame lms-media-block my-6 overflow-hidden rounded-2xl border p-2 ${imageLayoutClasses[layout]}`}
            >
              <div className="flex min-h-32 flex-col items-center justify-center gap-2 rounded-xl bg-muted/10 px-5 py-6 text-center">
                <ImageOff className="h-7 w-7 text-muted-foreground/60" />
                <p className="text-sm font-semibold text-muted-foreground">
                  Visual guide coming soon
                </p>
              </div>
            </figure>
          );
        }
```

- [ ] **Step 3: Fix inline link color (#0000EE) contrast violation**

Modify lines 108-115 and 257-264 in [lessonView.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/lessonView.tsx) to replace `text-[#0000EE]` with theme accent color:
```tsx
                  <a
                    href={inlineLink.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[var(--lms-accent)] hover:text-[var(--lms-accent)] underline underline-offset-4"
                  >
```
and:
```tsx
              <a
                href={block.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[var(--lms-accent)] hover:text-[var(--lms-accent)] underline underline-offset-4"
              >
```

- [ ] **Step 4: Verify typecheck passes**

Run: `npx tsc --noEmit`
Expected: Success

- [ ] **Step 5: Commit changes**

```bash
git add app/lms-course/_components/lessonView.tsx
git commit -m "style: replace image placeholders with visual guide cards and fix link color"
```

---

### Task 3: Interactive Primary CTA Link

**Files:**
- Modify: [app/lms-course/page.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/page.tsx)

**Interfaces:**
- Consumes: Homepage start banner
- Produces: Dynamic link routing users to the first course chapter

- [ ] **Step 1: Import Link and navigation helper functions**

Add imports of `Link`, `getFirstChapterId`, and `getChapterHref` to `app/lms-course/page.tsx`:
```tsx
import Link from "next/link";
import { getFirstChapterId, getChapterHref } from "@/app/lms-course/data/modules";
```

- [ ] **Step 2: Resolve start URL dynamically and wrap the start CTA chip in a Link**

Modify the main function in [page.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/page.tsx):
```tsx
export default function LMSHome() {
  const firstChapterId = getFirstChapterId();
  const startHref = firstChapterId ? (getChapterHref(firstChapterId) ?? "/lms-course") : "/lms-course";

  return (
```
And wrap the chip around line 117:
```tsx
              <Link
                href={startHref}
                className="lms-home-cta-chip inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[var(--lms-accent)]"
              >
                <ArrowRight className="h-4 w-4" />
                Select a Module to Start
              </Link>
```

- [ ] **Step 3: Verify typecheck passes**

Run: `npx tsc --noEmit`
Expected: Success

- [ ] **Step 4: Commit changes**

```bash
git add app/lms-course/page.tsx
git commit -m "feat: link homepage start CTA dynamically to the first lesson"
```

---

### Task 4: Sidebar Readability & locked state polish

**Files:**
- Modify: [components/lms-sidebar/index.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/components/lms-sidebar/index.tsx)
- Modify: [components/lms-sidebar/nav-item.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/components/lms-sidebar/nav-item.tsx)

**Interfaces:**
- Consumes: Navigation elements
- Produces: Readable subtitles and descriptive locked state tooltips

- [ ] **Step 1: Increase logo subtitle size**

Modify line 65 in [index.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/components/lms-sidebar/index.tsx):
```tsx
                <p className="lms-accent truncate text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em]">Theory Course</p>
```

- [ ] **Step 2: Add unlock instructions and raise locked item visibility to opacity-70**

Modify lines 169-183 in [nav-item.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/components/lms-sidebar/nav-item.tsx):
```tsx
                  return (
                    <div
                      key={chapter.id}
                      className="lms-chapter-item flex items-center justify-between rounded-r-lg border-l-2 border-transparent px-2 py-1.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm opacity-70"
                      aria-label={`${chapter.title} locked. Complete previous chapter quiz to unlock.`}
                      title="Complete previous chapter quiz to unlock"
                    >
                      <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
                        <Lock className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 opacity-65" />
                        <TruncatedLabel text={chapter.title} className="lms-chapter-title text-left" />
                      </div>
                      <TruncatedLabel
                        text="locked"
                        className="text-[10px] font-bold uppercase opacity-60"
                        containerClassName="ml-1 sm:ml-3 max-w-10 sm:max-w-20 shrink-0"
                      />
                    </div>
                  );
```

- [ ] **Step 3: Verify typecheck passes**

Run: `npx tsc --noEmit`
Expected: Success

- [ ] **Step 4: Commit changes**

```bash
git add components/lms-sidebar/index.tsx components/lms-sidebar/nav-item.tsx
git commit -m "style: polish locked item labels and increase sidebar text sizes"
```

---

### Task 5: Scroll Containment & Sticky Sidebar

**Files:**
- Modify: [app/lms-course/_components/lms-shell.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/lms-shell.tsx)

**Interfaces:**
- Consumes: Shell wrapper classes
- Produces: Viewport height containment boundaries (`h-dvh overflow-hidden`)

- [ ] **Step 1: Set shell wrapper to use dvh overflow-hidden height boundaries**

Modify line 295 in [lms-shell.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/_components/lms-shell.tsx):
```tsx
    <div
      className={`lms-shell flex flex-col sm:flex-row h-dvh overflow-hidden ${
        theme === "dark" ? "dark" : ""
      }`}
      data-lms-theme={theme}
```

- [ ] **Step 2: Verify typecheck passes**

Run: `npx tsc --noEmit`
Expected: Success

- [ ] **Step 3: Commit changes**

```bash
git add app/lms-course/_components/lms-shell.tsx
git commit -m "style: constraint LMS shell height to dynamic viewport with scroll containment"
```

---

## Verification Plan

### Automated Tests
- Type checking: `npx tsc --noEmit`

### Manual Verification
- Deploy to local development server (`npm run dev`).
- Navigate to `/login` and sign in with the student testing account:
  - **Full Name / Email**: `test`
  - **Password**: `test101`
- **Visual Check (Theme Switching)**:
  - Toggle light/dark modes using the sidebar trigger.
  - Confirm the "Continue where you left off" modal is readable (no white text on white backgrounds).
  - Check outline buttons inside correct/incorrect quiz callouts.
- **Accessibility & Interaction**:
  - Focus the "START YOUR ENGINE" link using `Tab` key; verify visual outline.
  - Hover on locked chapters to check tooltip prerequisite warning.
- **Scroll Containment**:
  - View long chapters in desktop viewport; verify that the sidebar remains sticky and only the main text panel scrolls.
  - Scroll down completely; ensure no white gaps appear below the sidebar footprint.
