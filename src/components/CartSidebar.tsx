'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CartSidebar.module.css';
import { useCartStore, CartItem } from '../store/cartStore';
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import Image from 'next/image';
import useLockBodyScroll from '../hooks/useLockBodyScroll';
import Link from 'next/link';

// Вспомогательный компонент для блокировки скролла
const BodyScrollLocker: React.FC = () => {
  useLockBodyScroll(true);
  return null;
}

// Отдельный компонент для одной позиции в корзине
interface CartItemProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemProps> = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } = useCartStore();

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <Image src={item.image} alt={item.name} width={70} height={70} style={{ objectFit: 'cover', borderRadius: '8px' }} />
      </div>
      <div className={styles.itemDetails}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemPrice}>{(item.price * item.quantity).toFixed(2)} €</p>
        <div className={styles.quantityControl}>
          <button onClick={() => decrementQuantity(item.id)}><FiMinus /></button>
          <span>{item.quantity}</span>
          <button onClick={() => incrementQuantity(item.id)}><FiPlus /></button>
        </div>
      </div>
      <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
        <FiTrash2 />
      </button>
    </div>
  );
};


// Основной компонент боковой панели
interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cart } = useCartStore();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <BodyScrollLocker />
          
          <motion.div
            className={styles.backdrop}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className={styles.sidebar}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className={styles.header}>
              <h2>Ihr Warenkorb</h2>
              <button onClick={onClose} className={styles.closeButton}>
                <FiX size={24} />
              </button>
            </div>

            {cart.length > 0 ? (
              <div className={styles.cartContent}>
                <div className={styles.cartItemsList}>
                  {cart.map(item => <CartItemCard key={item.id} item={item} />)}
                </div>
                <div className={styles.footer}>
                  <div className={styles.total}>
                    <span>Gesamt:</span>
                    <span>{totalPrice.toFixed(2)} €</span>
                  </div>
                  <Link href="/checkout" passHref>
                    <button className={styles.checkoutButton} onClick={onClose}>
                      Zur Kasse
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className={styles.emptyCart}>
                <FiShoppingBag size={60} />
                <p>Ihr Warenkorb ist leer.</p>
                {/* --- НОВАЯ КНОПКА --- */}
                <Link href="/menu" passHref>
                  <button className={styles.emptyCartButton} onClick={onClose}>
                    Speisekarte ansehen
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;