'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './success.module.css';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const SuccessPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Перенаправляем на главную страницу через 5 секунд
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    // Очищаем таймер, если пользователь уходит со страницы раньше
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.successBox}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
        >
          <FiCheckCircle size={80} className={styles.icon} />
        </motion.div>
        <h1 className={styles.title}>Vielen Dank für Ihre Bestellung!</h1>
        <p className={styles.message}>
          Ihre Bestellung wurde erfolgreich aufgenommen und wird bereits vorbereitet.
        </p>
        <p className={styles.redirect}>
          Sie werden in 5 Sekunden zur Startseite weitergeleitet...
        </p>
        <button onClick={() => router.push('/')} className={styles.homeButton}>
          Zur Startseite
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessPage;