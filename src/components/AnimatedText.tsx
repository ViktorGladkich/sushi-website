'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  stagger?: number; // Задержка между словами
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (stagger: number = 0.05) => ({
    opacity: 1,
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, stagger = 0.05 }) => {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      custom={stagger}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block', paddingRight: '0.25em' }} // Добавляем пробел после слова
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;