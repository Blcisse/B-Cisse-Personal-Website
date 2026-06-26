export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  description: string;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#github", handle: "GitHub Repository", description: "Code, systems, and project repositories" },
  { label: "LinkedIn", href: "#linkedin", handle: "LinkedIn Profile", description: "Professional updates and recruiter discovery" },
  { label: "Portfolio", href: "https://ballacisse.com", handle: "ballacisse.com", description: "Live portfolio and personal brand hub" },
  { label: "Email", href: "mailto:bl.cisse22@gmail.com", handle: "bl.cisse22@gmail.com", description: "Direct contact for opportunities and projects" },
  { label: "Resume", href: "#resume", handle: "Resume Placeholder", description: "Download-ready resume link placeholder" },
];
