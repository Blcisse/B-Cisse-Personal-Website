"use client";

import type React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { experiences } from "@/data/experience";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeExperience = experiences[activeIndex];

  const updateLight = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--experience-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--experience-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="experience" className="section-shell relative">
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <SectionLabel index="03" label="Experience" title="Professional experience built around product delivery and technical trust." />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="open-copy">
              A recruiter-readable timeline with interactive detail panels for startup leadership, freelance software delivery, and customer-facing technical excellence.
            </p>
          </Reveal>

          <div className="mt-8 space-y-3">
            {experiences.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <Reveal delay={0.08 * index} key={item.company}>
                  <button
                    className={cn(
                      "experience-role group w-full rounded-[1.5rem] border p-4 text-left transition duration-300",
                      isActive ? "border-neon/55 bg-neon/10 shadow-glow" : "border-white/10 bg-white/[0.045] hover:border-neon/30 hover:bg-white/[0.075]",
                    )}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    type="button"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">{item.index}</span>
                      <span className={cn("h-px flex-1 bg-white/10 transition", isActive && "bg-neon/45")} />
                      <span className="font-mono text-xs text-neon">{item.period}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-black text-white">{item.company}</h3>
                    <p className="mt-1 text-sm text-white/60">{item.role}</p>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.14}>
          <GlassCard className="experience-panel relative min-h-[34rem] overflow-hidden p-0" onPointerMove={updateLight}>
            <AnimatePresence mode="wait">
              <motion.article
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 p-6 md:p-8"
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                key={activeExperience.company}
                transition={{ duration: shouldReduceMotion ? 0.05 : 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <p className="technical-kicker">{activeExperience.index} / Previous Role</p>
                    <h3 className="mt-3 text-3xl font-black text-white md:text-5xl">{activeExperience.company}</h3>
                    <p className="mt-3 text-xl text-neon">{activeExperience.role}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-ink/45 px-4 py-3 text-right font-mono text-xs uppercase tracking-[0.16em] text-white/55">
                    <p>{activeExperience.location}</p>
                    <p className="mt-2 text-white/75">{activeExperience.period}</p>
                  </div>
                </div>

                <p className="mt-6 text-lg leading-8 text-white/72">{activeExperience.summary}</p>
                <p className="mt-4 border-l border-neon/35 pl-5 text-base leading-7 text-white/62">{activeExperience.impact}</p>

                <ul className="mt-8 grid gap-3">
                  {activeExperience.highlights.map((highlight) => (
                    <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-white/72" key={highlight}>
                      <span className="mt-2 size-2 shrink-0 rounded-full bg-neon shadow-glow" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {activeExperience.stack.map((item) => <span className="rounded-full border border-white/10 bg-ink/55 px-3 py-1.5 text-sm text-white/65" key={item}>{item}</span>)}
                </div>
              </motion.article>
            </AnimatePresence>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
