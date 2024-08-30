import {useGetAllRecentOrderItemsQuery } from "../../../features/orders/ordersApi";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import OrderMenuItemCard from "./OrderMenuItemCard";

const RecentOrderMenuItems = () => {
  const {
    data: orderdMenuItems,
    isLoading,
    isError,
    error,
  } = useGetAllRecentOrderItemsQuery();
console.log(orderdMenuItems?.results)
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
       <div className="flex flex-col gap-2">
       {orderdMenuItems?.results?.map((orderdMenuItem) => (
          <OrderMenuItemCard
            key={orderdMenuItem.id}
            orderdMenuItem={orderdMenuItem}
          />
        ))}
       </div>
      </>
    );
  }
  return <div className="">{content}</div>;
};

export default RecentOrderMenuItems;
