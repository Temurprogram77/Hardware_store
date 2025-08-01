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

<<<<<<< HEAD
export const useCompare = () => useContext(CompareContext);
=======
export const useCompare = () => {
  const context = useContext(CompareClickedContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareClickedProvider");
  }
  return context;
};






>>>>>>> fb332c74702fef9b58ec0907244d7cfa2c4a1ae6
