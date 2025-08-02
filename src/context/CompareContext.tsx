import { createContext, useContext, useEffect, useState } from "react";

const CompareContext = createContext<any>(null);

export const CompareProvider = ({ children }: { children: React.ReactNode }) => {
  const [comparedItems, setComparedItems] = useState<{ [key: string]: boolean }>(() => {
    const saved = localStorage.getItem("comparedItems");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("comparedItems", JSON.stringify(comparedItems));
  }, [comparedItems]);

  const toggleCompare = (id: string) => {
    setComparedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <CompareContext.Provider value={{ comparedItems, toggleCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
};
