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
import CategoryMenuSlider from "./CategoryMenuSlider";

const MenuCategory = () => {
  const {
    data: categoryMenuList,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();
  let content = null;

  const dispatch = useDispatch();

  const handleAllMenu = () => {
    dispatch(searchCategoryRemove());
  };

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && categoryMenuList?.length === 0) {
    content = <div>No menu category found</div>;
  } else if (!isLoading && !isError && categoryMenuList.length > 0) {
    content = (
      <>
        <div className="slider">
          <Swiper
            spaceBetween={5}
            className="mySwipe"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            breakpoints={{
              300: {
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
            <SwiperSlide>
              <div
                className="flex flex-col justify-center items-center gap-1  bg-orange-50 hover:bg-orange-100 p-2 duration-500 border border-orange-100 hover:border-orange-200 rounded-md cursor-pointer h-30 w-20"
                onClick={() => handleAllMenu()}
              >
                <div className="overflow-hidden  h-16 w-16 ">
                  <img
                    className="w-full h-full  object-cover rounded-full"
                    src={allFootMenu}
                    alt="wd"
                  />
                </div>
                <p className="text-center capitalize">All</p>
              </div>
            </SwiperSlide>
            {categoryMenuList?.map((category, id) => (
              <SwiperSlide key={id}>
                <MenuCategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="button-arrangemnt">
            <div className="button-swiper">
              <div className="swiper-button-prev border-2 bg-orange-100 border-orange-200 font-bold text-slate-900 hover:bg-orange-400 cursor-pointer hover:text-white h-10 w-10  hover:border-amber-500 duration-500  rounded-full"></div>
              <div className="swiper-button-next border-2 font-bold bg-orange-100 border-orange-200 text-slate-900 hover:bg-orange-400 cursor-pointer hover:text-white h-10 w-10  hover:border-amber-500 duration-500  rounded-full"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div className="wrapper py-10">{content}</div>;
};

export default MenuCategory;
