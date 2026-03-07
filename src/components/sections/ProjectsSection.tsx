import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '@/constants/data';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';


const ProjectsSection = () => {
  const navigate = useNavigate();
  
  // Animation variants for staggered cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="section-container">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary mb-4 block">// MY WORK</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Featured <span className='gradient-text'>Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of projects that showcase my skills and passion for development
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <motion.button
          onClick={() => navigate('/projects')}
          className="group relative px-8 py-4 rounded-full font-medium overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end opacity-100 transition-opacity" />
          <span className="absolute inset-0 bg-gradient-to-r from-gradient-end via-gradient-mid to-gradient-start opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center gap-2 text-white glow">
              View All Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
    >
      <div className="px-6 py-4">
        <motion.span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-green-900 glass"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span
            className={`${project.status?"w-2 h-2":"animate-ping w-1 h-1"} rounded-full ${
              project.status ? "bg-green-500" : "bg-yellow-400"
            }`}
          />
          <span className={`${project.status ? "text-green-500" : "text-yellow-400"}`}>
            {project.status ? "Completed" : "In Progress"}
          </span>
        </motion.span>
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 via-transparent to-transparent" />

        {/* Hover overlay links (desktop) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass hover:shadow-glow transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink className="w-6 h-6" />
            </motion.a>
          )}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full glass hover:shadow-glow transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Always‑visible links for mobile */}
        <div className="flex items-center gap-4 pt-2 border-t border-border">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
            <FiExternalLink className="w-4 h-4" />
            Live
          </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <FiGithub className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;