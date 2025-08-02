import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  sideBarIsOpen2: boolean;
  toggleSidebar2: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider2 = ({ children }: { children: ReactNode }) => {
  const [sideBarIsOpen2, setSideBarIsOpen2] = useState(false);

  const toggleSidebar2 = () => setSideBarIsOpen2(!sideBarIsOpen2);

  return (
    <SidebarContext.Provider value={{ sideBarIsOpen2, toggleSidebar2}}>
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
