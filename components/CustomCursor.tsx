"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };
    const onEnter = () => setHidden(false);
    const onLeave = () => setHidden(true);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive =
        target.closest("a, button, [role='button'], [data-cursor], input, select, textarea") !==
        null;
      setActive(isInteractive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseenter", onEnter, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Respect reduced motion: hide custom cursor
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setHidden(true);
    const listener = (e: MediaQueryListEvent) => setHidden(e.matches);
    mq.addEventListener?.("change", listener);
    return () => mq.removeEventListener?.("change", listener);
  }, []);

  // Hide on small screens to avoid touch interference
  return (
    <div
      ref={ref}
      className={`cursor-ring ${active ? "active" : ""} ${hidden ? "hide" : ""} hidden lg:block`}
      aria-hidden
    />
  );
}
