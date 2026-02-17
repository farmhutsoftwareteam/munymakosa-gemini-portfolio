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
    id: "menyu",
    title: "Menyu.pro",
    description: "SaaS menu design studio for restaurants. One workspace to create, style, and publish digital QR menus, PDFs, and print formats — change once, update everywhere.",
    techStack: ["Next.js", "Supabase", "Hono", "Postgres"],
    bossFight: "Ugly restaurant menus",
    type: "web",
    link: "https://menyu.pro"
  },
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
    id: "freyt365",
    title: "Freyt365",
    description: "Finance and fuel platform built for transporters in Southern Africa. Integrated tools for fleet financial management and fuel procurement across the region.",
    techStack: ["Next.js", "React", "Fintech", "API"],
    bossFight: "Transporter cash flow chaos",
    type: "web",
    link: "https://freyt365.com"
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
    id: "dumbshirts",
    title: "DumbShirts",
    description: "E-commerce store selling one-of-one memetic artifacts. Every piece is unique — no restocks, no repeats. Wearable internet culture.",
    techStack: ["E-commerce", "Shopify", "Design"],
    bossFight: "Mass-produced mediocrity",
    type: "web",
    link: "https://dumbshirts.co.za"
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
    description: "DJ sets blending Afro-Tech, Deep House and Amapiano. Live mixes, curated sets, and the intersection of code and rhythm.",
    techStack: ["Rekordbox", "Pioneer DJ", "SoundCloud"],
    bossFight: "Setting the Vibe",
    type: "other",
    link: "https://dj.munyamakosa.com"
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