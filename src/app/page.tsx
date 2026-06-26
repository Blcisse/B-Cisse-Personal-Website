import { SiteShell } from "@/components/layout/SiteShell";
import { AnimatedBackground } from "@/components/effects/AnimatedBackground";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { FluidCursorCanvas } from "@/components/effects/FluidCursorCanvas";
import { WelcomeLoader } from "@/components/effects/WelcomeLoader";
import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { WebsitePortfolioSection } from "@/components/sections/WebsitePortfolioSection";

export default function Home() {
  return (
    <SiteShell>
      <WelcomeLoader />
      <AnimatedBackground />
      <FluidCursorCanvas />
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <WebsitePortfolioSection />
      <SocialSection />
      <ContactSection />
    </SiteShell>
  );
}
