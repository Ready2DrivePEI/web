"use client";

import { useEffect } from "react";
import { Check, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  onReview: () => void;
  chapterTitle?: string;
}

export function QuizSuccessModal({
  isOpen,
  onClose,
  onContinue,
  onReview,
  chapterTitle = "Chapter Complete",
}: QuizSuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm animate-in fade-in duration-400"
        onClick={onClose}
      />
      <div className="relative w-full max-w-sm rounded-[28px] bg-white/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(34,197,94,0.15)] border border-white overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-500 ease-out">
        {/* Subtle top edge highlight instead of harsh strip */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
        
        <div className="flex flex-col items-center p-8 pt-10 text-center">
          {/* Icon Zone */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full animate-pulse scale-[1.75]" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-green-400 to-green-500 shadow-xl shadow-green-500/20">
              <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20 duration-[1500ms]" />
              <Check className="h-10 w-10 text-white animate-in zoom-in-50 duration-500 delay-150" strokeWidth={3} />
            </div>
          </div>

          <div className="space-y-3 mb-10 w-full px-2">
            <h2 className="text-[22px] font-semibold tracking-tight text-neutral-900">
              Nice work. You passed.
            </h2>
            <p className="text-[15px] leading-relaxed text-neutral-500">
              Your progress has been saved. Ready for the next chapter?
            </p>
          </div>

          <div className="flex w-full flex-col gap-3">
            <Button
              onClick={onContinue}
              className="group h-[52px] w-full rounded-[16px] bg-green-500 hover:bg-green-600 font-medium text-white shadow-lg shadow-green-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-[15px]"
            >
              Continue to Next Chapter
              <ArrowRight className="ml-2 h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
            </Button>
            
            <button
              onClick={onReview}
              className="flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-[14px] font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Review My Answers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
