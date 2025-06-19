'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface LazyShowProps {
  children: React.ReactNode;
}

const animationVariants: Variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  hidden: { opacity: 0, y: 50 },
};

const LazyShow: React.FC<LazyShowProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // amount: 0.2 означает, что анимация начнется, когда 20% элемента будет видно
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;