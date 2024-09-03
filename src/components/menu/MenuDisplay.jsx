import menuNotFoundImage from "../../assets/notFoundMenu.png";

import { useSelector } from "react-redux";
import { useGetAllMenusQuery } from "../../features/menus/menusApi";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Menucard from "./Menucard";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuDisplay = () => {
  const [page, setPage] = useState(1);
  const { name: catanme } = useSelector((state) => state.category);

  const location = useLocation();

  const {
    data: menulists,
    isLoading,
    isError,
    error,
  } = useGetAllMenusQuery({ search: catanme, page: page, page_size: 10 });

  // Pagination controls
  const handleNextPage = () => {
    if (menulists?.next) setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <div className="my-2 h-56">
        <Loading />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && menulists?.results?.length === 0) {
    content = (
      <div className="flex justify-center items-center ">
        <img
          className="object-cover"
          src={menuNotFoundImage}
          alt="Not found image"
        />
      </div>
    );
  } else if (!isLoading && !isError && menulists?.results?.length > 0) {
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 gap-4 place-items-center">
          {menulists?.results.map((menu) => (
            <Menucard key={menu.id} menu={menu} />
          ))}
        </div>
        {location.pathname === "/" && (
          <div className="flex items-center justify-center mt-4">
            <Link
              to="/menu"
              className="border  border-orange-500 hover:bg-orange-500 focus:ring-4 hover:text-white
                 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 duration-500 shadow-lg hover:shadow-orange-200"
            >
              See More
            </Link>
          </div>
        )}
        {location.pathname !== "/" && (
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={!menulists?.previous}
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 border focus:ring-orange-300 font-medium rounded-full p-[0.1rem] text-sm dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none cursor-pointer dark:focus:ring-orange-800 disabled:opacity-50 duration-500"
            >
              <svg
                className="w-6 h-6 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </button>
            <span className="px-4 py-2">{page}</span>
            <button
              onClick={handleNextPage}
              disabled={!menulists?.next}
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 border focus:ring-orange-300 font-medium rounded-full p-[0.1rem] text-sm dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none cursor-pointer dark:focus:ring-orange-800 disabled:opacity-50 duration-500"
            >
              <svg
                className="w-6 h-6 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </>
    );
  }

  return (
    <section className="md:py-10 py-6">
      <div className="wrapper">
        <div className="mb-4 ">
          <h2 className="text-2xl tracking-wider font-medium">
            Explore Popular Dishes in Your Area
          </h2>
        </div>
        {content}
      </div>
    </section>
  );
};

export default MenuDisplay;
