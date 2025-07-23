import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { images } from "../assets/images";
import { useEffect, useState } from "react";

const {
  slider1,
  slider1Tablet,
  slider1Mobile,
  slider2,
  slider2Tablet,
  slider2Mobile,
  arrowRight,
} = images;

const Slider = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) setScreenSize("mobile");
      else if (width <= 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getImage = (type: "slider1" | "slider2") => {
    if (screenSize === "mobile") return images[`${type}Mobile`];
    if (screenSize === "tablet") return images[`${type}Tablet`];
    return images[type];
  };

  return (
    <div className="2xl:mx-auto mx-3">
      <div className="relative max-w-[1460px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div
              className="h-[455px] w-full rounded-xl bg-cover bg-center flex flex-col justify-center p-12 text-black"
              style={{
                backgroundImage: `url(${getImage("slider1")})`,
              }}
            >
              <h2 className="lg:text-5xl !mt-40 md:text-4xl sm:text-3xl text-2xl md:text-start text-center !font-bold mb-4">
                Электроинструмент <br /> для любых нужд
              </h2>
              <p className="mb-6 text-[16px] md:block hidden">
                С подходящим инструментом — возможно всё. Идём <br /> выбирать?
              </p>
              <div className="bg-black hover:bg-[#e52b0e] py-4 px-7 md:mx-0 mx-auto rounded-md w-fit h-fit text-white flex items-center gap-7 cursor-pointer duration-200">
                <p className="!m-0">перейти к товарам</p>
                <img src={arrowRight} alt="arrow" className="w-2 h-3" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="h-[455px] w-full rounded-xl bg-cover bg-center flex flex-col justify-center p-12 text-black"
              style={{
                backgroundImage: `url(${getImage("slider2")})`,
              }}
            >
              <h2 className="lg:text-5xl !mt-40 md:text-4xl sm:text-3xl text-2xl md:text-start text-center !font-bold mb-4">
                Хватит мечтать, <br /> пора покупать
              </h2>
              <p className="mb-6 text-[16px] md:block hidden">
                Плати частями, когда удобно. Рассрочка на покупку товаров <br /> от Тинькофф
              </p>
              <div className="bg-black hover:bg-[#e52b0e] py-4 px-7 md:mx-0 mx-auto rounded-md w-fit h-fit text-white flex items-center gap-7 cursor-pointer duration-200">
                <p className="!m-0">подробнее</p>
                <img src={arrowRight} alt="arrow" className="w-2 h-3" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
