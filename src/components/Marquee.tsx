import React from 'react';
import styles from './Marquee.module.css';

const Marquee: React.FC = () => {
  const text = "• FRISCHE • HANDWERKSKUNST • LEIDENSCHAFT • YUME SUSHI ";
  
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;