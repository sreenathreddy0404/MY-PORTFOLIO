import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiFirebase, SiVercel, SiVite, SiFramer } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { PersonalInfo, SocialLink, NavLink, Skills, Project, Education, Experience, OrbitIcon } from './types';

export const personalInfo: PersonalInfo = {
  firstname: "ANNAREDDY",
  lastname: "SREENATH REDDY",
  role: "Full Stack Developer",
  tagline: "MERN Stack Builder | DSA Enthusiast",
  email: "sreenathreddy0404@gmail.com",
  location: "paruluniversity, gujarat",
  bio: "I’m a CSE (AI) student who loves turning ideas into full-stack applications. With 100+ LeetCode problems solved and hands-on MERN projects, I’m constantly sharpening my problem-solving skills and exploring AI-driven solutions.",
  resumeUrl: "/resume.pdf",
  avatarUrl: "https://image2url.com/r2/default/images/1770977219958-7484df63-e3bb-499c-a57c-3a11f1f427cf.jpeg",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: FaGithub, color: "#333" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: FaLinkedin, color: "#0077B5" },
  { name: "Twitter", url: "https://twitter.com", icon: FaTwitter, color: "#1DA1F2" },
  { name: "Instagram", url: "https://instagram.com", icon: FaInstagram, color: "#E4405F" },
];

export const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const skills: Skills = {
  frontend: [
    { name: "React", level: 95, icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", level: 90, icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", level: 95, icon: SiJavascript, color: "#F7DF1E" },
    { name: "Next.js", level: 85, icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", level: 92, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Framer Motion", level: 88, icon: SiFramer, color: "#0055FF" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: FaNodeJs, color: "#339933" },
    { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", level: 78, icon: SiPostgresql, color: "#4169E1" },
    { name: "Firebase", level: 82, icon: SiFirebase, color: "#FFCA28" },
  ],
  tools: [
    { name: "Git", level: 90, icon: FaGitAlt, color: "#F05032" },
    { name: "VS Code", level: 95, icon: TbBrandVscode, color: "#007ACC" },
    { name: "Figma", level: 75, icon: FaFigma, color: "#F24E1E" },
    { name: "Vercel", level: 88, icon: SiVercel, color: "#000000" },
    { name: "Vite", level: 85, icon: SiVite, color: "#646CFF" },
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory, Stripe payments, and admin dashboard. Built with Next.js and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tech: ["React", "Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "Smart task management app with AI-powered prioritization and natural language processing for quick task entry.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    tech: ["React", "OpenAI", "Node.js", "MongoDB", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for visualizing complex data sets with real-time updates and customizable widgets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tech: ["React", "D3.js", "WebSocket", "Node.js", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: 4,
    title: "Social Media Scheduler",
    description: "Cross-platform social media management tool with content calendar, analytics, and automated posting.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    tech: ["Next.js", "Prisma", "PostgreSQL", "OAuth", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    year: "2019 - 2021",
    description: "Specialized in Human-Computer Interaction and Machine Learning. Graduated with distinction.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "MIT",
    year: "2015 - 2019",
    description: "Focus on web technologies and distributed systems. Dean's List all semesters.",
  },
];

export const experience: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    year: "2021 - Present",
    description: "Leading frontend architecture for enterprise applications. Mentoring junior developers and implementing best practices.",
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    year: "2019 - 2021",
    description: "Built and maintained multiple web applications. Introduced React and TypeScript to the team.",
  },
];

export const orbitIcons: OrbitIcon[] = [
  { icon: FaReact, color: "#61DAFB", delay: 0 },
  { icon: SiTypescript, color: "#3178C6", delay: 2 },
  { icon: SiNextdotjs, color: "#ffffff", delay: 4 },
  { icon: SiTailwindcss, color: "#06B6D4", delay: 6 },
  { icon: FaNodeJs, color: "#339933", delay: 8 },
  { icon: SiFramer, color: "#0055FF", delay: 10 },
];
