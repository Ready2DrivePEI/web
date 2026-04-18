# AGENTS.md

## Purpose
This project should prioritize clarity, trust, usability, and maintainable implementation.
When making changes, prefer practical improvements that make the product easier to understand and easier to use.

## Project context
- Stack: Next.js App Router + TypeScript + Tailwind CSS + Supabase (auth + database).
- UI: shadcn/ui component library.
- Product shape: marketing landing + online-course info + LMS experience (driving school).
- Priority: preserve continuity across these surfaces unless the task explicitly asks for a redesign.

## General behavior
- Act like a strong senior engineer with product sense.
- Complete the task end-to-end when possible, instead of stopping at analysis.
- For simple tasks, do the work directly without writing a long plan first.
- For bigger tasks, create a short plan internally and update it as work progresses.
- Avoid unnecessary status updates or filler text.
- If something is unclear, make the most reasonable assumption based on the existing codebase and continue.
- Do not undo user changes unless explicitly asked.
- Do not make unrelated refactors.

## Core development principles
- Follow existing project patterns before introducing new ones.
- Reuse components, utilities, layouts, and styles before building new ones.
- Do not reinvent the wheel if an existing structure already solves most of the problem.
- Optimize for maintainability, readability, and predictable behavior.
- Fix root causes when possible, not just surface symptoms.
- Prefer simple solutions over clever ones unless the clever version is clearly better.
- Keep files organized and avoid bloated components.

## UI and UX standards
- UI should feel intentional, clear, and trustworthy.
- Prioritize visual hierarchy, spacing, alignment, contrast, and scannability.
- Avoid sterile layouts that feel too empty, too generic, or too template-like.
- Prefer designs that clearly communicate purpose and next actions.
- CTA text should be obvious and human, not vague or corporate.
- Sections should have clear separation and clear intent.
- Support trust with good structure, good copy, and reduced confusion.
- When improving UI, explain briefly why the new version is better from a UX perspective.
- Preserve consistency with the existing design system unless change is part of the task.

## Frontend code standards
- Prefer TypeScript.
- Prefer small reusable components over giant page files.
- Keep component responsibilities narrow.
- Avoid deeply nested JSX when a small helper component would make things clearer.
- Use meaningful names for components, props, variables, and functions.
- Prefer explicit logic over fragile magic.
- Keep state as local as possible.
- Avoid unnecessary effects.
- Avoid hacks that silently fail.
- Preserve accessibility basics like semantic elements, labels, button clarity, and keyboard usability.

## Styling rules
- Reuse existing tokens, utility classes, and design patterns before adding new ones.
- Maintain consistent spacing, sizing, and typography rhythm.
- Use color and contrast intentionally, not randomly for decoration.
- Avoid making pages look flat, washed out, or visually monotonous.
- Prefer subtle depth and structure over loud visual clutter.
- When changing layouts, think about readability first, then aesthetics.

## Copy and content rules
- Use clear, human wording.
- Avoid robotic UX writing.
- Avoid vague generic phrases like "optimize user journey" unless the UI actually shows what that means.
- Prefer copy that explains what the user gets, where the action leads, and why it matters.
- Keep wording concise, but not cold.

## Debugging rules
- Inspect the relevant code before changing things.
- Search broadly enough to understand how the feature is wired.
- Do not guess blindly if the related implementation can be found.
- When fixing bugs, verify whether the issue is layout, state, event handling, rendering, CSS stacking, or data flow before editing.
- Check whether a problem is local or caused by shared layout/components.

## File and component discipline
- Do not create new files unless needed.
- Do not duplicate logic that already exists elsewhere.
- If a component becomes too large, split it into clean subcomponents.
- Keep page files focused on composition, not heavy logic.

## Dependencies
- Prefer existing dependencies already in the project.
- Do not add new packages unless necessary.
- If adding a package, choose a widely used and actively maintained one.
- Briefly justify any new dependency.

## Commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npx tsc --noEmit`

## Definition of done
A task is done when:
- the requested change is implemented
- the code fits existing project conventions
- there are no obvious type or logic issues
- the UI is coherent with the rest of the product
- the result solves the user-facing problem, not just the code-level symptom

## Response style after completing work
When summarizing completed work:
- say what changed
- say why it changed
- mention any important tradeoffs or follow-up issues
- keep it concise and useful
