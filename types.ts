export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  bossFight: string; // The problem it solves
  link?: string;
  type: 'web' | 'mobile' | 'ai' | 'other';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: 'frontend' | 'backend' | 'ai' | 'mobile';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  xp: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}