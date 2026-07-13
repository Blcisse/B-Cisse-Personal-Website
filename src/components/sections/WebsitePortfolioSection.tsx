"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { ProjectItem } from "@/data/projects";
import { websiteProjects } from "@/data/projects";
import { ProjectDetailModal } from "@/components/portfolio/ProjectDetailModal";
import { WebsiteShowcaseCard } from "@/components/portfolio/WebsiteShowcaseCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WebsitePortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const activeProject = websiteProjects[activeIndex];

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + websiteProjects.length) % websiteProjects.length);
  };

  return (
    <section id="websites" className="section-shell relative overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <SectionLabel index="07" label="Websites" title="Website development portfolio for polished client-facing brands." />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="open-copy lg:pb-12">
            A dedicated frontend showcase for responsive websites, landing pages, booking interfaces, and client-ready digital experiences—separate from the software and AI systems portfolio.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.14}>
        <GlassCard className="website-showcase relative overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="website-device-stage relative min-h-[28rem] overflow-hidden border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:border-white/10 md:p-8">
              <div className="desktop-frame mx-auto max-w-3xl rounded-[1.6rem] border border-white/15 bg-ink/70 p-3 shadow-glass">
                <div className="flex gap-2 border-b border-white/10 px-2 pb-3">
                  <span className="size-2 rounded-full bg-ember" />
                  <span className="size-2 rounded-full bg-violet" />
                  <span className="size-2 rounded-full bg-neon" />
                </div>
                <div className="mt-3 aspect-video overflow-hidden rounded-[1rem] border border-white/10 bg-ink/60">
                  <video
                    autoPlay
                    className="h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    src={`/assets/videos/placeholder-website-${activeIndex + 1}.mp4`}
                  />
                </div>
              </div>
              <div className="mobile-frame absolute bottom-8 right-7 w-36 rounded-[1.8rem] border border-white/15 bg-ink/80 p-2 shadow-glow backdrop-blur md:w-44">
                <div className="aspect-[9/16] rounded-[1.3rem] border border-white/10 bg-[linear-gradient(160deg,rgba(124,247,255,0.16),rgba(155,124,255,0.08),rgba(255,107,74,0.12))] p-3">
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-neon">Mobile</p>
                  <div className="mt-10 h-2 rounded-full bg-white/20" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
                  <div className="mt-6 h-16 rounded-2xl border border-white/10 bg-white/10" />
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="technical-kicker">Featured website / {activeProject.category}</p>
              <h3 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">{activeProject.name}</h3>
              <p className="mt-5 text-base leading-7 text-white/68">{activeProject.description}</p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.stack.map((item) => <span className="rounded-full border border-white/10 bg-ink/50 px-3 py-1.5 text-sm text-white/70" key={item}>{item}</span>)}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">Services</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProject.services.map((item) => <span className="rounded-full border border-ember/20 bg-ember/10 px-3 py-1.5 text-sm text-white/70" key={item}>{item}</span>)}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-white px-4 py-2 text-sm font-black text-black" onClick={() => setSelectedProject(activeProject)} type="button">Case Study</button>
                <a className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/75 hover:border-neon hover:text-neon" href={activeProject.liveUrl}>Live Placeholder</a>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">{activeIndex + 1} / {websiteProjects.length}</div>
                <div className="flex gap-2">
                  <button aria-label="Previous website project" className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-neon hover:text-neon" onClick={() => move(-1)} type="button"><ArrowLeft size={16} /></button>
                  <button aria-label="Next website project" className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-neon hover:text-neon" onClick={() => move(1)} type="button"><ArrowRight size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {websiteProjects.map((project, index) => (
          <Reveal delay={0.06 * index} key={project.id}>
            <WebsiteShowcaseCard isActive={activeIndex === index} onSelect={() => setActiveIndex(index)} project={project} />
          </Reveal>
        ))}
      </div>
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
