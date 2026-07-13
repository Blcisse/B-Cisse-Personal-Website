export type ProjectType = "software" | "website";

export type BaseProject = {
  id: string;
  type: ProjectType;
  title: string;
  year: string;
  category: string;
  summary: string;
  longDescription: string;
  highlights: string[];
  stack: string[];
  metrics: string;
  image: string;
  gallery: string[];
  githubUrl: string;
  liveUrl: string;
  caseStudyUrl: string;
};

export type SoftwareProject = BaseProject & {
  type: "software";
  index: string;
  status: string;
  featured?: boolean;
};

export type WebsiteProject = BaseProject & {
  type: "website";
  name: string;
  description: string;
  services: string[];
  detailUrl: string;
  featured?: boolean;
};

export type ProjectItem = SoftwareProject | WebsiteProject;

export const softwareProjects: SoftwareProject[] = [
  {
    id: "muncheez-online-ordering",
    type: "software",
    index: "01",
    title: "Muncheez LLC — Online Ordering Platform",
    year: "2023",
    category: "Full-Stack / Payments / Restaurant Tech",
    status: "Client platform",
    summary: "Full-stack online ordering and delivery system built to help Muncheez own direct orders, payments, loyalty, memberships, and admin operations.",
    longDescription: "A client-facing restaurant technology platform designed around direct ordering, Square payment flows, loyalty, membership features, and responsive admin management for operational ownership.",
    highlights: ["Built with Next.js, React, TailwindCSS, and Square Web Payments SDK", "Integrated loyalty programs, membership features, and responsive admin dashboard", "Reduced dependency on third-party delivery workflows"],
    stack: ["Next.js", "React", "TailwindCSS", "Square Web Payments", "Admin Dashboard"],
    metrics: "60% direct order volume lift",
    image: "/images/project-placeholder.svg",
    gallery: ["Ordering UI", "Admin dashboard", "Payments flow"],
    githubUrl: "#github-muncheez",
    liveUrl: "#demo-muncheez",
    caseStudyUrl: "#project-muncheez",
    featured: true,
  },
  {
    id: "alfred-ai",
    type: "software",
    index: "02",
    title: "Alfred AI — Voice/Visual Personal & Coding Assistant",
    year: "2024",
    category: "AI / Multimodal / Automation",
    status: "AI system prototype",
    summary: "Multimodal assistant with a React and TypeScript frontend, voice/visual pipelines, RAG reasoning flows, and FastAPI inference services.",
    longDescription: "A multimodal assistant architecture combining frontend interaction, STT/TTS, vision, RAG orchestration, and FastAPI-backed inference endpoints for contextual automation workflows.",
    highlights: ["Integrated STT/TTS using Deepgram, OpenAI, and Whisper", "Connected vision pipelines with LangChain / AutoGen RAG flows", "Exposed FastAPI microservices for inference endpoints"],
    stack: ["React", "TypeScript", "FastAPI", "Deepgram", "OpenAI", "Whisper", "LangChain", "AutoGen"],
    metrics: "Voice + visual automation workflow",
    image: "/images/project-placeholder.svg",
    gallery: ["Voice interface", "Vision pipeline", "RAG services"],
    githubUrl: "#github-alfred-ai",
    liveUrl: "#demo-alfred-ai",
    caseStudyUrl: "#project-alfred-ai",
    featured: true,
  },
  {
    id: "omni-insight-iq",
    type: "software",
    index: "03",
    title: "Omni-Insight IQ — Enterprise AI & Decision Intelligence Platform",
    year: "2025",
    category: "AI / Data / Analytics",
    status: "Enterprise intelligence concept",
    summary: "Modular enterprise-grade intelligence platform for AI-driven analytics, executive-ready insights, and performance intelligence.",
    longDescription: "A decision-intelligence concept with a React/TypeScript analytics interface and Python/FastAPI workflows for explainable insights, data storytelling, and performance intelligence.",
    highlights: ["React and TypeScript analytics interface", "Python/FastAPI AI-driven analytics workflows", "Executive-ready insights and explainable performance intelligence"],
    stack: ["React", "TypeScript", "Python", "FastAPI", "Analytics", "AI Workflows"],
    metrics: "Enterprise decision intelligence layer",
    image: "/images/project-placeholder.svg",
    gallery: ["Analytics UI", "Insight engine", "Executive view"],
    githubUrl: "#github-omni-insight-iq",
    liveUrl: "#demo-omni-insight-iq",
    caseStudyUrl: "#project-omni-insight-iq",
    featured: true,
  },
  {
    id: "ywc-software",
    type: "software",
    index: "04",
    title: "YWC Software — Company Website",
    year: "2025",
    category: "Web Development / Frontend Engineering",
    status: "Company website",
    summary: "Business-grade company website built with HTML, CSS, and advanced JavaScript. Features beyond-modern animations, polished UI, and professional-grade frontend engineering.",
    longDescription: "A business-grade company website featuring beyond-modern animations, polished UI design, and professional-grade frontend engineering. Built with vanilla HTML, CSS, and advanced JavaScript to demonstrate mastery of core web technologies at production quality.",
    highlights: [
      "Beyond-modern animations using advanced CSS and JavaScript techniques",
      "Professional-grade frontend engineering with vanilla web stack",
      "Polished UI/UX design built for business credibility and conversion",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Advanced Animations"],
    metrics: "Business-grade company website",
    image: "/assets/projects/ywc-software-placeholder.png",
    gallery: ["Homepage", "Services", "About"],
    githubUrl: "#",
    liveUrl: "#",
    caseStudyUrl: "#",
    featured: true,
  },
];

export const websiteProjects: WebsiteProject[] = [
  {
    id: "business-website-build",
    type: "website",
    title: "Business Website Build",
    name: "Business Website Build",
    year: "2025",
    category: "Small Business / Conversion",
    summary: "Premium business website placeholder for service providers that need speed, SEO, responsive layout, and clean conversion paths.",
    description: "Premium business website placeholder for service providers that need speed, SEO, responsive layout, and clean conversion paths.",
    longDescription: "A high-polish business site direction built for conversion, credibility, mobile responsiveness, fast loading, and clear service/contact flows.",
    highlights: ["Responsive desktop/mobile layouts", "SEO-ready page structure", "Conversion-focused contact flow"],
    stack: ["Next.js", "React", "Tailwind CSS", "SEO"],
    services: ["Responsive UI", "Performance", "SEO setup", "Contact funnels"],
    metrics: "Client-ready conversion website",
    image: "/images/project-placeholder.svg",
    gallery: ["Desktop mockup", "Mobile mockup", "Service page"],
    githubUrl: "",
    liveUrl: "#website-business-build",
    caseStudyUrl: "#case-business-build",
    detailUrl: "#case-business-build",
    featured: true,
  },
  {
    id: "restaurant-ordering-landing",
    type: "website",
    title: "Restaurant Website / Ordering Landing Page",
    name: "Restaurant Website / Ordering Landing Page",
    year: "2025",
    category: "Restaurant Tech / Ordering",
    summary: "Restaurant-facing landing page concept for menus, offers, ordering CTAs, loyalty messaging, and direct-order ownership.",
    description: "Restaurant-facing landing page concept for menus, offers, ordering CTAs, loyalty messaging, and direct-order ownership.",
    longDescription: "A restaurant landing experience centered around food visuals, direct ordering CTAs, loyalty messaging, membership prompts, and mobile-first customer flow.",
    highlights: ["Menu and ordering CTA structure", "Mobile-first restaurant UX", "Loyalty/membership messaging"],
    stack: ["Next.js", "React", "Tailwind CSS", "Payments"],
    services: ["Landing page", "Ordering CTA", "Menu UX", "Mobile optimization"],
    metrics: "Direct-order landing experience",
    image: "/images/project-placeholder.svg",
    gallery: ["Landing page", "Menu section", "Ordering CTA"],
    githubUrl: "",
    liveUrl: "#website-restaurant-ordering",
    caseStudyUrl: "#case-restaurant-ordering",
    detailUrl: "#case-restaurant-ordering",
  },
  {
    id: "dental-local-service",
    type: "website",
    title: "Dental / Local Service Website",
    name: "Dental / Local Service Website",
    year: "2025",
    category: "Healthcare / Local Service",
    summary: "Clean local-service website placeholder focused on trust, appointment requests, service education, and mobile-first discovery.",
    description: "Clean local-service website placeholder focused on trust, appointment requests, service education, and mobile-first discovery.",
    longDescription: "A trust-forward local service website pattern for appointments, service education, reviews, location visibility, and frictionless lead capture.",
    highlights: ["Trust-forward service pages", "Appointment request flow", "Local SEO structure"],
    stack: ["React", "Tailwind CSS", "Forms", "Analytics"],
    services: ["Service pages", "Lead capture", "Local SEO", "Responsive build"],
    metrics: "Local lead generation interface",
    image: "/images/project-placeholder.svg",
    gallery: ["Homepage", "Services", "Contact flow"],
    githubUrl: "",
    liveUrl: "#website-dental-service",
    caseStudyUrl: "#case-dental-service",
    detailUrl: "#case-dental-service",
  },
  {
    id: "resort-booking-interface",
    type: "website",
    title: "Resort / Booking Interface",
    name: "Resort / Booking Interface",
    year: "2025",
    category: "Hospitality UX / Booking",
    summary: "Booking and kiosk interface placeholder inspired by resort guest flows, water-sport reservations, and frictionless check-in UX.",
    description: "Booking and kiosk interface placeholder inspired by resort guest flows, water-sport reservations, and frictionless check-in UX.",
    longDescription: "A hospitality booking interface direction for resort guests, dive/water-sport reservations, check-in acceleration, and service discovery.",
    highlights: ["Guest booking flow", "Kiosk-ready interface", "Reservation UX patterns"],
    stack: ["React", "Kiosk UI", "Booking UX", "API Integration"],
    services: ["Kiosk interface", "Booking flow", "Guest UX", "System integration"],
    metrics: "40% check-in time reduction reference",
    image: "/images/project-placeholder.svg",
    gallery: ["Kiosk view", "Booking flow", "Guest services"],
    githubUrl: "",
    liveUrl: "#website-resort-booking",
    caseStudyUrl: "#case-resort-booking",
    detailUrl: "#case-resort-booking",
    featured: true,
  },
  {
    id: "agency-portfolio-website",
    type: "website",
    title: "Agency Portfolio Website",
    name: "Agency Portfolio Website",
    year: "2025",
    category: "Portfolio / Brand System",
    summary: "Agency-style portfolio placeholder for showcasing client work, brand credibility, case studies, and premium interactive presentation.",
    description: "Agency-style portfolio placeholder for showcasing client work, brand credibility, case studies, and premium interactive presentation.",
    longDescription: "A premium agency-style portfolio architecture for case studies, client proof, visual polish, motion, and brand storytelling.",
    highlights: ["Case-study-ready layout", "Brand-forward presentation", "Motion and interaction system"],
    stack: ["Next.js", "Framer Motion", "Tailwind CSS", "CMS-ready"],
    services: ["Brand UI", "Case-study layout", "Motion design", "Portfolio system"],
    metrics: "Premium frontend presentation system",
    image: "/images/project-placeholder.svg",
    gallery: ["Work grid", "Case study", "Contact CTA"],
    githubUrl: "",
    liveUrl: "#website-agency-portfolio",
    caseStudyUrl: "#case-agency-portfolio",
    detailUrl: "#case-agency-portfolio",
  },
];
