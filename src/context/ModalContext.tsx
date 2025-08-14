import React, { createContext, useContext, useState, type ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalIsOpen: boolean;
  modalOpenModal: () => void;
  modalCloseModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const ModalProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const modalOpenModal = () => setModalIsOpen(true);
  const modalCloseModal = () => setModalIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        modalIsOpen,
        modalOpenModal,
        modalCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
