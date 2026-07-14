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
  clutchUrl?: string;
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
  videoUrl: string;
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
    image: "/images/muncheezdemodisplay.png",
    gallery: ["Ordering UI", "Admin dashboard", "Payments flow"],
    githubUrl: "",
    clutchUrl: "https://clutch.co/go-to-review/9f601cb0-f78e-4f17-aae1-5565fcdbff5b/265866",
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
    image: "/images/alfredlogo.png",
    gallery: ["Voice interface", "Vision pipeline", "RAG services"],
    githubUrl: "https://github.com/Blcisse/ALFRED-AIA-107",
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
    image: "/images/ooiqlogo.png",
    gallery: ["Analytics UI", "Insight engine", "Executive view"],
    githubUrl: "https://github.com/Blcisse/OmniInsight-IQ",
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
    image: "/images/ywcsoftwarewebbydesktop.png",
    gallery: ["Homepage", "Services", "About"],
    githubUrl: "",
    liveUrl: "https://ballacisse.com/",
    caseStudyUrl: "#",
    featured: true,
  },
];

export const websiteProjects: WebsiteProject[] = [
  {
    id: "forgeline-developments",
    type: "website",
    title: "Forgeline Developments",
    name: "Forgeline Developments",
    year: "2025",
    category: "Construction / Contractor",
    summary: "Premium construction company website built to showcase projects, services, and credibility for a residential and commercial builder.",
    description: "A polished construction brand site designed to highlight project portfolios, service offerings, and lead-generation pathways for a growing contractor business.",
    longDescription: "A construction-focused website experience built for credibility, project visibility, and conversion—featuring service breakdowns, project galleries, trust signals, and mobile-first layouts tailored to contractor discovery.",
    highlights: ["Project portfolio showcase", "Service and capability pages", "Lead capture and contact funnels"],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    services: ["Brand UI", "Project showcase", "Lead capture", "Mobile optimization"],
    metrics: "Construction brand presence",
    image: "/images/project-placeholder.svg",
    gallery: ["Homepage", "Projects", "Contact flow"],
    githubUrl: "",
    liveUrl: "https://ballacisse.com/",
    caseStudyUrl: "#case-forgeline",
    detailUrl: "#case-forgeline",
    videoUrl: "https://video.wixstatic.com/video/21b47c_f7e64862b68444c78c266e4946aa2185/1080p/mp4/file.mp4",
    featured: true,
  },
  {
    id: "hometown-builders",
    type: "website",
    title: "HomeTown Builders",
    name: "HomeTown Builders",
    year: "2025",
    category: "Construction / Home Builder",
    summary: "Local home builder website focused on craftsmanship, service transparency, and turning browsing homeowners into qualified project inquiries.",
    description: "A home builder website built around trust, local credibility, and clear pathways for homeowners to explore services and request consultations.",
    longDescription: "A residential construction website pattern emphasizing craftsmanship storytelling, service education, testimonials, and frictionless inquiry flows for local home improvement and building clients.",
    highlights: ["Homeowner-focused service pages", "Trust and testimonial sections", "Consultation request flow"],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    services: ["Service pages", "Trust content", "Lead capture", "Responsive build"],
    metrics: "Local builder lead generation",
    image: "/images/project-placeholder.svg",
    gallery: ["Homepage", "Services", "Contact flow"],
    githubUrl: "",
    liveUrl: "https://ballacisse.com/",
    caseStudyUrl: "#case-hometown-builders",
    detailUrl: "#case-hometown-builders",
    videoUrl: "https://video.wixstatic.com/video/21b47c_07fd17c5d546485eb13673818222c201/1080p/mp4/file.mp4",
  },
  {
    id: "steven-lorant-real-estate",
    type: "website",
    title: "Steven Lorant Real Estate Agent",
    name: "Steven Lorant Real Estate Agent",
    year: "2025",
    category: "Real Estate / Agent Portfolio",
    summary: "Real estate agent website designed to showcase listings expertise, market credibility, and high-intent buyer and seller contact paths.",
    description: "A real estate agent brand site built for listing visibility, market authority, and streamlined contact for buyers and sellers.",
    longDescription: "A real estate portfolio website centered on agent credibility, listing presentation, neighborhood expertise, and conversion-ready contact experiences for property inquiries.",
    highlights: ["Agent credibility and bio presentation", "Listing and market expertise sections", "Buyer/seller contact funnels"],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    services: ["Agent branding", "Listing presentation", "Lead capture", "Mobile optimization"],
    metrics: "Real estate lead conversion",
    image: "/images/project-placeholder.svg",
    gallery: ["Homepage", "Listings", "Contact flow"],
    githubUrl: "",
    liveUrl: "https://ballacisse.com/",
    caseStudyUrl: "#case-steven-lorant",
    detailUrl: "#case-steven-lorant",
    videoUrl: "https://video.wixstatic.com/video/21b47c_f8c24f604d9a4d18b936dcdcc4ef1c43/1080p/mp4/file.mp4",
    featured: true,
  },
  {
    id: "brightview-dental",
    type: "website",
    title: "BrightView Dental",
    name: "BrightView Dental",
    year: "2025",
    category: "Dental / Healthcare",
    summary: "Dental practice website focused on patient trust, service education, appointment requests, and local discovery for a modern dental office.",
    description: "A clean dental practice website built to communicate care quality, educate patients on services, and drive appointment inquiries.",
    longDescription: "A healthcare service website pattern for dental practices—emphasizing trust-forward design, treatment education, insurance and appointment clarity, and mobile-first patient discovery.",
    highlights: ["Patient trust and care messaging", "Service and treatment education", "Appointment request flow"],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Local SEO"],
    services: ["Service pages", "Appointment CTAs", "Local SEO", "Responsive build"],
    metrics: "Patient inquiry generation",
    image: "/images/project-placeholder.svg",
    gallery: ["Homepage", "Services", "Appointment flow"],
    githubUrl: "",
    liveUrl: "https://ballacisse.com/",
    caseStudyUrl: "#case-brightview-dental",
    detailUrl: "#case-brightview-dental",
    videoUrl: "https://video.wixstatic.com/video/21b47c_535a34677ed84b44a8bf549e8dd969aa/1080p/mp4/file.mp4",
  },
  {
    id: "russo-weston-law",
    type: "website",
    title: "Russo and Weston Law Office",
    name: "Russo and Weston Law Office",
    year: "2025",
    category: "Legal / Law Firm",
    summary: "Law firm website built for authority, practice-area clarity, and confident client intake for a professional legal office.",
    description: "A law office website designed to communicate legal expertise, practice areas, and clear consultation pathways for prospective clients.",
    longDescription: "A legal services website architecture focused on firm credibility, practice-area education, attorney positioning, and high-trust contact experiences for case inquiries.",
    highlights: ["Practice area clarity", "Firm credibility and authority", "Consultation intake flow"],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    services: ["Practice area pages", "Firm branding", "Lead capture", "Mobile optimization"],
    metrics: "Legal consultation intake",
    image: "/images/project-placeholder.svg",
    gallery: ["Homepage", "Practice areas", "Contact flow"],
    githubUrl: "",
    liveUrl: "https://ballacisse.com/",
    caseStudyUrl: "#case-russo-weston",
    detailUrl: "#case-russo-weston",
    videoUrl: "https://video.wixstatic.com/video/21b47c_053fe21854e041d0a9964d418819c28a/1080p/mp4/file.mp4",
  },
];
