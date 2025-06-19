"use client";

import styles from "./menu.module.css";
import React, { useState, useMemo } from "react";
import { menuData } from "../../data/menuData";
import ProductCard from "../../components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { ProductTag, Product } from "../../types";
import ProductModal from "../../components/ProductModal";
import { FiFrown } from "react-icons/fi";

const tags: { id: ProductTag | "alle"; name: string }[] = [
  { id: "alle", name: "Alle" },
  { id: "bestseller", name: "Bestseller" },
  { id: "vegetarisch", name: "Vegetarisch" },
  { id: "scharf", name: "Scharf" },
  { id: "neu", name: "Neu" },
];

const MenuPage: React.FC = () => {
  const [activeTag, setActiveTag] = useState<ProductTag | "alle">("alle");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Возвращаем логику фильтрации массива, но теперь она будет работать как надо
  const filteredMenuData = useMemo(() => {
    if (activeTag === "alle") {
      // Если выбраны "Все", возвращаем все категории
      return menuData;
    }
    // Проходим по каждой категории
    return (
      menuData
        .map((category) => ({
          ...category,
          // Внутри каждой категории фильтруем продукты
          products: category.products.filter((product) =>
            product.tags?.includes(activeTag)
          ),
        }))
        // В конце убираем те категории, в которых не осталось продуктов
        .filter((category) => category.products.length > 0)
    );
  }, [activeTag]);

  return (
    <>
      <div className={styles.pageContainer}>
        <motion.h1
          className={styles.pageTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unsere Speisekarte
        </motion.h1>
        <motion.p
          className={styles.pageSubtitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Entdecken Sie unsere Auswahl an handgefertigtem Sushi, zubereitet aus
          den frischesten Zutaten.
        </motion.p>

        <div className={styles.filterContainer}>
          {tags.map((tag) => (
            <button
              key={tag.id}
              className={`${styles.filterButton} ${
                activeTag === tag.id ? styles.active : ""
              }`}
              onClick={() => setActiveTag(tag.id)}
            >
              {tag.name}
            </button>
          ))}
        </div>

        <div className={styles.menuContent}>
          <AnimatePresence mode="popLayout">
            {filteredMenuData.length > 0 ? (
              filteredMenuData.map((category, index) => (
                <motion.section
                  id={category.id}
                  key={category.id}
                  layout 
                  className={styles.categorySection}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h2 className={styles.categoryTitle}>{category.name}</h2>
                  <motion.div className={styles.productList}>
                    {/* Теперь мы рендерим только отфильтрованные продукты */}
                    {category.products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onShowDetails={setSelectedProduct}
                        // Проп isFilteredOut больше не нужен, так как мы фильтруем массив
                      />
                    ))}
                  </motion.div>
                </motion.section>
              ))
            ) : (
              <motion.div
                key="no-results"
                className={styles.noResults}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <FiFrown size={60} />
                <p>Leider wurden keine Produkte für diesen Filter gefunden.</p>
                <button
                  className={styles.resetFilterButton}
                  onClick={() => setActiveTag("alle")}
                >
                  Alle Filter zurücksetzen
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default MenuPage;
