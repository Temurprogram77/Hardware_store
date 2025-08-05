import React from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { data } from "../data/data";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useHeart } from "../context/HeartClickedContext";
import { images } from "../assets/images";
import { useCompare } from "../context/CompareContext";

const { cartt, compare, arrow } = images;

type CheckboxItemProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const CheckboxItem: React.FC<CheckboxItemProps> = ({ label, checked, onChange }) => (
  <label className="cursor-pointer inline-flex items-center gap-2 select-none">
    <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
    <div
      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
        checked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-400"
      }`}
    >
      {checked && (
        <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
    <span className="text-[13px] !font-medium">{label}</span>
  </label>
);

const CatalogCard = () => {
  const { likedItems, toggleHeart } = useHeart();
  const { comparedItems, toggleCompare } = useCompare();

  return (
    <div>

      <div className="md:hidden mx-3 border border-[#0000001d] py-3 rounded-md max-w-full flex items-center gap-3 justify-center">
        <HiMenu size={30} />
        Показать фильтры
      </div>
      

      <div className="w-full md:px-0 px-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-6 sm:gap-3 gap-2">
        {data.map((item, index) => (
          <div key={index} className="cursor-pointer p-4 rounded shadow">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <p className="text-xs text-gray-500 md:text-[12px] text-[10px]">{item.item}</p>
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
              <div className="flex gap-3 hover:bg-[#000] duration-200 bg-[#186FD4] text-white w-fit md:px-5 px-2 md:py-2.5 py-2 rounded-md">
                <img src={cartt} alt="cart" className="sm:block hidden" />
                <span>Купить</span>
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
                    {likedItems[item.id] ? <HeartFilled /> : <HeartOutlined />}
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
        ))}
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <div>
      <CatalogCard />
      <div className="flex flex-col gap-2 2xl:mx-auto mx-3 my-10">
        <h2 className="text-[26px] !font-semibold">Купить электроинструмент</h2>
        <p className="text-[#2C333D] !font-medium">
          Здесь вы найдете самый широкий выбор высококачественных электроинструментов...
        </p>
      </div>
    </div>
  );
};

export default FeaturedProducts;
