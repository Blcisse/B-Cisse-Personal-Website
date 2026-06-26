"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto max-w-6xl rounded-[2rem] border border-white/15 bg-ink/45 px-4 py-3 text-sm text-white/72 shadow-glass backdrop-blur-2xl supports-[backdrop-filter]:bg-ink/35 md:rounded-full md:px-5">
        <div className="flex items-center justify-between gap-4">
          <a aria-label="Back to top" className="group flex items-center gap-3 font-black text-white" href="#hero" onClick={closeMenu}>
            <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/10 text-neon shadow-glow transition group-hover:border-neon">B</span>
            <span>B / B Cisse</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {siteConfig.navItems.map((item) => (
              <a className="transition hover:text-neon" href={item.href} key={item.href}>{item.label}</a>
            ))}
          </div>

          <a className="hidden rounded-full border border-white/15 px-4 py-2 font-semibold text-white transition hover:-translate-y-0.5 hover:border-neon hover:text-neon md:inline-flex" href={`mailto:${profile.email}`}>Let’s Talk</a>

          <button aria-controls="mobile-navigation" aria-expanded={isOpen} aria-label="Toggle navigation menu" className="grid size-10 place-items-center rounded-full border border-white/15 text-white md:hidden" onClick={() => setIsOpen((value) => !value)} type="button">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div className={cn("grid transition-[grid-template-rows,opacity] duration-300 md:hidden", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")} id="mobile-navigation">
          <div className="overflow-hidden">
            <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
              {siteConfig.navItems.map((item) => (
                <a className="rounded-2xl px-3 py-3 text-white/75 transition hover:bg-white/10 hover:text-neon" href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>
              ))}
              <a className="rounded-2xl bg-white px-3 py-3 font-bold text-black" href={`mailto:${profile.email}`} onClick={closeMenu}>Contact B</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
