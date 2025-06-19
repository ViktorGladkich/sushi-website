"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";

const FlyingItem: React.FC = () => {
  // Получаем все, что нужно для анимации, из хранилища
  const { flyingItem, cartIconCoords, clearFlyingItem } = useCartStore();

  // Если нет летящего товара или координат корзины, ничего не рендерим
  if (!flyingItem || !cartIconCoords) {
    return null;
  }

  return (
    // Используем key, чтобы анимация перезапускалась для каждого нового товара
    <motion.div
      key={flyingItem.id}
      style={{
        position: "fixed",
        top: flyingItem.startCoords.y,
        left: flyingItem.startCoords.x,
        zIndex: 9999,
        pointerEvents: "none",
      }}
      initial={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      animate={{
        // Двигаемся к координатам иконки корзины
        x: cartIconCoords.x - flyingItem.startCoords.x,
        y: cartIconCoords.y - flyingItem.startCoords.y,
        scale: 0.1, // Уменьшаемся в размере
        opacity: 0.5, // Становимся полупрозрачными
      }}
      transition={{
        type: "tween",
        duration: 0.7,
        ease: [0.5, 0, 0.75, 0], // Кривая Безье для красивой дуги
      }}
      // Когда анимация завершена, вызываем функцию очистки
      onAnimationComplete={clearFlyingItem}
    >
      <Image
        src={flyingItem.image}
        alt="flying item"
        width={60}
        height={60}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        }}
      />
    </motion.div>
  );
};

export default FlyingItem;
