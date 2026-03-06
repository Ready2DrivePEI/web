// app/lms-course/module/[moduleId]/chapter/[chapterId]/lesson/[lessonId]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Using your Shadcn UI button
import { module1 } from "@/app/lms-course/data/modules/module1";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleId: string; chapterId: string; lessonId: string }>;
}) {
  const { moduleId, chapterId, lessonId } = await params;

  // 1. Fetch data (In a real app, you'd dynamically select the module based on moduleId)
  const currentModule = module1; 
  const currentChapter = currentModule.chapters.find(c => c.id === chapterId);
  
  if (!currentChapter) return notFound();

  // 2. Find current lesson index to determine Next/Prev
  const lessonIndex = currentChapter.lessons.findIndex(l => l.id === lessonId);
  const lesson = currentChapter.lessons[lessonIndex];

  if (!lesson) return notFound();

  const prevLesson = lessonIndex > 0 ? currentChapter.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < currentChapter.lessons.length - 1 ? currentChapter.lessons[lessonIndex + 1] : null;

  // Helper to build URLs
  const basePath = `/lms-course/module/${moduleId}/chapter/${chapterId}/lesson`;

  return (
    <div className="max-w-3xl mx-auto py-10 px-6 min-h-[80vh] flex flex-col">
      {/* Header */}
      <div className="mb-8 border-b pb-4">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          {currentChapter.title}
        </h2>
        <h1 className="text-3xl font-bold">{lesson.title}</h1>
      </div>

      {/* Content Renderer */}
      <div className="flex-grow space-y-6 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
        {lesson.content.map((block, idx) => {
          if (block.type === "text") {
            return <p key={idx}>{block.value}</p>;
          }
          if (block.type === "list") {
            return (
              <ul key={idx} className="list-disc list-inside space-y-2 pl-4">
                {block.items?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          if (block.type === "image") {
            return (
              <div key={idx} className="my-6 bg-zinc-100 p-4 rounded-lg flex justify-center border">
                {/* Normally use <Image src={block.src} /> here */}
                <span className="text-zinc-500 italic">[ {block.alt} ]</span>
                
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Permanent Next/Prev UI */}
      <div className="mt-12 pt-6 border-t flex items-center justify-between">
        <div>
          {prevLesson ? (
            <Button variant="outline" asChild>
              <Link href={`${basePath}/${prevLesson.id}`}>
                &larr; Previous Page
              </Link>
            </Button>
          ) : (
            <span className="text-sm text-muted-foreground">Start of chapter</span>
          )}
        </div>

        <div>
          {nextLesson ? (
            <Button asChild>
              <Link href={`${basePath}/${nextLesson.id}`}>
                Next Page &rarr;
              </Link>
            </Button>
          ) : (
            <Button asChild color="success">
              {/* If no next lesson, link back to the module overview or to the quiz */}
              <Link href={`/lms-course/module/${moduleId}`}>
                Finish Chapter
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}