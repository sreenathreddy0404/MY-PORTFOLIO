import { motion } from 'framer-motion';
import { education, experience } from '@/constants/data';
import { GradientText } from '@/components/animations/AnimatedText';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section id="about" className="container min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary mb-4 block">// ABOUT ME</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          My <GradientText>Journey</GradientText>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A passionate developer with a love for creating beautiful, functional web experiences
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 rounded-xl glass">
              <FiBookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold">Education</h3>
          </motion.div>

          <div className="space-y-6">
            {education.map((item, index:number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              >
                <TimelineCard
                  title={item.degree}
                  subtitle={item.institution}
                  year={item.year}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 rounded-xl glass">
              <FiBriefcase className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-display font-bold">Experience</h3>
          </motion.div>

          <div className="space-y-6">
            {experience.map((item, index:number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              >
                <TimelineCard
                  title={item.role}
                  subtitle={item.company}
                  year={item.year}
                  description={item.description}
                  isExperience
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineCardProps {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  isExperience?: boolean;
}

const TimelineCard = ({ title, subtitle, year, description, isExperience = false }: TimelineCardProps) => {
  return (
    <motion.div
      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary before:via-accent before:to-gradient-end"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Timeline Dot */}
      <motion.div
        className={`absolute left-0 top-0 w-2 h-2 rounded-full -translate-x-[3px] ${
          isExperience ? 'bg-accent' : 'bg-primary'
        }`}
        whileHover={{ scale: 1.5 }}
      />

      <div className="glass rounded-2xl p-6 shadow-lg glow transition-all duration-300">
        <span className="text-xs font-mono text-muted-foreground">{year}</span>
        <h4 className="text-lg font-display font-bold mt-1">{title}</h4>
        <p className={`text-sm ${isExperience ? 'text-accent' : 'text-primary'} font-medium`}>
          {subtitle}
        </p>
        <p className="text-sm text-muted-foreground mt-3">{description}</p>
      </div>
    </motion.div>
  );
};

export default AboutSection;