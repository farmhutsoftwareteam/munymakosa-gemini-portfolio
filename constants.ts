import { Project, Skill, Achievement, SocialLink } from './types';

export const INTRO_TEXT = [
  "Initialising boot sequence...",
  "Loading modules: React, Expo, Supabase, AI...",
  "System Check: OPTIMAL",
  "Welcome to Munyaradzi_Makosa.exe"
];

export const SKILLS: Skill[] = [
  { name: "React Native / Expo", level: 95, icon: "smartphone", category: "mobile" },
  { name: "Next.js / React", level: 90, icon: "layout", category: "frontend" },
  { name: "Supabase / Postgres", level: 85, icon: "database", category: "backend" },
  { name: "AI Agents / LLMs", level: 80, icon: "cpu", category: "ai" },
  { name: "Product Design", level: 75, icon: "pen-tool", category: "frontend" },
  { name: "Drone Piloting", level: 65, icon: "camera", category: "mobile" },
];

export const PROJECTS: Project[] = [
  {
    id: "farmhut",
    title: "Farmhut Africa",
    description: "AI-powered marketplace connecting rural farmers directly to markets. Recognized by Anzisha Prize and MIT Solve.",
    techStack: ["React", "Django", "AI", "Postgres"],
    bossFight: "Market access for rural farmers",
    type: "web",
    link: "https://www.crunchbase.com/organization/farmhut"
  },
  {
    id: "hubflo",
    title: "Hubflo AI",
    description: "Connecting AI assistants to workflow tools like Slack and Gmail to automate daily ops.",
    techStack: ["Next.js", "LangChain", "Supabase"],
    bossFight: "Workflow inefficiency",
    type: "ai",
    link: "#"
  },
  {
    id: "drone_ops",
    title: "Aerial Cinematography",
    description: "Professional drone photography and videography capturing Zimbabwe's landscapes from new perspectives.",
    techStack: ["DJI Mavic", "Premiere Pro", "Lightroom"],
    bossFight: "The Perfect Shot",
    type: "other",
    link: "https://munyamakosa.pixieset.com/theconceptofsonder/"
  },
  {
    id: "dj_lab",
    title: "The Mix Lab",
    description: "Aspiring DJ curating Afro-Tech and Deep House sets. Exploring the intersection of code, rhythm, and sound.",
    techStack: ["Rekordbox", "Pioneer DJ", "SoundCloud"],
    bossFight: "Setting the Vibe",
    type: "other"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "anzisha",
    title: "Anzisha Fellow",
    description: "Selected as one of Africa's top young entrepreneurs (Top 20 Finalist).",
    year: "2021",
    xp: 1000
  },
  {
    id: "founder",
    title: "Founded Farmhut",
    description: "Launched and scaled an AI marketplace for farmers. (Green Innovation Winner)",
    year: "2020",
    xp: 800
  },
  {
    id: "kwingy",
    title: "Co-Founder Kwingy",
    description: "Registered UK entity for tech services & digital transformation.",
    year: "2022",
    xp: 500
  },
  {
    id: "creative_unlock",
    title: "Creative Mode Unlocked",
    description: "Expanded skill tree into Aerial Photography & DJing.",
    year: "2024",
    xp: 300
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/farmhutsoftwareteam", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/makosa-munya/", icon: "linkedin" },
  { platform: "X", url: "https://x.com/makosamunyaa", icon: "twitter" },
  { platform: "Upwork", url: "https://www.upwork.com/freelancers/~018e86cb6f5afe5cdf?mp_source=share", icon: "briefcase" },
];