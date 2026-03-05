import { motion } from 'framer-motion';
import { socialLinks,IconType } from '@/constants/data';
import { FiHeart, FiArrowUp } from 'react-icons/fi';

interface SocialLinkType{
  name:string,
  href:string,
  url:string,
  color:string,
  icon:IconType
}
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-2xl font-display font-bold gradient-text">SREENATH REDDY</span>
            <p className="text-sm text-muted-foreground mt-2 flex items-center justify-center md:justify-start gap-1">
              Made with <FiHeart className="text-destructive pulse-glow inline-block" /> using React
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link:SocialLinkType) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" style={{ color: link.color }} />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full glass glow transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            aria-label="Back to top"
          >
            <FiArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

/*
  Why rel="noopener" is important:
  Without it, the new tab can access: window.opener

  Which means the new page can control your original page.
  That’s a security risk (called tabnabbing).

  So:
  noopener = Prevents the new page from accessing window.opener
  What noreferrer does:
  Prevents the browser from sending the "referrer" header
  The new site won’t know where the user came from
*/