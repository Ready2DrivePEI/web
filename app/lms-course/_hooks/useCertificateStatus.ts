import { useState, useCallback, useRef, useEffect } from "react";
import { getCertificateStatus } from "@/lib/certificate";

interface UseCertificateStatusReturn {
  loading: boolean;
  error: string | null;
  exists: boolean;
  certificateUrl: string | null;
  refetch: () => Promise<void>;
}

/**
 * Hook to manage certificate status fetching and state.
 * Handles loading, errors, and request cancellation.
 * 
 * @param shouldFetch Optional boolean to trigger fetch on mount or when true
 * @returns {UseCertificateStatusReturn}
 */
export function useCertificateStatus(shouldFetch: boolean = false): UseCertificateStatusReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exists, setExists] = useState(false);
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  
  const abortControllerRef = useRef<AbortController | null>(null);
  const currentRequestIdRef = useRef(0);

  const fetchStatus = useCallback(async () => {
    // Abort previous request
    abortControllerRef.current?.abort();

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const requestId = ++currentRequestIdRef.current;

    // Use a small delay to avoid synchronous state update in effect warning
    await Promise.resolve();
    
    setLoading(true);
    setError(null);

    try {
      const data = await getCertificateStatus(controller.signal);

      // Check if this request is still relevant
      if (requestId === currentRequestIdRef.current && !controller.signal.aborted) {
        setExists(data.exists);
        setCertificateUrl(data.url);
        setLoading(false);
      }
    } catch (err: unknown) {
      const error = err as Error;
      // Don't update state if request was aborted
      if (error.name === "AbortError" || requestId !== currentRequestIdRef.current) {
        return;
      }

      setError(error.message || "An unexpected error occurred");
      setExists(false);
      setCertificateUrl(null);
      setLoading(false);
    }
  }, []);

  // Automatic fetch when shouldFetch becomes true
  useEffect(() => {
    if (shouldFetch) {
      const timer = setTimeout(() => {
        void fetchStatus();
      }, 0);
      return () => {
        clearTimeout(timer);
        abortControllerRef.current?.abort();
      };
    }
    
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [shouldFetch, fetchStatus]);

  return {
    loading,
    error,
    exists,
    certificateUrl,
    refetch: fetchStatus,
  };
}
