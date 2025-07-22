import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper/modules';
import { images } from "../assets/images";

const { slider1, slider2 } = images;

const Home = () => {
  return (
    <div className="max-w-[1460px] mx-auto py-10">
      <Swiper
        modules={[Navigation,Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div
            className="h-[200px] w-full rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${slider1})` }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-[200px] w-full rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${slider2})` }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
