// ============================================================
// PORTFOLIO DATA — edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Riya Mehta",
  title: "Software Engineer",
  email: "mriya842@gmail.com",
  phone: "(312) 358-8464",
  github: "https://github.com/riyagmehta",
  linkedin: "https://linkedin.com/in/riya-mehta-515595200",
  bio: "I build distributed systems, full-stack web applications, and production AI pipelines. My work spans backend service architecture, real-time data transport, vector retrieval systems, and agentic LLM orchestration. I care about systems that fail gracefully, codebases that are easier to work in after I leave them, and closing the gap between what a model can do in isolation and what it takes to make it reliable under real load.",
};

export const stats = [
  { num: "4.0", label: "MS GPA, UIC" },
  { num: "35%", label: "Search latency reduced" },
  { num: "10+", label: "Enterprise AI deployments" },
  { num: "2026", label: "MS Computer Science" },
];

export const skills = [
  {
    title: "Languages",
    tags: ["TypeScript", "Python", "JavaScript", "Java", "SQL"],
  },
  {
    title: "Frontend",
    tags: ["React", "Next.js", "Tailwind CSS", "Redux", "SSE", "WebSocket", "Chakra UI"],
  },
  {
    title: "Backend",
    tags: ["Node.js", "FastAPI", "Express.js", "Spring Boot", "REST APIs", "CQRS", "Socket.IO"],
  },
  {
    title: "AI & Agents",
    tags: ["LangChain", "OpenAI API", "Anthropic API", "RAG Pipelines", "Pinecone", "Prompt Engineering", "MCP"],
  },
  {
    title: "Databases",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Sequelize ORM"],
  },
  {
    title: "DevOps & Tools",
    tags: ["Docker", "AWS EC2/S3", "GitHub Actions", "CI/CD", "Jest", "Playwright", "Vercel", "Streamlit"],
  },
];

export const experience = [
  {
    role: "AI Solution Engineering Intern",
    company: "Pramata",
    location: "Remote",
    dates: "Jun 2026 – Present",
    bullets: [
      "Architect and deploy Claude-powered autonomous agent pipelines for enterprise legal and contract intelligence workflows, optimizing multi-turn reasoning chains and tool-use patterns across 10+ Fortune 500 customer deployments.",
      "Engineered a structured prompt library system using XML-schema-driven templates and few-shot calibration, reducing agent hallucination rates on domain-specific legal entity extraction tasks and enabling reusable automation across customer engagements.",
      "Built real-time ROI analytics dashboards aggregating agent performance telemetry, processing throughput, and accuracy signals, enabling the Solutions team to demonstrate quantifiable value to enterprise stakeholders.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Fuzzy Cloud",
    location: "Ahmedabad, India",
    dates: "Dec 2023 – Jul 2024",
    bullets: [
      "Contributed to a HIPAA-aligned cross-platform healthcare SaaS on a React/Next.js frontend integrated with a Rust/Actix backend via REST APIs, operating under CQRS/event sourcing architecture for auditability and eventual consistency.",
      "Led end-to-end design and implementation of a MeiliSearch-based semantic search layer with fuzzy matching, debounced query batching, and IndexedDB offline caching, reducing p95 search latency by 35% and enabling full offline functionality on mobile.",
      "Diagnosed a silent query failure in a live healthcare system caused by unescaped Unicode characters corrupting the search index. Traced root cause through structured log analysis, shipped a sanitization middleware fix with regression tests the same day.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    dates: "Jul 2023 – Aug 2023",
    bullets: [
      "Built a distributed food delivery platform with a decoupled service architecture: a stateless Node.js/Express API layer handling order lifecycle state machines, a React SPA with Redux for optimistic UI updates and cart state hydration, and a WebSocket pub/sub layer synchronizing real-time order transitions across customer, restaurant, and delivery driver surfaces.",
      "Implemented JWT stateless authentication with refresh token rotation, RBAC middleware for route-level permission enforcement, and bcrypt password hashing. Containerized all services via Docker Compose and deployed to AWS EC2 with a GitHub Actions CI/CD pipeline triggering rolling deployments on merge to main.",
      "Designed the MongoDB schema for order lifecycle management, modelling state transitions as immutable event logs to enable auditability, analytics queries, and retry-safe idempotent operations on delivery confirmation webhooks.",
    ],
  },
];

export const projects = [
  {
    name: "AI Adaptive Course Generation Platform",
    icon: "🧠",
    link: "https://github.com/riyagmehta",
    tags: ["Mar 2026"],
    desc: "Multi-stage agentic pipeline where the LLM autonomously analyzes onboarding signals to generate a structured course outline, drives streamed content delivery via Server-Sent Events with difficulty calibration across sessions, and resolves learner questions through a RAG layer backed by Pinecone vector embeddings and Redis caching. Engineered a chunk-boundary-aware SSE parser that buffers incomplete JSON fragments and retries malformed segments at the backend before they reach the client — a failure class only surfaced under concurrent real-user load.",
    stack: ["React", "FastAPI", "PostgreSQL", "Redis", "OpenAI API", "Pinecone", "SSE", "LangChain"],
  },
  {
    name: "Sweet Home Finder",
    icon: "🐾",
    link: "https://github.com/riyagmehta/Shelter-Home",
    tags: ["Live"],
    desc: "Full-stack pet adoption platform with a React/Node.js/PostgreSQL architecture and bidirectional real-time communication via Socket.IO. Built a compatibility scoring engine that evaluates personality quiz responses against a weighted shelter inventory index to surface ranked matches per adopter profile. Designed complex relational schemas across users, shelters, pets, and adoption applications with Sequelize ORM, implemented JWT auth with RBAC middleware separating shelter-admin and adopter access surfaces, and built a stateful real-time chat system with persisted message history and unread notification tracking.",
    stack: ["React", "Node.js", "PostgreSQL", "Sequelize", "Socket.IO", "JWT", "Chakra UI", "Vercel"],
  },
  {
    name: "Chicago Energy Performance Navigator",
    icon: "⚡",
    link: "https://github.com/riyagmehta/Energy-performance-navigator",
    tags: ["ML"],
    desc: "Data science platform analyzing Chicago's Energy Benchmarking dataset across 4,000+ buildings. Designed an ensemble ML pipeline combining ENERGY STAR score regression, k-means clustering for efficiency archetype discovery, and a gradient-boosted classifier for tier prediction, on top of a feature engineering layer encoding building age, source energy intensity, GHG emissions, and geographic cluster signals. Exposed findings through a Streamlit dashboard with interactive building explorer, choropleth neighborhood maps, and a rule-based recommendation engine generating tailored efficiency pathways per archetype.",
    stack: ["Python", "scikit-learn", "XGBoost", "Pandas", "Streamlit", "Plotly", "GeoPandas"],
  },
  {
    name: "Intelligent Food Donation System",
    icon: "🍱",
    link: "https://github.com/riyagmehta",
    tags: ["Sep 2025"],
    desc: "Event-driven logistics platform built on Spring Boot with async message queues for donation ingestion, real-time notification dispatch, and LLM-powered donor-to-center matching. The matching agent evaluates geolocation proximity, perishability classification windows, and center capacity constraints to produce ranked allocation recommendations. Implemented idempotent queue consumers with dead-letter handling and exponential backoff to ensure no donation is lost under downstream unavailability.",
    stack: ["Spring Boot", "PostgreSQL", "React", "Chakra UI", "Message Queues", "LLM API"],
  },
  {
    name: "Hand Me Down",
    icon: "🛍️",
    link: "https://github.com/riyagmehta",
    tags: ["May 2023"],
    desc: "Campus peer-to-peer marketplace using a hybrid rendering strategy: ISR for listing pages with 60-second revalidation windows, SSR for search and filter routes to guarantee freshness on every request, and static generation for category landing pages. MongoDB aggregation pipelines power faceted multi-attribute filtering with compound indexes tuned for listing cardinality and sort performance. Scaled to 500+ concurrent active listings with sub-100ms filter response times.",
    stack: ["Next.js", "MongoDB", "Tailwind CSS", "Vercel", "ISR", "SSR"],
  },
];

export const education = [
  {
    school: "University of Illinois Chicago",
    degree: "MS Computer Science",
    dates: "Aug 2024 – May 2026",
    gpa: "4.0 / 4.0",
  },
  {
    school: "Dharmsinh Desai University",
    degree: "BTech Information Technology",
    dates: "Aug 2020 – May 2024",
    gpa: "8.7 / 10.0",
  },
];
