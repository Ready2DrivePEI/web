"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TruncatedLabelProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

export function TruncatedLabel({
  text,
  className,
  containerClassName,
}: TruncatedLabelProps) {
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const node = labelRef.current;
    if (!node) return;

    const updateOverflow = () => {
      setIsTruncated(node.scrollWidth - node.clientWidth > 1);
    };

    updateOverflow();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateOverflow);
      observer.observe(node);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", updateOverflow);
    return () => window.removeEventListener("resize", updateOverflow);
  }, [text]);

  return (
    <span
      className={cn("group/truncate relative min-w-0", containerClassName)}
      title={isTruncated ? text : undefined}
    >
      <span ref={labelRef} className={cn("block truncate whitespace-nowrap", className)}>
        {text}
      </span>
      {isTruncated ? (
        <span
          role="tooltip"
          className="pointer-events-none absolute left-0 top-full z-50 mt-1 hidden max-w-80 rounded-md border border-[var(--lms-border)] bg-[var(--lms-surface)] px-2 py-1.5 text-xs leading-5 text-[var(--lms-text)] shadow-lg group-hover/truncate:block group-hover/item:block group-focus-visible/item:block group-hover/module:block group-focus-visible/module:block"
        >
          {text}
        </span>
      ) : null}
    </span>
  );
}
