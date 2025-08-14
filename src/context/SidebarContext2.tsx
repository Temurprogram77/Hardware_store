import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface SidebarContextType {
  sideBarIsOpen2: boolean;
  toggleSidebar2: () => void;
  closeSidebar2: () => void; // 🔹 Qo‘shildi
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider2 = ({ children }: { children: ReactNode }) => {
  const [sideBarIsOpen2, setSideBarIsOpen2] = useState(false);

  const toggleSidebar2 = () => setSideBarIsOpen2((prev) => !prev);
  const closeSidebar2 = () => setSideBarIsOpen2(false); // 🔹 Yopish funksiyasi

  // 🔹 Escape tugmasida yopish
  useEffect(() => {
    if (!sideBarIsOpen2) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSidebar2();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [sideBarIsOpen2]);

  return (
    <SidebarContext.Provider value={{ sideBarIsOpen2, toggleSidebar2, closeSidebar2 }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar2 = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar2 must be used within a SidebarProvider2");
  }
  return context;
};
