export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  description: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Blcisse?tab=repositories", handle: "github.com/Blcisse", description: "Code, systems, and project repositories" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ballacisse/", handle: "linkedin.com/in/ballacisse", description: "Professional updates and recruiter discovery" },
  { label: "Portfolio", href: "https://ballacisse.com/", handle: "ballacisse.com", description: "Live portfolio and personal brand hub" },
  { label: "Email", href: "mailto:bl.cisse22@gmail.com", handle: "bl.cisse22@gmail.com", description: "Direct contact for opportunities and projects" },
];
