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
    content = (
      <>
        <h2 className="text-center text-4xl text-gray-700">
          Your Orders
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                Order Number
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Name 
                </th>
                <th scope="col" className="px-6 py-3">
                  Email 
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Phone 
                </th>
                <th scope="col" className="px-6 py-3">
                  Address 
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                
                <th scope="col" className="px-6 py-3">
                  Order Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <UserOrderTable key={order.id} order={order} />
              ))}
            </tbody>
          </table>
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

export default Orders;
