export interface Greeting {
  name: string;
  title: string;
  subtitle: string;
  resumeLink: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  gmail: string;
  phone: string;
  location: string;
}

export interface SoftwareSkill {
  name: string;
  icon: string; // Will map to icon component later
  color: string;
}

export interface SkillSection {
  title: string;
  subTitle: string;
  skills: string[];
  softwareSkills: SoftwareSkill[];
}

export interface TechStackItem {
  Stack: string;
  progressPercentage: string;
}

export interface TechStack {
  viewSkillBars: boolean;
  experience: TechStackItem[];
}

export interface ProjectBullet {
  name: string;
  bullets: string[];
}

export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  date: string;
  color: string;
  projects: ProjectBullet[];
}

export interface WorkExperience {
  title: string;
  subtitle: string;
  experiences: Experience[];
}

export interface Project {
  name: string;
  desc: string;
  github: string | null;
  link?: string;
  tags: string[];
  color: string;
  isProfessional?: boolean;
}

export interface ProjectsSection {
  title: string;
  subtitle: string;
  projects: Project[];
}

export interface AchievementCard {
  title: string;
  subtitle: string;
  icon: string;
}

export interface Achievements {
  title: string;
  subtitle: string;
  achievementCards: AchievementCard[];
}

export interface School {
  schoolName: string;
  subHeader: string;
  duration: string;
  location: string;
  desc: string;
  descBullets: string[];
}

export interface EducationSection {
  title: string;
  schools: School[];
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}
