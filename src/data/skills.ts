export type SkillGroup = {
  index: string;
  label: string;
  description: string;
  accent: "neon" | "violet" | "ember";
  items: string[];
};

export const featuredStack = ["React", "Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "AI/RAG", "AWS"];

export const skillGroups: SkillGroup[] = [
  {
    index: "01",
    label: "Front-End Development",
    description: "Interface engineering, responsive systems, and modern product UI foundations.",
    accent: "neon",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "SwiftUI", "Kotlin"],
  },
  {
    index: "02",
    label: "Back-End Engineering",
    description: "APIs, services, secure endpoints, and scalable application architecture.",
    accent: "violet",
    items: ["Python", "FastAPI", "Flask", "Node.js", "Express.js", "C#", "C++", ".NET Core", "GraphQL", "RESTful APIs", "Microservices", "Secure API Endpoints", "Bash Scripting"],
  },
  {
    index: "03",
    label: "Cloud + Data",
    description: "Data-ready systems, storage layers, analytics workflows, and cloud foundations.",
    accent: "ember",
    items: ["SQL", "PostgreSQL", "MongoDB", "Cassandra", "Power BI", "Tableau", "Data Modeling", "ETL/ELT", "AWS Lambda", "AWS S3", "GCP", "Oracle RDBMS"],
  },
  {
    index: "04",
    label: "AI / ML / Intelligent Systems",
    description: "LLM apps, RAG pipelines, vector retrieval, agentic workflows, and model operations.",
    accent: "neon",
    items: ["LLM Engineering", "VLM Engineering", "Agentic AI", "RAG Systems", "Vector Databases", "FAISS", "Pinecone", "Chroma", "LangChain", "AutoGen", "LlamaIndex", "Semantic Kernel", "PyTorch", "TensorFlow", "LLMOps", "MCP"],
  },
  {
    index: "05",
    label: "Frameworks + Tools",
    description: "Delivery tooling, containerization, orchestration, pipelines, and data engineering frameworks.",
    accent: "violet",
    items: ["Git/GitHub", "CI/CD", "Docker", "Kubernetes", "Pydantic", "PySpark", "Apache Spark", "Airflow", "Azure DevOps"],
  },
];
