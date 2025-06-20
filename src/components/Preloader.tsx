'use client';
import React from 'react';
import { motion, Variants, Transition } from 'framer-motion'; // Добавляем Variants и Transition
import styles from './Preloader.module.css';
import Lottie from "lottie-react";
import preloaderAnimation from '../../public/animations/preloader-sushi.json';

// Создаем типизированный объект для transition
const exitTransition: Transition = {
  duration: 0.5,
  ease: 'easeInOut'
};

const preloaderVariants: Variants = {
  // Анимация исчезновения всего контейнера
  exit: {
    opacity: 0,
    transition: exitTransition
  },
};

const Preloader: React.FC = () => {
  return (
    <motion.div 
      className={styles.preloader}
      variants={preloaderVariants}
      // Добавляем initial и animate, чтобы избежать ошибок с неопределенными состояниями
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit="exit" // Анимация начнется, когда компонент будет уходить
    >
      <div className={styles.lottieContainer}>
        <Lottie 
          animationData={preloaderAnimation} 
          loop={false}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;