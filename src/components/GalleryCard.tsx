'use client';
import React from 'react';
import Image from 'next/image';
import styles from './GalleryCard.module.css';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

// Обновляем тип данных, убирая лайки и меняя caption на name
export interface GalleryItem {
  id: number;
  image: string;
  name: string; // Название блюда
  menuLink: string; // Ссылка на соответствующий раздел в меню
}

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  return (
    // Оборачиваем всю карточку в Link
    <Link href={item.menuLink} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={item.image} alt={item.name} fill sizes="33vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h3 className={styles.name}>{item.name}</h3>
          <div className={styles.cta}>
            <span>Zum Menü</span>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;