import notFoundImage from "../assets/notFoundMenu.png";
import { useGetAllOrdersQuery } from "../features/orders/ordersApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import AllOrdersTable from "../components/orders/AllOrdersTable";

const AllOrders = () => {
  const { data: allOrders, isLoading, isError, error } = useGetAllOrdersQuery();

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
  } else if (!isLoading && !isError && allOrders?.length === 0) {
    content = (
      <div className="flex justify-center items-center ">
        <img className="object-cover" src={notFoundImage} alt="" />
      </div>
    );
  } else if (!isLoading && !isError && allOrders.length > 0) {
    content = <AllOrdersTable allOrders={allOrders} />;
  }

  return (
    <main className="main-padding">
      <div className="wrapper space-y-5">{content}</div>
    </main>
  );
};

export default AllOrders;
