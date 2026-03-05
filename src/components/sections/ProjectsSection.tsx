import { motion, AnimatePresence ,Variants} from 'framer-motion';
import { useState } from 'react';
import { projects } from '@/constants/data';
import { GradientText } from '@/components/animations/AnimatedText';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.tech))
);

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter((p) => p.tech.includes(filter))
    : projects;

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="section-container">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary mb-4 block">// MY WORK</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Featured <GradientText>Projects</GradientText>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of projects that showcase my skills and passion for development
        </p>
      </motion.div>

      {/* Filter Tags Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        <motion.button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === null
              ? 'bg-gradient-to-r from-primary to-accent text-white'
              : 'glass hover:shadow-lg'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>
        {allTechs.slice(0, 6).map((tech, index) => (
          <motion.button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filter === tech
                ? 'bg-gradient-to-r from-primary to-accent text-white'
                : 'glass hover:shadow-lg'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
          >
            {tech}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid with Filter Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter || 'all'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
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
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.span
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary to-accent text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Featured
          </motion.span>
        )}

        {/* Links Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
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

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;