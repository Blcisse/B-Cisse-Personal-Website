import type React from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div className={cn("group rounded-[var(--radius)] border border-white/15 bg-white/[0.075] p-6 shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-neon/45 hover:shadow-glow", className)} {...props}>
      {children}
    </div>
  );
}
