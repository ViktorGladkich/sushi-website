"use client";

import { motion, Variants, Transition } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

// Варианты анимации для новой страницы
const variants: Variants = {
  // Начальное состояние: страница немного ниже и полностью прозрачна
  hidden: {
    opacity: 0,
    y: 15,
  },
  // Конечное состояние: страница на своем месте, полностью видима
  enter: {
    opacity: 1,
    y: 0,
  },
};

// Настройки самой анимации
const transition: Transition = {
  type: "tween",
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1], // Красивая кривая 'ease-out'
};

const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  return (
    <motion.div
      // Ключ заставляет React и Framer Motion пересоздавать этот компонент при смене URL
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
