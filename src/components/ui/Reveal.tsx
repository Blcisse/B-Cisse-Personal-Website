"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function Reveal({ children, className, delay = 0 }: React.PropsWithChildren<{ className?: string; delay?: number }>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
