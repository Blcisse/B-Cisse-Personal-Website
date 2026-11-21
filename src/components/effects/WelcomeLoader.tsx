"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "b-prsnl-webby-loader-dismissed";
const bootSteps = [
  "Initializing B Cisse Personal Website",
  "Loading full-stack interface",
  "Syncing portfolio modules",
  "Rendering intelligent systems profile",
  "Interface ready",
];

export function WelcomeLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY) === "true") return;

    setIsVisible(true);
    const stepInterval = window.setInterval(() => {
      setStepIndex((current) => Math.min(current + 1, bootSteps.length - 1));
    }, shouldReduceMotion ? 320 : 420);

    const dismissTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
      setIsVisible(false);
    }, shouldReduceMotion ? 900 : 2400);

    return () => {
      window.clearInterval(stepInterval);
      window.clearTimeout(dismissTimer);
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          aria-label="B Cisse Personal Website initialization sequence"
          aria-live="polite"
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink/95 px-5 backdrop-blur-2xl"
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04, clipPath: "inset(0 0 100% 0 round 28px)" }}
          initial={{ opacity: 1 }}
          role="status"
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(124,247,255,0.16),transparent_28rem),radial-gradient(circle_at_15%_85%,rgba(255,107,74,0.1),transparent_26rem)]" />
          <div className="loader-scanlines absolute inset-0 opacity-35" />
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            className="absolute h-[22rem] w-[22rem] rounded-full border border-dashed border-neon/20 md:h-[32rem] md:w-[32rem]"
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: -360 }}
            className="absolute h-[16rem] w-[16rem] rounded-full border border-violet/15 md:h-[24rem] md:w-[24rem]"
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="liquid-glass relative w-full max-w-xl overflow-hidden rounded-[2rem] p-6 text-center md:p-8"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent" />
            <p className="technical-kicker">Boot sequence / B PRSNL</p>
            <h1 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">B Cisse Personal Website</h1>
            <div className="mx-auto mt-6 h-1.5 max-w-sm overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${((stepIndex + 1) / bootSteps.length) * 100}%` }}
                className="h-full rounded-full bg-gradient-to-r from-neon via-violet to-ember"
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.35 }}
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={bootSteps[stepIndex]}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 font-mono text-sm uppercase tracking-[0.18em] text-white/70"
                exit={{ opacity: 0, y: -8 }}
                initial={{ opacity: 0, y: 8 }}
                transition={{ duration: shouldReduceMotion ? 0.05 : 0.22 }}
              >
                {bootSteps[stepIndex]}
              </motion.p>
            </AnimatePresence>
            <div className="mt-6 text-left font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/35">
              <span>Full-Stack Software Engineer</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
