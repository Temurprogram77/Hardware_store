import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // yoki "auto" qilsa ham bo‘ladi
    });
  }, [pathname]);

  return null;
}
