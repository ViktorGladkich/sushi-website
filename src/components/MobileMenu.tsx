'use client';

import React from 'react';
// ИЗМЕНЕНИЕ 1: Импортируем 'Transition' для типизации
import { motion, AnimatePresence, Transition } from 'framer-motion';
import styles from './MobileMenu.module.css';
import Link from 'next/link';
import useLockBodyScroll from '../hooks/useLockBodyScroll';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// ИЗМЕНЕНИЕ 2: Создаем отдельный, строго типизированный объект для transition
const menuTransition: Transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.6,
};

const menuVariants = {
  hidden: {
    x: '100%',
    transition: menuTransition
  },
  visible: {
    x: 0,
    transition: menuTransition
  }
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Speisekarte' },
  { href: '/about', label: 'Über uns' },
  { href: '/contact', label: 'Kontakt' },
];

const BodyScrollLocker: React.FC = () => {
  useLockBodyScroll(true);
  return null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <BodyScrollLocker />
          <motion.div
            className={styles.menuContainer}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <nav className={styles.nav}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Link href={link.href} className={styles.navLink} onClick={onClose}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              className={styles.footer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p>© {new Date().getFullYear()} Yume Sushi</p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;