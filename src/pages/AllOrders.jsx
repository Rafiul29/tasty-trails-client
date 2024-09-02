import notFoundImage from "../assets/notFoundMenu.png";
import { useGetAllOrdersQuery } from "../features/orders/ordersApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import AllOrdersTable from "../components/orders/AllOrdersTable";
import { useState } from "react";

const AllOrders = () => {

  const [page, setPage] = useState(1);
  const {
    data: allOrders,
    isLoading,
    isError,
    error,
  } = useGetAllOrdersQuery({ page: page, page_size: 8 });


    // Pagination controls
    const handleNextPage = () => {
      if (allOrders?.next) setPage((prevPage) => prevPage + 1);
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
  } else if (!isLoading && !isError && allOrders?.results?.length === 0) {
    content = (
      <div className="flex justify-center items-center ">
        <img className="object-cover" src={notFoundImage} alt="" />
      </div>
    );
  } else if (!isLoading && !isError && allOrders?.results?.length > 0) {
    content = (
      <>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl text-gray-700">
          All Orders
        </h2>
        <AllOrdersTable allOrders={allOrders} />
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
            disabled={!allOrders?.next}
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

export default AllOrders;
