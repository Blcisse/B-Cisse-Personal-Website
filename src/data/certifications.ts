export type Credential = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  verificationUrl: string;
  description: string;
};

export type Award = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  verificationUrl: string;
  description: string;
};

export const certifications: Credential[] = [
  {
    id: "google-cloud-db",
    title: "Google Cloud Database Engineer Certificate",
    issuer: "Google",
    category: "Cloud + Database Engineering",
    verificationUrl: "#cert-google-cloud-database-engineer",
    description: "Credential validating cloud database fundamentals, managed data services, and database engineering concepts for scalable systems.",
  },
  {
    id: "google-bi",
    title: "Google Business Intelligence Professional Certificate",
    issuer: "Google",
    category: "Business Intelligence",
    verificationUrl: "#cert-google-business-intelligence",
    description: "Professional certificate focused on BI workflows, analytics-ready reporting, dashboard thinking, and decision-support data products.",
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Certificate",
    issuer: "Google",
    category: "Data Analytics",
    verificationUrl: "#cert-google-data-analytics",
    description: "Foundational analytics credential covering data preparation, analysis, visualization, and insight communication practices.",
  },
];

export const awards: Award[] = [
  {
    id: "apple-performance-award",
    title: "Apple Performance Award",
    issuer: "Apple",
    category: "Leadership + Technical Precision",
    verificationUrl: "#award-apple-performance",
    description:
      "Recognized by Apple’s Senior and District Managers for exceptional leadership and technical precision in customer engagement and solution delivery.",
  },
];
