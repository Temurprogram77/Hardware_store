import React from "react";
import { images } from "../assets/images";

const { cardBgImage1, cardBgImage2, cardBgImage3, cardBgImage4 } = images;

// Tipni aniq belgilaymiz:
interface BgImageItem {
  img: string;
  prosent: number;
  title: string;
}

const bgImage: BgImageItem[] = [
  { img: cardBgImage1, prosent: 15, title: "Метизные изделия" },
  { img: cardBgImage2, prosent: 30, title: "Лакокрасочные материалы" },
  { img: cardBgImage3, prosent: 25, title: "Напольные покрытия" },
  { img: cardBgImage4, prosent: 30, title: "Все для отоплления" },
];

const CardBgImages: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1460px] 2xl:mx-auto mx-3">
      {bgImage.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer relative h-40 rounded-md shadow-md overflow-hidden group"
        >
          <img
            src={item.img}
            alt={`bg-${index}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 text-black">
            <p className="!mb-3 w-[130px] text-[19px] !font-medium">
              {item.title}
            </p>
            <div className="py-1 px-2 text-[12px] text-white bg-black rounded-md">
              до -{item.prosent}%
            </div>
          </div>
          <div className="absolute inset-0 bg-white/20 z-0" />
        </div>
      ))}
    </div>
  );
};

export default CardBgImages;
