import type { WebsiteProject } from "@/data/projects";
import { cn } from "@/lib/cn";

export function WebsiteShowcaseCard({ project, isActive, onSelect }: { project: WebsiteProject; isActive: boolean; onSelect: () => void }) {
  return (
    <button className={cn("website-tab w-full rounded-[1.4rem] border p-4 text-left transition", isActive ? "border-neon/45 bg-neon/10 shadow-glow" : "border-white/10 bg-white/[0.045] hover:border-neon/30")} onClick={onSelect} type="button">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">{project.category}</p>
      <h4 className="mt-3 text-lg font-black text-white">{project.title}</h4>
    </button>
  );
}
