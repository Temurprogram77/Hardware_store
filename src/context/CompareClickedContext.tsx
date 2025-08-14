import { createContext, useContext, useState, type ReactNode } from "react";

type CompareContextType = {
  comparedItems: { [id: string]: boolean };
  toggleCompare: (id: string) => void;
};

const CompareClickedContext = createContext<CompareContextType | undefined>(undefined);

export const CompareClickedProvider = ({ children }: { children: ReactNode }) => {
  const [comparedItems, setComparedItems] = useState<{ [id: string]: boolean }>(() => {
    const stored = localStorage.getItem("comparedItems");
    return stored ? JSON.parse(stored) : {};
  });

  const toggleCompare = (id: string) => {
    setComparedItems(prev => {
      const updated = {
        ...prev,
        [id]: !prev[id],
      };
      localStorage.setItem("comparedItems", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <CompareClickedContext.Provider value={{ comparedItems, toggleCompare }}>
      {children}
    </CompareClickedContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareClickedContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareClickedProvider");
  }
  return context;
};
