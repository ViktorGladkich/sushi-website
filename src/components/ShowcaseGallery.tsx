"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./ShowcaseGallery.module.css";
import { motion, useSpring, useTransform } from "framer-motion";
import GalleryCard, { GalleryItem } from "./GalleryCard";
import AnimatedText from "./AnimatedText";
import { FiMousePointer } from "react-icons/fi";

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/gallery/gallery-1.jpg",
    name: "Yume Drachenrolle",
    menuLink: "/menu#spezial-rollen",
  },
  {
    id: 2,
    image: "/gallery/gallery-2.jpg",
    name: "Sake & Maguro Nigiri",
    menuLink: "/menu#nigiri",
  },
  {
    id: 3,
    image: "/gallery/gallery-3.jpg",
    name: "Baked Philadelphia",
    menuLink: "/menu#spezial-rollen",
  },
  {
    id: 4,
    image: "/gallery/gallery-4.jpg",
    name: "California Uramaki",
    menuLink: "/menu#spezial-rollen",
  },
  {
    id: 5,
    image: "/gallery/gallery-5.jpg",
    name: "Sake Maki",
    menuLink: "/menu#klassische-maki",
  },
  {
    id: 6,
    image: "/gallery/gallery-6.jpg",
    name: "Ebi Nigiri",
    menuLink: "/menu#nigiri",
  },
];

const ShowcaseGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 80 });

  const [maxScroll, setMaxScroll] = useState(1);

  const progressScaleX = useTransform(x, [0, -maxScroll], [0, 1]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const resizeObserver = new ResizeObserver(() => {
      const fullScroll = gallery.scrollWidth - gallery.clientWidth;
      setMaxScroll(fullScroll > 0 ? fullScroll : 1);
    });
    resizeObserver.observe(gallery);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    x.set(0);
    const gallery = galleryRef.current;
    if (!gallery) return;

    const scrollMultiplier = 4.5;

    const handleWheel = (event: WheelEvent) => {
      if (!gallery.matches(":hover")) return;
      const currentX = x.get();
      const delta = event.deltaY;
      const atStart = currentX >= 0;
      const atEnd = currentX <= -maxScroll;

      if ((atStart && delta < 0) || (atEnd && delta > 0)) {
        window.scrollBy(0, delta);
        return;
      }
      event.preventDefault();
      const moveDelta = delta * scrollMultiplier;
      let newX = currentX - moveDelta;

      if (newX > 0) newX = 0;
      if (newX < -maxScroll) newX = -maxScroll;
      x.set(newX);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [x, maxScroll]);

  const constrainDrag = (value: number) => {
    if (value > 0) return 0;
    if (value < -maxScroll) return -maxScroll;
    return value;
  };

  return (
    <section className={styles.galleryWrapper}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <AnimatedText
            text="Unsere Sushi-Meisterwerke"
            className={styles.title}
          />
          <AnimatedText
            text="Ein Einblick in die Kunst und die Seele von Yume Sushi."
            className={styles.subtitle}
          />
        </div>
        <div className={styles.scrollIndicator}>
          <FiMousePointer />
          <span>Scrollen oder Ziehen</span>
        </div>
      </div>

      <div ref={galleryRef} className={styles.gallerySection}>
        <motion.div
          className={styles.galleryTrack}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
          onDrag={() => {
            x.set(constrainDrag(x.get()));
          }}
        >
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>

      <div className={styles.progressBarContainer}>
        <motion.div
          className={styles.progressBar}
          style={{ scaleX: progressScaleX }}
        />
      </div>
    </section>
  );
};

export default ShowcaseGallery;
