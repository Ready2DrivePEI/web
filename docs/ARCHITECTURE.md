self note ai ignore [
Push to git every major change
Next Step
giving driving tips and helpful stuff an icon 

]

# Project Architecture — lms-ready2drive

## Purpose
This file provides a concise snapshot of the project's architecture, folder structure, conventions, and an AI request template. Copy-paste this before asking an AI to modify code so the assistant has the necessary context.

---

## High-level stack
- Framework: Next.js (app router)
- Language: TypeScript
- Styling: Tailwind CSS v4, global `globals.css` with custom `.lms-` layout styles
- Backend / BaaS: Supabase (`lib/supabase/`)

---

## Project folder structure (top-level)

```
/ (repo root)
├─ .env.local
├─ .git/
├─ .gitignore
├─ .next/
├─ database.types.ts
├─ app/
│  ├─ actions/
│  │  └─ contact.ts
│  ├─ admin/
│  │  ├─ page.tsx
│  │  └─ _components/
│  ├─ api/
│  │  ├─ admin/
│  │  │  ├─ dashboard/
│  │  │  └─ students/
│  │  ├─ auth/
│  │  │  └─ login/
│  │  └─ course-completion/
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ lms-course/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ _components/
│  │  │  ├─ lessonView.tsx
│  │  │  ├─ quizView.tsx
│  │  │  └─ lms-shell.tsx
│  │  ├─ assessment/
│  │  ├─ data/
│  │  │  └─ modules/
│  │  └─ module/
│  │     └─ [moduleId]/
│  │        └─ chapter/
│  │           └─ [chapterId]/
│  │              ├─ page.tsx
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
│  ├─ ui/
│  │  ├─ button.tsx
│  │  ├─ collapsible.tsx
│  │  ├─ dialog.tsx
│  │  ├─ progress.tsx
│  │  └─ scroll-area.tsx
│  ├─ brand-logo.tsx
│  ├─ contact-form.tsx
│  ├─ enroll-button.tsx
│  └─ enroll-modal.tsx
├─ components.json
├─ docs/                     <-- this directory
│  ├─ ARCHITECTURE.md        <-- this file
│  ├─ COMPONENTS.md
│  ├─ STYLE.md
│  ├─ CHANGELOG.md
│  └─ SUPABASE_AUTH_EXECUTION_GUIDE.md
├─ eslint.config.mjs
├─ lib/
│  ├─ supabase/
│  │  ├─ client.ts
│  │  ├─ server.ts
│  │  └─ admin.ts
│  ├─ certificate.ts
│  ├─ contact-schema.ts
│  ├─ lms-progress-server.ts
│  ├─ lms-progress.ts
│  └─ utils.ts
├─ next-env.d.ts
├─ next.config.ts
├─ node_modules/
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public/
├─ README.md
└─ tsconfig.json
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
- Styling: Global styles in `app/globals.css`. Uses Tailwind CSS v4 custom variables config.
- API / auth: Use the clients in `lib/supabase/` (`client.ts` for client components, `server.ts` for server components/actions, and `admin.ts` for service role operations).
- Exports: Keep public component APIs small and typed. Prefer explicit exports.

---

## Schema & Data Layouts

### 1. Database TypeScript Definition Warning
> [!WARNING]
> **Outdated Types**: The current [database.types.ts](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/database.types.ts) is based on the legacy, insecure table definitions. After completing the Supabase Auth migration (updating user profiles/access), you MUST regenerate these types (`supabase gen types typescript --local > database.types.ts`) to avoid TS build errors.

### 2. Static Course Modules Schema
LMS course contents are static TypeScript datasets stored under [app/lms-course/data/modules/](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/lms-course/data/modules/). Follow these interfaces exactly when modifying or adding lessons:

```typescript
export interface ContentBlock {
  type: "text" | "heading" | "list" | "link" | "image" | "video" | "callout" | "table" | "imagePlaceholder";
  value?: string;
  src?: string;
  alt?: string;
  layout?: "quarter" | "half" | "threeQuarter" | "full";
  align?: "left" | "center" | "right";
  prompt?: string;
  label?: string;
  href?: string;
  inline?: boolean;
  url?: string;
  title?: string;
  items?: string[];
  variant?: "info" | "warning" | "danger" | "success";
  headers?: string[];
  rows?: string[][];
  size?: "default" | "large";
}

export interface Lesson {
  id: string;
  title: string;
  content: ContentBlock[];
}

export interface Chapter {
  id: string;
  title: string;
  type: "lesson" | "quiz";
  slug: string;
  completed: boolean;
  lessons: Lesson[];
  unlockedBy?: string;
}

export interface Module {
  id: string;
  title: string;
  slug: string;
  icon?: any; // Lucide icon component
  chapters: Chapter[];
}
```

---

## How to ask the AI to change code — Copy-paste template

Copy and paste the following block when requesting code changes. Replace the bracketed placeholders.

```
Project: lms-ready2drive
Working dir: (root of repo)
Stack: Next.js (app router), TypeScript, Supabase
Important files: `app/`, `components/`, `lib/supabase/`, `app/lms-course/data/modules/`
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
