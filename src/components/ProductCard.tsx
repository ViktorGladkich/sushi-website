'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
  onShowDetails: (product: Product) => void;
  // Убираем isFilteredOut
}

// Варианты для анимации появления карточки
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onShowDetails }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!addButtonRef.current) return;
    const rect = addButtonRef.current.getBoundingClientRect();
    const startCoords = { x: rect.left, y: rect.top };
    addToCart(product, startCoords);
  };

  return (
    <motion.div 
      className={styles.card}
      onClick={() => onShowDetails(product)}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      layout // Оставляем layout для плавной перестановки
    >
      {product.tags?.includes('neu') && (
        <div className={styles.newTag}>Neu</div>
      )}

      <div className={styles.imageContainer}>
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          sizes="(max-width: 600px) 100vw, 33vw"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price.toFixed(2)} €</span>
          <button className={styles.detailsButton}>Details</button>
          <motion.button 
            ref={addButtonRef}
            className={styles.addButton}
            whileHover={{ scale: 1.1, backgroundColor: '#ff7033' }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
          >
            <FiPlus />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;