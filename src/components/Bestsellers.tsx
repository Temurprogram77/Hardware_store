import React, { useState } from "react";

const categories = [
  "Все товары",
  "Инструменты",
  "Сантехника",
  "Для дома",
  "Для сада",
];

const Bestsellers = () => {
  const [activeCategory, setActiveCategory] = useState("Все товары");

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
    </div>
  );
};

export default Bestsellers;
