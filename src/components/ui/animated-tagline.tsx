import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const taglines = [
  "Build Beautiful Apps in Minutes",
  "AI-Powered Development Platform",
  "From Idea to Production Instantly",
  "No Code? No Problem",
  "Ship Faster, Build Smarter"
];

export function AnimatedTagline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 md:h-24 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
        >
          {taglines[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
