import { motion } from 'framer-motion';
import { useState } from 'react';
import { personalInfo, socialLinks } from '@/constants/data';
import { FiMail, FiMapPin, FiSend, FiCheck, FiCopy } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Basic validation
  if (!formData.name.trim()) {
    alert("Please enter your name");
    return;
  }

  if (!formData.email.trim()) {
    alert("Please enter your email");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (!formData.message.trim()) {
    alert("Please enter your message");
    return;
  }

  setIsSubmitting(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Email failed:", error);
  }

  setIsSubmitting(false);
  setTimeout(() => setIsSubmitted(false), 3000);
};

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary mb-4 block">// GET IN TOUCH</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Let's <span className='gradient-text'>Connect</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? Let's create something amazing together
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8"
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                className="flex items-center gap-4 group cursor-pointer"
                viewport={{once:false}}
                onClick={copyEmail}
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-xl glass group-hover:shadow-glow transition-all">
                  <FiMail className="w-5 h-5 text-primary animate-shake" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: copied ? 1 : 0 }}
                  viewport={{once:false}}
                  className="text-accent"
                >
                  <FiCheck className="w-5 h-5" />
                </motion.div>
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: copied ? 0 : 1 }}
                  viewport={{once:false}}
                  className="text-muted-foreground"
                >
                  <FiCopy className="w-5 h-5" />
                </motion.div>
              </motion.div>

              {/* Location */}
              <motion.div className="flex items-center gap-4" whileHover={{ x: 5 }}>
                <div className="p-3 rounded-xl glass">
                  <FiMapPin className="w-5 h-5 text-accent animate-bounce" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-display font-bold mb-6">Follow Me</h3>
            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((link, index:number) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-15 h-15 rounded-full glass flex items-center justify-center glow transition-all"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className={`w-6 h-6 ${link.animation}`} style={{ color: link.color }} />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="group w-full py-4 rounded-xl font-medium relative overflow-hidden disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-gradient-end" />
                <span className="absolute inset-0 bg-gradient-to-r from-gradient-end via-gradient-mid to-gradient-start opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2 text-white">
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : isSubmitted ? (
                    <>
                      <FiCheck className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;