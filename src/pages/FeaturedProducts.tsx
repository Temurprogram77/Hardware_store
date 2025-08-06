import React from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { data } from "../data/data";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useHeart } from "../context/HeartClickedContext";
import { images } from "../assets/images";
import { useCompare } from "../context/CompareContext";
import { useCard } from "../context/CardClickedContext";

const { cartt, compare, arrow } = images;

const CatalogCard = () => {
  const { likedItems, toggleHeart } = useHeart();
  const { comparedItems, toggleCompare } = useCompare();
  const { cartItems, toggleCart } = useCard();

  return (
    <div>
      {/* Mobile filter button */}
      <div className="md:hidden mx-3 border border-[#0000001d] py-3 rounded-md max-w-full flex items-center gap-3 justify-center">
        <HiMenu size={30} />
        Показать фильтры
      </div>

      <div className="flex flex-col">
        {/* Sort and view settings */}
        <div className="flex justify-between items-center my-3">
          <div className="flex md:w-auto w-full md:m-0 mx-4 justify-between items-center gap-3">
            <p className="!m-0">Сортировка:</p>
            <select
              className="border-[#DFE0E2] border outline-none px-4 py-2.5 rounded-md"
            >
              <option value="">Цена по убыванию</option>
            </select>
          </div>
          <div className="md:flex hidden items-center gap-3">
            <p className="!m-0">Показывать по:</p>
            {["9", "12", "18", "24"].map((num, i) => (
              <div
                key={i}
                className={`w-[40px] h-[40px] cursor-pointer flex items-center justify-center rounded-md border ${
                  num === "18"
                    ? "bg-[#F6F8FB] text-[#186FD4] border-[#F6F8FB]"
                    : "border-[#EEEEEE]"
                }`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="w-full md:px-0 px-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-6 sm:gap-3 gap-2">
          {data.map((item) => (
            <div key={item.id} className="cursor-pointer p-4 rounded shadow">
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

              {/* Action buttons */}
              <div className="mt-3 md:gap-0 gap-1 flex items-center justify-between">
                <button
                  onClick={() => toggleCart(item.id.toString())}
                  className="flex gap-3 hover:bg-black duration-200 bg-[#186FD4] text-white w-fit md:px-5 px-2 md:py-2.5 py-2 rounded-md"
                >
                  <img src={cartt} alt="cart" className="sm:block hidden" />
                  <span>Купить</span>
                </button>

                <div className="flex items-center md:gap-2 gap-1">
                  {/* Like button */}
                  <div
                    onClick={() => toggleHeart(item.id.toString())}
                    className="border-2 px-2 py-2 rounded-md border-[#F3F4F5] cursor-pointer"
                  >
                    {likedItems[item.id] ? (
                      <HeartFilled className="text-blue-500" />
                    ) : (
                      <HeartOutlined className="text-gray-400" />
                    )}
                  </div>

                  {/* Compare button */}
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
          ))}
        </div>

        {/* Pagination */}
        <div className="flex sm:gap-4 gap-2 items-center w-fit md:mx-auto mx-3 my-10">
          <div className="cursor-pointer py-3.5 px-4 flex items-center gap-3 rounded-md border border-[#DFDFDF]">
            <img className="md:w-[20px] w-[15px]" src={arrow} alt="arrow" />
            <p className="!m-0 text-[12px] font-semibold">Назад</p>
          </div>
          <div className="flex gap-4">
            {["1", "2", "3", "4", "5", "...", "231"].map((num, i) => (
              <div
                key={i}
                className={`cursor-pointer px-4 py-3 rounded-md border ${
                  num === "1"
                    ? "bg-black text-white"
                    : "border-[#DFDFDF] hover:bg-black hover:text-white duration-200"
                } ${["4", "5", "...", "231"].includes(num) ? "hidden md:block" : ""}`}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="cursor-pointer py-3.5 px-4 flex items-center gap-3 rounded-md border border-[#DFDFDF]">
            <p className="!m-0 text-[12px] font-semibold">Далее</p>
            <img
              className="md:w-[20px] w-[15px] rotate-[180deg]"
              src={arrow}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
