
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CartItem } from '../types/cart';
import { Product } from '../types/product';
import { useToast } from '@/hooks/use-toast';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('tonewood_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('tonewood_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      // Check if adding another item would exceed stock
      if (existingItem && existingItem.quantity >= (product.stock || 0)) {
        toast({
          title: "Stock limit reached",
          description: `Sorry, we only have ${product.stock} of this item in stock.`,
        });
        return prevItems;
      }
      
      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const increaseQuantity = (productId: string) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.product.id === productId);
      
      // Check if increasing would exceed stock
      if (item && item.quantity >= (item.product.stock || 0)) {
        toast({
          title: "Stock limit reached",
          description: `Sorry, we only have ${item.product.stock} of this item in stock.`,
        });
        return prevItems;
      }
      
      return prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  const decreaseQuantity = (productId: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === productId);
      
      if (existingItem && existingItem.quantity === 1) {
        // Remove item if quantity will be 0
        return prevItems.filter(item => item.product.id !== productId);
      }
      
      return prevItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity, 
      0
    );
  };

  const getCartCount = () => {
    return cartItems.reduce(
      (count, item) => count + item.quantity, 
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
