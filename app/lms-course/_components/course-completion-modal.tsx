"use client";

import { useEffect, useState } from "react";
import { CheckCircle, PartyPopper, X, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName?: string;
  completionDate?: string;
}

export function CourseCompletionModal({
  isOpen,
  onClose,
  courseName = "Ready2Drive PEI Driver's Education",
  completionDate,
}: CourseCompletionModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  const displayDate = completionDate || new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Darker backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Wrapper for Glow */}
      <div className="relative w-full max-w-lg animate-in fade-in zoom-in-90 duration-500">
        {/* Animated Glow behind the modal - Lowered dispersion and contrast */}
        <div className="absolute -inset-1 rounded-3xl bg-green-500/20 opacity-30 blur-2xl animate-pulse duration-[3000ms]" />

        {/* Modal Content */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
          className="relative overflow-hidden rounded-[1.5rem] border border-[color:var(--lms-border)] bg-[color:var(--lms-bg)] shadow-2xl"
        >
          {/* Top subtle highlight */}
          <div className="absolute inset-x-0 top-0 h-1 bg-green-500/40" />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1.5 text-[color:var(--lms-text-muted)] hover:bg-[color:var(--lms-active-bg)] hover:text-[color:var(--lms-text)] transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center px-6 pb-10 pt-12 text-center relative z-0">
            {/* Flashy Icon Header - Toned down green contrast */}
            <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/20">
              <div className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-20 duration-[2000ms]" />
              <PartyPopper className="h-10 w-10 animate-bounce" style={{ animationDuration: "2s" }} />
              <div className="absolute -bottom-2 -right-2 rounded-full bg-[color:var(--lms-bg)] p-1">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-500" />
              </div>
            </div>

            {/* Typography */}
            <h2 id="success-modal-title" className="mb-3 text-3xl font-extrabold tracking-tight text-green-700 dark:text-green-500">
              You Passed!
            </h2>
            <p className="mb-8 text-[color:var(--lms-text)] font-medium leading-relaxed">
              Congratulations! You&apos;ve successfully completed all the course requirements.
            </p>

            {/* Subtle Course Details */}
            <div className="mb-8 flex w-full flex-col items-center justify-center gap-1.5 border-y border-[color:var(--lms-border)] py-4 text-xs text-[color:var(--lms-text-muted)]">
              <div className="flex items-center gap-2">
                <span className="uppercase tracking-wider opacity-70">Course</span>
                <span className="font-medium text-[color:var(--lms-text)] opacity-90">{courseName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="uppercase tracking-wider opacity-70">Completed</span>
                <span className="font-medium text-[color:var(--lms-text)] opacity-90">{displayDate}</span>
              </div>
            </div>

            {/* Certificate Information */}
            <div className="mb-8 flex w-full items-start gap-4 rounded-2xl border border-green-500/20 bg-green-500/5 dark:bg-green-500/10 px-5 py-4 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-600 dark:text-green-400">
                <Award className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-bold text-green-700 dark:text-green-500">Certificate Delivery</p>
                <p className="mt-1 text-sm leading-relaxed text-[color:var(--lms-text)] opacity-90">
                  Your official course completion certificate will be provided directly by your Ready2Drive instructor.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex w-full flex-col gap-3 px-4">
              <Button
                onClick={onClose}
                className="group relative w-full overflow-hidden rounded-xl bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-500/10 transition-all hover:scale-[1.01] h-14 text-lg font-bold"
              >
                <span className="relative z-10">🎉 Course Complete! Well Done!</span>
                <div className="absolute inset-0 h-full w-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

