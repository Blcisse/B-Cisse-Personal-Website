"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const sectionIds = ["hero", ...siteConfig.navItems.map((item) => item.href.replace("#", ""))];
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    }

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto max-w-6xl rounded-[2rem] border border-white/15 bg-ink/45 px-4 py-3 text-sm text-white/72 shadow-glass backdrop-blur-2xl supports-[backdrop-filter]:bg-ink/35 md:rounded-full md:px-5">
        <div className="flex items-center justify-between gap-4">
          <a aria-label="Back to top" className="group flex items-center gap-3 font-black text-white" href="#hero" onClick={closeMenu}>
            <span className="grid size-9 place-items-center overflow-hidden rounded-full border border-white/15 bg-white/10 shadow-glow transition group-hover:border-neon">
              <Image alt="B Dev Logo" className="size-full object-contain" height={36} src="/images/Bdevlogo.png" width={36} />
            </span>
            <span className="font-black">B / B Cisse</span>
          </a>

          <div className="hidden items-center gap-1.5 md:flex">
            {siteConfig.navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  className={cn(
                    "rounded-full border px-4 py-2 text-[0.875rem] font-bold tracking-wide transition-all duration-200",
                    isActive
                      ? "border-neon/40 bg-neon/12 text-neon shadow-glow"
                      : "border-transparent text-white/72 hover:border-white/20 hover:bg-white/10 hover:text-white",
                  )}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a className="hidden rounded-full border border-white/15 px-4 py-2 font-bold text-white transition hover:-translate-y-0.5 hover:border-neon hover:text-neon md:inline-flex" href={`mailto:${profile.email}`}>Let’s Talk</a>

          <button aria-controls="mobile-navigation" aria-expanded={isOpen} aria-label="Toggle navigation menu" className="grid size-10 place-items-center rounded-full border border-white/15 text-white md:hidden" onClick={() => setIsOpen((value) => !value)} type="button">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div className={cn("grid transition-[grid-template-rows,opacity] duration-300 md:hidden", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")} id="mobile-navigation">
          <div className="overflow-hidden">
            <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
              {siteConfig.navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    className={cn(
                      "rounded-2xl px-3 py-3 font-bold transition",
                      isActive ? "bg-neon/12 text-neon" : "text-white/75 hover:bg-white/10 hover:text-neon",
                    )}
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a className="rounded-2xl bg-white px-3 py-3 font-bold text-black" href={`mailto:${profile.email}`} onClick={closeMenu}>Contact B</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
