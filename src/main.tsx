import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "antd/dist/reset.css";
import { ModalProvider } from "./context/ModalContext";
import { SidebarProvider } from "./context/SideBarContext.tsx";
import { HeartClickedProvider } from "./context/HeartClickedContext.tsx";
import { CompareClickedProvider } from "./context/CompareContext.tsx";
// import { CompareClickedProvider } from "./context/CompareClickedContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <SidebarProvider>
        <HeartClickedProvider>
          <CompareClickedProvider>
            <CompareClickedProvider>
              <App />
            </CompareClickedProvider>
          </CompareClickedProvider>
        </HeartClickedProvider>
      </SidebarProvider>
    </ModalProvider>
  </StrictMode>
);
