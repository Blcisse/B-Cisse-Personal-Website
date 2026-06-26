import { cn } from "@/lib/cn";

export function SectionLabel({ index, label, title, className }: { index: string; label: string; title?: string; className?: string }) {
  return (
    <div className={cn("mb-10", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-neon"><span className="text-white/35">—</span> {index} / {label}</p>
      {title ? <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h2> : null}
    </div>
  );
}
