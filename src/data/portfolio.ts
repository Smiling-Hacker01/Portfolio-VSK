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
  resumeLink: "https://docs.google.com/document/d/11W5QpFQFb1EGMqoy0zeFE1Ols0pUZ0ny/edit?usp=sharing&ouid=113691555438746256913&rtpof=true&sd=true",
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
            "Built an automated copyright moderation pipeline integrated with Audible Magic. By leveraging PostgreSQL triggers for pre-transcoding scans, I significantly reduced wasted compute on blocked media. Engineered a scalable schema for ISRC metadata and implemented Fail-Open governance to gracefully handle third-party API outages.",
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
          name: "MERN Stack Development",
          bullets: [
            "Owned the end-to-end delivery of five production-grade full-stack applications using the MERN stack. Managed the entire lifecycle from initial architectural planning and system design through development and final deployment.",
            "Focused on establishing secure and scalable foundations across all projects, consistently implementing JWT-based authentication, Role-Based Access Control (RBAC), and robust backend validation patterns to ensure a consistent, professional security posture."
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
