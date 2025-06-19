'use client'
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";
import React, { useState, useEffect, useRef } from "react";
import PageTransition from "../components/PageTransition";
import { AnimatePresence } from "framer-motion";
import { useCartStore } from "../store/cartStore";
import FlyingItem from "../components/FlyingItem";
import Preloader from "../components/Preloader";
import MobileMenu from '../components/MobileMenu';
import BurgerIcon from '../components/BurgerIcon';

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-main",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setCartIconCoords = useCartStore((state) => state.setCartIconCoords);
  const cartIconRef = useRef<HTMLDivElement>(null);

  // Единый useEffect для блокировки скролла
  useEffect(() => {
    const body = document.body;
    if (isLoading || isCartOpen || isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isLoading, isCartOpen, isMenuOpen]);
  
  // useEffect для прелоадера
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // useEffect для координат корзины
  useEffect(() => {
    // Пересчитываем координаты только после того, как прелоадер исчез
    if (!isLoading && cartIconRef.current) {
      const rect = cartIconRef.current.getBoundingClientRect();
      setCartIconCoords({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
  }, [setCartIconCoords, isLoading]);

  return (
    <html lang="de" className={`${poppins.variable} ${cormorantGaramond.variable}`}>
      <body>
        <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>

        {!isLoading && (
          <>
            <Header
              onCartClick={() => setIsCartOpen(true)}
              cartIconRef={cartIconRef}
            />
            <main>
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            
            <FlyingItem />
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            
            <div 
              className="mobile-burger-container"
              // Скрываем иконку, если открыта корзина, чтобы не было наложения
              style={{ 
                opacity: isCartOpen ? 0 : 1, 
                pointerEvents: isCartOpen ? 'none' : 'auto',
                transition: 'opacity 0.3s ease'
              }}
            >
              <BurgerIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} color="var(--color-text)" />
            </div>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          </>
        )}
      </body>
    </html>
  );
}