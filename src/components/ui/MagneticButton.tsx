import type React from "react";
import { cn } from "@/lib/cn";

export function MagneticButton({ href, children, className, icon }: React.PropsWithChildren<{ href: string; className?: string; icon?: React.ReactNode }>) {
  return (
    <a className={cn("inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white shadow-[0_0_0_rgba(124,247,255,0)] transition duration-300 hover:-translate-y-1 hover:border-neon hover:text-neon hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-neon/60", className)} href={href}>
      {children}
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </a>
  );
}
