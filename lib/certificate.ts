export interface CertificateStatusResponse {
  exists: boolean;
  url: string | null;
}

/**
 * Fetches the certificate status for the current user.
 * @param signal AbortSignal to cancel the request
 * @returns Normalized certificate status response
 */
export async function getCertificateStatus(signal?: AbortSignal): Promise<CertificateStatusResponse> {
  const response = await fetch("/api/certificate", {
    method: "GET",
    signal,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch certificate status");
  }

  const data = await response.json();

  // Normalize response shape
  return {
    exists: !!data.exists,
    url: data.url || null,
  };
}
