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
      <>
        <h2 className=" text-md md:text-lg  text-gray-900 mb-3 font-medium">
          Recent Order menu items
        </h2>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2 h-full  ">
            {orderdMenuItems?.results?.map((orderdMenuItem) => (
              <OrderMenuItemCard
                key={orderdMenuItem.id}
                orderdMenuItem={orderdMenuItem}
              />
            ))}
          </div>

          {/* <div className=" flex justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">{page}</span>
            <button
              onClick={handleNextPage}
              disabled={!orderdMenuItems?.next}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div> */}
        </div>
      </>
    );
  }
  return <div className="">{content}</div>;
};

export default RecentOrderMenuItems;
