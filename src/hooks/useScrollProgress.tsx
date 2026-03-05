import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, activeSection };
};




{/* 
    1) window.scrollY → how far user has scrolled vertically
    2) scrollHeight → total page height
    3) window.innerHeight → visible screen height
    4) scroll progress = (current scroll / total scrollable height) × 100
        This gives you a value like:
        0 → top of page
        50 → middle
        100 → bottom

    5)What is getBoundingClientRect()
        This function gives you the position and size of an element relative to the viewport (visible screen).
        It returns an object like:
        {
            top: number,
            bottom: number,
            left: number,
            right: number,
            width: number,
            height: number
        }
    6) rect.top = distance from the top of the viewport to the top of the element

    7) You are checking from bottom to top:
        contact
        projects
        skills
        about
        home

        Why? Because when scrolling down:
        Many sections may satisfy rect.top <= 150
        You want the lowest visible one to win

        Example:
        If you're in "projects":
            home → top = -2000
            about → top = -1200
            skills → top = -500
            projects → top = 50
            contact → top = 800
            
        All of these are <= 150:
        home, about, skills, projects

        But you want projects active.
        Since you're checking from bottom → projects gets matched first → loop breaks.
*/}