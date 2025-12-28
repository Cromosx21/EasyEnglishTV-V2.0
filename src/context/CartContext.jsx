import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('eetv_cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('eetv_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item, shouldOpenCart = false) => {
    setCartItems(prev => {
      // Check if item already exists
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev; // Or increment quantity if applicable
      }
      return [...prev, item];
    });
    
    // Only open cart if specified (default false as requested)
    if (shouldOpenCart) {
        setIsCartOpen(true);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    isCartOpen,
    toggleCart,
    closeCart,
    openCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
