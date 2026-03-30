"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { cacheLastLmsPath, trackLastVisitedChapter } from "@/lib/lms-progress";

export function ChapterVisitTracker({ chapterId }: { chapterId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    void trackLastVisitedChapter(chapterId);
    if (pathname) {
      cacheLastLmsPath({ chapterId, path: pathname });
    }
  }, [chapterId, pathname]);

  return null;
}
