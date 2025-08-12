import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

type CustomSwiperProps = {
  slides: React.ReactNode[];
  loop?: boolean;
  autoplay?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: any;
};

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  slides,
  loop = true,
  autoplay = true,
  pagination = true,
  navigation = true,
  spaceBetween = 20,
  slidesPerView = 1,
  breakpoints,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={loop}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
      pagination={pagination ? { clickable: true } : false}
      navigation={navigation}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
