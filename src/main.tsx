// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "antd/dist/reset.css";
import { ModalProvider } from "./context/ModalContext";
import { SidebarProvider } from "./context/SideBarContext.tsx";
import { HeartClickedProvider } from "./context/HeartClickedContext.tsx";
import { CompareProvider } from "./context/CompareContext.tsx";
import { SidebarProvider2 } from "./context/SidebarContext2.tsx";
import { CartProvider } from "./context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <ModalProvider>
      <SidebarProvider>
        <SidebarProvider2>
          <HeartClickedProvider>
            <CompareProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </CompareProvider>
          </HeartClickedProvider>
        </SidebarProvider2>
      </SidebarProvider>
    </ModalProvider>
  </>
);
