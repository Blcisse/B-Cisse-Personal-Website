"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ProjectItem } from "@/data/projects";

export function ProjectDetailModal({ project, onClose }: { project: ProjectItem | null; onClose: () => void }) {
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          aria-modal="true"
          className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-ink/82 p-4 backdrop-blur-xl"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onMouseDown={onClose}
          role="dialog"
          transition={{ duration: shouldReduceMotion ? 0.05 : 0.22 }}
        >
          <motion.article
            className="project-modal-surface relative my-8 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-ink/92 shadow-glow"
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 16 }}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onMouseDown={(event) => event.stopPropagation()}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <button ref={closeButtonRef} aria-label="Close project details" className="absolute right-4 top-4 z-20 grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-neon hover:text-neon" onClick={onClose} type="button">
              <X size={18} />
            </button>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="project-modal-gallery min-h-80 border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:border-white/10 md:p-7">
                <div className="h-full min-h-72 rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_25%_20%,rgba(124,247,255,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.13),rgba(255,255,255,0.025))] p-5">
                  <p className="technical-kicker">{project.type} / visual placeholder</p>
                  <p className="mt-24 max-w-md text-4xl font-black leading-tight text-white">{project.title}</p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {project.gallery.map((item) => <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/45" key={item}>{item}</div>)}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="technical-kicker">{project.year} / {project.category}</p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">{project.title}</h2>
                <p className="mt-5 text-lg leading-8 text-white/70">{project.summary}</p>
                <p className="mt-4 border-l border-neon/35 pl-5 text-base leading-7 text-white/60">{project.longDescription}</p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">Metric / Outcome</p>
                  <p className="mt-2 text-2xl font-black text-white">{project.metrics}</p>
                </div>

                <ul className="mt-6 grid gap-3">
                  {project.highlights.map((highlight) => (
                    <li className="flex gap-3 text-sm leading-6 text-white/68" key={highlight}>
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span className="rounded-full border border-white/10 bg-ink/55 px-3 py-1.5 text-sm text-white/68" key={item}>{item}</span>)}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.githubUrl ? <a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/75 transition hover:border-neon hover:text-neon" href={project.githubUrl}><Github size={16} /> GitHub</a> : null}
                  <a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/75 transition hover:border-neon hover:text-neon" href={project.liveUrl}><ExternalLink size={16} /> Live / Demo</a>
                  <a className="rounded-full bg-white px-4 py-2 text-sm font-black text-black" href={project.caseStudyUrl}>Case Study Placeholder</a>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
