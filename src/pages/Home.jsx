import MenuCategory from "../components/category/MenuCategory";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


const Home = () => {
  return (
    <div className="wrapper">
      {/* <CategoryMenuSlider/> */}
      {/* <div className="slider">
        <Swiper
          spaceBetween={30}
          className="mySwipe h-48 py-20"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 10,
            },
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        <div className="button-arrangemnt">
          <div className="button-swiper">
          <div className="swiper-button-prev border-2 bg-orange-100 border-orange-200 font-bold text-slate-900 hover:bg-orange-400 cursor-pointer hover:text-white h-10 w-10  hover:border-amber-500 duration-500  rounded-full"></div>
            <div className="swiper-button-next border-2 font-bold bg-orange-100 border-orange-200 text-slate-900 hover:bg-orange-400 cursor-pointer hover:text-white h-10 w-10  hover:border-amber-500 duration-500  rounded-full"></div>
          </div>
        </div>
      </div> */}
      {/* <MenuCategory /> */}
    </div>
  );
};

export default Home;
