"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCROLL_THRESHOLD_PX = 50;
const CLICK_THROTTLE_MS = 400;

export function ScrollAwareNextButton({
  pageId,
  href,
  label,
}: {
  pageId: string;
  href: string;
  label: string;
}) {
  const router = useRouter();
  const lastClickRef = useRef(0);
  const maxScrollBottomRef = useRef(0);

  useEffect(() => {
    // Reset max scroll for each new lesson page.
    maxScrollBottomRef.current = 0;
    
    // Force scroll reset to top for sibling route navigation.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const handleScroll = () => {
      const { documentElement } = document;
      const scrollTop = window.scrollY || documentElement.scrollTop;
      const clientHeight = window.innerHeight || documentElement.clientHeight;
      const currentScrollBottom = scrollTop + clientHeight;

      if (currentScrollBottom > maxScrollBottomRef.current) {
        maxScrollBottomRef.current = currentScrollBottom;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pageId]);

  const handleNext = () => {
    const now = Date.now();
    if (now - lastClickRef.current < CLICK_THROTTLE_MS) return;
    lastClickRef.current = now;

    const { documentElement } = document;
    const scrollTop = window.scrollY || documentElement.scrollTop;
    const clientHeight = window.innerHeight || documentElement.clientHeight;
    const scrollHeight = documentElement.scrollHeight;

    const currentScrollBottom = scrollTop + clientHeight;
    const effectiveMax = Math.max(maxScrollBottomRef.current, currentScrollBottom);

    if (effectiveMax >= scrollHeight - SCROLL_THRESHOLD_PX) {
      router.push(href);
      return;
    }

    window.scrollBy({
      top: Math.round(window.innerHeight * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <Button onClick={handleNext}>
      {label}
      <ChevronRight />
    </Button>
  );
}
