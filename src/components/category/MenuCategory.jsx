import menuNotFoundImage from "../../assets/notFoundMenu.png";

import Loading from "../ui/Loading";
import allFootMenu from "../../assets/allfootmenu.jpeg";
import { useGetCategoriesQuery } from "../../features/category/categoryApi";
import Error from "../ui/Error";
import MenuCategoryCard from "./MenuCategoryCard";
import { useDispatch } from "react-redux";
import { searchCategoryRemove } from "../../features/category/categorySlice";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MenuCategory = () => {
  const {
    data: categoryMenuList,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();


  const dispatch = useDispatch();

  const handleAllMenu = () => {
    dispatch(searchCategoryRemove());
  };

  // what do render
  let content = null;
  if (isLoading) {
    content = content = (
      <div className="my-2 h-56">
        <Loading />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && categoryMenuList?.length === 0) {
    content = (
      <div className="flex justify-center items-center ">
        <img
          className="object-cover"
          src={menuNotFoundImage}
          alt="Not found image"
        />
      </div>
    );
  } else if (!isLoading && !isError && categoryMenuList.length > 0) {
    content = (
      <>
        <div className="slider">
          <Swiper
            spaceBetween={15}
            className="mySwipe pt-14"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // loop={true}
            modules={[Navigation]}
            breakpoints={{
              350: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 13,
              },
            }}
          >
            <SwiperSlide>
              <div
                className="flex flex-col group justify-center items-center gap-1  bg-orange-50 hover:bg-orange-100 p-2 duration-500 border border-orange-100 hover:border-orange-200 rounded-md cursor-pointer h-30 w-24"
                onClick={() => handleAllMenu()}
              >
                <div className="overflow-hidden  h-16 w-16 ">
                  <img
                    className="w-full h-full  object-cover rounded-full "
                    src={allFootMenu}
                    alt="wd"
                  />
                </div>
                <p className="text-center capitalize group-hover:text-orange-400 duration-300">
                  All
                </p>
              </div>
            </SwiperSlide>
            {categoryMenuList?.map((category) => (
              <SwiperSlide key={category.id}>
                <MenuCategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="button-arrangemnt">
            <div className="button-swiper">
              <div className="swiper-button-prev border-2 text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium = text-sm p-5 h-10 w-10 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 rounded-full"></div>
              <div className="swiper-button-next border-2 text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium = text-sm p-5 h-10 w-10 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="section">
      <div className="wrapper">
        <div className="section-title space-y-2 mb-4 md:mb-0">
          <h2 className="text-2xl tracking-wider font-medium">
            Taste the Extraordinary Explore Our Menu
          </h2>
          <p className="text-gray-600 text-lg">
            Browse our menu for a taste of expertly crafted meals that promise
            to delight.
          </p>
        </div>
        {content}
      </div>
    </section>
  );
};

export default MenuCategory;
