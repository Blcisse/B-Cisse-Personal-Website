"use client";

import type React from "react";
import { Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const initialForm = { name: "", email: "", subject: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasEmptyField = Object.values(form).some((value) => value.trim().length === 0);
    if (hasEmptyField) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section-shell relative">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <SectionLabel index="09" label="Contact" title="Let’s build something sharp, scalable, and useful." />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="open-copy">{profile.contactCopy}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {profile.contactLinks.map((link) => (
                <a className="contact-link-card rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-1 hover:border-neon/40 hover:bg-white/[0.075]" href={link.href} key={link.label}>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-neon">{link.label}</p>
                  <p className="mt-2 break-words text-lg font-bold text-white">{link.value}</p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <GlassCard className="contact-form-panel relative overflow-hidden p-6 md:p-8">
            <form className="relative z-10 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-white/75">
                  Name
                  <input className="contact-input" name="name" onChange={updateField} placeholder="Your name" required type="text" value={form.name} />
                </label>
                <label className="grid gap-2 text-sm font-bold text-white/75">
                  Email
                  <input className="contact-input" name="email" onChange={updateField} placeholder="you@example.com" required type="email" value={form.email} />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-bold text-white/75">
                Subject
                <input className="contact-input" name="subject" onChange={updateField} placeholder="Role, product, website, or AI system" required type="text" value={form.subject} />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white/75">
                Message
                <textarea className="contact-input min-h-40 resize-y" name="message" onChange={updateField} placeholder="Tell me what you want to build..." required value={form.message} />
              </label>

              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-black transition hover:-translate-y-1 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-neon/60" type="submit">
                Send Message <Send size={18} />
              </button>

              {status === "error" ? <p className="rounded-2xl border border-ember/30 bg-ember/10 p-4 text-sm text-white/80">Please complete every field before submitting.</p> : null}
              {status === "success" ? <p className="rounded-2xl border border-neon/30 bg-neon/10 p-4 text-sm text-white/80">Message placeholder received. Backend delivery will be connected in a later iteration.</p> : null}
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
