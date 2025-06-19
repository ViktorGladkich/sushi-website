import styles from './Footer.module.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Yume Sushi</h3>
          <p>Musterstraße 123, 10115 Berlin</p>
          <p>info@yumesushi.de</p>
          <p>+49 123 4567890</p>
        </div>
        <div className={styles.social}>
          <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
          <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
          <a href="#" aria-label="Twitter"><FaTwitter size={24} /></a>
        </div>
        <div className={styles.legal}>
          <p>© {new Date().getFullYear()} Yume Sushi. Alle Rechte vorbehalten.</p>
          <a href="#">Impressum</a> | <a href="#">Datenschutz</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;