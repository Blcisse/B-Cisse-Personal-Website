import type React from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function SiteShell({ children }: React.PropsWithChildren) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main className="relative z-10" id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
