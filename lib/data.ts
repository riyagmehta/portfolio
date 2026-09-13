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
    title: "Distributed API Gateway",
    summary:
      "A distributed API gateway providing rate limiting, circuit breaking, and observability for backend services under concurrent load.",
    highlights: [
      "Implements an atomic Postgres-based token bucket rate limiter, verified through a concurrency test that fires simultaneous requests across multiple gateway instances and confirms the shared limit holds exactly, including a negative-control test demonstrating where a naive implementation lets excess requests through.",
      "Circuit breaker with closed, open, and half-open states isolates failing downstream services and recovers automatically once health is restored.",
      "Exposes Prometheus-format metrics per instance, visualized on a live dashboard covering request rates, latency percentiles, and breaker state.",
      "Deployed as a multi-container stack on Oracle Cloud Infrastructure, with gateway instances behind an nginx load balancer backed by a shared Postgres instance.",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "nginx", "Oracle Cloud Infrastructure"],
    links: [{ label: "GitHub", href: "https://github.com/riyagmehta/distributed-api-gateway" }],
  },
  {
    title: "Adaptive Course Generation Platform",
    summary: "Course generation platform with a crash-resistant job queue and a custom evaluation harness for retrieval quality.",
    highlights: [
      "Job queue built on ARQ with retries, exponential backoff, and automatic requeue on crash, ensuring failed jobs survive a restart.",
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
    summary:
      "Donation allocation system that matches donors to recipients using the Hungarian algorithm, weighted by delivery distance and expiry urgency.",
    highlights: [
      "Solves allocation with the Hungarian algorithm, an optimal bipartite matching method for pairing donors to recipients.",
      "Matching algorithm reduces cost by 17 to 46 percent across varied load conditions.",
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
    summary:
      "A campus marketplace connecting graduating seniors with incoming students through major and coursework based matching.",
    highlights: [
      "Ranks listings against each student's major and course history, surfacing a graduating senior's textbooks and equipment to the incoming students most likely to need them.",
      "Registration is restricted to verified university email domains, keeping the marketplace scoped to enrolled students.",
      "Purchases on limited-availability listings run through a concurrency-safe transaction path, ensuring only one buyer can claim a one-off item even under simultaneous requests.",
      "Listings are semester-aware: move-out listings auto-expire at the end of the term, and sellers can bundle multiple items into a single listing.",
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
      "Designed REST APIs for order creation, status updates, and user management, and wired the React frontend to consume them for a live e-commerce order flow.",
      "Built a multi-step order status pipeline (placed, processing, shipped, delivered), keeping order state in sync between the client and the database at each stage.",
      "Traced and fixed bugs across the full stack, from React components to Express route handlers to the database layer, adapting the implementation as product requirements changed.",
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
