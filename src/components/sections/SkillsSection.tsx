import { motion } from 'framer-motion';
import { useState } from 'react';
import { skills } from '@/constants/data';
import { GradientText } from '@/components/animations/AnimatedText';

type SkillCategory = 'frontend' | 'backend' | 'tools' | 'languages';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

  const categories: { key: SkillCategory; label: string }[] = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'tools', label: 'Tools' },
    { key: 'languages', label: 'Languages' },
  ];

  return (
    <section id="skills" className="container min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary mb-4 block">// MY SKILLS</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Technical <GradientText>Expertise</GradientText>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex justify-center gap-4 mb-12"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            className={`px-4 py-2 text-sm md:px-6 md:py-3 md:text-md rounded-full md:font-medium transition-all duration-300 ${
              activeCategory === category.key
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow'
                : 'glass hover:shadow-lg'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            {category.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {skills[activeCategory].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
  };
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="glass rounded-2xl p-6 relative overflow-hidden group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${skill.color}20 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${skill.color}15` }}
          animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <skill.icon className="w-8 h-8" style={{ color: skill.color }} />
        </motion.div>

        {/* Name */}
        <h4 className="font-display font-bold text-lg mb-3">{skill.name}</h4>

        {/* Progress Bar */}
        <div className="skill-bar">
          <motion.div
            className="skill-bar-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
        </div>

        {/* Level */}
        <motion.span
          className="text-sm text-muted-foreground mt-2 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
    </motion.div>
  );
};

export default SkillsSection;