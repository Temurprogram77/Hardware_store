import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type HeartContextType = {
  likedItems: { [id: string]: boolean };
  toggleHeart: (id: string) => void;
};

const HeartClickedContext = createContext<HeartContextType | undefined>(undefined);

export const HeartClickedProvider = ({ children }: { children: ReactNode }) => {
  const [likedItems, setLikedItems] = useState<{ [id: string]: boolean }>(() => {
    const stored = localStorage.getItem("likedItems");
    return stored ? JSON.parse(stored) : {};
  });

  const toggleHeart = (id: string) => {
    setLikedItems(prev => {
      const updated = {
        ...prev,
        [id]: !prev[id],
      };
      localStorage.setItem("likedItems", JSON.stringify(updated));
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
  return context;ad
};
