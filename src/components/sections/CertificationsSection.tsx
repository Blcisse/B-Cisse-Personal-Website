import Image from "next/image";
import { awards, certifications } from "@/data/certifications";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell relative">
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
        <Reveal>
          <SectionLabel index="04" label="Credentials" title="Verified learning across cloud, data, analytics, and technical execution." />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="open-copy lg:pb-12">
            Credentials and recognition that support B’s full-stack engineering profile with cloud/data learning, analytics fluency, and Apple-recognized technical precision.
          </p>
        </Reveal>
      </div>

      <div className="mt-2 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((credential, index) => (
          <Reveal delay={0.08 * index} key={credential.id}>
            <GlassCard className="credential-card h-full overflow-hidden p-0">
              <div className="credential-image relative h-40 overflow-hidden rounded-[1.4rem] border-b border-white/10 bg-[radial-gradient(circle_at_25%_20%,rgba(124,247,255,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]">
                <Image
                  src={credential.image}
                  alt={`${credential.title} badge`}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink/55 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-neon backdrop-blur">Certificate</div>
              </div>
              <div className="p-6">
                <p className="technical-kicker">{credential.issuer} / {credential.category}</p>
                <h3 className="mt-3 text-2xl font-black text-white">{credential.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/62">{credential.description}</p>
                <a className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/75 transition hover:border-neon hover:text-neon" href={credential.verificationUrl} rel="noopener noreferrer" target="_blank">View Verification</a>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal delay={0.2}>
          <div className="rounded-[2rem] border border-ember/25 bg-ember/10 p-6 shadow-glass">
            <p className="technical-kicker text-ember">Award track</p>
            <h3 className="mt-3 text-3xl font-black text-white">Recognition</h3>
            <p className="mt-4 text-white/62">Professional recognition connected to leadership, technical accuracy, and customer-facing solution delivery.</p>
          </div>
        </Reveal>

        {awards.map((award, index) => (
          <Reveal delay={0.26 + index * 0.08} key={award.id}>
            <GlassCard className="credential-card grid gap-5 p-5 md:grid-cols-[16rem_1fr]">
              <div className="credential-image relative min-h-44 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,74,0.22),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.025))]">
                <Image
                  src={award.image}
                  alt={`${award.title} badge`}
                  fill
                  className="object-cover"
                />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink/55 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-ember backdrop-blur">Award</div>
              </div>
              <div className="self-center">
                <p className="technical-kicker">{award.issuer} / {award.category}</p>
                <h3 className="mt-3 text-3xl font-black text-white">{award.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">{award.description}</p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
