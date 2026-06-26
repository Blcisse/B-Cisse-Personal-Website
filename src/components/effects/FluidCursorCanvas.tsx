"use client";

import { useEffect, useRef } from "react";

type Droplet = {
  x: number;
  y: number;
  radius: number;
  life: number;
  hue: number;
};

const MAX_DROPLETS = 36;

export function FluidCursorCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (reduceMotion.matches || coarsePointer.matches || window.innerWidth < 768) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let animation = 0;
    let mounted = true;
    let width = 0;
    let height = 0;
    let lastX = window.innerWidth * 0.5;
    let lastY = window.innerHeight * 0.5;
    const droplets: Droplet[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const addDroplet = (x: number, y: number, velocity = 1) => {
      droplets.push({
        x,
        y,
        radius: Math.min(90, 28 + velocity * 0.45),
        life: 1,
        hue: velocity > 34 ? 265 : 188,
      });
      if (droplets.length > MAX_DROPLETS) droplets.shift();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const velocity = Math.hypot(dx, dy);
      lastX = event.clientX;
      lastY = event.clientY;
      if (velocity > 2) addDroplet(event.clientX, event.clientY, velocity);
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";

      for (let index = droplets.length - 1; index >= 0; index -= 1) {
        const droplet = droplets[index];
        droplet.life -= 0.018;
        droplet.radius += 0.85;

        if (droplet.life <= 0) {
          droplets.splice(index, 1);
          continue;
        }

        const gradient = context.createRadialGradient(droplet.x, droplet.y, 0, droplet.x, droplet.y, droplet.radius);
        gradient.addColorStop(0, `hsla(${droplet.hue}, 100%, 74%, ${0.12 * droplet.life})`);
        gradient.addColorStop(0.45, `hsla(${droplet.hue + 22}, 100%, 62%, ${0.055 * droplet.life})`);
        gradient.addColorStop(1, "rgba(5, 5, 10, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(droplet.x, droplet.y, droplet.radius, 0, Math.PI * 2);
        context.fill();
      }

      context.globalCompositeOperation = "source-over";
      if (mounted) animation = requestAnimationFrame(render);
    };

    resize();
    addDroplet(lastX, lastY, 1);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animation = requestAnimationFrame(render);

    return () => {
      mounted = false;
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 hidden opacity-80 mix-blend-screen md:block" />;
}
