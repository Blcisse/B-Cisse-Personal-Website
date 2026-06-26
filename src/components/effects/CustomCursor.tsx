"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, .group";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduceMotion.matches) return;

    document.body.classList.add("has-custom-cursor");

    const move = (event: PointerEvent) => {
      const target = event.target;
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
      setIsHovering(target instanceof Element ? Boolean(target.closest(INTERACTIVE_SELECTOR)) : false);
    };
    const leave = () => setIsVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[80] hidden lg:block">
      <span
        className={cn("absolute size-2 rounded-full bg-neon shadow-glow transition-opacity duration-200", isVisible ? "opacity-100" : "opacity-0")}
        style={{ transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)` }}
      />
      <span
        className={cn("absolute size-10 rounded-full border border-neon/45 bg-neon/5 transition-[opacity,transform,border-color] duration-200", isVisible ? "opacity-100" : "opacity-0", isHovering ? "border-ember/70 bg-ember/10 scale-150" : "scale-100")}
        style={{ transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isHovering ? 1.5 : 1})` }}
      />
    </div>
  );
}
