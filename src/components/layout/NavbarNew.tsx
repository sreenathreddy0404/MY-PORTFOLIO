import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiSun, FiMoon} from 'react-icons/fi';
import { useTheme } from '@/hooks/useTheme';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useNavigate} from "react-router-dom";

const NavbarNew = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { progress } = useScrollProgress();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left bg-gradient-to-r from-primary via-accent to-primary"
        style={{ scaleX: progress / 100 }}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-3' 
            : 'bg-transparent py-5'
            }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
                href="/"
                onClick={(e) => {navigate('/')}}
                className="text-2xl font-display font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                SREENATH REDDY
            </motion.a>
    
            {/* Desktop Navigation */}
            
            <motion.a
                onClick={(e) => navigate('/')}
                className="nav-link"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
            >
                Home
            </motion.a>
    
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.button
              onClick={toggleTheme}
              className="relative p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                    <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    >
                    {theme === 'dark' ? (
                        <FiSun className="w-5 h-5 text-accent" />
                    ) : (
                        <FiMoon className="w-5 h-5 text-primary" />
                    )}
                    </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
        </nav>
      </motion.header>
    </>
  );
};

export default NavbarNew;