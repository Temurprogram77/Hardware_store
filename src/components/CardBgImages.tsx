import React from "react";
import { images } from "../assets/images";
const { cardBgImage1, cardBgImage2, cardBgImage3, cardBgImage4 } = images;

const bgImage = [
  { img: cardBgImage1, prosent: 15, title: "Метизные изделия" },
  { img: cardBgImage2, prosent: 30, title: "Лакокрасочные материалы" },
  { img: cardBgImage3, prosent: 25, title: "Напольные покрытия" },
  { img: cardBgImage4, prosent: 30, title: "Все для отоплления" },
];
const CardBgImages: React.FC = () => {
  const Stocks:stock[] = [
  {
    id:1,
    title: "Метизные изделия",
    description: "Большой выбор метизов по выгодным ценам каждый день",
    discount: "до -40%",
    link: "Подробнее об акции",
    img:cardBgImage1
  },
  {
    id:2,
    title: "Лакокрасочные материалы",
    description: "Скидки на широкий ассортимент красок и лаков только до конца недели",
    discount: "Скидки до 30%",
    link: "Подробнее об акции",
    img:cardBgImage2
  },
  {
    id:3,
    title: "Напольные покрытия",
    description: "Купите качественное напольное покрытие и сэкономьте до 25%",
    discount: "до -25%",
    link: "Подробнее об акции",
    img:cardBgImage3
  },
  {
    id:4,
    title: "Всё для отопления",
    description: "Успейте приобрести товары для отопления со скидками до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:cardBgImage4
  },
];
const navigate = useNavigate();
 const handleClick = (id: number) => {
    const stock = Stocks.find((item) => id === item.id);
    localStorage.setItem("Stock", JSON.stringify(stock));
    navigate(`/stock/${id}`);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1460px] 2xl:mx-auto mx-3">
      {Stocks.map((item) => (
        <div 
          onClick={()=>handleClick(item.id)}
          key={item.id}
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
            <div className="py-1.5 px-2 text-[12px] text-white bg-black rounded-md">
            {item.discount}
            </div>
          </div>
          <div className="absolute inset-0 bg-white/20 z-0" />
        </div>
      ))}
    </div>
  );
};

export default CardBgImages;
