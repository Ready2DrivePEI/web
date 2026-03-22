"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  distancePx?: number;
  once?: boolean;
};

export default function RevealOnScroll({
  children,
  className,
  delayMs = 0,
  durationMs = 420,
  distancePx = 12,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const setupFrame = window.requestAnimationFrame(() => {
      const node = ref.current;
      if (!node) {
        setHydrated(true);
        return;
      }

      setHydrated(true);
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      const userPrefersReducedMotion = mediaQuery.matches;
      setReducedMotion(userPrefersReducedMotion);

      if (userPrefersReducedMotion) {
        setVisible(true);
        return;
      }

      if (!("IntersectionObserver" in window)) {
        setVisible(true);
        return;
      }

      const initiallyInView = node.getBoundingClientRect().top <= window.innerHeight * 0.92;
      setVisible(initiallyInView);
      if (initiallyInView && once) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setVisible(true);
              if (once) {
                observer?.unobserve(entry.target);
              }
            } else if (!once) {
              setVisible(false);
            }
          }
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -3% 0px",
        },
      );

      observer.observe(node);
    });

    return () => {
      window.cancelAnimationFrame(setupFrame);
      observer?.disconnect();
    };
  }, [once]);

  const staticMode = !hydrated || reducedMotion;
  const hidden = !staticMode && !visible;

  const style: CSSProperties = staticMode
    ? {}
    : {
        opacity: hidden ? 0.01 : 1,
        transform: hidden ? `translate3d(0, ${distancePx}px, 0)` : "translate3d(0, 0, 0)",
        transitionProperty: "opacity, transform",
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delayMs}ms`,
        willChange: "opacity, transform",
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
