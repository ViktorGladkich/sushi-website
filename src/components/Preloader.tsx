'use client';
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1, // Каждая буква появляется с небольшой задержкой
      duration: 0.5,
    },
  }),
};

const preloaderVariants = {
  animate: {
    opacity: 0,
    transition: {
      delay: 2, // Общая задержка перед исчезновением
      duration: 0.5,
    },
  },
};

const Preloader: React.FC = () => {
  const text = "Yume Sushi";

  return (
    <motion.div 
      className={styles.preloader}
      variants={preloaderVariants}
      animate="animate" // Запускаем анимацию исчезновения
    >
      <div className={styles.textContainer}>
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={index} // Передаем индекс для расчета задержки
          >
            {char === " " ? "\u00A0" : char} {/* Заменяем пробел на неразрывный */}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;