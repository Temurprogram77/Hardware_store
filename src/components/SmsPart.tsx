import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "../link/motionLink";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTelegramPlane,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineSms, MdOutlineQuestionAnswer } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import { Send } from "lucide-react";
import { images } from "../assets/images";

const { SmsSvg, SmsSvg2 } = images;

const SmsIconSwitcher: React.FC = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [pingVisible, setPingVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setOpen(!open);
    setPingVisible(!pingVisible);
  };

  const handleFaqClick = () => {
    setIsModalOpen(true);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Yuborildi:", message);
    setMessage("");
  };

  const icons = [
    {
      icon: <FaWhatsapp size={30} color="white" />,
      color: "bg-green-500",
      href: "https://wa.me/998901234567",
    },
    {
      icon: <PiInstagramLogo size={30} color="white" />,
      color: "bg-pink-500",
      href: "https://instagram.com/",
    },
    {
      icon: <FaFacebookF size={30} color="white" />,
      color: "bg-blue-700",
      href: "https://facebook.com/",
    },
    {
      icon: <FaTelegramPlane size={30} color="white" />,
      color: "bg-cyan-400",
      href: "https://t.me/",
    },
    {
      icon: <MdOutlineSms size={30} color="white" />,
      color: "bg-blue-600",
      href: "sms:+998901234567",
    },
    {
      icon: <MdOutlineQuestionAnswer size={30} color="white" />,
      color: "bg-blue-700",
      onClick: handleFaqClick,
    },
  ];

  return (
    <>
      {/* Modal oynasi */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]"


          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
             
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                <FaTimes />
              </button>

              {/* Chat Widget */}
              <div className="w-full shadow-xl rounded-lg overflow-hidden border border-gray-300 bg-white flex   flex-col">
                {/* Header */}
                <div className="bg-blue-600 text-white flex items-center justify-between px-4 py-3">
                  <h2 className="font-semibold text-sm">
                    Открытая линия СТРОЙОПТТОРГ
                  </h2>
                  <button
                    className="hover:text-gray-200"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6 bg-gray-50 flex flex-col items-center text-center flex-grow">
                  <h3 className="text-lg font-semibold mb-1">Мы онлайн</h3>
                  <p className="text-sm text-gray-600 mb-5">
                    и готовы вам помочь!
                  </p>

                  <div className="flex gap-6">
                 
                  </div>
                </div>

                {/* Input */}
                <div className="border-t border-gray-200 p-3 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Введите сообщение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md flex items-center justify-center"
                  >
                    <Send size={18} />
                  </button>
                </div>

                {/* Footer */}
                <div className="bg-gray-100 text-center text-xs py-2 text-gray-600">
                  Бесплатная CRM, чаты и сайты.{" "}
                  <span className="text-blue-600 font-semibold cursor-pointer">
                    Битрикс24
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ijtimoiy tugmalar */}
      <div className="fixed bottom-[120px] right-11 flex flex-col items-center gap-3 z-50">
        <AnimatePresence>
          {open &&
            icons.map((item, index) => {
              const Tag: any = item.href ? "a" : "button";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Tag
                    href={item.href}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    onClick={item.onClick}
                    className={`${item.color} text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg`}
                  >
                    {item.icon}
                  </Tag>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      {/* Overlay fon */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed top-0 left-0 w-full h-full bg-[#00000069] transition-opacity duration-300 z-40 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>

      {/* Asosiy tugma */}
      <div className="relative">
        {pingVisible && (
          <div className="fixed bottom-10 right-10 rounded-full border-4 border-[#00aeef] w-[70px] h-[70px] animate-ping z-40"></div>
        )}

        <div className="fixed bottom-10 right-10 z-50 p-1 rounded-full bg-[#00afef64] outline outline-[#00aeef]">
          <motion.div
            onClick={handleClick}
            className="rounded-full bg-[#0070bf] w-[60px] h-[60px] flex items-center justify-center cursor-pointer shadow-lg relative overflow-hidden"
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <FaTimes className="text-white text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="sms"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <img
                    src={active === 0 ? SmsSvg : SmsSvg2}
                    alt="sms-icon"
                    className="w-6 h-6"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SmsIconSwitcher;
  