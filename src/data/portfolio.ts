import type {
  Greeting,
  SocialLinks,
  SkillSection,
  TechStack,
  WorkExperience,
  ProjectsSection,
  Achievements,
  EducationSection,
  ContactInfo
} from '../types';

export const greeting: Greeting = {
  name: "Vishal",
  title: "Hi, I'm Vishal 👋",
  subtitle: "Backend Engineer focused on designing reliable, scalable, and production-grade SaaS systems. Experienced in architecting multi-tenant platforms, optimizing backend performance, and solving complex infrastructure challenges at scale.",
  resumeLink: "https://docs.google.com/document/d/19TB8EYGjiuGIbXO6sk_BV57ZDXB30pNb/edit?usp=sharing&ouid=113691555438746256913&rtpof=true&sd=true",
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/Smiling-Hacker01",
  linkedin: "https://www.linkedin.com/in/sdevsk",
  gmail: "kushwahavishal311@gmail.com",
  phone: "+91-7017757177",
  location: "Ghaziabad, UP, India",
};

export const skillsSection: SkillSection = {
  title: "Things I Build",
  subTitle: "BACKEND ENGINEER · SAAS ARCHITECT · SYSTEMS THINKER",
  skills: [
    "Design backend systems with clear service boundaries, tenant isolation, and operational failure modes in mind",
    "Build asynchronous workflows with queues, Redis, and PostgreSQL so critical paths stay fast and recoverable",
    "Implement authentication and authorization with JWT, RBAC, OAuth 2.0, auditability, and least-privilege access",
    "Integrate payment providers with webhook verification, idempotency keys, reconciliation flows, and retry-safe jobs",
    "Improve API latency and database load through caching, pagination, indexing, query planning, and production measurement",
  ],
  softwareSkills: [
    { name: "Node.js", icon: "FaNodeJs", color: "#68a063" },
    { name: "TypeScript", icon: "SiTypescript", color: "#3178c6" },
    { name: "JavaScript", icon: "SiJavascript", color: "#f7df1e" },
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
    { name: "Redis", icon: "SiRedis", color: "#dc382d" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47a248" },
    { name: "MySQL", icon: "SiMysql", color: "#4479a1" },
    { name: "Docker", icon: "FaDocker", color: "#0db7ed" },
    { name: "Express.js", icon: "SiExpress", color: "#888888" },
    { name: "Prisma", icon: "SiPrisma", color: "#2d3748" },
    { name: "Java", icon: "FaJava", color: "#f89820" },
    { name: "Git", icon: "FaGitAlt", color: "#f05032" },
  ],
};

export const techStack: TechStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend & APIs", progressPercentage: "92" },
    { Stack: "Databases & Caching", progressPercentage: "85" },
    { Stack: "Security & Auth", progressPercentage: "80" },
    { Stack: "DevOps & Cloud", progressPercentage: "65" },
    { Stack: "Frontend (MERN)", progressPercentage: "60" },
  ],
};

export const workExperience: WorkExperience = {
  title: "Work Experience",
  subtitle: "WHERE I'VE BUILT THINGS THAT MATTER",
  experiences: [
    {
      role: "Software Developer",
      company: "Matchbest Software",
      companyUrl: "#",
      date: "Dec 2025 – Present · Onsite",
      color: "#6c63ff",
      projects: [
        {
          taxonomy: "01 / BILLING INFRASTRUCTURE",
          name: "AVA-SmartBill",
          subtitle: "Enterprise Multi-Tenant Billing Platform",
          metrics: [
            { label: "Enterprise Tenants", value: "100+" },
            { label: "Monthly Transactions", value: "50K+" },
            { label: "Platform Uptime", value: "99.9%" },
            { label: "Payment Failure Reduction", value: "40%" },
            { label: "Processing Latency", value: "~4s" },
            { label: "Tax Jurisdictions", value: "15+" }
          ],
          bullets: [
            "Designed and Developed the backend architecture for a high-availability SaaS billing platform. Designed the core system around Node.js, TypeScript, PostgreSQL, and Redis, ensuring strict tenant isolation.",
            "Tackled complex financial logic by building a proprietary GST/VAT tax engine capable of supporting global jurisdictions with compound and exclusive taxation rules.",
            "Engineered an event-driven payment pipeline using BullMQ with automated dunning workflows.",
            "Integrated a multi-gateway abstraction layer (Razorpay, Stripe, PayU) that dramatically improved checkout reliability through idempotent transaction handling and strict webhook verification.",
            "Took ownership of platform security by designing a SOC 2-aligned architecture. Implemented immutable audit trails, envelope encryption, and robust JWT/RBAC controls, ensuring zero critical vulnerabilities across sensitive financial data flows."
          ],
          links: [
            { label: "Visit Live Site", url: "https://gobill.ai/landing", type: "website" }
          ],
        },
        {
          taxonomy: "02 / SOCIAL PLATFORM",
          name: "TracePlus",
          subtitle: "International Social & Community Platform",
          metrics: [
            { label: "Active Users", value: "100K+" },
            { label: "Database Load Reduction", value: "60%" },
            { label: "Feed Load Time Reduction", value: "70%" },
            { label: "Response Times", value: "<100ms" }
          ],
          bullets: [
            "Led the backend infrastructure design for a high-traffic social platform. Focused on scalability and observability, I architected a hybrid event-tracking system with real-time streaming to Amplitude and Braze, utilizing a custom relay adapter for optimized Firebase audit logging.",
            "Discovered and patched a severe cross-user event isolation vulnerability related to offline attribution. I fundamentally redesigned the event flow by introducing per-user isolated queues, completely eliminating data contamination risks and safeguarding user privacy during reauthentication.",
            "Designed and developed the video moderation and takedown pipeline handling automated content blocking, moderation state transitions, and recovery workflows. Diagnosed a latent production defect in the restoration workflow where early moderation captured incomplete transcode state (~20s post-upload vs. ~2min transcode duration), causing automatically blocked videos to become permanently unrestorable; resolved the state/timing mismatch between moderation decisions and asynchronous media transcoding.",
            "Drove massive performance gains across the platform through strategic Redis caching and in-memory fallbacks. Re-architected the main feed delivery with cursor-based pagination and materialized views."
          ],
          links: [
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.trace.plus&pcampaignid=web_share", type: "playstore" },
            { label: "App Store", url: "https://apps.apple.com/us/app/trace-afro-urban-culture/id6445990418", type: "appstore" },
            { label: "Website", url: "https://trace.plus/en/app", type: "website" }
          ],
        },
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Cognifyz Technologies",
      companyUrl: "#",
      date: "Jul 2025 – Dec 2025 · Remote",
      color: "#00d4aa",
      projects: [
        {
          taxonomy: "01 / HEALTHCARE PLATFORM",
          name: "Health Sewa",
          subtitle: "Healthcare Management Platform",
          metrics: [
            { label: "API Modules", value: "6+" },
            { label: "Stack", value: "Node.js" },
            { label: "Database", value: "MySQL" },
          ],
          bullets: [
            "Developed backend services for a healthcare management platform covering donor/recipient registration, hospital discovery, blood-donation workflows, healthcare blogs, and automated donor-matching workflows using Node.js, Express.js, MySQL, and REST APIs.",
            "Implemented scheduled jobs, background processing, and event-driven workflows to automate donor discovery, registration flows, notifications, and other asynchronous platform operations.",
            "Designed secure JWT-based authentication and role-based access control workflows to protect sensitive patient and donor data across all API endpoints.",
            "Structured modular REST API layers with robust input validation, error handling, and clear service boundaries to support maintainable long-term feature expansion."
          ],
          links: [
            { label: "Health Sewa", url: "https://healthsewa1.netlify.app/userregister/signup", type: "website" }
          ],
        },
        {
          taxonomy: "02 / CYBERSECURITY",
          name: "EdSecure Hub",
          subtitle: "Cybersecurity Awareness & Complaint Management Platform",
          metrics: [
            { label: "Modules", value: "4+" },
            { label: "Stack", value: "Node.js" },
            { label: "Focus", value: "Security" },
          ],
          bullets: [
            "Contributed to a cybersecurity platform providing location tracking, cyber-fraud prevention workflows, security-awareness blogs, and structured complaint management for routing cybercrime reports to cyber-cell authorities.",
            "Implemented secure user authentication, brute-force protection, and backend input validation workflows to reduce common account-level security risks across the platform.",
            "Built structured complaint ingestion and routing workflows enabling users to formally report cybercrime incidents with categorized records forwarded to relevant cyber-cell authorities.",
            "Delivered security-awareness content modules and learning resources helping users identify phishing, fraud patterns, and best practices for safer digital interactions."
          ],
          links: [
            { label: "GitHub", url: "https://github.com/Smiling-Hacker01", type: "github" }
          ],
        },
      ],
    },
  ],
};

export const projects: ProjectsSection = {
  title: "Selected Engineering Work",
  subtitle: "",
  professionalTitle: "Professional Work",
  professionalBadge: "@ Matchbest Software",
  personalTitle: "Personal Projects",
  personalBadge: "Open Source / Side Work",

  // ── PROFESSIONAL PROJECTS ──────────────────────────────────────────
  professionalProjects: [
    {
      name: "Enterprise Billing & Payments Platform",
      category: "professional",
      desc: "Designed backend services for a multi-tenant billing and payments platform, covering tenant isolation, subscription states, taxation, invoicing, payment orchestration, webhook verification, idempotency, and auditability.",
      bullets: [
        "Architected multi-tenant database schemas with strict tenant isolation and SOC 2-aligned immutable financial audit logging.",
        "Built an event-driven payment processing pipeline using BullMQ, idempotent webhook handlers, and automated dunning workflows.",
        "Engineered a proprietary GST/VAT tax engine supporting complex compound rules across multiple global tax jurisdictions."
      ],
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Prisma"],
      color: "#6c63ff",
      stats: [
        { label: "Scope", value: "Multi-tenant" },
        { label: "Focus", value: "Reliability" },
        { label: "Controls", value: "Audit-ready" },
      ],
      github: null,
      link: null,
      isProfessional: true,
    },
    {
      name: "Real-Time Data Processing Platform",
      category: "professional",
      desc: "Built resilient event-processing services with user-isolated queues, backend relay handling, batched persistence, and observability-focused data flows to improve integrity across high-volume application events.",
      bullets: [
        "Architected a real-time event streaming pipeline forwarding high-volume product analytics to Amplitude and Braze.",
        "Eliminated cross-user data contamination risks by redesigning the event ingestion flow with user-isolated queues.",
        "Implemented custom backend relay adapters and batched persistence to safeguard user privacy and audit reliability."
      ],
      tags: ["Node.js", "TypeScript", "Firebase", "Amplitude", "Braze", "Redis"],
      color: "#00d4aa",
      stats: [
        { label: "Pattern", value: "Event-driven" },
        { label: "Privacy", value: "Isolated" },
        { label: "Outcome", value: "Observable" },
      ],
      github: null,
      link: null,
      isProfessional: true,
    },
    {
      name: "Video Moderation & Takedown System",
      category: "professional",
      desc: "Designed and developed production video moderation and takedown workflows. Diagnosed and resolved a critical state/timing mismatch between early automated moderation decisions (~20s) and asynchronous video transcoding (~2min) that caused automatically blocked videos to become permanently unrestorable.",
      bullets: [
        "Architected automated video moderation workflows, policy-based content blocking, and deterministic takedown/recovery state transitions.",
        "Diagnosed a latent production defect in video restoration where the system evaluated stale transcode status captured at block time (~20s) rather than dynamic completion state (~2m).",
        "Decoupled moderation lifecycle decisions from background processing state, ensuring robust failure handling and reliable restoration."
      ],
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Asynchronous Workflows", "State Consistency", "Failure Recovery"],
      color: "#f5c842",
      stats: [
        { label: "Block State", value: "~20s" },
        { label: "Transcode", value: "~2m" },
        { label: "Lifecycle", value: "Async Safe" },
      ],
      github: null,
      link: null,
      isProfessional: true,
    },
    {
      name: "High-Traffic Backend Optimization",
      category: "professional",
      desc: "Improved backend responsiveness and operational reliability by introducing Redis caching, in-memory fallback paths, cursor-based pagination, and database view design for read-heavy product surfaces, reducing query latency from 800ms to 240ms.",
      bullets: [
        "Re-architected main feed delivery using cursor-based pagination and database materialized views, slashing query latency from 800ms to 240ms.",
        "Engineered multi-tier Redis caching with resilient in-memory fallback paths to protect primary databases during peak read traffic.",
        "Reduced database load by 60% while maintaining sub-100ms response times across read-heavy high-traffic application surfaces."
      ],
      tags: ["Node.js", "Redis", "PostgreSQL", "Cursor Pagination", "Materialized Views", "AdMob/GMA"],
      color: "#6c63ff",
      stats: [
        { label: "Response Time", value: "<100ms" },
        { label: "DB Load Cut", value: "60%" },
        { label: "Query Time", value: "800→240ms" },
      ],
      github: null,
      link: null,
      isProfessional: true,
    },
  ],

  // ── PERSONAL PROJECTS ─────────────────────────────────────────────
  personalProjects: [
    {
      name: "The Secret Space (Divish)",
      category: "personal",
      desc: "A secure, end-to-end encrypted real-time platform designed specifically for couples to share a private digital space. It solves the problem of scattered memories and insecure communication by providing a unified, highly protected environment.",
      bullets: [
        "Architected the secure backend infrastructure using Node.js, PostgreSQL, and Redis, integrating RSA/AES-GCM encryption to ensure zero-knowledge privacy for all messages and shared media.",
        "Engineered reliable real-time communication flows utilizing Socket.IO and Firebase Cloud Messaging, establishing a robust offline-first synchronization strategy for seamless user experiences.",
        "Designed and implemented a biometric-protected private vault with Cloudinary-backed media storage, handling complex state synchronization across devices.",
        "Built scalable background processing queues to reliably deliver scheduled messaging, idempotent push notifications, and data synchronization without impacting core API latency.",
      ],
      github: "https://github.com/Smiling-Hacker01/Project-Divish",
      link: "https://expo.dev/accounts/smiling-hacker/projects/secret-space-mobile/builds/1165def6-4e77-4ec0-9769-50998a39bc96",
      tags: ["Node.js", "PostgreSQL", "Redis", "Socket.IO", "React Native", "Firebase", "Encryption"],
      color: "#ff5c8a",
      isProfessional: false,
    },
    {
      name: "Health Management System (Health Sewa)",
      category: "personal",
      desc: "A comprehensive backend service for a privacy-conscious healthcare platform, built to centralize emergency discovery, blood donor management, and personalized health tracking.",
      bullets: [
        "Engineered scalable RESTful APIs from the ground up, utilizing Node.js and MySQL to deliver highly responsive endpoints for location-based hospital discovery and health resource access.",
        "Designed strict, secure authentication workflows leveraging JWTs, alongside automated email notification pipelines to keep users informed during critical health events.",
        "Optimized database architectures for rapid querying of donor and recipient registries, ensuring fast emergency matching while prioritizing data isolation and maintainability.",
        "Owned the entire backend lifecycle—from initial schema design to API deployment—focusing on long-term scalability and robust error handling.",
      ],
      github: "https://github.com/Smiling-Hacker01",
      link: "https://healthsewa1.netlify.app",
      tags: ["Node.js", "Express", "MySQL", "JWT", "REST APIs"],
      color: "#00d4aa",
      isProfessional: false,
    },
    {
      name: "Raghvi V2 - AI Assistant (Ongoing)",
      category: "personal",
      desc: "Foundation-phase Android-first personal AI assistant being developed as a modular monolith with a Python/FastAPI backend and PostgreSQL datastore.",
      bullets: [
        "Established the repository, local development workflow, documentation, architecture decisions, sprint planning, and MVP roadmap for an Android-first AI assistant.",
        "Designed a modular monolith backend using Python 3.13, FastAPI, asynchronous SQLAlchemy, PostgreSQL, and Alembic migrations for scalable service foundations.",
        "Containerized development with Docker Compose, service health checks, startup dependency handling, and separate health/readiness endpoints for clearer operational signals.",
        "Added engineering standards with uv, Ruff, pytest, Alembic workflows, and planned milestones for authentication, chat, memory, and a Kotlin/Jetpack Compose Android client.",
      ],
      github: "https://github.com/Smiling-Hacker01/Raghvi-V2",
      link: null,
      tags: ["Python 3.13", "FastAPI", "SQLAlchemy Async", "PostgreSQL", "Docker"],
      color: "#8bdfc7",
      isProfessional: false,
    },
    {
      name: "EdSecure Hub",
      category: "personal",
      desc: "Built a cybersecurity awareness and learning platform for practical security education, student resources, and safer authentication workflows.",
      bullets: [
        "Developed interactive cybersecurity training modules, awareness content, and practical learning resources to improve technical readiness.",
        "Implemented secure authentication patterns with brute-force protection and backend validation to reduce common account-security risks.",
        "Created student-focused modules for course resources, degree-based study material, handwritten notes, and interview preparation.",
        "Structured the platform with Node.js, MongoDB, and security-focused APIs to support maintainable feature expansion.",
      ],
      github: "https://github.com/Smiling-Hacker01",
      link: "https://github.com/Smiling-Hacker01",
      tags: ["Node.js", "MongoDB", "Security APIs", "HTML/CSS"],
      color: "#6c63ff",
      isProfessional: false,
    },
  ],
};

export const achievements: Achievements = {
  title: "Achievements",
  subtitle: "MILESTONES THAT DEFINE THE JOURNEY",
  achievementCards: [
    {
      title: "1st Place - Problem Solving & Bug Finding",
      subtitle: "Ranked 1st college-wide, demonstrating strong debugging, analytical thinking, and practical problem-solving under time constraints.",
      icon: "trophy",
    },
    {
      title: "2nd Prize - Annual Project Competition",
      subtitle: "Recognized for technical execution, product thinking, and solution design during a college-wide project competition.",
      icon: "medal",
    },
    {
      title: "Reliable Payment Workflow Design",
      subtitle: "Implemented retry-safe payment and billing flows with webhook verification, idempotency controls, and audit-focused backend behavior.",
      icon: "bolt",
    },
    {
      title: "Backend Performance Optimization",
      subtitle: "Improved read-heavy backend paths through caching, pagination, database query tuning, and resilient fallback strategies.",
      icon: "chart",
    },
    {
      title: "Scalable Feed & Data Access Patterns",
      subtitle: "Designed cursor-based pagination and database view patterns to support more predictable performance on high-traffic product surfaces.",
      icon: "speed",
    },
    {
      title: "Privacy & User Isolation Improvements",
      subtitle: "Strengthened user data isolation by redesigning queue handling and session-sensitive backend flows to prevent cross-user data contamination.",
      icon: "shield",
    },
    {
      title: "Video Moderation & Restoration Architecture",
      subtitle: "Diagnosed and resolved a critical state/timing defect between early moderation decisions (~20s) and asynchronous video transcoding (~2m), restoring recovery integrity for blocked media.",
      icon: "shield",
    },
  ],
};

export const education: EducationSection = {
  title: "Education",
  schools: [
    {
      schoolName: "St. Andrews Institute of Technology & Management Studies",
      subHeader: "Bachelor of Computer Applications (BCA)",
      status: "Graduated 2026",
      summary: "Focused on distributed systems, software architecture, and backend engineering.",
    },
    {
      schoolName: "Indira Gandhi National Open University (IGNOU)",
      subHeader: "Master of Computer Applications (MCA)",
      status: "Admitted 2026 · Expected 2028",
      summary: "Pursuing MCA through IGNOU to deepen software engineering and systems knowledge.",
    },
  ],
};

export const contactInfo: ContactInfo = {
  title: "Let's Build Something Reliable",
  subtitle: "Open to backend engineering roles, full-stack product work, and technical conversations around scalable systems.",
  email: "kushwahavishal311@gmail.com",
  phone: "+91-7017757177",
  location: "Ghaziabad, UP, India",
  github: "https://github.com/Smiling-Hacker01",
  linkedin: "https://www.linkedin.com/in/sdevsk",
};
