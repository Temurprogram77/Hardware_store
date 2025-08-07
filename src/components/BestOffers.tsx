import React, { useMemo, useState } from "react";
import { cardData } from "../data/data";
import { useHeart } from "../context/HeartClickedContext";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import { useCompare } from "../context/CompareContext";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const { cartt, compare } = images;

const staticCategories = [
  "Все товары",
  "Инструменты",
  "Сантехника",
  "Для дома",
  "Для сада",
];

interface Product {
  id: number | string;
  title: string;
  image: string;
  item: string;
  type: string;
  oldMoney: string;
  newMoney: string;
  sale: string;
}

const BestOffers: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Все");
  const { addToCart, cartItems } = useCart();

  const { comparedItems, toggleCompare } = useCompare();
  const { likedItems, toggleHeart } = useHeart();
  const categories: string[] = useMemo(() => {
    const allTypes = cardData.map((item) => item.type);
    return ["Все", ...Array.from(new Set(allTypes))];
  }, []);

  const filteredData: Product[] =
    activeCategory === "Все"
      ? cardData
      : cardData.filter((item) => item.type === activeCategory);

  return (
    <div className="max-w-[1460px] 2xl:mx-auto mx-3 my-10">
      <h2 className="text-xl !font-semibold mb-4">Хиты продаж</h2>

      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`py-2 px-4 text-[13px] !font-medium cursor-pointer border border-[#F2F4F5] rounded-md ${
              activeCategory === category
                ? "text-[#117FE3] bg-[#F2F4F5]"
                : "text-[#0e0e0e] bg-white"
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="flex items-center flex-wrap gap-4 mt-5">
        {filteredData.map((item, index) => {
          const isCompared = comparedItems[item.id];
          const isInCart = cartItems.some(
            (cartItem) => cartItem.id === item.id
          );
          return (
            <div
              key={index}
              className="md:w-[275px] sm:w-[300px] w-full cursor-pointer p-4 rounded shadow"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </Link>

              <p className="text-xs text-gray-500 md:text-[12px] text-[10px]">
                {item.item}
              </p>

              <Link to={`/product/${item.id}`}>
                <h3 className="font-semibold md:text-[16px] text-[14px] hover:text-[#186FD4] duration-200">
                  {item.title}
                </h3>
              </Link>

              <div className="flex items-center gap-2">
                <span className="line-through text-gray-400 md:text-[13px] text-[10px]">
                  {item.oldMoney}
                </span>
                <span className="text-[#003B73] font-bold md:text-[16px] text-[13px]">
                  {item.newMoney}
                </span>
                <p className="!m-0 bg-[#1B9665] text-white pb-1 pt-1.5 px-2 text-[10px] font-semibold rounded-md">
                  {item.sale}
                </p>
              </div>

              <div className="mt-3 md:gap-0 gap-1 flex items-center justify-between">
                <div
                  onClick={() => addToCart(item)}
                  className={` flex gap-3 duration-200 w-fit md:px-5 px-2 md:py-2.5 py-2 rounded-md 
    ${
      isInCart
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#186FD4] hover:bg-[#000] text-white cursor-pointer"
    }`}
                >
                  {isInCart ? (
                    <span>Добавлено</span>
                  ) : (
                    <>
                      <img src={cartt} alt="cart" className="sm:block hidden" />
                      <span>Купить</span>
                    </>
                  )}
                </div>

                <div className="flex items-center md:gap-2 gap-1">
                  <div
                    onClick={() => toggleHeart(item)}
                    className="hover:border-[#186FD4] flex items-center duration-500 border-2 px-2 py-2 rounded-md border-[#F3F4F5]"
                  >
                    <span
                      className={`h-[17px] ${
                        likedItems
                          ? "text-blue-500 animate-ping-short"
                          : "text-gray-400"
                      }`}
                    >
                      {likedItems[item.id] ? (
                        <HeartFilled size={24} />
                      ) : (
                        <HeartOutlined size={24} />
                      )}
                    </span>
                  </div>

                  <motion.div
                    onClick={() => toggleCompare(item.id.toString())}
                    className="hover:border-[#186FD4] duration-500 border-2 px-2 md:py-2 py-2 rounded-md border-[#F3F4F5] cursor-pointer"
                    whileTap={{ scale: 0.9 }}
                  >
                    <AnimatePresence mode="wait">
                      {isCompared ? (
                        <motion.div
                          key="checked"
                          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                          transition={{ duration: 0.1 }}
                        >
                          <FaCheck className="text-blue-600 w-[20px] h-[18px]" />
                        </motion.div>
                      ) : (
                        <motion.img
                          key="compare"
                          src={compare}
                          alt="compare"
                          initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                          transition={{ duration: 0.3 }}
                          className="w-[20px] h-[18px]"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestOffers;
