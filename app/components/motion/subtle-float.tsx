"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type SubtleFloatProps = {
  children: ReactNode;
  className?: string;
  maxShiftPx?: number;
  speed?: number;
};

export default function SubtleFloat({
  children,
  className,
  maxShiftPx = 6,
  speed = 0.65,
}: SubtleFloatProps) {
  const [enabled, setEnabled] = useState(false);
  const [shiftY, setShiftY] = useState(0);
  const enabledRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const narrowViewportQuery = window.matchMedia("(max-width: 900px)");

    const evaluate = () => {
      const canAnimate =
        !reduceMotionQuery.matches && !coarsePointerQuery.matches && !narrowViewportQuery.matches;
      enabledRef.current = canAnimate;
      setEnabled(canAnimate);
      if (!canAnimate) {
        setShiftY(0);
      } else {
        scheduleUpdate();
      }
    };

    const update = () => {
      frameRef.current = null;
      if (!enabledRef.current) {
        return;
      }

      const scrollY = window.scrollY || window.pageYOffset || 0;
      const wave = Math.sin(scrollY * speed * 0.01);
      setShiftY(wave * maxShiftPx);
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }
      frameRef.current = window.requestAnimationFrame(update);
    };

    evaluate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", evaluate);
    reduceMotionQuery.addEventListener("change", evaluate);
    coarsePointerQuery.addEventListener("change", evaluate);
    narrowViewportQuery.addEventListener("change", evaluate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", evaluate);
      reduceMotionQuery.removeEventListener("change", evaluate);
      coarsePointerQuery.removeEventListener("change", evaluate);
      narrowViewportQuery.removeEventListener("change", evaluate);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [maxShiftPx, speed]);

  const style: CSSProperties = enabled
    ? {
        transform: `translate3d(0, ${shiftY.toFixed(2)}px, 0)`,
        transition: "transform 460ms cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
      }
    : {};

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
