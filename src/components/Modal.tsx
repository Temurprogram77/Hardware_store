import React from "react";
import { useModal } from "../context/ModalContext";
import {images} from "../assets/images";

const Modal: React.FC = () => {
  const { isOpen, closeModal } = useModal();

  return (
    <>
      <div
        onClick={closeModal}
        className={`fixed inset-0 bg-[#000000be] z-20 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div
        className={`fixed top-0 left-0 z-30 w-[90%] h-full p-4 bg-white transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-[18px] font-semibold">Меню</h2>

        <div
          onClick={closeModal}
          className="absolute right-4 top-4 rounded-md bg-[#F2F6FC] p-2 cursor-pointer"
        >
          {/* <img src={close} alt="close" /> */}
        </div>

        <div className="mt-6">
          <p>Bu yerga menyu elementlari, linklar yoki forma qo‘yishingiz mumkin.</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
