export const basePath = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";

export const withBasePath = (path: string) => `${basePath}${path}`;

export const profile = {
  name: "Riya Mehta",
  role: "Software & AI Engineer",
  location: "Chicago, IL",
  status: "MS Computer Science, University of Illinois Chicago · May 2026 · Open to new grad roles",
  links: {
    github: "https://github.com/riyagmehta",
    linkedin: "https://www.linkedin.com/in/riya-mehta-515595200",
    email: "mriya842@gmail.com",
    resume: withBasePath("/riya-mehta-resume.pdf"),
  },
};

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Adaptive Course Generation Platform",
    summary: "LLM-powered course generation with live streaming and adaptive quizzing.",
    highlights: [
      "Job queue built on ARQ with retries, exponential backoff, and automatic requeue on crash, replacing FastAPI background tasks that dropped work on restart.",
      "Lesson content streamed through a custom SSE reader over fetch, since EventSource can't carry auth headers or a POST body.",
      "Retrieval evaluated with a custom harness scoring recall@k, MRR, and groundedness across 25 test cases.",
      "Every LLM call logged with token count, cost, latency, and cache hit rate under a propagated request ID.",
    ],
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "ARQ", "Pinecone", "OpenAI", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/riyagmehta/AI-Powered-Adaptive-Course-Generation-Platform" },
      { label: "Live", href: "https://adaptive-course-platform.vercel.app" },
    ],
  },
  {
    title: "Intelligent Food Donation & Waste Processing System",
    summary: "Graph-based matching engine that routes surplus food before it spoils.",
    highlights: [
      "Donor-recipient matching modeled as a weighted graph, scored on delivery distance and expiry urgency.",
      "Cuts matching cost by up to 46% compared to a greedy baseline across varied load.",
      "Status changes pushed to clients over SSE through Spring application events.",
      "Scheduled jobs track approaching expiry and archive stale donations automatically.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "JGraphT"],
    links: [
      { label: "GitHub", href: "https://github.com/riyagmehta/Intelligent-Food-donation-and-waste-processing-system" },
    ],
  },
  {
    title: "Hand Me Down",
    summary: "Campus-only marketplace with school-verified accounts.",
    highlights: [
      "Registration gated by school email domain, with listings ranked by shared major and coursework.",
      "Passwords hashed with bcrypt; JWTs stored in httpOnly cookies instead of localStorage.",
      "Test suite runs against a real in-memory MongoDB rather than mocked Mongoose models.",
      "Daily cron job purges stale listings behind a shared-secret auth check.",
    ],
    tech: ["Next.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Jest"],
    links: [
      { label: "GitHub", href: "https://github.com/riyagmehta/hand-me-down" },
      { label: "Live", href: "https://hand-me-down-chi.vercel.app" },
    ],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Pramata",
    role: "AI Solution Engineer Intern",
    location: "California, USA (Remote)",
    dates: "Jul 2026 – Present",
    bullets: [
      "Design and ship GenAI solutions for the Customer Success org, including agents that automate contract extraction and analysis across multiple LLM providers.",
      "Built an internal agent library with reusable retrieval, tool-calling, and structured-output patterns, replacing one-off agent code per use case.",
      "Develop MCP plugins that expose enterprise data and internal services as callable tools, defining the schemas and execution rules agents run against.",
      "Debug agent failures on live customer accounts, isolating whether a wrong answer traces back to retrieval, context, prompting, tool execution, or the model itself.",
    ],
  },
  {
    company: "Fuzzy Cloud",
    role: "Software Developer",
    location: "Ahmedabad, India",
    dates: "Dec 2023 – Aug 2024",
    bullets: [
      "Owned search on a production healthcare app: integrated MeiliSearch with debounced fuzzy queries, cutting response time 35% and surfacing correct results for misspelled or partial input.",
      "Built offline-first record access with IndexedDB, syncing local writes through a CQRS and event-sourcing pipeline so the UI never blocked on network state.",
      "Built the client state layer in Zustand and Jotai, keeping server cache and UI state separate across a Rust/Actix backend and SQLite store.",
      "Reproduced and fixed production bugs across frontend, API, search, and persistence layers, using Playwright for end-to-end repro and Postman for API-level isolation.",
    ],
  },
  {
    company: "Oasis Infobyte",
    role: "Web Development Intern",
    location: "India (Remote)",
    dates: "Jul 2023 – Aug 2023",
    bullets: [
      "Built multi-step order and user management flows across React and Node/Express, where state had to stay consistent as requests moved between client, API, and database.",
      "Pushed validation server-side so malformed requests failed before reaching persistent state rather than after.",
    ],
  },
];

export type EducationEntry = {
  school: string;
  degree: string;
  dates: string;
  detail: string;
};

export const education: EducationEntry[] = [
  {
    school: "University of Illinois Chicago",
    degree: "MS Computer Science",
    dates: "Aug 2024 – May 2026",
    detail: "GPA 4.0",
  },
  {
    school: "Dharmsinh Desai University",
    degree: "BTech Information Technology",
    dates: "Sep 2020 – May 2024",
    detail: "CGPA 8.7",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    group: "AI & LLM",
    items: [
      "RAG",
      "embeddings",
      "vector search",
      "AI agents",
      "MCP",
      "structured outputs",
      "model evaluation",
      "prompt engineering",
    ],
  },
  {
    group: "Backend",
    items: ["FastAPI", "Node.js", "Express", "Spring Boot", "Actix", "REST API design", "microservices"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux", "Zustand", "Jotai", "Tailwind"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Pinecone", "MeiliSearch", "SQLite"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Playwright"],
  },
];
