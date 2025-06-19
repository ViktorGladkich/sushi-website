import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types';

export interface Coords {
  x: number;
  y: number;
}

export interface FlyingItem {
  id: number;
  image: string;
  startCoords: Coords;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  flyingItem: FlyingItem | null;
  cartIconCoords: Coords | null;
  addToCart: (product: Product, startCoords: Coords) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  clearCart: () => void;
  setCartIconCoords: (coords: Coords) => void;
  clearFlyingItem: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      flyingItem: null,
      cartIconCoords: null,

      addToCart: (product, startCoords) => 
        set((state) => {
          const existingProduct = state.cart.find((item) => item.id === product.id);
          const flyingItem: FlyingItem = {
            id: Date.now(),
            image: product.image,
            startCoords,
          };
          if (existingProduct) {
            const updatedCart = state.cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            return { cart: updatedCart, flyingItem };
          } else {
            const updatedCart = [...state.cart, { ...product, quantity: 1 }];
            return { cart: updatedCart, flyingItem };
          }
        }),
      
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId)
      })),

      incrementQuantity: (productId) => set((state) => ({
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      })),

      decrementQuantity: (productId) => set((state) => ({
        cart: state.cart
          .map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0),
      })),

      clearCart: () => set({ cart: [] }),
      
      setCartIconCoords: (coords) => set({ cartIconCoords: coords }),
      
      clearFlyingItem: () => set({ flyingItem: null }),
    }),
    {
      name: 'yume-sushi-cart-storage',
      partialize: (state) => ({
        cart: state.cart,
      }),
    }
  )
);