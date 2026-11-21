import { featuredStack, skillGroups } from "@/data/skills";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/cn";

const accentClasses = {
  neon: "from-neon/45 via-neon/10 to-transparent text-neon",
  violet: "from-violet/45 via-violet/10 to-transparent text-violet",
  ember: "from-ember/45 via-ember/10 to-transparent text-ember",
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell relative overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <SectionLabel index="02" label="Skills" title="Engineering range across interface, systems, intelligence, and infrastructure." />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="open-copy lg:pb-12">
            My stack spans polished frontend interfaces, dependable backend services, cloud/data workflows, and AI systems—organized as technical modules instead of a flat resume list.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.16}>
        <div className="liquid-glass relative mt-2 overflow-hidden rounded-[2rem] py-4">
          <div className="skills-marquee flex w-max gap-3 px-4">
            {[...featuredStack, ...featuredStack].map((skill, index) => (
              <span className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-white/75 shadow-glass" key={`${skill}-${index}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-6">
        {skillGroups.map((group, index) => (
          <Reveal className={cn(index < 2 ? "lg:col-span-3" : index === 3 ? "lg:col-span-4" : "lg:col-span-2")} delay={0.08 * index} key={group.label}>
            <GlassCard className="skill-module relative h-full overflow-hidden p-6">
              <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r", accentClasses[group.accent])} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/40">{group.index} / Module</p>
                  <h3 className="mt-3 text-2xl font-black text-white">{group.label}</h3>
                </div>
                <span className={cn("rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 font-mono text-xs", accentClasses[group.accent])}>{group.items.length}</span>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span className="rounded-full border border-white/10 bg-ink/45 px-3 py-1.5 text-sm text-white/70 transition hover:border-neon/45 hover:text-white" key={item}>{item}</span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
