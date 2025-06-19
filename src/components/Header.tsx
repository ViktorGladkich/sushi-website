"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { FiShoppingBag } from "react-icons/fi";
import { motion } from "framer-motion";
import React, { useState, useEffect, MutableRefObject } from "react";
import { useCartStore } from "../store/cartStore";

interface HeaderProps {
  onCartClick: () => void;
  cartIconRef: MutableRefObject<HTMLDivElement | null>;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartIconRef }) => {
  const cart = useCartStore((state) => state.cart);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05, color: "var(--color-primary)" }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/">Yume Sushi</Link>
        </motion.div>
        <nav className={styles.desktopNav}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="/menu" className={styles.navLink}>
              Speisekarte
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about" className={styles.navLink}>
              Über uns
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className={styles.navLink}>
              Kontakt
            </Link>
          </motion.div>
        </nav>
        <div className={styles.rightControls}>
          <motion.div
            ref={cartIconRef}
            className={styles.cart}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            onClick={onCartClick}
          >
            <FiShoppingBag size={24} />
            {isClient && totalItems > 0 && (
              <motion.span
                className={styles.cartCount}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {totalItems}
              </motion.span>
            )}
          </motion.div>
          <div className={styles.mobileNavPlaceholder}></div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
