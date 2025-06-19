'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Product } from '../types';
import styles from './ProductModal.module.css';
import { FiX, FiChevronRight, FiShoppingBag } from 'react-icons/fi';
import { useCartStore } from '../store/cartStore';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

// Вспомогательный компонент, который вызывает хук блокировки скролла.
// Он ничего не рендерит, его единственная цель - управлять эффектом.
const BodyScrollLocker: React.FC = () => {
  useLockBodyScroll(true);
  return null;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product) {
      const startCoords = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      addToCart(product, startCoords);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Этот компонент будет существовать (и блокировать скролл), пока модальное окно видимо */}
          <BodyScrollLocker />
          
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className={styles.modal}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={onClose}><FiX /></button>
              <div className={styles.modalGrid}>
                <div className={styles.imageContainer}>
                  <Image src={product.image} alt={product.name} fill sizes="50vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.contentContainer}>
                  <h2 className={styles.title}>{product.name}</h2>
                  <p className={styles.price}>{product.price.toFixed(2)} €</p>
                  <p className={styles.longDescription}>{product.longDescription}</p>
                  
                  <h3 className={styles.sectionTitle}>Zutaten</h3>
                  <ul className={styles.list}>
                    {product.ingredients.map(ing => <li key={ing}><FiChevronRight/> {ing}</li>)}
                  </ul>

                  {product.allergens && (
                    <>
                      <h3 className={styles.sectionTitle}>Allergene</h3>
                      <p className={styles.allergens}>{product.allergens.join(', ')}</p>
                    </>
                  )}
                  
                  {product.nutrition && (
                    <>
                      <h3 className={styles.sectionTitle}>Nährwerte (pro Portion)</h3>
                      <div className={styles.nutritionGrid}>
                        <div><span>Kalorien</span><span>{product.nutrition.calories}</span></div>
                        <div><span>Protein</span><span>{product.nutrition.protein}</span></div>
                        <div><span>Fett</span><span>{product.nutrition.fat}</span></div>
                        <div><span>Kohlenhydrate</span><span>{product.nutrition.carbs}</span></div>
                      </div>
                    </>
                  )}

                  <button className={styles.addButton} onClick={handleAddToCart}>
                    <FiShoppingBag/> In den Warenkorb
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;