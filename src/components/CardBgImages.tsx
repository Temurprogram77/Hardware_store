import React from "react";
import { images } from "../assets/images";
const { cardBgImage1, cardBgImage2, cardBgImage3, cardBgImage4 } = images;

const bgImage = [
  { img: cardBgImage1, prosent:15, title: "Метизные изделия" },
  { img: cardBgImage2, prosent:30, title: "Лакокрасочные материалы" },
  { img: cardBgImage3, prosent:25, title: "Напольные покрытия" },
  { img: cardBgImage4, prosent:30, title: "Все для отоплления" },
];

const CardBgImages: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1460px] 2xl:mx-auto mx-3">
      {bgImage.map((item, index) => (
        <div
          key={index}
          className="h-40 bg-cover bg-center rounded-md shadow-md flex flex-col items-start justify-center px-4 text-black"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <p className="!mb-3 w-[130px] text-[19px] !font-medium">{item.title}</p>
          <div className="py-1 px-2 text-[12px] text-white bg-black rounded-md">до -{item.prosent}%</div>
        </div>
      ))}
    </div>
  );
};

export default CardBgImages;
