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
  resumeLink: "https://docs.google.com/document/d/1t1VDNNNyurbejzJ6aAM0dsNYVnaKt5mR/edit?usp=drive_link&ouid=113691555438746256913&rtpof=true&sd=true", // replace with Google Drive link to resume PDF
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
          name: "Enterprise Billing & Payments Platform",
          bullets: [
            "Owned backend design for a multi-tenant billing platform, decomposing tenant isolation, subscription lifecycle, taxation, invoicing, payments, and audit requirements into reliable service boundaries.",
            "Designed extensible tax and payment workflows using Node.js, TypeScript, PostgreSQL, Redis, Prisma, and background workers, improving maintainability and enabling scalable feature delivery.",
            "Implemented secure payment handling with webhook verification, idempotent transaction processing, retry-safe jobs, and operational audit trails to reduce failure scenarios and strengthen financial reliability.",
            "Collaborated across product and QA to validate edge cases around billing states, access control, and reconciliation, improving confidence in production releases.",
          ],
        },
        {
          name: "Secure Content & Data Platform",
          bullets: [
            "Improved data integrity and privacy controls by isolating user-specific queues and strengthening backend safeguards around session transitions and event processing.",
            "Designed a resilient event delivery architecture with real-time emission, backend relay handling, batching, and audit-friendly persistence to improve observability and downstream consistency.",
            "Built an automated content moderation and takedown workflow that validates media before expensive processing stages, reduces wasted compute, and improves operational governance.",
            "Optimized high-traffic backend paths with Redis caching, fallback strategies, cursor pagination, and database view design to improve responsiveness and reduce database pressure.",
          ],
        },
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Cognifyz Technologies",
      companyUrl: "#",
      date: "Jul 2025 – Aug 2025 · Remote",
      color: "#00d4aa",
      projects: [
        {
          name: "MERN Stack Development",
          bullets: [
            "Delivered multiple full-stack applications from requirements through deployment, translating broad product goals into scoped milestones, API contracts, and maintainable UI flows.",
            "Implemented authentication, role-based access control, validation, and reusable backend patterns across projects, improving security posture and delivery consistency.",
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
      name: "Secure Content Moderation & Takedown System",
      category: "professional",
      desc: "Designed a media validation and takedown workflow that checks content before expensive processing stages, captures moderation metadata, supports content removal actions, and includes resilience controls for third-party dependency failures.",
      tags: ["PostgreSQL", "Media Moderation", "Edge Functions", "Node.js"],
      color: "#f5c842",
      stats: [
        { label: "Stage", value: "Pre-process" },
        { label: "Action", value: "Takedown" },
        { label: "Resilience", value: "Fallbacks" },
      ],
      github: null,
      link: null,
      isProfessional: true,
    },
    {
      name: "High-Traffic Backend Optimization",
      category: "professional",
      desc: "Improved backend responsiveness and operational reliability by introducing Redis caching, in-memory fallback paths, cursor-based pagination, and database view design for read-heavy product surfaces, reducing query latency from 800ms to 240ms.",
      tags: ["Node.js", "Redis", "PostgreSQL", "AdMob/GMA"],
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
      name: "Divish - The Secret Space",
      category: "personal",
      desc: "Completed secure, real-time couples platform with a React Native Expo mobile frontend for private communication, shared memories, emotional connection, and relationship-focused interactions.",
      bullets: [
        "Built the mobile app frontend with React Native and Expo, delivering WhatsApp-style one-to-one chat, live mood updates, synchronized dashboards, anniversary tracking, and contextual Firebase push notifications.",
        "Designed a biometric-protected private vault with password fallback, Cloudinary-backed media storage, and secure access patterns for sensitive memories.",
        "Implemented coupons, favors, shared diary, reactions, and LoveBot scheduled messaging with lifecycle workflows powered by backend jobs and real-time sync.",
        "Secured the platform with JWT access and refresh tokens, bcrypt password hashing, Prisma-backed PostgreSQL persistence, Redis coordination, and device-level biometric protection where available.",
      ],
      github: "https://github.com/Smiling-Hacker01/Project-Divish",
      link: "https://expo.dev/accounts/smiling-hacker/projects/secret-space-mobile/builds/1165def6-4e77-4ec0-9769-50998a39bc96",
      tags: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Cloudinary", "Firebase"],
      color: "#ff5c8a",
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
      tags: ["Python 3.13", "FastAPI", "SQLAlchemy Async", "PostgreSQL", "Alembic", "Docker", "uv", "Ruff", "pytest"],
      color: "#8bdfc7",
      isProfessional: false,
    },
    {
      name: "Health Sewa",
      category: "personal",
      desc: "Developed a privacy-conscious health management platform for emergency discovery, care planning, educational content, and donor-recipient connectivity.",
      bullets: [
        "Built discovery flows for blood banks, nearby hospitals, doctors, health articles, and smart meal planning to centralize essential health resources.",
        "Implemented donor and recipient registration workflows to support faster emergency matching and clearer user journeys during urgent scenarios.",
        "Improved backend reliability and responsiveness through API design, query optimization, indexing, and caching strategies.",
        "Secured core flows with JWT-based authentication, validation, and structured REST APIs backed by a MySQL datastore.",
      ],
      github: "https://github.com/Smiling-Hacker01",
      link: "https://healthsewa1.netlify.app",
      tags: ["Node.js", "Express", "MySQL", "JWT", "REST APIs"],
      color: "#00d4aa",
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
      title: "Secure Media Moderation Workflow",
      subtitle: "Designed a pre-processing media validation workflow with metadata capture and resilience controls for third-party service downtime.",
      icon: "check",
    },
  ],
};

export const education: EducationSection = {
  title: "Education",
  schools: [
    {
      schoolName: "St. Andrews Institute of Technology & Management Studies",
      subHeader: "Bachelor of Computer Applications (BCA)",
      duration: "Expected 2026",
      location: "Haryana, India",
      desc: "Focused on distributed systems, software architecture, and backend engineering. Active in competitive programming and college-level hackathons.",
      descBullets: [
        "Ranked 1st college-wide in Problem Solving & Bug Finding Competition",
        "2nd Prize in Annual Project Competition",
      ],
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
