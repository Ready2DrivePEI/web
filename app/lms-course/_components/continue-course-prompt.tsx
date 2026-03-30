"use client";

import { Button } from "@/components/ui/button";

interface ContinueCoursePromptProps {
  open: boolean;
  showFurthestOption: boolean;
  onContinueLast: () => void;
  onContinueFurthest: () => void;
  onClose: () => void;
}

export function ContinueCoursePrompt({
  open,
  showFurthestOption,
  onContinueLast,
  onContinueFurthest,
  onClose,
}: ContinueCoursePromptProps) {
  if (!open) return null;
  const lastOptionLabel = showFurthestOption ? "Where i left off" : "Continue";

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/45 p-4">
      <div className="lms-home-card w-full max-w-md rounded-2xl border p-6 shadow-xl">
        <h2 className="text-lg font-bold">Do you want continue where you left off ?</h2>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button onClick={onContinueLast}>{lastOptionLabel}</Button>

          {showFurthestOption ? (
            <Button variant="outline" className="lms-button-outline" onClick={onContinueFurthest}>
              Furthest chapter
            </Button>
          ) : null}

          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
