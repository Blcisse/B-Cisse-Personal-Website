export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-30 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(124,247,255,0.18),transparent_28rem),radial-gradient(circle_at_78%_10%,rgba(155,124,255,0.18),transparent_26rem),radial-gradient(circle_at_12%_92%,rgba(255,107,74,0.14),transparent_34rem)]" />
      <div className="absolute -left-1/4 -top-1/3 h-[78rem] w-[78rem] rounded-full bg-brand-conic opacity-60 blur-3xl motion-safe:animate-[aurora-spin_24s_ease-in-out_infinite_alternate]" />
      <div className="absolute -bottom-48 -left-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(124,247,255,0.24),rgba(155,124,255,0.08)_45%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 left-0 h-1/2 w-2/3 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,247,255,0.14),transparent_62%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,0.72)_55%,transparent_95%)]" />
      <div className="absolute inset-0 opacity-[0.055] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/75 to-transparent" />
    </div>
  );
}
