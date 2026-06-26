import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-10 px-5 pb-8 pt-10">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 text-sm text-white/55 backdrop-blur-xl md:grid-cols-[1.4fr_1fr] md:p-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-neon">B PRSNL Webby</p>
          <p className="mt-3 text-2xl font-black text-white">{profile.name}</p>
          <p className="mt-1 text-white/65">{profile.title} · {profile.specialty}</p>
          <p className="mt-2 text-white/45">{profile.location}</p>
        </div>
        <div className="flex flex-col justify-between gap-5 md:items-end">
          <div className="flex flex-wrap gap-3 md:justify-end">
            {siteConfig.footerLinks.map((link) => <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-neon hover:text-neon" href={link.href} key={link.label}>{link.label}</a>)}
          </div>
          <p className="text-white/35">© 2026 {profile.displayName}. Built for intelligent software discovery.</p>
        </div>
      </div>
    </footer>
  );
}
