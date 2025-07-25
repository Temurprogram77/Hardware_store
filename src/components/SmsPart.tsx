import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTelegramPlane,
  FaTimes,
} from "react-icons/fa";
import { MdOutlineSms, MdOutlineQuestionAnswer } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";

import { images } from "../assets/images";

const { SmsSvg, SmsSvg2 } = images;

const icons = [
  { icon: <FaWhatsapp size={30} color="white" />, color: "bg-green-500" },
  { icon: <PiInstagramLogo size={30} color="white" />, color: "bg-pink-500" },
  { icon: <FaFacebookF size={30} color="white" />, color: "bg-blue-700" },
  { icon: <FaTelegramPlane size={30} color="white" />, color: "bg-cyan-400" },
  { icon: <MdOutlineSms size={30} color="white" />, color: "bg-blue-600" },
  {
    icon: <MdOutlineQuestionAnswer size={30} color="white" />,
    color: "bg-blue-700",
  },
];

const SmsIconSwitcher: React.FC = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [pingVisible, setPingVisible] = useState(true);

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

  return (
    <>
      <div className="fixed bottom-[120px] right-11 flex flex-col items-center gap-3 z-100">
        <AnimatePresence>
          {open &&
            icons.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
                className={`${item.color} text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg`}
              >
                {item.icon}
              </motion.button>
            ))}
        </AnimatePresence>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className={`fixed z-2 top-0 left-0 w-full ${
          open && "visible opacity-100"
        } invisible opacity-0 duration-300 h-full bg-[#00000069] z-90`}
      ></div>

      <div className="relative">
        {pingVisible && (
          <div className="fixed bottom-10 right-10 rounded-full border-3 border-[#00aeef] w-[70px] h-[70px] animate-ping z-100"></div>
        )}

        <div className="fixed bottom-10 right-10 z-100 p-1 rounded-full bg-[#00afef64] outline-1 outline-[#00aeef]">
          <motion.div
            onClick={handleClick}
            className="rounded-full bg-[#0070bf] w-[60px] h-[60px] flex items-center justify-center cursor-pointer shadow-lg relative overflow-hidden"
            whileTap={{ scale: 0.95 }}
            initial={false}
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
