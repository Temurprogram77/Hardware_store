import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ItemType = {
  id: string;
  title: string;
  image: string;
  newMoney: string;
  oldMoney?: string;
  sale?: string;
  item?: string;
};

type CartContextType = {
  cartItems: { [key: string]: ItemType };
  addToCart: (item: ItemType) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CardClickedContext = createContext<CartContextType | undefined>(undefined);

export const CardClickedProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<{ [key: string]: ItemType }>(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: ItemType) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[item.id]) {
        delete updated[item.id]; 
      } else {
        updated[item.id] = item; // aks holda qo‘shamiz
      }
      return updated;
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  return (
    <CardClickedContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CardClickedContext.Provider>
  );
};

export const useCard = () => {
  const context = useContext(CardClickedContext);
  if (!context) {
    throw new Error("useCardClicked must be used within a CardClickedProvider");
  }
  return context;
};
