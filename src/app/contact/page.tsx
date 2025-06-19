'use client';
import React from 'react';
import styles from './contact.module.css';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Kontaktieren Sie uns</h1>
        <p className={styles.subtitle}>
          Wir freuen uns auf Ihre Nachricht, Ihren Anruf oder Ihren Besuch.
        </p>
      </motion.div>

      <div className={styles.contentWrapper}>
        {/* Левая часть: Карта и информация */}
        <motion.div 
          className={styles.infoSection}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.contactItem}>
            <FiMapPin size={24} className={styles.icon} />
            <div>
              <h3>Adresse</h3>
              <p>Musterstraße 123, 10115 Berlin</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FiPhone size={24} className={styles.icon} />
            <div>
              <h3>Telefon</h3>
              <p>+49 123 4567890</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <FiMail size={24} className={styles.icon} />
            <div>
              <h3>E-Mail</h3>
              <p>info@yumesushi.de</p>
            </div>
          </div>
          <div className={styles.mapContainer}>
            {/* Это iframe с картой Google Maps. Замените src на вашу ссылку */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.993356024978!2d13.402315615699307!3d52.51627497981358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e18d3af1873%3A0x6d709dd4f8e0ea52!2sBerliner%20Fernsehturm!5e0!3m2!1sde!2sde!4v1678886543210!5m2!1sde!2sde"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Правая часть: Форма */}
        <motion.div 
          className={styles.formSection}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2>Schreiben Sie uns eine Nachricht</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Ihre Nachricht</label>
              <textarea id="message" name="message" rows={6} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Nachricht senden</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;