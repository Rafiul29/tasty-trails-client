import { useSelector } from "react-redux";
import { useGetUserOrdersQuery } from "../features/orders/ordersApi";
import notFoundImage from "../assets/notFoundMenu.png";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import UserOrderTable from "../components/orders/UserOrderTable";

const Orders = () => {
  const { user } = useSelector((state) => state.auth);
  const { user_id } = user || {};

  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useGetUserOrdersQuery(user_id);

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
  } else if (!isLoading && !isError && orders?.length === 0) {
    content = (
      <div className="flex justify-center items-center ">
        <img className="object-cover" src={notFoundImage} alt="" />
      </div>
    );
  } else if (!isLoading && !isError && orders.length > 0) {
    content = <UserOrderTable orders={orders} />;
  }

  return (
    <main className="main-padding">
      <div className="wrapper space-y-5">{content}</div>
    </main>
  );
};

export default Orders;
