import { Player } from "@lottiefiles/react-lottie-player";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="md:py-6">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 place-items">
          <div className="lg:col-span-3 place-content-center">
            <div className="lg:space-y-7 space-y-6 ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-gray-900 dark:text-gray-100">
                Embark on a Flavorful Journey
              </h1>
              <p className="text-gray-700 dark:text-gray-300 tracking-wider leading-7">
                Discover a world of culinary delights with Tastytrails, where
                every dish tells a story. Explore, taste, and savor the best
                flavors from around the globe, right at your fingertips.
              </p>
              <p className="text-gray-600 dark:text-gray-400 tracking-wider leading-7">
                Feel free to mix and match elements from both options if you
                like!
              </p>
              <Link
                to="/menu"
                className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Explore Menu
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 overflow-hidden ">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="h-100">
                  <Player
                    src="https://lottie.host/a959a4d2-6df4-461d-ac5c-f0e82df01c05/N83XjzAzm4.json"
                    className="player"
                    loop
                    autoplay
                    style={{
                      height: "390px",
                      width: "390px",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-100">
                  <Player
                    src="https://lottie.host/61c0e164-07fd-4800-91d6-012b12870c63/rzdd8hTOOd.json"
                    className="player"
                    loop
                    autoplay
                    style={{
                      height: "390px",
                      width: "390px",
                    }}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="h-100">
                  <Player
                    src="https://lottie.host/a959a4d2-6df4-461d-ac5c-f0e82df01c05/N83XjzAzm4.json"
                    className="player"
                    loop
                    autoplay
                    style={{
                      height: "390px",
                      width: "390px",
                    }}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
