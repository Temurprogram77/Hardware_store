import React, { createContext, useContext, useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  image: string;
  item: string;
  oldMoney: string;
  newMoney: string;
  sale: string;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (item: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Product) => {
    const exists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (!exists) {
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
