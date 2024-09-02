import notFoundImage from "../assets/notFound.avif";
import { useGetUserFavouriteMenuQuery } from "../features/favourite/favouriteApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import FavouriteMenuTable from "../components/Favourite/FavouriteMenuTable";
import { Link } from "react-router-dom";
import { useState } from "react";

const Favourite = () => {
  //
  const [page, setPage] = useState(1);

  const {
    data: favouriteMenu,
    isLoading,
    isError,
    error,
  } = useGetUserFavouriteMenuQuery({ page: page, page_size: 8 });

  // Pagination controls
  const handleNextPage = () => {
    if (favouriteMenu?.next) setPage((prevPage) => prevPage + 1);
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
  } else if (!isLoading && !isError && favouriteMenu?.results?.length === 0) {
    content = (
      <div className="flex flex-col justify-center items-center ">
        <img
          className="object-cover"
          src={notFoundImage}
          alt="Not found image"
        />
        <Link
          to="/menu"
          className="flex items-center  text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
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
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Menu name
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {favouriteMenu?.results?.map((favMenu) => (
                <FavouriteMenuTable key={favMenu.id} favMenu={favMenu} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 border  focus:ring-orange-300 font-medium rounded-full p-[0.1rem] text-sm  dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none  cursor-pointer dark:focus:ring-orange-800 disabled:opacity-50 duration-500"
          >
            <svg
              className="w-6 h-6dark:text-white"
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
            disabled={!favouriteMenu?.next}
            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 border  focus:ring-orange-300 font-medium rounded-full p-[0.1rem] text-sm  dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none  cursor-pointer dark:focus:ring-orange-800 disabled:opacity-50 duration-500"
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
      </>
    );
  }

  return (
    <main className="main-padding">
      <div className="wrapper space-y-5">{content}</div>
    </main>
  );
};

export default Favourite;
