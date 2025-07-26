import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "antd/dist/reset.css";
import { ModalProvider } from "./context/ModalContext";
import { SidebarProvider } from "./context/SideBarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ModalProvider>
  </StrictMode>
);
