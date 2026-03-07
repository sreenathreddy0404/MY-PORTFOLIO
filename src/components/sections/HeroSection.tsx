import { motion } from 'framer-motion';
import { FiDownload, FiSend } from 'react-icons/fi';
import { personalInfo, orbitIcons } from '@/constants/data';
import { AnimatedLetters, GradientText } from '@/components/animations/AnimatedText';
import { useState, useEffect } from 'react';

const roles = ['Full Stack Developer', 'Problem Solver', 'AI Enthusiast', 'Tech Explorer'];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 mb-20">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1 left-1 w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(var(--orb-1)) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.4, 0.1],
            x : [0,40,0],
            y : [0,20,0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1 right-1/2 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--orb-2)) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.4, 0.1],
            x : [0,-40,0],
            y : [0,20,0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--orb-3)) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
            x : [0,40,0],
            y : [0,-20,0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-4"
            >
              👋 Hello, I'm
            </motion.p>

            <h1 className="text-4xl md:text-6xl font-display font-bold">
              <AnimatedLetters text={personalInfo.firstname} delay={0.3} />
            </h1>
            <h1 className='text-4xl md:text-6xl font-display font-bold mb-6'>
              <AnimatedLetters text={personalInfo.lastname} delay={2.3}/>
            </h1>

            <div className="h-12 mb-6">
              <span className="text-2xl md:text-3xl font-display">
                <GradientText>{displayText}</GradientText>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 rounded-full font-medium overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end opacity-100 transition-opacity" />
                <span className="absolute inset-0 bg-gradient-to-r from-gradient-end via-gradient-mid to-gradient-start opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2 text-white glow">
                  <FiSend className="group-hover:translate-x-1 transition-transform" />
                  Hire Me
                </span>
              </motion.a>

              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="group px-8 py-4 rounded-full font-medium glass border-2 border-transparent hover:border-primary glow shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <FiDownload className="group-hover:animate-bounce" />
                  Download CV
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar with Orbiting Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Orbiting Icons */}
              <div className="absolute inset-0 animate-rotate-slow">
                {orbitIcons.map((item, index:number) => (
                  <motion.div
                    key={index}
                    className="absolute w-12 h-12 -ml-6 -mt-6 flex items-center justify-center glass rounded-xl shadow-lg"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${index * 60}deg) translateX(180px) rotate(-${index * 90}deg)`,
                    }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </motion.div>
                ))}
              </div>

              {/* Avatar Container */}
              <div className="absolute inset-8 rounded-full gradient-border p-1">
                <div className="w-full h-full rounded-full overflow-hidden glass">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={`${personalInfo.firstname} ${personalInfo.lastname}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Glowing Ring */}
              <motion.div
                className="absolute inset-4 rounded-full border-3 border-primary/30"
              />
              <motion.div
                className="absolute inset-2 rounded-full border-3 border-accent/20"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


export default HeroSection;