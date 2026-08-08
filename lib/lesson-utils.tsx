import React from "react";

/**
 * Parses markdown-style bold text (**text**) and returns an array of React spans and strong elements.
 */
export function renderFormattedText(text: string): React.ReactNode[] {
  if (!text) return [];
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      return (
        <strong key={i} className="font-semibold">
          {inner}
        </strong>
      );
    }

    return <span key={i}>{part}</span>;
  });
}

/**
 * Extracts YouTube video ID and returns standard privacy-friendly embed URL.
 * Supports standard (youtube.com/watch?v=...), mobile (m.youtube.com), and short (youtu.be/...) URLs.
 */
export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url || typeof url !== "string") return null;
  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtube.com" || host === "m.youtube.com") {
      const videoId = parsed.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (host === "youtu.be") {
      const videoId = parsed.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }
  } catch {
    return null;
  }

  return null;
}
