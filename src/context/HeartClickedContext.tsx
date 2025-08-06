import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type ItemType = {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  isNew?: boolean;
};

type HeartContextType = {
  likedItems: { [id: string]: ItemType };
  toggleHeart: (item: ItemType) => void;
};

const HeartClickedContext = createContext<HeartContextType | undefined>(undefined);

export const HeartClickedProvider = ({ children }: { children: ReactNode }) => {
  const [likedItems, setLikedItems] = useState<{ [id: string]: ItemType }>(() => {
    const stored = localStorage.getItem("likedItems");
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  const toggleHeart = (item: ItemType) => {
    setLikedItems(prev => {
      const updated = { ...prev };
      if (updated[item.id]) {
        delete updated[item.id];
      } else {
        updated[item.id] = item;
      }
      return updated;
    });
  };

  return (
    <HeartClickedContext.Provider value={{ likedItems, toggleHeart }}>
      {children}
    </HeartClickedContext.Provider>
  );
};

export const useHeart = () => {
  const context = useContext(HeartClickedContext);
  if (!context) {
    throw new Error("useHeart must be used within a HeartClickedProvider");
  }
  return context;
};
