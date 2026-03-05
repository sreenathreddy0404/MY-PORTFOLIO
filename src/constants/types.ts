import { ComponentType } from 'react';
import { IconType } from 'react-icons';

// Personal Info
export interface PersonalInfo {
  firstname: string;
  lastname: string;
  role: string;
  tagline: string;
  email: string;
  location: string;
  bio: string;
  resumeUrl: string;
  avatarUrl: string;
}

// Social Link
export interface SocialLink {
  name: string;
  url: string;
  icon: IconType; // from react-icons
  color: string;
}

// Navigation Link
export interface NavLink {
  name: string;
  href: string;
}

// Skill
export interface Skill {
  name: string;
  level: number; // percentage
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>; // or IconType
  color: string;
}

// Skills collection (frontend, backend, tools)
export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

// Project
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

// Education
export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

// Experience
export interface Experience {
  role: string;
  company: string;
  year: string;
  description: string;
}

// Orbit Icon (used in hero section)
export interface OrbitIcon {
  icon: IconType;
  color: string;
  delay: number;
}