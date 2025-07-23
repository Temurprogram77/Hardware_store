import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { images } from "../assets/images";

const { slider1, slider2, arrowRight } = images;


const Slider = () => {
  return (
    <>
     <div className="">
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
              style={{ backgroundImage: `url(${slider1})` }}
            >
              <h2 className="text-5xl !font-bold mb-4">
                Электроинструмент <br /> для любых нужд
              </h2>
              <p className="mb-6">
                С подходящим инструментом — возможно всё. Идём <br /> выбирать?
              </p>
              <div className="bg-black hover:bg-[#e52b0e] py-4 px-7 rounded-md w-fit h-fit text-white flex items-center gap-7 cursor-pointer duration-200">
                <p className="!m-0">перейти к товарам</p>
                <img src={arrowRight} alt="arrow" className="w-2 h-3" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[455px] w-full rounded-xl bg-cover bg-center flex flex-col justify-center p-12 text-black"
              style={{ backgroundImage: `url(${slider2})` }}
            >
              <h2 className="text-5xl !font-bold mb-4">
                Хватит мечтать, <br /> пора покупать
              </h2>
              <p className="mb-6">
                Плати частями, когда удобно. Рассрочка на покупку товаров <br />{" "}
                от Тинькофф
              </p>
              <div className="bg-black hover:bg-[#e52b0e] py-4 px-7 rounded-md w-fit h-fit text-white flex items-center gap-7 cursor-pointer duration-200">
                <p className="!m-0">подробнее</p>
                <img src={arrowRight} alt="arrow" className="w-2 h-3" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="max-w-[1460px]"></div>
    </div>   
    </>
  )
}

export default Slider