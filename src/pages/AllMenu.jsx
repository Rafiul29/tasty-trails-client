import menuNotFoundImage from "../assets/notFoundMenu.png";
import { useGetAllMenusQuery } from "../features/menus/menusApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import AllMenuTable from "../components/menu/AllMenuTable";
import { useState } from "react";

const AllMenu = () => {
  const [page, setPage] = useState(1);
  const {
    data: menulists,
    isLoading,
    isError,
    error,
  } = useGetAllMenusQuery({ search: "", page: page, page_size: 10 });

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
        {<AllMenuTable menulists={menulists} />}
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
      </>
    );
  }

  return (
    <main className=" ">
      <div className="space-y-3 w-full">{content}</div>
    </main>
  );
};

export default AllMenu;
