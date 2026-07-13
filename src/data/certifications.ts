export type Credential = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  verificationUrl: string;
  description: string;
  image: string;
};

export type Award = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  verificationUrl: string;
  description: string;
  image: string;
};

export const certifications: Credential[] = [
  {
    id: "google-cloud-db",
    title: "Google Cloud Database Engineer Certificate",
    issuer: "Google",
    category: "Cloud + Database Engineering",
    verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/28ESV3UKVY3U",
    description: "Credential validating cloud database fundamentals, managed data services, and database engineering concepts for scalable systems.",
    image: "/images/BGDTBENGCertification.jpg",
  },
  {
    id: "google-bi",
    title: "Google Business Intelligence Professional Certificate",
    issuer: "Google",
    category: "Business Intelligence",
    verificationUrl: "https://coursera.org/verify/professional-cert/SMHLRCFIWCVC",
    description: "Professional certificate focused on BI workflows, analytics-ready reporting, dashboard thinking, and decision-support data products.",
    image: "/images/BGBICertification.jpg",
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Certificate",
    issuer: "Google",
    category: "Data Analytics",
    verificationUrl: "https://www.credly.com/go/wxC6g4WD",
    description: "Foundational analytics credential covering data preparation, analysis, visualization, and insight communication practices.",
    image: "/images/GDANLTCertification.jpg",
  },
];

export const awards: Award[] = [
  {
    id: "apple-performance-award",
    title: "Apple Performance Award",
    issuer: "Apple",
    category: "Leadership + Technical Precision",
    verificationUrl: "",
    description:
      "Recognized by Apple’s Senior and District Managers for exceptional leadership and technical precision in customer engagement and solution delivery.",
    image: "/images/applelogo.jpg",
  },
];
