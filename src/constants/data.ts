import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss,  SiMongodb, SiC, SiCplusplus, SiPython, SiMysql, SiExpress, SiFramer, SiLeetcode } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { PersonalInfo, SocialLink, NavLink, Skills, Project, Education, OrbitIcon, AllProjects, Certificate } from './types';
import { FiInstagram } from 'react-icons/fi';

export const personalInfo: PersonalInfo = {
  firstname: "ANNAREDDY",
  lastname: "SREENATH REDDY",
  role: "Full Stack Developer",
  tagline: "MERN Stack Builder | DSA Enthusiast",
  email: "sreenathreddy0404@gmail.com",
  location: "paruluniversity, gujarat",
  bio: "I'm a CSE (AI) student who loves turning ideas into full-stack applications. With 650+ LeetCode problems solved and hands-on MERN projects, I’m constantly sharpening my problem-solving skills and exploring AI-driven solutions.",
  resumeUrl: "/resume.pdf",
  avatarUrl: "https://image2url.com/r2/default/images/1770977219958-7484df63-e3bb-499c-a57c-3a11f1f427cf.jpeg?tr=c-force,w-700,h-700",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/sreenathreddy0404", icon: FaGithub, color: "#646464",animation: "spin-slow" },
  { name: "LinkedIn", url: "https://linkedin.com/in/sreenathreddyannareddy", icon: FaLinkedin, color: "#0077B5",animation: "animate-tilt" },
  { name: "Instagram", url: "https://instagram.com", icon: FiInstagram, color: "#E4405F",animation: "animate-shake" },
  { name: "Leetcode", url: "https://leetcode.com/annareddysreenathreddy", icon: SiLeetcode, color: "#F7DF1E",animation: "animate-bounce" },
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
    { name: "React", level: 90, icon: FaReact, color: "#61DAFB" },
    { name: "JavaScript", level: 90, icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", level: 88, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Framer Motion", level: 85, icon: SiFramer, color: "#0055FF" },
  ],

  backend: [
    { name: "Node.js", level: 85, icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", level: 85, icon: SiExpress, color: "#000000" },
    { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47A248" },
    { name: "SQL", level: 80, icon: SiMysql, color: "#4169E1" },
  ],

  languages: [
    { name: "C++", level: 90, icon: SiCplusplus, color: "#00599C" },
    { name: "C", level: 85, icon: SiC, color: "#A8B9CC" },
    { name: "Python", level: 80, icon: SiPython, color: "#3776AB" },
  ],

  tools: [
    { name: "Git", level: 90, icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", level: 90, icon: FaGithub, color: "#848282" },
    { name: "VS Code", level: 95, icon: TbBrandVscode, color: "#007ACC" },
    { name: "MySQL Workbench", level: 80, icon: SiMysql, color: "#4479A1" },
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "KissanKonnect",
    description: "A hyperlocal agricultural marketplace connecting farmers and buyers with real-time product listings, secure Stripe payments, and location-based discovery.",
    image: "https://ik.imagekit.io/h4y6qwy6j/kissan_konnect.png",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Stripe"],
    liveUrl: "",
    githubUrl: "https://github.com/sreenathreddy0404/KISSAN-KONNECT",
    featured: true,
    status : false,
  },
  {
    id: 2,
    title: "FamBudget - Family Budget Manager",
    description: "A full-stack budget management application that helps families track expenses, manage income, and monitor financial activities through an intuitive and responsive interface.",
    image: "https://ik.imagekit.io/h4y6qwy6j/fam-budget-image.png?tr=c-force,w-800,h-400",
    tech: ["JavaScript", "React", "Tailwind", "Framer Motion", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://fam-budget-3xsp.vercel.app/",
    githubUrl: "https://github.com/sreenathreddy0404/FAM-BUDGET",
    featured: true,
    status : true,
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description: "A modern developer portfolio showcasing my projects, technical skills, and achievements with smooth animations and responsive design.",
    image: "https://ik.imagekit.io/h4y6qwy6j/portfolio-image.png?tr=c-force,w-800,h-450",
    tech: ["TypeScript", "React", "Tailwind", "Framer Motion"],
    liveUrl: "https://sreenathreddyannareddy-portfolio.vercel.app",
    githubUrl: "https://github.com/sreenathreddy0404/MY-PORTFOLIO",
    featured: false,
    status : true,
  },
  {
    id: 4,
    title: "Todo App",
    description: "A full-stack task management application built with the MERN stack, featuring secure user authentication, task creation, updating, and deletion with a responsive interface.",
    image: "https://ik.imagekit.io/h4y6qwy6j/todoapp.png",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT Authentication"],
    liveUrl: "https://todo-app-ruby-five-11.vercel.app/login",
    githubUrl: "https://github.com/SREENATHREDDY1234/todo-app",
    featured: true,
    status : true,
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering (AI)",
    institution: "Parul University",
    year: "2023 - 2027",
    cgpa: "9.0 / 10",
    description:
      "Focused on Artificial Intelligence, Data Structures, Algorithms, and Full Stack Web Development.",
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "RGUKT RK Valley",
    year: "2022 - 2023",
    cgpa: "9.9 / 10",
    description:
      "Built a strong foundation in mathematics, programming, and problem solving.",
  },
];

export const experience = [
  {
    role: "Full Stack Project",
    company: "FamBudget",
    year: "2025",
    description:
      "Built a full-stack family budget management application using React, Node.js, Express, and MongoDB to track expenses and financial activities.",
  },
  {
    role: "Frontend Project",
    company: "Personal Portfolio",
    year: "2024",
    description:
      "Designed and developed a modern animated portfolio using React, TypeScript, Tailwind CSS, and Framer Motion.",
  },
];

export const orbitIcons: OrbitIcon[] = [
  { icon: FaReact, color: "#61DAFB", delay: 1 },
  { icon: SiTypescript, color: "#3178C6", delay: 2 },
  { icon: SiMongodb, color: "#47A248", delay: 4 },
  { icon: SiTailwindcss, color: "#06B6D4", delay: 6 },
  { icon: FaNodeJs, color: "#339933", delay: 8 },
  { icon: SiFramer, color: "#0055FF", delay: 10 },
];

export const allProjects: AllProjects[] = [
  {
    id: 1,
    title: "KissanKonnect",
    subtitle: "Hyperlocal Agricultural Marketplace",
    description: "A hyperlocal agricultural marketplace connecting farmers and buyers with real-time product listings, secure Stripe payments, and location-based discovery.",
    image: "https://ik.imagekit.io/h4y6qwy6j/kissan_konnect.png",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Stripe"],
    liveUrl: "",
    githubUrl: "https://github.com/sreenathreddy0404/KISSAN-KONNECT",
    featured: true,
    status : false,
  },
  {
    id: 2,
    title: "FamBudget",
    subtitle: "Full-Stack Budget Management Application",
    description: "A full-stack budget management application that helps families track expenses, manage income, and monitor financial activities through an intuitive and responsive interface.",
    image: "https://ik.imagekit.io/h4y6qwy6j/fam-budget-image.png?tr=c-force,w-800,h-400",
    tech: ["JavaScript", "React", "Tailwind", "Framer Motion", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://fam-budget-3xsp.vercel.app/",
    githubUrl: "https://github.com/sreenathreddy0404/FAM-BUDGET",
    featured: true,
    status : true,
  },
  {
    id: 3,
    title: "Portfolio",
    subtitle: "Personal Portfolio Website",
    description: "A modern developer portfolio showcasing my projects, technical skills, and achievements with smooth animations and responsive design.",
    image: "https://ik.imagekit.io/h4y6qwy6j/portfolio-image.png?tr=c-force,w-800,h-450",
    tech: ["TypeScript", "React", "Tailwind", "Framer Motion"],
    liveUrl: "https://sreenathreddyannareddy-portfolio.vercel.app",
    githubUrl: "https://github.com/sreenathreddy0404/MY-PORTFOLIO",
    featured: true,
    status : true,
  },
  {
    id: 4,
    title: "ToDo App",
    subtitle: "Task Management with Authentication",
    description: "A full-stack task management application built with the MERN stack, featuring secure user authentication, task creation, updating, and deletion with a responsive interface.",
    image: "https://ik.imagekit.io/h4y6qwy6j/todoapp.png",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT Authentication"],
    liveUrl: "https://todo-app-ruby-five-11.vercel.app/login",
    githubUrl: "https://github.com/SREENATHREDDY1234/todo-app",
    featured: true,
    status : true,
  },
  {
    id: 5,
    title: "Netflix Clone",
    subtitle: "Movie Streaming UI with TMDB API",
    description: "A Netflix-inspired movie browsing application built with React that fetches real-time movie data using the TMDB API and displays categorized movie rows with a responsive UI.",
    image: "https://ik.imagekit.io/h4y6qwy6j/netflixclone.png",
    tech: ["React", "TMDB API", "JavaScript", "CSS"],
    liveUrl: "https://netflix-clone-seven-rust.vercel.app/",
    githubUrl: "https://github.com/sreenathreddy0404/netflix-clone",
    featured: true,
    status : true,
  },
  {
    id: 6,
    title: "YouTube Clone",
    subtitle: "Video Streaming Platform",
    description: "A YouTube-inspired video streaming web app where users can browse, search, and watch videos with a responsive UI and dynamic data fetching.",
    image: "https://ik.imagekit.io/h4y6qwy6j/youtube-clone.png",
    tech: ["React", "YouTube API"],
    liveUrl: "https://youtube-clone-gray-one.vercel.app/",
    githubUrl: "https://github.com/sreenathreddy0404/youtube-clone.git",
    featured: false,
    status : true,
  },
  {
    id: 7,
    title: "Mini Projects",
    subtitle: "JavaScript Logic Practice Projects",
    description: "A collection of small interactive JavaScript projects demonstrating core concepts like DOM manipulation, event handling, and responsive UI design.",
    image: "https://ik.imagekit.io/h4y6qwy6j/mini-projects.png",
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://sreenathreddy0404.github.io/javascript-mini-projects-showcase/",
    githubUrl: "https://github.com/sreenathreddy0404/javascript-mini-projects-showcase",
    featured: false,
    status : true,
  },
  {
    id: 8,
    title: "JavaScript Practice",
    subtitle: "Core JavaScript Learning Projects",
    description: "A collection of practice projects and exercises focused on strengthening JavaScript fundamentals including DOM manipulation, problem solving, and interactive UI features.",
    image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/sreenathreddy0404/javascript-projects",
    featured: false,
    status : true,
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Computer Networks And Internet Protocol",
    issuer: "NPTEL (IIT Kharagpur) - SWAYAM",
    date: "Jan–Apr 2025",
    description: "Completed a 12-week NPTEL course on Computer Networks and Internet Protocol with a 75% score, ranking in the Top 2% among 6290 certified candidates.",
    image: "https://ik.imagekit.io/h4y6qwy6j/nptel_certificate.jpeg?tr=c-force,w-800,h-500",
    credentialUrl: "https://nptel.ac.in/noc",
    skills: [
      "Computer Networks",
      "Internet Protocols",
      "TCP/IP",
    ],
    featured: true,
  },
];