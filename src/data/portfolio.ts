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
  subtitle:
    "A Backend Engineer who architects scalable SaaS platforms, distributed systems, and event-driven payment infrastructure. Currently building GoBill V2 — an enterprise billing platform serving 1000+ tenants. 🚀",
  resumeLink: "#", // replace with Google Drive link to resume PDF
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/Smiling-Hacker01",
  linkedin: "https://www.linkedin.com/in/sdevsk",
  gmail: "kushwahavishal311@gmail.com",
  phone: "+91-7017757177",
  location: "Ghaziabad, UP, India",
};

export const skillsSection: SkillSection = {
  title: "What I Do",
  subTitle: "BACKEND ENGINEER · SAAS ARCHITECT · SYSTEMS THINKER",
  skills: [
    "⚡ Architect multi-tenant SaaS platforms with 99.9% uptime",
    "⚡ Build event-driven systems with BullMQ, Redis, and PostgreSQL",
    "⚡ Design secure auth systems — JWT, RBAC, OAuth 2.0, SOC 2",
    "⚡ Engineer payment gateways (Razorpay, Stripe, PayU) with idempotent handling",
    "⚡ Optimize high-traffic APIs — sub-100ms responses, 60%+ DB load reduction",
  ],
  softwareSkills: [
    { name: "Node.js",      icon: "FaNodeJs",      color: "#68a063" },
    { name: "TypeScript",   icon: "SiTypescript",  color: "#3178c6" },
    { name: "JavaScript",   icon: "SiJavascript",  color: "#f7df1e" },
    { name: "PostgreSQL",   icon: "SiPostgresql",  color: "#336791" },
    { name: "Redis",        icon: "SiRedis",       color: "#dc382d" },
    { name: "MongoDB",      icon: "SiMongodb",     color: "#47a248" },
    { name: "MySQL",        icon: "SiMysql",       color: "#4479a1" },
    { name: "Docker",       icon: "FaDocker",      color: "#0db7ed" },
    { name: "Express.js",   icon: "SiExpress",     color: "#888888" },
    { name: "Prisma",       icon: "SiPrisma",      color: "#2d3748" },
    { name: "Java",         icon: "FaJava",        color: "#f89820" },
    { name: "Git",          icon: "FaGitAlt",      color: "#f05032" },
  ],
};

export const techStack: TechStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend & APIs",          progressPercentage: "92" },
    { Stack: "Databases & Caching",     progressPercentage: "85" },
    { Stack: "Security & Auth",         progressPercentage: "80" },
    { Stack: "DevOps & Cloud",          progressPercentage: "65" },
    { Stack: "Frontend (MERN)",         progressPercentage: "60" },
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
          name: "Trace Plus — AdMob/GMA Integration",
          bullets: [
            "Deployed backend for AdMob integration serving 400K+ users on a France-based international platform — dynamic ad placement, frequency caps, and TTL management.",
            "Optimized via Redis caching + in-memory fallback: sub-100ms responses, 60% reduction in database load.",
            "Re-engineered vertical feed algorithm with cursor-based pagination and materialized views — feed performance up 70%, query time cut from 800ms → 240ms.",
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
  title: "Key Projects",
  subtitle: "THINGS I'VE BUILT THAT I'M PROUD OF",
  projects: [
    {
      name: "Health Sewa",
      desc: "Comprehensive health management platform with appointment scheduling, patient records, and provider dashboards. HIPAA-compliant with encrypted storage and secure auth.",
      github: "https://github.com/Smiling-Hacker01",
      link: "healthsewa1.netlify.app",
      tags: ["Node.js", "Express", "MySQL", "JWT", "REST APIs"],
      color: "#6c63ff",
    },
    {
      name: "EdSecure Hub",
      desc: "Cybersecurity awareness platform with real-time threat detection, interactive security training modules, and brute-force-protected authentication.",
      github: "https://github.com/Smiling-Hacker01",
      tags: ["Node.js", "MongoDB", "Security APIs", "HTML/CSS"],
      color: "#00d4aa",
    },
    {
      name: "GoBill V2",
      desc: "Enterprise multi-tenant SaaS billing platform. 100+ tenants, 50K+ monthly transactions, 15+ tax jurisdictions, multi-gateway payments (Razorpay, Stripe, PayU).",
      github: null, // private/proprietary
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ"],
      color: "#f5c842",
      isProfessional: true, // renders a "Professional Project" badge
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
  title: "Let's Talk 🤙",
  subtitle: "Open to backend engineering roles, freelance projects, and interesting technical conversations.",
  email: "kushwahavishal311@gmail.com",
  phone: "+91-7017757177",
  location: "Ghaziabad, UP, India",
  github: "https://github.com/Smiling-Hacker01",
  linkedin: "https://www.linkedin.com/in/sdevsk",
};
