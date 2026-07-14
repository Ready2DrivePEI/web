"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, Zap, X } from "lucide-react";

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
  const lastOptionLabel = showFurthestOption ? "Where I left off" : "Continue";

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/45 p-4">
      <div className="lms-modal-card relative w-full max-w-sm rounded-2xl border p-6 shadow-xl">
        {/* Top-Right Dismiss Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4.5 right-4.5 rounded-xl p-1 text-muted-foreground hover:bg-muted/10 hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-[var(--lms-accent)] outline-none cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="h-4.5 w-4.5" />
        </button>

        <h2 className="text-lg font-bold pr-8 leading-snug">Would you like to continue where you left off?</h2>

        <div className="mt-6 flex flex-col gap-2.5">
          <Button
            onClick={onContinueLast}
            className="w-full flex items-center justify-center gap-1.5 bg-[var(--lms-accent)] hover:bg-[var(--lms-accent)]/90 text-white focus-visible:ring-2 focus-visible:ring-[var(--lms-accent)] outline-none cursor-pointer h-10.5 rounded-xl font-semibold"
          >
            <Bookmark className="h-4 w-4" />
            {lastOptionLabel}
          </Button>

          {showFurthestOption ? (
            <Button
              variant="outline"
              className="w-full lms-button-outline flex items-center justify-center gap-1.5 text-foreground dark:text-foreground focus-visible:ring-2 focus-visible:ring-[var(--lms-accent)] outline-none cursor-pointer h-10.5 rounded-xl font-semibold"
              onClick={onContinueFurthest}
            >
              <Zap className="h-4 w-4" />
              Furthest chapter
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
