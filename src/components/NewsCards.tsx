import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { images } from "../assets/images"; // Rasm faylingiz

const { newsImage1, newsImage2, newsImage3, newsImage4 } = images;

interface NewsItem {
  img: string;
  title: string;
  description: string;
  date: string;
}

const data: NewsItem[] = [
  {
    img: newsImage1,
    title: "Масштабное обновление каталога инструментов",
    description:
      "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
    date: "5 Августа 2023",
  },
  {
    img: newsImage2,
    title: "Масштабное обновление каталога инструментов",
    description:
      "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
    date: "5 Августа 2023",
  },
  {
    img: newsImage3,
    title: "Масштабное обновление каталога инструментов",
    description:
      "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
    date: "5 Августа 2023",
  },
  {
    img: newsImage4,
    title: "Масштабное обновление каталога инструментов",
    description:
      "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
    date: "5 Августа 2023",
  },
  {
    img: newsImage1,
    title: "Масштабное обновление каталога инструментов",
    description:
      "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
    date: "5 Августа 2023",
  },
];

const NewsCards: React.FC = () => {
  return (
    <div className="max-w-[1460px] 2xl:mx-auto mx-3 py-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={`News ${index + 1}`}
                className="w-full h-[160px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsCards;
