// 1. TypeScript Component: Advantages
import React from "react";
import { images } from "../assets/images";

// 2. Destructuring images object
const { advantage1, advantage2, advantage3, advantage4 } = images;

const Advantages: React.FC = () => {
  return (
    <div className="my-10 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6 max-w-[1460px] 2xl:mx-auto mx-3">
      <div className="flex items-center gap-4">
        <img src={advantage1} alt="advantage img" />
        <p className="!m-0">Оплата любым удобным способом</p>
      </div>

      <div className="flex items-center gap-4">
        <img src={advantage2} alt="advantage img" />
        <p className="!m-0">Большой выбор товаров в каталоге</p>
      </div>

      <div className="flex items-center gap-4">
        <img src={advantage3} alt="advantage img" />
        <p className="!m-0">Осуществляем быструю доставку</p>
      </div>

      <div className="flex items-center gap-4">
        <img src={advantage4} alt="advantage img" />
        <p className="!m-0">Делаем скидки на крупные покупки</p>
      </div>
    </div>
  );
};

export default Advantages;
