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
  animation : string;
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
  languages: Skill[];
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
  status : boolean;
}

// Education
export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  cgpa?: string;
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

// All Pojects type
export interface AllProjects {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status : boolean;
}

// Certificate type
export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialUrl: string;
  skills?: string[];
  featured: boolean;
}
