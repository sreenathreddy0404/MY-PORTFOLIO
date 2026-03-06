import { motion } from "framer-motion";
import { allProjects as projects } from "@/constants/data";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import NavbarNew from "@/components/layout/NavbarNew";
import Footer from "@/components/layout/Footer";

const accentColors = [
  "174 72% 52%",
  "260 72% 60%",
  "30 80% 55%",
  "340 72% 55%",
  "200 80% 50%",
  "80 70% 50%",
  "0 70% 60%",
  "40 80% 55%",
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavbarNew />
      <section className="flex items-center justify-center mt-25">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-center"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            // MY WORK
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold my-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A collection of projects I built while learning full-stack
            development.
          </p>
        </motion.div>
      </section>

      {/* Project Sections */}
      {projects.map((project, index) => {
        const accent = accentColors[index % accentColors.length];
        const reverse = index % 2 !== 0; // true = image on right

        // Animation offsets: image and text start from opposite sides
        const imageX = reverse ? 100 : -100;
        const contentX = reverse ? -100 : 100;

        return (
          <section
            key={project.id}
            className="mb-12 flex items-center px-6 py-12"
          >
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center font-display">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: imageX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={reverse ? "lg:order-2" : ""}
              >
                <div className="rounded-xl border bg-card p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: contentX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className={reverse ? "lg:order-1" : ""}
              >
              {/* project no */}
              <span className="text-sm font-mono uppercase tracking-widest mb-2 block"
                style={{ color: `hsl(${accent})` 
              }}>
                Project - 0{project.id}
              </span>

              {/* Title */}
              <div className="overflow-hidden mb-2">
                <h3
                  className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-widest uppercase transition-all duration-1000"
                >
                  {project.title}
                </h3>
              </div>

              {/* Subtitle */}
              <p
                className="font-display text-lg md:text-md font-medium mb-6 transition-all duration-700"
                style={{
                  color: `hsl(${accent} / 0.7)`,
                }}
              >
                {project.subtitle}
              </p>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full border"
                      style={{
                        borderColor: `hsl(${accent} / 0.4)`,
                        color: `hsl(${accent})`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: `hsl(${accent})` }}
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <FiGithub />
                    Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
      <Footer/>
    </div>
  );
};

export default ProjectsPage;