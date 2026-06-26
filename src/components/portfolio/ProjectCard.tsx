import type { SoftwareProject } from "@/data/projects";
import { GlassCard } from "@/components/ui/GlassCard";

export function ProjectCard({ project, compact = false, onViewDetails }: { project: SoftwareProject; compact?: boolean; onViewDetails: (project: SoftwareProject) => void }) {
  return (
    <GlassCard className="project-card group h-full overflow-hidden p-0">
      <div className={compact ? "project-demo h-40 border-b border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(155,124,255,0.22),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.025))] p-5" : "project-demo relative min-h-64 border-b border-white/10 bg-[radial-gradient(circle_at_25%_20%,rgba(124,247,255,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.13),rgba(255,255,255,0.025))] p-5"}>
        <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em]">
          <span className="rounded-full border border-white/15 bg-ink/55 px-3 py-1 text-neon backdrop-blur">{project.index} / {project.featured ? "Featured" : "System"}</span>
          <span className="text-white/45">{project.year}</span>
        </div>
        {!compact ? (
          <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-ink/55 p-4 backdrop-blur-xl">
            <p className="technical-kicker">Screenshot / demo placeholder</p>
            <p className="mt-2 text-2xl font-black text-white">{project.metrics}</p>
          </div>
        ) : null}
      </div>
      <div className={compact ? "p-6" : "p-6 md:p-7"}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-neon/25 bg-neon/10 px-3 py-1 text-sm text-neon">{project.category}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-sm text-white/60">{project.status}</span>
        </div>
        <h3 className={compact ? "mt-3 text-2xl font-black text-white" : "mt-4 text-3xl font-black leading-tight text-white md:text-4xl"}>{project.title}</h3>
        <p className={compact ? "mt-4 text-sm leading-6 text-white/64" : "mt-4 text-base leading-7 text-white/68"}>{project.summary}</p>
        {!compact ? (
          <ul className="mt-6 grid gap-3">
            {project.highlights.map((highlight) => <li className="flex gap-3 text-sm leading-6 text-white/66" key={highlight}><span className="mt-2 size-1.5 shrink-0 rounded-full bg-neon" /><span>{highlight}</span></li>)}
          </ul>
        ) : <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.045] p-3 font-mono text-xs uppercase tracking-[0.16em] text-neon">{project.metrics}</p>}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, compact ? 4 : project.stack.length).map((item) => <span className="rounded-full border border-white/10 bg-ink/45 px-3 py-1.5 text-sm text-white/68" key={item}>{item}</span>)}
        </div>
        <div className="project-actions mt-7 flex flex-wrap gap-3 opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
          <button className="rounded-full bg-white px-4 py-2 text-sm font-black text-black" onClick={() => onViewDetails(project)} type="button">View Details</button>
          <a className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/75 hover:border-neon hover:text-neon" href={project.githubUrl}>GitHub</a>
          {!compact ? <a className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/75 hover:border-neon hover:text-neon" href={project.liveUrl}>Live / Demo</a> : null}
        </div>
      </div>
    </GlassCard>
  );
}
