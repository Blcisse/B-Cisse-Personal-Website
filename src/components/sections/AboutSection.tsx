import Image from "next/image";
import { profile } from "@/data/profile";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutSection() {
  return (
    <section id="about" className="section-shell relative">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <Reveal>
            <SectionLabel index="01" label="About" title="Engineering intelligent products with a premium frontend edge." />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl md:leading-tight">
              {profile.aboutIntro}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 space-y-5 border-l border-neon/35 pl-6 text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              <p>{profile.executiveSummary}</p>
              <p>
                This site positions me as a builder who can bridge polished interfaces, dependable backend systems, data-ready architecture, and applied AI workflows into products recruiters and clients can understand quickly.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:pt-10" delay={0.12}>
          <div className="about-visual group relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-neon/20 via-violet/10 to-ember/20 blur-2xl transition duration-500 group-hover:opacity-90" />
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/[0.06] p-3 shadow-glass backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:border-neon/40 group-hover:shadow-glow">
              <Image alt="Professional placeholder portrait for Balla Cisse" className="aspect-[4/5] w-full rounded-[1.6rem] object-cover grayscale" height={900} src={profile.portrait} width={700} />
              <div className="absolute inset-x-7 bottom-7 rounded-3xl border border-white/15 bg-ink/60 p-4 backdrop-blur-xl">
                <p className="technical-kicker">Executive profile</p>
                <p className="mt-1 text-xl font-black text-white">{profile.title}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -left-4 top-10 hidden flex-col gap-3 sm:flex">
              {profile.focusAreas.slice(0, 3).map((item) => <span className="rounded-full border border-white/15 bg-ink/75 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-neon backdrop-blur" key={item}>{item}</span>)}
            </div>
            <div className="pointer-events-none absolute -right-4 bottom-20 hidden flex-col gap-3 sm:flex">
              {profile.focusAreas.slice(3).map((item) => <span className="rounded-full border border-white/15 bg-ink/75 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-ember backdrop-blur" key={item}>{item}</span>)}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {profile.highlights.map((highlight, index) => (
          <Reveal delay={0.08 * index} key={highlight.value}>
            <GlassCard className="about-stat-card h-full p-5">
              <p className="text-3xl font-black text-white">{highlight.value}</p>
              <p className="mt-3 text-sm leading-6 text-white/62">{highlight.label}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
