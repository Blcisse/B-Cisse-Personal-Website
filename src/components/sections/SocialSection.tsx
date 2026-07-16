import { ArrowDown } from "lucide-react";
import { socialLinks } from "@/data/social";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SocialSection() {
  return (
    <section id="social" className="section-shell relative overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <Reveal>
          <SectionLabel index="08" label="Follow" title="Follow me across code, career, portfolio, and direct contact channels." />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="open-copy lg:pb-12">
            A motion-forward social bridge inspired by horizontal follow-me sections—built to guide recruiters and clients from proof of work into the final contact moment.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.14}>
        <div className="social-marquee-shell liquid-glass relative mt-2 overflow-hidden rounded-[2rem] py-5">
          <div className="social-marquee flex w-max gap-4 px-5">
            {[...socialLinks, ...socialLinks].map((link, index) => (
              <a className="social-pill group min-w-[20rem] rounded-full border border-white/15 bg-white/[0.055] px-6 py-4 transition hover:-translate-y-1 hover:border-neon/55 hover:text-neon hover:shadow-glow" href={link.href} key={`${link.label}-${index}`}>
                <span className="block text-2xl font-black text-white transition group-hover:text-neon md:text-4xl">{link.label}</span>
                <span className="mt-1 block font-mono text-xs uppercase tracking-[0.2em] text-white/45">{link.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-[18rem_1fr] lg:items-center">
        <Reveal delay={0.18}>
          <a aria-label="Scroll to contact section" className="contact-orbit group relative mx-auto grid size-56 place-items-center rounded-full border border-white/15 bg-white/[0.055] text-center shadow-glass backdrop-blur-2xl transition hover:border-neon hover:shadow-glow lg:mx-0" href="#contact">
            <span className="contact-orbit-dot" />
            <span className="relative z-10 px-8 text-2xl font-black leading-tight text-white">Contact<br />Me</span>
            <ArrowDown className="relative z-10 mt-20 text-neon transition group-hover:translate-y-1" size={22} />
          </a>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="grid gap-3 md:grid-cols-2">
            {socialLinks.map((link) => (
              <a className="social-link-card rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-1 hover:border-neon/40 hover:bg-white/[0.07]" href={link.href} key={link.label}>
                <p className="text-xl font-black text-white">{link.label}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-neon">{link.handle}</p>
                <p className="mt-3 text-sm leading-6 text-white/58">{link.description}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
