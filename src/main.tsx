// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "antd/dist/reset.css";
import { ModalProvider } from "./context/ModalContext";
import { SidebarProvider } from "./context/SideBarContext.tsx";
import { HeartClickedProvider } from "./context/HeartClickedContext.tsx";
import { CompareProvider } from "./context/CompareContext.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <ModalProvider>
      <SidebarProvider>
        <HeartClickedProvider>
            <CompareProvider>
              <App />
            </CompareProvider>
        </HeartClickedProvider>
      </SidebarProvider>
    </ModalProvider>
  </>
);
