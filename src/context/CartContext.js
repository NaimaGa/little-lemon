import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

const STORAGE_KEY = 'little_lemon_cart';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Could not load cart from localStorage', e);
      return [];
    }
  });

  // Save to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }, [cartItems]);

  const addToCart = (dish, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [
        ...prev,
        {
          id: dish.id,
          name: dish.name,
          price: Number(dish.price),
          image: dish.image,
          description: dish.description,
          quantity: qty,
        },
      ];
    });
  };

  const updateQuantity = (dishId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === dishId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeFromCart = (dishId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== dishId));
  };

  const clearCart = () => {
    setCartItems([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // Ignore
    }
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const calculateTotals = (fulfillment = 'delivery') => {
    const taxRate = 0.0825; // 8.25% Chicago tax
    const deliveryFee = fulfillment === 'delivery' && cartItems.length > 0 ? 3.99 : 0;
    const tax = subtotal * taxRate;
    const total = subtotal + tax + deliveryFee;

    return {
      subtotal: Number(subtotal.toFixed(2)),
      deliveryFee: Number(deliveryFee.toFixed(2)),
      tax: Number(tax.toFixed(2)),
      total: Number(total.toFixed(2)),
    };
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        subtotal: Number(subtotal.toFixed(2)),
        calculateTotals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
