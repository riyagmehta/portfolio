export const profile = {
  name: "Riya Mehta",
  role: "Software & AI Engineer",
  location: "Chicago, IL",
  status: "MS Computer Science, University of Illinois Chicago · May 2026 · Open to new grad roles",
  links: {
    github: "https://github.com/riyagmehta",
    linkedin: "https://www.linkedin.com/in/riya-mehta-515595200",
    email: "mriya842@gmail.com",
    resume: "/riya-mehta-resume.pdf",
  },
};

export type Project = {
  title: string;
  thesis: string;
  tech: string[];
  metrics: string[];
  links: { label: string; href: string }[];
  notes: string[];
};

export const projects: Project[] = [
  {
    title: "Adaptive Course Generation Platform",
    thesis:
      "Turns a learning goal into a personalized course — generated, streamed, quizzed, and self-recalibrating.",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "ARQ", "Pinecone", "OpenAI", "Docker"],
    metrics: ["36 tests", "~$0.002 per generated course", "every LLM call instrumented"],
    links: [
      { label: "GitHub", href: "https://github.com/riyagmehta/AI-Powered-Adaptive-Course-Generation-Platform" },
      { label: "Live", href: "https://adaptive-course-platform.vercel.app" },
    ],
    notes: [
      "Durable job queue. Generation originally ran on FastAPI BackgroundTasks, which silently lost in-flight work whenever the process restarted. Migrated to ARQ with retries and exponential backoff, idempotent job semantics, a job status table, and automatic requeuing of work orphaned by a crash.",
      "Streaming under real conditions. Native EventSource can't attach auth headers or send a POST body, so lesson content streams through a hand-parsed text/event-stream reader over fetch. This surfaced a bug where a client disconnecting mid-stream raised CancelledError — which `except Exception` doesn't catch — leaving modules permanently stranded in a generating state.",
      "Retrieval measured, not assumed. Built an evaluation harness scoring recall@1/3/5, MRR, groundedness, and refusal rate across 25 test cases. It revealed that short modules produced too few chunks for top-k retrieval to meaningfully discriminate — a limitation invisible without measurement.",
      "Idempotent vector indexing. Serverless Pinecone has no delete-by-metadata-filter, so each module writes to its own namespace, making re-indexing a clean replace rather than an accumulating mess.",
      "Production observability. Every LLM call logs model, token counts, computed USD cost, latency, and cache hit/miss as structured JSON, with a request ID propagated from HTTP handlers into background jobs.",
    ],
  },
  {
    title: "Intelligent Food Donation & Waste Processing System",
    thesis: "Matches surplus food to recipients by distance and expiry urgency, before it spoils.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "JGraphT"],
    metrics: ["17–46% lower matching cost vs. greedy baseline"],
    links: [
      { label: "GitHub", href: "https://github.com/riyagmehta/Intelligent-Food-donation-and-waste-processing-system" },
    ],
    notes: [
      "Matching as a graph problem. Donations and recipients form a weighted graph where edge cost combines delivery distance with expiry urgency, so time-critical items route first. Benchmarked against a greedy baseline across varied load, cutting matching cost 17–46%.",
      "Geospatial routing. Location-aware queries surface nearby collection and delivery options rather than scanning the full donation set.",
      "Event-driven status. Spring events push state changes to clients over SSE, with scheduled jobs sweeping for approaching expiry.",
      "LLM with guardrails. Generated donation descriptions, food-handling guidance, and donor messages, all validated application-side before surfacing to users.",
    ],
  },
  {
    title: "Hand Me Down",
    thesis: "A marketplace only works if strangers trust each other — so this one is walled to a single campus.",
    tech: ["Next.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Jest"],
    metrics: ["Domain-gated registration", "tested against a real in-memory database"],
    links: [
      { label: "GitHub", href: "https://github.com/riyagmehta/hand-me-down" },
      { label: "Live", href: "https://hand-me-down-chi.vercel.app" },
    ],
    notes: [
      "Trust as a constraint, not a feature. Registration is gated on a school's email domain, so every buyer and seller is verifiably a student at the same institution. Listings then surface by shared major and coursework, which matters because the thing a senior is offloading is usually the exact thing a junior is about to need.",
      "Auth decisions that age well. Passwords hashed with bcrypt, JWTs stored in httpOnly cookies rather than localStorage so they're unreachable from injected script, and a guard wrapping every route that reads or mutates private data.",
      "Tests that exercise the database, not a stub. The suite runs against an in-memory MongoDB rather than mocked Mongoose models — mocks happily return whatever you told them to, including for queries that would fail against a real database.",
      "Scheduled cleanup with an auth boundary. A daily job archives stale listings, authenticated by a shared secret checked on the Authorization header so the endpoint isn't publicly triggerable.",
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
