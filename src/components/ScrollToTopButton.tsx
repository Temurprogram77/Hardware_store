import { FaArrowUp } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-10 left-10 p-6 rounded-full border-2 border-[#00000014] shadow-lg z-50 bg-white hover:bg-black transition-colors duration-300 group"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-black group-hover:text-white transition-colors duration-300 w-5 h-5" />
    </button>
  ) : null;
};

export default ScrollToTopButton;
