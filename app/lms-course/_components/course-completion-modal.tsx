"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Download, Copy, PartyPopper, X, Loader2 } from "lucide-react";
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
  const [isCopied, setIsCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const [exists, setExists] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requestId, setRequestId] = useState(0);

  const currentRequestIdRef = useRef(0);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      abortControllerRef.current?.abort();
      setLoading(false);
    }
    return () => {
      document.body.style.overflow = "unset";
      abortControllerRef.current?.abort();
    };
  }, [isOpen]);

  const checkCertificateStatus = async () => {
    abortControllerRef.current?.abort();

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const nextRequestId = currentRequestIdRef.current + 1;
    currentRequestIdRef.current = nextRequestId;
    setRequestId(nextRequestId);

    setLoading(true);
    setError(null);
    setIsCopied(false);

    try {
      const response = await fetch("/api/certificate", {
        method: "GET",
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data: { exists?: boolean; url?: string } = await response.json();

      if (controller.signal.aborted || currentRequestIdRef.current !== nextRequestId || !isOpen) {
        return;
      }

      if (data.exists === true && typeof data.url === "string" && data.url.length > 0) {
        setExists(true);
        setCertificateUrl(data.url);
        setLoading(false);
        return;
      }

      if (data.exists === false) {
        setExists(false);
        setCertificateUrl(null);
        setLoading(false);
        return;
      }

      throw new Error("Invalid response");
    } catch {
      if (controller.signal.aborted || currentRequestIdRef.current !== nextRequestId || !isOpen) {
        return;
      }
      setError("Failed to fetch certificate status");
      setExists(false);
      setCertificateUrl(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    checkCertificateStatus();
    // Intentionally only when opening state changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  const handleCopyLink = async () => {
    if (!certificateUrl || loading) return;

    try {
      await navigator.clipboard.writeText(certificateUrl);
      setIsCopied(true);
      setError(null);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setError("Failed to copy certificate link");
    }
  };

  const handleDownload = () => {
    if (!certificateUrl || loading) return;

    const anchor = document.createElement("a");
    anchor.href = certificateUrl;
    anchor.download = "certificate.pdf";
    anchor.rel = "noopener noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

  const handleGetCertificate = () => {
    if (!certificateUrl || loading) return;
    window.open(certificateUrl, "_blank", "noopener,noreferrer");
  };

  const handleRetry = () => {
    if (loading) return;
    setError(null);
    setCertificateUrl(null);
    setExists(false);
    checkCertificateStatus();
  };

  const displayDate = completionDate || new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const hasCertificate = exists && !!certificateUrl;
  const disableMain = loading || !hasCertificate;
  const disableSecondary = loading || !hasCertificate;

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
            disabled={loading}
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
              Congratulations! You've successfully completed all the course requirements.
            </p>

            {/* Subtle Course Details */}
            <div className="mb-10 flex w-full flex-col items-center justify-center gap-1.5 border-y border-[color:var(--lms-border)] py-4 text-xs text-[color:var(--lms-text-muted)]">
              <div className="flex items-center gap-2">
                <span className="uppercase tracking-wider opacity-70">Course</span>
                <span className="font-medium text-[color:var(--lms-text)] opacity-90">{courseName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="uppercase tracking-wider opacity-70">Completed</span>
                <span className="font-medium text-[color:var(--lms-text)] opacity-90">{displayDate}</span>
              </div>
            </div>

            {/* Actions */}
            {loading ? (
              <div className="flex w-full flex-col items-center justify-center gap-3 px-4 py-6">
                <Loader2 className="h-6 w-6 animate-spin text-[color:var(--lms-text-muted)]" />
                <p className="text-sm text-[color:var(--lms-text-muted)]">Checking your certificate...</p>
              </div>
            ) : (
              <div className="flex w-full flex-col gap-4 px-4">
                {!hasCertificate && (
                  <p className="text-sm text-[color:var(--lms-text-muted)]">Certificate will be available soon</p>
                )}

                <Button
                  onClick={handleGetCertificate}
                  disabled={disableMain}
                  className="group relative w-full overflow-hidden rounded-xl bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-500/10 transition-all hover:scale-[1.01] h-14 text-lg font-bold disabled:opacity-60 disabled:hover:scale-100"
                >
                  <span className="relative z-10">{hasCertificate ? "Get Your Certificate" : "Certificate Processing..."}</span>
                  <div className="absolute inset-0 h-full w-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>

                <div className="flex w-full gap-3">
                  <Button
                    variant="outline"
                    onClick={handleDownload}
                    disabled={disableSecondary}
                    className="flex-1 rounded-xl border-[color:var(--lms-border)] bg-transparent hover:bg-[color:var(--lms-active-bg)] text-[color:var(--lms-text)] transition-colors h-11"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleCopyLink}
                    disabled={disableSecondary}
                    className="flex-1 rounded-xl text-[color:var(--lms-text-muted)] hover:text-[color:var(--lms-text)] hover:bg-[color:var(--lms-active-bg)] transition-colors h-11"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    {isCopied ? "Copied!" : "Copy Link"}
                  </Button>
                </div>

                {error && (
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-red-500">{error}</p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleRetry}
                      disabled={loading}
                      className="h-9 rounded-lg"
                    >
                      Retry
                    </Button>
                  </div>
                )}

                <p className="sr-only">Request ID: {requestId}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
