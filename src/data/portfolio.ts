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
    "⚡ Architect multi-tenant SaaS platforms with 99.9% uptime",
    "⚡ Build event-driven systems with BullMQ, Redis, and PostgreSQL",
    "⚡ Design secure auth systems — JWT, RBAC, OAuth 2.0, SOC 2",
    "⚡ Engineer payment gateways (Razorpay, Stripe, PayU) with idempotent handling",
    "⚡ Optimize high-traffic APIs — sub-100ms responses, 60%+ DB load reduction",
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
          name: "GoBill V2 — Enterprise Multi-Tenant Billing Platform",
          bullets: [
            "Architected multi-tenant SaaS billing platform from scratch (Node.js, TypeScript, PostgreSQL, Redis) supporting 100+ enterprise tenants with 99.9% uptime across 50K+ monthly transactions.",
            "Designed tax calculation engine supporting 15+ jurisdictions — GST/VAT with EXCLUSIVE, STACK, and COMPOUND application strategies.",
            "Built event-driven payment processing with BullMQ workers + dunning workflows, reducing failures by 40% and cutting processing time from 5 min → 30 sec.",
            "Engineered multi-gateway abstraction (Razorpay, Stripe, PayU) with webhook signature verification and idempotent transaction handling — billing errors reduced by 95%.",
            "Developed SOC 2-compliant audit trail system with before/after state snapshots; implemented JWT, RBAC, and envelope encryption with zero critical security vulnerabilities.",
          ],
        },
        {
          name: "Trace Plus — International Platform (400K+ Users)",
          bullets: [
            "Architected Hybrid Redundancy event-tracking pipeline: dual real-time emission to Amplitude & Braze via mobile SDKs + BackendRelayAdapter batching to Firebase relay for full audit logging.",
            "Fixed critical user-isolation data leak — per-user isolated queues eliminating cross-user data contamination post-login.",
            "Designed Audible Magic automated copyright moderation: Postgres trigger fires pre-transcoding scan, saving compute on blocked content; built audible schema with ISRC metadata capture and Fail-Open Kill Switch governance.",
            "Integrated royalty-free music library with whitelisting token logic (music_id/license_token) preventing false-positive copyright blocks on licensed tracks.",
            "Optimized AdMob/GMA backend via Redis caching + in-memory fallback (sub-100ms responses, 60% DB load reduction); re-engineered feed with cursor pagination + materialized views (70% gain, 800ms → 240ms).",
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
            "Delivered 5 production-ready MERN stack applications end-to-end — requirements, architecture, development, and deployment.",
            "Implemented JWT-based authentication and RBAC across all projects, ensuring enterprise-grade access control.",
          ],
        },
      ],
    },
  ],
};

export const projects: ProjectsSection = {
  title: "What I've Shipped In Production So Far",
  subtitle: "",
  professionalTitle: "Professional Work",
  professionalBadge: "@ Matchbest Software",
  personalTitle: "Personal Projects",
  personalBadge: "Open Source / Side Work",

  // ── PROFESSIONAL PROJECTS ──────────────────────────────────────────
  professionalProjects: [
    {
      name: "GoBill V2",
      category: "professional",
      desc: "Enterprise multi-tenant SaaS billing platform built from scratch. Supports 100+ tenants, 50K+ monthly transactions, 15+ tax jurisdictions (GST/VAT), and multi-gateway payments (Razorpay, Stripe, PayU) with SOC 2-compliant audit trails.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Prisma"],
      color: "#6c63ff",
      stats: [
        { label: "Tenants", value: "100+" },
        { label: "Transactions/mo", value: "50K+" },
        { label: "Billing Errors Cut", value: "95%" },
      ],
      github: null,
      link: null,
      isProfessional: true,
    },
    {
      name: "Trace Plus — Event Tracking",
      category: "professional",
      desc: "Hybrid Redundancy event pipeline: dual real-time emission to Amplitude & Braze via mobile SDKs + BackendRelayAdapter batching every event to Firebase for auditing. Fixed a critical user-isolation data leak by implementing per-user isolated queues.",
      tags: ["Node.js", "TypeScript", "Firebase", "Amplitude", "Braze", "Redis"],
      color: "#00d4aa",
      stats: [
        { label: "Users", value: "400K+" },
        { label: "Data Leak", value: "Fixed" },
        { label: "DB Load Cut", value: "60%" },
      ],
      github: null,
      link: null,
      isProfessional: true,
    },
    {
      name: "Trace Plus — Copyright Moderation",
      category: "professional",
      desc: "Automated copyright moderation pipeline using Audible Magic. A Postgres trigger fires a scan before transcoding, blocking infringing videos before wasting compute. Includes a dedicated schema (scans + matches with ISRC metadata) and a Fail-Open Kill Switch for API downtime resilience.",
      tags: ["PostgreSQL", "Audible Magic CLI", "Edge Functions", "Node.js"],
      color: "#f5c842",
      stats: [
        { label: "Scan Trigger", value: "Pre-transcode" },
        { label: "Governance", value: "Fail-Open" },
        { label: "ISRC Metadata", value: "Captured" },
      ],
      github: null,
      link: null,
      isProfessional: true,
    },
    {
      name: "Trace Plus — AdMob & Feed",
      category: "professional",
      desc: "Deployed AdMob/GMA backend for trace platform. Implemented Redis caching with in-memory fallback for sub-100ms responses. Re-engineered the vertical feed algorithm with cursor-based pagination and materialized views.",
      tags: ["Node.js", "Redis", "PostgreSQL", "AdMob/GMA"],
      color: "#6c63ff",
      stats: [
        { label: "Response Time", value: "<100ms" },
        { label: "Feed Gain", value: "70%" },
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
      name: "Health Sewa",
      category: "personal",
      desc: "Developed a HIPAA-compliant health management platform featuring blood bank discovery, smart meal planning, nearby hospital and doctor search within a 5 km radius, health articles and blogs, and donor-recipient registration for rapid emergency connectivity. Improved backend performance by implementing query optimization, indexing, and caching strategies, resulting in 30% faster response times.",
      github: "https://github.com/Smiling-Hacker01",
      link: "https://healthsewa1.netlify.app",
      tags: ["Node.js", "Express", "MySQL", "JWT", "REST APIs"],
      color: "#00d4aa",
      isProfessional: false,
    },
    {
      name: "EdSecure Hub",
      category: "personal",
      desc: "Built a cybersecurity awareness and learning platform featuring real-time threat detection, interactive security training modules, and secure authentication systems with brute-force attack protection. Developed student-focused learning features including course- and degree-based study resources, handwritten notes, interview preparation modules, and cybersecurity awareness content designed to improve practical security knowledge and technical readiness.",
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
      title: "🥇 1st Place — Problem Solving & Bug Finding",
      subtitle: "Ranked 1st college-wide, outperforming peers across all departments.",
      icon: "trophy",
    },
    {
      title: "🥈 2nd Prize — Annual Project Competition",
      subtitle: "Recognized for technical innovation and solution design at the annual college tech fest.",
      icon: "medal",
    },
    {
      title: "⚡ 90% Faster Payment Processing",
      subtitle: "Cut processing time from 1.5 min → 2.4 sec and reduced billing errors by 95% on GoBill V2.",
      icon: "bolt",
    },
    {
      title: "📉 60% DB Load Reduction",
      subtitle: "Achieved sub-100ms responses and 60% database load reduction on a 400K+ user platform via Redis caching.",
      icon: "chart",
    },
    {
      title: "🚀 70% Feed Performance Improvement",
      subtitle: "Cut query time from 800ms → 240ms via cursor-based pagination and materialized views.",
      icon: "speed",
    },
    {
      title: "🔒 User Isolation Data Leak — Fixed",
      subtitle: "Identified and resolved a critical cross-user data contamination bug on a 400K+ user platform. Implemented per-user isolated event queues eliminating the vulnerability entirely.",
      icon: "shield",
    },
    {
      title: "🎵 Copyright Moderation Pipeline",
      subtitle: "Designed an Audible Magic pre-transcoding scan pipeline that blocks infringing content before wasting compute — with Fail-Open governance for zero downtime.",
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
  title: "Get In Touch 🤝",
  subtitle: "Open to backend engineering roles, freelance projects, and interesting technical conversations.",
  email: "kushwahavishal311@gmail.com",
  phone: "+91-7017757177",
  location: "Ghaziabad, UP, India",
  github: "https://github.com/Smiling-Hacker01",
  linkedin: "https://www.linkedin.com/in/sdevsk",
};
