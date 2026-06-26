export type Experience = {
  index: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  impact: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    index: "01",
    company: "YWC Software LLC",
    role: "Founder / Sr. Software Engineer",
    location: "New York, NY",
    period: "May 2023 – Aug 2025",
    summary: "Founded and directed a digital-product startup delivering high-performance websites, mobile applications, and enterprise-grade software for small to medium-sized businesses.",
    impact: "Built client-facing full-stack solutions while improving delivery efficiency, execution quality, and deployment discipline across engagements.",
    highlights: [
      "Founded and directed a digital-product startup",
      "Delivered websites, mobile apps, and enterprise-grade software",
      "Built client-facing full-stack solutions",
      "Improved delivery efficiency and execution quality",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Full-stack", "Client systems"],
  },
  {
    index: "02",
    company: "Freelance",
    role: "Software Developer",
    location: "Remote / New York, NY",
    period: "Apr 2021 – Aug 2025",
    summary: "Designed, developed, and maintained business websites and custom interfaces using modern frontend tooling and practical business-focused delivery.",
    impact: "Improved SEO visibility and organic reach by up to 45%, and reduced guest check-in time by 40% through a custom Amoray Dive Resort kiosk interface.",
    highlights: [
      "Built business websites using Next.js, React, and WordPress",
      "Improved SEO visibility and organic reach by up to 45%",
      "Built Amoray Dive Resort kiosk interface",
      "Reduced guest check-in time by 40%",
    ],
    stack: ["Next.js", "React", "WordPress", "SEO", "Kiosk UX"],
  },
  {
    index: "03",
    company: "Apple Inc.",
    role: "Product Zone Technical Specialist",
    location: "Victor, NY",
    period: "Mar 2022 – Mar 2023",
    summary: "Supported customer-facing technical operations across appointments, device troubleshooting, and carrier-connected workflows.",
    impact: "Maintained high customer satisfaction and technical accuracy while translating complex device and service issues into clear next steps.",
    highlights: [
      "Managed customer appointments and device troubleshooting",
      "Supported carrier integrations",
      "Maintained high satisfaction and technical accuracy",
    ],
    stack: ["Technical support", "Customer systems", "Carrier workflows", "Diagnostics"],
  },
];
