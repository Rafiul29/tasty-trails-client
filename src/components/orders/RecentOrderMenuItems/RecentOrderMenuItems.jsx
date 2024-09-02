import { useState } from "react";
import { useGetAllRecentOrderItemsQuery } from "../../../features/orders/ordersApi";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import OrderMenuItemCard from "./OrderMenuItemCard";

const RecentOrderMenuItems = () => {
  const [page, setPage] = useState(1);

  const {
    data: orderdMenuItems,
    isLoading,
    isError,
    error,
  } = useGetAllRecentOrderItemsQuery(page);

  // Pagination controls
  const handleNextPage = () => {
    if (orderdMenuItems?.next) setPage((prevPage) => prevPage + 1);
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
  } else if (!isLoading && !isError && orderdMenuItems?.results?.length === 0) {
    content = (
      <div className="flex justify-center items-center">
        Recent Order Item not found
      </div>
    );
  } else if (!isLoading && !isError && orderdMenuItems?.results?.length > 0) {
    content = (
      <div className="h-full flex flex-col gap-2 justify-between">
        <div className="flex flex-col ">
          <h2 className=" text-md md:text-lg  text-gray-900 mb-3 font-medium">
            Recent Order items
          </h2>
          <div className="flex flex-col gap-2 h-full">
            {orderdMenuItems?.results?.map((orderdMenuItem) => (
              <OrderMenuItemCard
                key={orderdMenuItem.id}
                orderdMenuItem={orderdMenuItem}
              />
            ))}
          </div>
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
            disabled={!orderdMenuItems?.next}
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
      </div>
    );
  }
  return <>{content}</>;
};

export default RecentOrderMenuItems;
