"use client";

import styles from "../app/page.module.css";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { menuData } from "../data/menuData";
import ProductCard from "./ProductCard";
import { FiAnchor, FiAward, FiCoffee, FiList, FiShoppingBag, FiStar, FiTruck } from "react-icons/fi";
import Marquee from "./Marquee";
import { FaQuoteLeft } from "react-icons/fa";
import AnimatedText from "./AnimatedText";
import ProductModal from "./ProductModal";
import { Product } from "../types";
import ShowcaseGallery from './ShowcaseGallery';

const bestsellers = [
  menuData[1].products[0],
  menuData[1].products[1],
  menuData[2].products[0],
];

const HomePageClient: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Die Kunst des <br />
            <span>perfekten Sushi</span>
          </h1>
          <p className={styles.subtitle}>
            Frische Zutaten, meisterhafte Zubereitung. <br />
            Ein unvergessliches Geschmackserlebnis für Sie.
          </p>
          <div>
            <Link href="/menu">
              <motion.button
                className={styles.ctaButton}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(255, 77, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Jetzt Bestellen
              </motion.button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <video
            className={styles.heroVideo}
            src="/sushi-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      <section className={styles.bestsellerSection}>
        <AnimatedText
          text="Unsere Bestseller"
          className={styles.sectionTitle}
        />
        <AnimatedText
          text="Die Favoriten unserer Gäste – eine Auswahl, die Sie nicht verpassen sollten."
          className={styles.sectionSubtitle}
        />
        <div className={styles.bestsellerGrid}>
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onShowDetails={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      <div style={{ overflowX: "hidden" }}>
        <Marquee />
      </div>

      <section className={styles.philosophySection}>
        <AnimatedText text="Unsere Werte" className={styles.sectionTitle} />
        <AnimatedText
          text="Drei Säulen, die das Fundament von Yume Sushi bilden."
          className={styles.sectionSubtitle}
        />
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyItem}>
            <FiAward size={40} className={styles.philosophyIcon} />
            <h3>Frische</h3>
            <p>
              Wir verwenden nur die besten, täglich gelieferten Zutaten für
              einen unvergleichlichen Geschmack.
            </p>
          </div>
          <div className={styles.philosophyItem}>
            <FiAnchor size={40} className={styles.philosophyIcon} />
            <h3>Handwerk</h3>
            <p>
              Jeder Roll wird von erfahrenen Sushi-Meistern mit Präzision und
              Leidenschaft zubereitet.
            </p>
          </div>
          <div className={styles.philosophyItem}>
            <FiCoffee size={40} className={styles.philosophyIcon} />
            <h3>Atmosphäre</h3>
            <p>
              Ein modernes und stilvolles Ambiente für Ihren perfekten
              Genussmoment.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <video
            className={styles.parallaxVideo}
            src="/making-sushi.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className={styles.videoContent}>
          <AnimatedText
            text="Jedes Detail zählt"
            className={styles.videoContentH2}
          />
          <AnimatedText
            text="Von der perfekten Reistemperatur bis zum präzisen Schnitt – wir zelebrieren die Kunst des Sushi in jedem einzelnen Schritt."
            className={styles.videoContentP}
            stagger={0.02}
          />
        </div>
      </section>

 <section className={styles.howItWorksSection}>
        <AnimatedText text="So einfach geht's" className={styles.sectionTitle} />
        <AnimatedText text="Ihr Weg zum perfekten Sushi-Erlebnis in 4 Schritten." className={styles.sectionSubtitle} />
        <div className={styles.howItWorksGrid}>
          {/* Шаг 1 */}
          <div className={styles.howItWorksItem}>
            <div className={styles.howItWorksIconWrapper}>
              <FiList size={32} />
              <div className={styles.howItWorksNumber}>1</div>
            </div>
            <h3>Wählen</h3>
            <p>Stöbern Sie durch unsere Speisekarte und finden Sie Ihre Favoriten.</p>
          </div>
          {/* Шаг 2 */}
          <div className={styles.howItWorksItem}>
            <div className={styles.howItWorksIconWrapper}>
              <FiShoppingBag size={32} />
              <div className={styles.howItWorksNumber}>2</div>
            </div>
            <h3>Bestellen</h3>
            <p>Fügen Sie Ihre Auswahl dem Warenkorb hinzu und gehen Sie zur Kasse.</p>
          </div>
          {/* Шаг 3 */}
          <div className={styles.howItWorksItem}>
            <div className={styles.howItWorksIconWrapper}>
              <FiStar size={32} />
              <div className={styles.howItWorksNumber}>3</div>
            </div>
            <h3>Zubereiten</h3>
            <p>Unsere Meister bereiten Ihre Bestellung frisch für Sie zu.</p>
          </div>
          {/* Шаг 4 */}
          <div className={styles.howItWorksItem}>
            <div className={styles.howItWorksIconWrapper}>
              <FiTruck size={32} />
              <div className={styles.howItWorksNumber}>4</div>
            </div>
            <h3>Genießen</h3>
            <p>Wir liefern schnell, damit Sie Ihr Essen heiß und frisch genießen können.</p>
          </div>
        </div>
      </section>

        <ShowcaseGallery />

      <section className={styles.testimonialsSection}>
        <AnimatedText
          text="Was unsere Gäste sagen"
          className={styles.sectionTitle}
        />
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialItem}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.quoteText}>
              “Das beste Sushi, das ich je in Berlin gegessen habe. Die
              Drachenrolle ist ein absoluter Traum!”
            </p>
            <p className={styles.quoteAuthor}>- Anna L.</p>
          </div>
          <div className={styles.testimonialItem}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.quoteText}>
              “Unglaublich frischer Fisch und eine wunderschöne Präsentation.
              Man schmeckt die Liebe zum Detail.”
            </p>
            <p className={styles.quoteAuthor}>- Markus S.</p>
          </div>
          <div className={styles.testimonialItem}>
            <FaQuoteLeft className={styles.quoteIcon} />
            <p className={styles.quoteText}>
              “Das Ambiente ist modern und gemütlich. Perfekt für ein Date oder
              einen besonderen Anlass. Wir kommen wieder!”
            </p>
            <p className={styles.quoteAuthor}>- Julia & Tom</p>
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default HomePageClient;
