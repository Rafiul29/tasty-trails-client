import emtyCartImage from "../assets/emtyCart.png";

import { useSelector } from "react-redux";
import { useGetUserCartItemQuery } from "../features/carts/cartsApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import CartItem from "../components/carts/CartItem";
import { Link } from "react-router-dom";
import CheckOutDetails from "../components/carts/CheckOutDetails";

const Carts = () => {
  const { user } = useSelector((state) => state.auth);
  const { user_id } = user || {};

  const {
    data: cartItems,
    isLoading,
    isError,
    error,
  } = useGetUserCartItemQuery(user_id);

  // what do render
  let content = null;
  if (isLoading) {
    content = content = (
      <div className="my-2 h-56">
        <Loading />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && cartItems?.length === 0) {
    content = (
      <div className="flex flex-col justify-center items-center space-y-3 bg-white">
        <img
          className="object-cover"
          src={emtyCartImage}
          alt="Not found image"
        />
        <h3 className="text-2xl">
          <strong>Your Cart is Empty</strong>
        </h3>
        <h4>Add something to make me happy :)</h4>
        <Link
          to="/menu"
          className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Choose plan
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
  } else if (!isLoading && !isError && cartItems?.length > 0) {
    content = (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-5">
          <div className="lg:col-span-7">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right shadow-2xl text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className=" px-12 md:px-16 py-3">
                      <span className="">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cart) => (
                    <CartItem key={cart.id} cart={cart} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:col-span-2 ">
            <CheckOutDetails/>
          </div>
        </div>
      </>
    );
  }

  return (
    <main className="main-padding">
      <div className="wrapper">{content}</div>
    </main>
  );
};

export default Carts;
