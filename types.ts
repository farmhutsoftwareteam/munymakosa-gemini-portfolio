export type Discipline = 'saas' | 'mobile' | 'ai' | 'creative';

export interface Project {
  id: string;
  title: string;
  discipline: Discipline;
  role: string;
  when?: string;
  status?: string;
  description: string;
  bossFight: string; // The problem it solves
  techStack: string[];
  link?: string;
  image?: string;
}

export interface Channel {
  id: string;
  name: string;
  caption: string;
  image: string;
  alt: string;
  position?: string; // object-position: screenshots keep their top-left, photos stay centred
  link?: string;
}

export interface ScoreRow {
  name: string;
  note?: string;
  value: string;
}

export interface ScoreGroup {
  title: string;
  rows: ScoreRow[];
}

export interface AerialFrame {
  src: string;
  alt: string;
  frame: string;
  time: string;
  place: string;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
}
