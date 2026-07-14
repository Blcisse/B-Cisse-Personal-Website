"use client";

import type React from "react";
import Image from "next/image";
import { ArrowDownRight, Mail } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { profile } from "@/data/profile";
import { MagneticButton } from "@/components/ui/MagneticButton";

const reveal = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const langTicker = [
  "Python", "JavaScript", "TypeScript", "SQL", "React", "Next.js",
  "Node.js", "FastAPI", "Docker", "GCP", "Tailwind", "Framer Motion",
  "PostgreSQL", "LangChain",
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imageX = useTransform(mouseX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-14, 14]);
  const imageY = useTransform(mouseY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-10, 10]);
  const ringX = useTransform(mouseX, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [22, -22]);
  const ringY = useTransform(mouseY, [-0.5, 0.5], shouldReduceMotion ? [0, 0] : [-16, 16]);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="hero" className="section-shell relative flex min-h-screen items-center overflow-hidden pt-32" onPointerMove={handlePointerMove}>
      <motion.div
        animate="visible"
        className="relative grid min-h-[calc(100vh-9rem)] w-full items-start gap-8 lg:grid-cols-3 lg:gap-10"
        initial="hidden"
        transition={{ staggerChildren: shouldReduceMotion ? 0 : 0.1 }}
      >
        <motion.div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neon/15" style={{ x: ringX, y: ringY }} />
        <motion.div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" style={{ x: ringY, y: ringX }} />

        <div className="order-2 z-10 lg:order-1">
          <motion.p className="technical-kicker" variants={reveal}>00.01 / B PRSNL Interface</motion.p>
          <motion.h1 className="mt-4 text-5xl font-black leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-7xl" variants={reveal}>
            {profile.name}
            <span className="mt-3 block text-2xl font-semibold tracking-normal text-white/45 sm:text-3xl">({profile.displayName})</span>
          </motion.h1>
          <motion.p className="mt-6 max-w-md text-lg leading-8 text-white/72" variants={reveal}>{profile.heroSummary}</motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" variants={reveal}>
            <MagneticButton className="border-white bg-white text-black hover:text-black" href="#projects" icon={<ArrowDownRight size={18} />}>View Projects</MagneticButton>
            <MagneticButton href={`mailto:${profile.email}`} icon={<Mail size={17} />}>Contact Me</MagneticButton>
          </motion.div>
        </div>

        <motion.div className="order-1 z-20 lg:order-2" style={{ x: imageX, y: imageY }} variants={reveal}>
          <div className="hero-frame liquid-glass relative mx-auto aspect-[0.64] w-full max-w-[24rem] overflow-hidden rounded-t-[11rem] rounded-b-[3rem] p-3 shadow-glow sm:max-w-[30rem]">
            <div className="absolute inset-0 rounded-t-[10rem] rounded-b-[2.6rem] bg-[radial-gradient(circle_at_50%_12%,rgba(124,247,255,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.025))]" />
            <Image alt="Portrait of B Cisse" className="relative z-10 h-full w-full rounded-t-[9.4rem] rounded-b-[2.2rem] object-cover grayscale" height={900} priority src={profile.portrait} width={700} />
            <div className="pointer-events-none absolute inset-x-7 bottom-7 z-20 rounded-[1.6rem] border border-white/15 bg-ink/60 p-4 backdrop-blur-xl">
              <p className="technical-kicker">Visual anchor / engineer profile</p>
              <p className="mt-1 text-xl font-black text-white">Full-Stack • AI/Data • Systems</p>
            </div>
            {profile.heroAccents.map((accent) => (
              <span className="absolute z-20 rounded-full border border-white/15 bg-ink/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-neon backdrop-blur" key={accent.label} style={accent.style}>
                {accent.label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="order-3 z-10">
          <motion.p className="technical-kicker" variants={reveal}>— Core role</motion.p>
          <motion.h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl" variants={reveal}>{profile.title}</motion.h2>
          <motion.p className="mt-4 text-lg leading-8 text-neon" variants={reveal}>{profile.specialty}</motion.p>
          <motion.div className="mt-8 grid gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/45" variants={reveal}>
            {profile.heroSystems.map((item) => <span key={item}>{item}</span>)}
          </motion.div>
        </div>

        {/* Language ticker — spans full 3-col grid width, anchored below portrait row */}
        <motion.div className="order-4 col-span-full" variants={reveal}>
          <div className="liquid-glass relative overflow-hidden rounded-[1.5rem] py-3">
            <div className="hero-lang-ticker flex w-max gap-3 px-4">
              {[...langTicker, ...langTicker].map((lang, index) => (
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-white/75 shadow-glass" key={`${lang}-${index}`}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
