seeelf note 
Push to git every major change
Next Step
adding driving tips and helpful stuff

screenshot good looks
nav issue 
similar to first page 2nd page 

- mobile version and few more chapter back button
- to give as example work

- side bar sticky, mobile view

- contact form working 
- cant click next till scroll bottom. 
- quizz completeion reward

# Project AI Context — lms-ready2drive

## Purpose
This file provides a concise snapshot of the project's architecture, folder structure, conventions, and an AI request template. Copy-paste this before asking an AI to modify code so the assistant has the necessary context.

---

## High-level stack
- Framework: Next.js (app router)
- Language: TypeScript
- Styling: global `globals.css` (likely Tailwind or plain CSS; check `postcss.config.mjs`)
- Backend / BaaS: Supabase (`lib/supabaseClient.ts`)

---

## Project folder structure (top-level)

```
/ (repo root)
├─ .env.local
├─ .git/
├─ .gitignore
├─ .next/
├─ ai_context.md          <-- this file
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ lms-course/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ _components/
│  │  │  ├─ lessonView.tsx
│  │  │  ├─ quizView.tsx
│  │  │  └─ sideBar.tsx
│  │  ├─ assessment/
│  │  │  ├─ final/
│  │  │  └─ sem/
│  │  ├─ data/
│  │  │  └─ modules/
│  │  │     ├─ module1.ts
│  │  │     ├─ module2.ts
│  │  │     └─ module3.ts
│  │  └─ module/
│  │     └─ [moduleId]/
│  │        └─ chapter/
│  │           └─ [chapterId]/
│  │              ├─ pagee.tsx
│  │              ├─ lesson/
│  │              │  └─ [lessonId]/page.tsx
│  │              └─ quizz/
│  │                 └─ [quizzId]/page.tsx
│  ├─ login/
│  │  └─ page.tsx
│  └─ online-course-info/
│     ├─ page.tsx
│     └─ components/
│        └─ navbar.tsx
├─ components/
│  ├─ lms-sidebar/
│  │  ├─ index.tsx
│  │  ├─ nav-item.tsx
│  │  └─ progress-section.tsx
│  └─ ui/
│     ├─ button.tsx
│     ├─ collapsible.tsx
│     ├─ progress.tsx
│     └─ scroll-area.tsx
├─ components.json
├─ eslint.config.mjs
├─ lib/
│  ├─ supabaseClient.ts
│  └─ utils.ts
├─ next-env.d.ts
├─ next.config.ts
├─ node_modules/
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public/
├─ README.md
├─ tsconfig.json
└─ ai/ (if present, tools or notebooks)
```

Notes:
- The project uses the Next `app/` router with nested layouts and dynamic route folders (e.g., `[moduleId]`).
- UI primitives are under `components/ui/` and reusable sidebar pieces are under `components/lms-sidebar/`.

---

## Conventions and guidelines
- File naming: TypeScript/TSX files use lowercase kebab or camelCase consistent with repository style: `button.tsx`, `lessonView.tsx`.
- Components: Prefer small, focused components in `components/`. Shared components go in `components/ui/`.
- Pages & routing: Keep per-route logic within the matching `app` folder. For dynamic routes (folders with `[param]`), keep an index `page.tsx` or nested `page.tsx` as shown.
- Data modules: static module data is stored under `app/lms-course/data/modules/` as `.ts` files exporting constants.
- Styling: Global styles in `app/globals.css`. If Tailwind is used, ensure `tailwind.config` presence (not shown here).
- API / auth: Use `lib/supabaseClient.ts` and centralize Supabase logic there.
- Exports: Keep public component APIs small and typed. Prefer explicit exports.

---

## How to ask the AI to change code — Copy-paste template

Copy and paste the following block when requesting code changes. Replace the bracketed placeholders.

```
Project: lms-ready2drive
Working dir: (root of repo)
Stack: Next.js (app router), TypeScript, Supabase
Important files: `app/`, `components/`, `lib/supabaseClient.ts`, `app/lms-course/data/modules/`
Current branch: main

Task: [Short summary of what you want changed]
Target files/locations: [list specific files or folders, e.g., `components/ui/button.tsx` or `app/lms-course/_components/lessonView.tsx`]
Desired behavior: [describe what should happen after the change]
Constraints:
- Keep public component props the same unless explicitly asked to change them.
- Avoid adding new runtime dependencies without approval.
- Prefer minimal, localized changes.
Acceptance criteria (when is this done):
- [Example] Clicking X triggers Y.
- [Example] No TypeScript errors and `npm run build` passes.
Tests to run (optional):
- `npm run lint` (if available)
- `npm run build`
- Manual: Navigate to the changed page in the app and verify behavior.

Extra context (optional): [add any design decisions, accessibility constraints, or user expectations]

Patch approach: Please provide a single patch with the file diffs in unified format, plus a short explanation of changes and any follow-up steps.
```

---

## Quick checklist for AI helpers
- Always show the exact file path to change.
- Prefer small incremental commits.
- Run TypeScript checks and build when possible.
- Ask clarifying questions if the requested scope is ambiguous.

---

## Contact / notes
Keep this file updated whenever the structure or conventions change. Paste it into your prompt so the assistant has the necessary local context.
