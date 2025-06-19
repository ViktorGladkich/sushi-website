'use client';
import React from 'react';
import styles from './about.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroSection}>
        <Image 
          src="/images/restaurant-interior.jpg" 
          alt="Интерьер ресторана Yume Sushi"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.heroOverlay} />
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Unsere Philosophie
        </motion.h1>
      </div>

      <div className={styles.contentSection}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.subTitle}>Die Seele von <span className={styles.highlight}>Yume Sushi</span></h2>
          <p className={styles.text}>
            Bei Yume Sushi (夢 - Traum) glauben wir, dass jedes Sushi-Stück eine Geschichte erzählt. 
            Eine Geschichte von Hingabe, Frische und der Kunst, einfache Zutaten in ein unvergessliches 
            Erlebnis zu verwandeln. Unsere Reise begann mit einem einfachen Traum: die authentische japanische 
            Sushi-Kultur nach Deutschland zu bringen, interpretiert mit einem modernen, kreativen Touch.
          </p>
          <p className={styles.text}>
            Jeder Fisch wird sorgfältig von lokalen Lieferanten ausgewählt, unser Reis wird täglich 
            perfektioniert und unser Gemüse stammt aus nachhaltigem Anbau. Für uns ist Sushi mehr als nur Essen – 
            es ist eine Form der Meditation, ein Moment des Genusses und eine Feier des Lebens.
          </p>
        </motion.div>

        <motion.div
          className={styles.features}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.featureItem}>
            <h3>Frische</h3>
            <p>Tägliche Lieferungen garantieren höchste Qualität und Geschmack.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Handwerkskunst</h3>
            <p>Unsere Sushi-Meister haben jahrelange Erfahrung und Leidenschaft.</p>
          </div>
          <div className={styles.featureItem}>
            <h3>Kreativität</h3>
            <p>Wir ehren die Tradition und wagen es, neue Geschmackswelten zu erkunden.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;