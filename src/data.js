// ============================================================
// PORTFOLIO DATA — edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Riya Mehta",
  location: "Chicago, IL",
  title: "Full-stack + AI Engineer",
  tagline: "Balanced full-stack + AI engineer. Builds systems that don't silently break.",
  email: "mriya842@gmail.com",
  phone: "(312) 358-8464",
  github: "https://github.com/riyagmehta",
  githubHandle: "github.com/riyagmehta",
  linkedin: "https://linkedin.com/in/riya-mehta",
  linkedinHandle: "linkedin.com/in/riya-mehta",
};

export const bootLines = [
  { cmd: "whoami" },
  { out: "Riya Mehta — full-stack + AI engineer" },
  { out: "Chicago, IL · MS CS @ UIC" },
  { cmd: "cat status.txt" },
  { out: "> currently: AI Solution Engineer Intern @ Pramata" },
  { out: "> balanced full-stack + AI engineer" },
  { out: "> builds systems that don't silently break" },
];

export const skills = [
  {
    title: "Languages",
    tags: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    title: "Frontend",
    tags: ["React", "Next.js"],
  },
  {
    title: "Backend",
    tags: ["Node.js", "Express", "Spring Boot", "FastAPI"],
  },
  {
    title: "AI / ML",
    tags: ["LLMs", "RAG", "AI Agents", "Pinecone", "Claude Code"],
  },
  {
    title: "Data & Infra",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Docker"],
  },
];

export const experience = [
  {
    id: "exp-pramata",
    role: "AI Solution Engineer Intern",
    company: "Pramata",
    location: "Remote",
    dates: "Jul 2026 – Present",
    bullets: [
      "Building AI agents and agentic workflows that bring structure to enterprise contract intelligence — extraction, reasoning, summarization, and structured data generation across complex legal documents for Fortune 500 clients.",
      "Designed and integrated plugins/tools for MCP servers, giving agents controlled access to external tools, data sources, and services rather than relying on hardcoded integrations.",
      "Works across multiple LLM models day-to-day, owning the full loop: prompt design, tool-calling workflows, retrieval and context management, structured outputs, and evaluating model performance and reliability against real enterprise requirements.",
      "Regularly sits with customer-facing teams to translate ambiguous, high-stakes requirements into production-oriented AI solutions — then iterates on agent behavior and workflow reliability post-launch rather than treating a working demo as finished.",
      "Debugs failures at every layer of the pipeline: retrieval misses, lost context, malformed tool calls, and inconsistent structured outputs.",
    ],
    annotations: ["MCP servers & tool plugins", "Multi-model LLM workflows", "Fortune 500 contract AI", "Prompt design → eval loop"],
  },
  {
    id: "exp-fuzzycloud",
    role: "Software Developer Intern",
    company: "Fuzzy Cloud",
    location: "Ahmedabad, India",
    dates: "Dec 2023 – Aug 2024",
    bullets: [
      "Contributed to a live healthcare client platform — not a sandbox project — building a secure, cross-platform management system across React, Chakra UI, and Next.js on the frontend, backed by a Rust/Actix/SQLite backend.",
      "Worked across the full stack: frontend components, API contracts, and data layer, collaborating closely with backend engineers to keep contracts consistent across the Rust/React boundary.",
      "Led the MeiliSearch implementation (fuzzy matching + debounced retrieval) that cut search response times by 35% while improving SEO.",
      "Built offline-first functionality via IndexedDB and worked with CQRS/event-sourcing patterns to keep the system consistent even with unreliable connectivity — a non-negotiable requirement for a healthcare product.",
      "Validated reliability and compliance requirements with Postman and Playwright test coverage, catching integration issues before they reached the client's production environment.",
    ],
    annotations: ["Rust/Actix + React/Next.js", "MeiliSearch: −35% search latency", "Offline-first via IndexedDB", "CQRS / event sourcing"],
  },
  {
    id: "exp-oasis",
    role: "Web Development Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    dates: "Jul 2023 – Aug 2023",
    bullets: [
      "Built and deployed project-based web applications with scalable, component-driven frontend architecture designed to be extended rather than rewritten.",
      "Implemented dynamic application features while actively profiling and optimizing performance through debugging and refactoring.",
      "Maintained structured, documented development workflows — clear commit hygiene and modular code organization — so the codebase stayed maintainable as features were added under a compressed timeline.",
    ],
    annotations: ["Component-driven frontend", "Performance profiling", "Commit hygiene & docs"],
  },
];

export const projects = [
  {
    id: "proj-course",
    slug: "course-platform",
    name: "AI-Powered Adaptive Course Generation Platform",
    status: "in progress",
    desc: "Full-stack e-learning platform generating personalized courses from a user's goals and skill level, using a multi-stage LLM pipeline — onboarding, structured outline synthesis, real-time content generation via Server-Sent Events — with difficulty auto-calibrating from quiz performance. RAG-based Q&A layer: paragraph-aware chunking, OpenAI embeddings upserted to Pinecone with per-module namespaces, Redis caching to skip redundant LLM/vector-search calls, grounded answers that decline out-of-scope questions. Async backend with SQLAlchemy 2.0 + asyncpg, Alembic migrations, JWT auth, integration tests against live Postgres/Redis/Pinecone.",
    stack: ["FastAPI", "React", "PostgreSQL", "Redis", "OpenAI API", "Pinecone", "SSE"],
    link: null,
    annotations: ["FastAPI + React + Postgres", "RAG: Pinecone + OpenAI embeddings", "SSE streaming content gen", "status: in progress"],
  },
  {
    id: "proj-food",
    slug: "food-donation",
    name: "Intelligent Food Donation & Waste Allocation Platform",
    status: null,
    desc: "Full coordination system connecting donors, collection centers, and staff to cut food waste through real-time tracking and smart allocation. AI-generated donation descriptions, handling guidance, and personalized thank-yous augment the human workflow.",
    stack: ["Spring Boot", "React", "PostgreSQL", "Gemini AI"],
    link: null,
    annotations: ["Spring Boot + React", "Gemini AI-generated content", "Real-time allocation tracking"],
  },
  {
    id: "proj-shelter",
    slug: "sweet-home-finder",
    name: "Sweet Home Finder",
    status: "live",
    desc: "Pet-adoption platform with a preference-based matching quiz pairing adopters with pets, plus real-time chat between adopters and shelters — a live two-sided marketplace, not a static directory.",
    stack: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
    link: "https://shelter-homee.vercel.app",
    linkLabel: "shelter-homee.vercel.app",
    annotations: ["Socket.IO real-time chat", "Preference-based matching quiz", "live: shelter-homee.vercel.app"],
  },
  {
    id: "proj-handmedown",
    slug: "hand-me-down",
    name: "Hand-Me-Down",
    status: "live",
    desc: "Peer-to-peer marketplace for college students to buy, sell, and resell items to incoming students, turning seasonal dorm/textbook churn into a closed-loop campus resale economy. Fast, low-friction listing flow designed for move-out week.",
    stack: ["Next.js", "Tailwind"],
    link: "https://hand-me-down-chi.vercel.app",
    linkLabel: "hand-me-down-chi.vercel.app",
    annotations: ["Next.js + Tailwind", "P2P campus resale", "live: hand-me-down-chi.vercel.app"],
  },
  {
    id: "proj-energy",
    slug: "energy-navigator",
    name: "Chicago Energy Performance Navigator",
    status: "team project · 5 contributors",
    desc: "Co-built a data science platform analyzing Chicago building energy benchmarking data. Trained 5 ML models (ENERGY STAR score prediction, building clustering) revealing similar buildings vary 3–5x in energy consumption — exposing major untapped efficiency potential. Delivered as an interactive dashboard for city planners and building owners.",
    stack: ["Python", "Streamlit", "scikit-learn"],
    link: null,
    annotations: ["Team project · 5 contributors", "5 ML models trained", "Streamlit dashboard"],
  },
];

export const education = [
  {
    school: "University of Illinois Chicago",
    degree: "MS Computer Science",
    dates: "2024 – 2026",
    gpa: "4.0 / 4.0 GPA",
  },
  {
    school: "Dharmsinh Desai University",
    degree: "BTech Information Technology",
    dates: "2020 – 2024",
    gpa: "8.7 / 10.0 CGPA",
  },
];

export const sectionOrder = ["about", "experience", "projects", "skills", "education", "resume", "contact"];

export const sectionMeta = {
  about: { label: "About", cmd: "whoami" },
  experience: { label: "Experience", cmd: "cat experience.log" },
  projects: { label: "Projects", cmd: "ls ~/projects" },
  skills: { label: "Skills", cmd: "cat skills.json" },
  education: { label: "Education", cmd: "cat education.log" },
  resume: { label: "Resume", cmd: "open resume.pdf" },
  contact: { label: "Contact", cmd: "cat contact.txt" },
};

export const sectionAnnotations = {
  about: ["Chicago, IL", "MS CS @ UIC — 4.0 GPA", "Full-stack + AI engineer"],
  skills: ["20 tools across 5 domains", "Languages → Data & Infra"],
  education: ["4.0 GPA — MS CS, UIC", "8.7/10 CGPA — BTech IT"],
  resume: ["PDF preview + download"],
  contact: ["Open to full-time SDE / AI eng roles", "Chicago, IL"],
};

export const observeOrder = [
  "about",
  ...experience.map((e) => e.id),
  ...projects.map((p) => p.id),
  "skills",
  "education",
  "resume",
  "contact",
];

const titleMap = {
  about: "About",
  skills: "Skills",
  education: "Education",
  resume: "Resume",
  contact: "Contact",
};
experience.forEach((e) => { titleMap[e.id] = `${e.role} · ${e.company}`; });
projects.forEach((p) => { titleMap[p.id] = p.name; });

const annotationLookup = { ...sectionAnnotations };
experience.forEach((e) => { annotationLookup[e.id] = e.annotations; });
projects.forEach((p) => { annotationLookup[p.id] = p.annotations; });

export function getAnnotations(id) {
  return annotationLookup[id] || [];
}

export function getTitle(id) {
  return titleMap[id] || id;
}

export function parentSection(id) {
  if (!id) return "about";
  if (id.startsWith("exp-")) return "experience";
  if (id.startsWith("proj-")) return "projects";
  return id;
}
