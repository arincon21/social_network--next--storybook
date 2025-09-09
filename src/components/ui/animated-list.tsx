"use client";
import { memo, ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface AnimatedListProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  animationType?: 'fade' | 'slide' | 'scale';
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  fade: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2 }
    }
  },
  slide: {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: 30,
      transition: { duration: 0.2 }
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  }
};

const AnimatedList = memo(({ 
  children, 
  className = "", 
  animationType = 'fade' 
}: AnimatedListProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      className={className}
      variants={listVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <AnimatePresence mode="popLayout">
        {children.map((child, index) => (
          <motion.div
            key={index}
            variants={itemVariants[animationType]}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
});

AnimatedList.displayName = 'AnimatedList';

export default AnimatedList;
