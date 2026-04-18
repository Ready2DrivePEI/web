## General
- Do not run lint or build.
- Skip optional steps, text, completed and describing what you are going to do..(strict)
- No explanatory comments in output files.

# MD to Chapter/Quiz TS Conversion Prompt Template

Convert `m6chapter1.md` into `m6chapter1.ts` and `m6chapter1quiz.ts`.
Follow the exact structure used by existing chapter/quiz TS files in this project.

## Hard Rules
- Do not rewrite content.
- Do not summarize content.a
- Do not remove content.
- Preserve wording exactly.
- Preserve headings, body text, lists, tables, callouts, warnings, and table data exactly.
- Keep chapter content and quiz content separate.
- Keep `Q:` and `A:` on separate lines whenever both appear.

## Conversion Rules
1. Split lesson pages using `---` boundaries in the markdown.
- Any line that starts with `---` is a page boundary (including forms like `---pg2`).
- Each resulting page becomes a lesson with sequential ids (`..._pg1`, `..._pg2`, etc.).

2. Map markdown into chapter content blocks using the existing TS schema.
- Headings -> `heading`
- do not add any heading right after title at page start.
- Paragraphs -> `text`
- Bullets/numbered lists -> `list`
- Tables -> `table`
- Callouts/warnings/notes -> `callout` with matching variant where possible
- Image prompts -> `imagePlaceholder` where:
  - `type: "imagePlaceholder"`
  - `prompt` is the exact image prompt text
  - remove label prefix like `IMAGE:` and keep only the prompt sentence
- Do not use em dashes (—) anywhere in the output.
Replace all em dashes with commas, periods, or restructured sentences.
Ensure no special dash characters (– —) appear in final text.

3. Quiz handling
- Move all quiz questions from markdown into TARGET_QUIZ_TS only.
- Keep question and options text exactly.
- Set `correctAnswerIndex` from the markdown answer key/correct answer marker. 
- Set `sourceLessonId` to the lesson page containing the answer source.

4. File outputs
- Create/update both TS files.
- Match naming/exports/import style exactly like neighboring files.
- Do not modify unrelated files.

5. Mandatory LMS wiring (every conversion)
- After creating chapter/quiz TS files, connect them to LMS routing and navigation in the same task.
- Ensure a module definition file exists (`app/lms-course/data/modules/moduleX.ts`) and includes the new chapter in `chapters`.
- Ensure `app/lms-course/data/modules/index.ts` imports the module and includes it in `courseModules` in the correct sequence.
- Ensure the quiz route registry includes the new quiz in `app/lms-course/module/[moduleId]/chapter/[chapterId]/quizz/[quizzId]/page.tsx`.
- Ensure chapter progression works across module boundaries: finishing the last chapter quiz of Module N should navigate to the first lesson of Module N+1.
- Conversion is not complete unless module, chapter, quiz, and next-chapter navigation all resolve correctly in LMS paths.

## Fail Conditions
- Any wording edits.
- Any removed content.
- Any collapsed sections.
- Any rewritten callouts/warnings.
- Any changed table values.

## General
- Do not run lint or build.
- Skip optional steps, suggestions, and confirmations.
- No explanatory comments in output files.
