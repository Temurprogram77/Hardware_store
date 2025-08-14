import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode } from "swiper/modules";

import { images } from "../assets/images";

const {
  cardImage1,
  cardImage2,
  cardImage3,
  cardImage4,
  cardImage5,
  cardImage6,
  cardImage7,
  cardImage8,
} = images;   

const data = [
  {
    img: cardImage2,
    title: "Электротовары",
  },
  {
    img: cardImage3,
    title: "Инструменты",
  },
  {
    img: cardImage4,
    title: "Сантехника",
  },
  {
    img: cardImage5,
    title: "Все для сауныи бани",
  },
  {
    img: cardImage6,
    title: "Столярные изделия",
  },
  {
    img: cardImage7,
    title: "Гипсокартон",
  },
  {
    img: cardImage8,
    title: "Общестроительные",
  },
  {
    img: cardImage1,
    title: "Перейти в каталог",
  },
];

const SwipperWrapper = () => {
  return (
    <div className="max-w-[1460px] mx-auto mb-6">
      <div className="grid grid-cols-2 gap-3 sm:hidden ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#F3F4F5] cursor-pointer flex flex-col items-center gap-2 rounded-md shadow p-4 text-center text-sm font-medium"
          >
            <img className="h-[60px]" src={item.img} alt={item.title} />
            <p className="!m-0">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="hidden sm:block">
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="!bg-[#F3F4F5] cursor-pointer hover:text-[#186FD4] duration-300 flex flex-col items-center gap-3 rounded-2xl shadow p-7 text-center text-sm font-medium">
                <img className="h-[70px]" src={item.img} alt={item.title} />
                <p className="!m-0">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwipperWrapper;
