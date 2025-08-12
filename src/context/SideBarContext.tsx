import  { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarContextType {
  sideBarIsOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const toggleSidebar = () => setSideBarIsOpen(!sideBarIsOpen);

  return (
    <SidebarContext.Provider value={{ sideBarIsOpen, toggleSidebar}}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
