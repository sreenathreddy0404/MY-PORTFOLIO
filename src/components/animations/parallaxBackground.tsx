import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient Orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl opacity-50 animate-pulse-glow"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-accent/20 to-transparent blur-3xl opacity-40 animate-pulse-glow"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-gradient-end/20 to-transparent blur-3xl opacity-30 animate-pulse-glow"
      />
      
      {/* Geometric Patterns */}
      <motion.div
        style={{ rotate }}
        className="absolute top-1/3 right-1/4 w-32 h-32 border border-primary/10 rounded-lg opacity-40"
      />
      <motion.div
        style={{ rotate }}
        className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-accent/10 rounded-lg opacity-40"
      />
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
    </div>
  );
};

export const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-gradient-end/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
    </div>
  );
};
