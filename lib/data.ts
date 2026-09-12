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
  thesis: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Adaptive Course Generation Platform",
    thesis:
      "Turns a learning goal into a personalized course — generated, streamed, quizzed, and self-recalibrating.",
    description:
      "Generation runs on a durable ARQ job queue with retries, exponential backoff, and automatic requeuing of orphaned work — replacing an early version on FastAPI background tasks that silently lost progress on every restart. Lesson content streams to the client through a hand-parsed text/event-stream reader over fetch, since native EventSource can't carry auth headers or a POST body; that path surfaced a bug where a client disconnecting mid-stream raised a CancelledError that a bare except Exception couldn't catch, stranding modules mid-generation. Retrieval quality is measured rather than assumed: an evaluation harness scores recall@1/3/5, MRR, groundedness, and refusal rate across 25 test cases, and every LLM call is logged with token counts, computed cost, latency, and cache hit rate under a request ID that threads from the HTTP layer into background jobs.",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "ARQ", "Pinecone", "OpenAI", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/riyagmehta/AI-Powered-Adaptive-Course-Generation-Platform" },
      { label: "Live", href: "https://adaptive-course-platform.vercel.app" },
    ],
  },
  {
    title: "Intelligent Food Donation & Waste Processing System",
    thesis: "Matches surplus food to recipients by distance and expiry urgency, before it spoils.",
    description:
      "Donations and recipients form a weighted graph where edge cost blends delivery distance with time-to-spoil, so the most urgent items route first; benchmarked against a greedy baseline across varied load, this cuts matching cost 17–46%. Geospatial queries surface nearby collection and delivery options rather than scanning the full donation set, Spring events push status changes to clients over SSE, and scheduled jobs sweep for approaching expiry. Generated donation descriptions, food-handling guidance, and donor messages all pass through application-side validation before reaching a user.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "JGraphT"],
    links: [
      { label: "GitHub", href: "https://github.com/riyagmehta/Intelligent-Food-donation-and-waste-processing-system" },
    ],
  },
  {
    title: "Hand Me Down",
    thesis: "A marketplace only works if strangers trust each other — so this one is walled to a single campus.",
    description:
      "Registration is gated on a school's email domain, so every buyer and seller is verifiably a student at the same institution, and listings surface by shared major and coursework — the thing a senior is offloading is usually what a junior is about to need. Passwords are hashed with bcrypt and JWTs live in httpOnly cookies rather than localStorage, unreachable from injected script, with a guard wrapping every route that reads or mutates private data. The test suite runs against a real in-memory MongoDB instead of mocked Mongoose models, since mocks happily return data that would fail against an actual database, and a daily job archives stale listings behind a shared-secret check on the Authorization header so the endpoint can't be triggered publicly.",
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
      "Build agents over multiple LLMs for contract extraction and analysis, combining retrieval, tool calling, and structured outputs.",
      "Develop MCP plugins connecting agents to enterprise data and application services, defining the tool schemas and execution rules the agents depend on.",
      "Trace agent failures across real customer scenarios — isolating whether a wrong answer came from retrieval, context, prompting, tool execution, or the model itself.",
    ],
  },
  {
    company: "Fuzzy Cloud",
    role: "Software Developer",
    location: "Ahmedabad, India",
    dates: "Dec 2023 – Aug 2024",
    bullets: [
      "Worked on a production healthcare application spanning React/Next.js, Rust/Actix, SQLite, and MeiliSearch.",
      "Integrated MeiliSearch with debounced fuzzy search, cutting search response time by 35% and improving results for incomplete or misspelled queries.",
      "Built React workflows with Zustand and Jotai, managing state across UI interactions, APIs, and persisted data.",
      "Implemented IndexedDB-based offline support and worked with CQRS and event sourcing for application state and backend workflows.",
      "Debugged production issues across frontend, APIs, search, and persistence using Playwright and Postman.",
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
