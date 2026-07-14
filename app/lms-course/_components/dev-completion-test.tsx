"use client";

import { useState } from "react";
import { Loader2, Play, RotateCcw } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { handleQuizPassProgress, type StudentProgressSnapshot } from "@/lib/lms-progress";
import { FINAL_CHAPTER_ID } from "@/app/lms-course/data/modules/final-assessment";
import { getFirstChapterId } from "@/app/lms-course/data/modules";

interface DevCompletionTestProps {
  onProgressUpdate: (snapshot: StudentProgressSnapshot) => void;
}

export function DevCompletionTest({ onProgressUpdate }: DevCompletionTestProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const busy = isLoading || isResetting;

  const handleTestCompletion = async () => {
    if (busy || !supabase) return;
    setIsLoading(true);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData?.session?.user?.id;
      if (!userId) {
        alert("No active session found. Please sign in.");
        setIsLoading(false);
        return;
      }

      // 1. Reset sessionStorage dismissal flag
      sessionStorage.removeItem("r2d:completion-modal:dismissed");

      // 2. Step 1: Reset database progress state to allow fresh completion trigger
      const firstChapterId = getFirstChapterId();
      const { error: resetError } = await supabase
        .from("student_progress")
        .update({
          progress_percent: 0,
          completion_email_sent: false,
          furthest_chapter_id: firstChapterId,
          last_chapter_id: firstChapterId,
        })
        .eq("user_id", userId);

      if (resetError) throw resetError;

      // Clear local storage snapshot to force reload
      localStorage.removeItem("r2d:progress:snapshot");

      // 3. Step 2: Delay slightly, then trigger completion via real handleQuizPassProgress pipeline
      setTimeout(async () => {
        try {
          const freshSnapshot = await handleQuizPassProgress({
            currentChapterId: FINAL_CHAPTER_ID,
            nextChapterId: null,
          });

          if (freshSnapshot) {
            onProgressUpdate(freshSnapshot);
          } else {
            throw new Error("Failed to generate fresh snapshot from progress handler.");
          }
        } catch (err: any) {
          alert(`Completion simulation failed: ${err.message}`);
        } finally {
          setIsLoading(false);
        }
      }, 800);
    } catch (err: any) {
      alert(`Reset simulation failed: ${err.message}`);
      setIsLoading(false);
    }
  };

  const handleReset = async () => {
    if (busy || !supabase) return;
    setIsResetting(true);

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const userId = sessionData?.session?.user?.id;
      if (!userId) {
        alert("No active session found. Please sign in.");
        setIsResetting(false);
        return;
      }

      const firstChapterId = getFirstChapterId();
      const { error } = await supabase
        .from("student_progress")
        .update({
          progress_percent: 0,
          completion_email_sent: false,
          furthest_chapter_id: firstChapterId,
          last_chapter_id: firstChapterId,
        })
        .eq("user_id", userId);

      if (error) throw error;

      // Clear all cached state
      localStorage.removeItem("r2d:progress:snapshot");
      sessionStorage.removeItem("r2d:completion-modal:dismissed");

      // Reload the page to reflect reset state
      window.location.reload();
    } catch (err: any) {
      alert(`Reset failed: ${err.message}`);
      setIsResetting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        disabled={busy}
        onClick={handleTestCompletion}
        className="rounded-full bg-purple-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/50 transition-colors flex items-center gap-1 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shrink-0"
        title="Resets progress, sets furthest chapter to final assessment, and triggers POST /api/course-completion"
      >
        {isLoading ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <Play className="h-3 w-3 fill-current" />
        )}
        <span>Test Completion</span>
      </button>
      <button
        type="button"
        disabled={busy}
        onClick={handleReset}
        className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-700 hover:bg-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50 transition-colors flex items-center gap-1 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shrink-0"
        title="Resets progress to 0%, clears completion flag, and reloads the page"
      >
        {isResetting ? (
          <Loader2 className="h-3 w-3 animate-spin" />
        ) : (
          <RotateCcw className="h-3 w-3" />
        )}
        <span>Reset</span>
      </button>
    </>
  );
}
