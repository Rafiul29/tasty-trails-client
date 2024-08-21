import menuNotFoundImage from "../assets/notFoundMenu.png";

import { useSelector } from "react-redux";
import { useGetUserCartItemQuery } from "../features/carts/cartsApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import CartItem from "../components/carts/CartItem";

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
      <div className="flex justify-center items-center ">
        <img
          className="object-cover"
          src={menuNotFoundImage}
          alt="Not found image"
        />
      </div>
    );
  } else if (!isLoading && !isError && cartItems?.length > 0) {
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-5">
          <div className="col-span-6">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-16 py-3">
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
          <div className="col-span-2">d</div>
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
