import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInText = ({ children, className = '', delay = 0 }: AnimatedTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TypewriterText = ({ text, className = '', delay = 0 }: TypewriterTextProps) => {
  const words = text.split(' ');

  return (
    <motion.span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 1,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <span className={`gradient-text ${className}`}>
      {children}
    </span>
  );
};

interface AnimatedLettersProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedLetters = ({ text, className = '', delay = 0 }: AnimatedLettersProps) => {
  const letters = text.split('');

  return (
    <motion.span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * 0.2,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
