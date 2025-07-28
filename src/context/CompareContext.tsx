import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type CompareContextType = {
  comparedItems: { [id: string]: boolean };
  toggleCompare: (id: string) => void;
};

const CompareClickedContext = createContext<CompareContextType | undefined>(undefined);

export const CompareClickedProvider = ({ children }: { children: ReactNode }) => {
  const [comparedItems, setComparedItems] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    const stored = localStorage.getItem("comparedItems");
    if (stored) {
      setComparedItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comparedItems", JSON.stringify(comparedItems));
  }, [comparedItems]);

  const toggleCompare = (id: string) => {
    setComparedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
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
