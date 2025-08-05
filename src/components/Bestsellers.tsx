import React, { useMemo, useState } from "react";
import { cardData } from "../data/data";
import { useHeart } from "../context/HeartClickedContext";
import { useCompare } from "../context/CompareContext";
import { Link } from "react-router-dom";
import { images } from "../assets/images";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  item: string;
  title: string;
  image: string;
  type: string;
  oldMoney: string;
  newMoney: string;
  sale: string;
}

const { cartt, compare } = images;

const Bestsellers: React.FC = () => {
  const { addToCart, cartItems } = useCart();
  const [values, setValues] = useState<number[]>([3000, 52500]);
  const [activeCategory, setActiveCategory] = useState<string>("Все");

  const { comparedItems, toggleCompare } = useCompare();
  const { likedItems, toggleHeart } = useHeart();

  const categories = useMemo<string[]>(() => {
    const allTypes = cardData.map((item: Product) => item.type);
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
            className={`py-2 px-4 text-[13px] !font-medium cursor-pointer border-1 border-[#F2F4F5] rounded-md 
              ${
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
        {filteredData.map((item) => {
          const isInCart = cartItems.some(
            (cartItem) => cartItem.id === item.id
          );
          return (
            <div
              key={item.id}
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
                  className={`flex gap-3 duration-200 w-fit md:px-5 px-2 md:py-2.5 py-2 rounded-md 
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
                    onClick={() => toggleHeart(item.id.toString())}
                    className="border-2 px-2 py-2 rounded-md border-[#F3F4F5]"
                  >
                    <span
                      className={`${
                        likedItems[item.id]
                          ? "text-blue-500 animate-ping-short"
                          : "text-gray-400"
                      }`}
                    >
                      {likedItems[item.id] ? (
                        <HeartFilled />
                      ) : (
                        <HeartOutlined />
                      )}
                    </span>
                  </div>

                  <div
                    onClick={() => toggleCompare(item.id.toString())}
                    className="border-2 px-2 md:py-2.5 py-2 rounded-md border-[#F3F4F5] cursor-pointer"
                  >
                    <img
                      src={compare}
                      className="w-[24px] h-[18px]"
                      alt="compare"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bestsellers;
