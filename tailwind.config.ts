import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05050a",
        obsidian: "#090913",
        glass: "rgba(255,255,255,0.08)",
        line: "rgba(255,255,255,0.16)",
        neon: "#7cf7ff",
        violet: "#9b7cff",
        ember: "#ff6b4a",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 64px rgba(124,247,255,0.18)",
        glass: "0 24px 80px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "brand-conic": "conic-gradient(from 180deg at 50% 50%, #05050a, #10184a, #311030, #05050a)",
      },
    },
  },
  plugins: [],
};

export default config;
