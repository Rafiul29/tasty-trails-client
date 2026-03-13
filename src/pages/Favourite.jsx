import { useState } from "react";
import notFoundImage from "../assets/notfound.png";
import { useGetUserFavouriteMenuQuery } from "../features/favourite/favouriteApi";
import Error from "../components/ui/Error";
import FavouriteMenuTable from "../components/Favourite/FavouriteMenuTable";
import FavouriteTableSkeleton from "../components/Favourite/FavouriteTableSkeleton";
import { Link } from "react-router-dom";

const Favourite = () => {
  const [page, setPage] = useState(1);

  const {
    data: favouriteMenu,
    isLoading,
    isError,
    error,
  } = useGetUserFavouriteMenuQuery({ page: page, page_size: 8 });

  const handleNextPage = () => {
    if (favouriteMenu?.next) setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  let content = null;

  if (isLoading) {
    content = (
      <>
        <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto mb-8 animate-pulse"></div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Menu name</th>
                <th scope="col" className="px-6 py-3">price</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }).map((_, index) => (
                <FavouriteTableSkeleton key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && favouriteMenu?.results?.length === 0) {
    content = (
      <div className="flex flex-col justify-center items-center ">
        <div className="w-72">
          <img
            className="w-full h-full object-cover"
            src={notFoundImage}
            alt="Not found image"
          />
        </div>
        <Link
          to="/menu"
          className="flex items-center text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
        >
          Continue
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
    );
  } else if (!isLoading && !isError && favouriteMenu?.results?.length > 0) {
    content = (
      <>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl text-gray-700">
          Your Favourite Dishes Await
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Menu name</th>
                <th scope="col" className="px-6 py-3">price</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {favouriteMenu?.results?.map((favMenu) => (
                <FavouriteMenuTable key={favMenu.id} favMenu={favMenu} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center space-x-2 mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 border focus:ring-orange-300 font-medium rounded-full p-2 text-sm disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="px-4 py-2">{page}</span>
          <button
            onClick={handleNextPage}
            disabled={!favouriteMenu?.next}
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 border focus:ring-orange-300 font-medium rounded-full p-2 text-sm disabled:opacity-50"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </>
    );
  }

  return (
    <main className="main-padding pt-24">
      <div className="wrapper space-y-5">{content}</div>
    </main>
  );
};

export default Favourite;
