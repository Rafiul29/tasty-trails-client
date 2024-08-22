import { Link } from "react-router-dom";
import { useCartCheckoutQuery } from "../../features/carts/cartsApi";

const CheckOutDetails = () => {
  const { data } = useCartCheckoutQuery();
  const {total,tax,grand_total}=data?.result||{}

  return (
    <div className="p-6  bg-white border  shadow space-y-3 rounded-xl">
      <div className="flex justify-between">
        <span className="font-semibold">Total price:</span>
        <span className="font-medium">{total} ৳</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Tax</span>
        <span className="font-medium">{tax} ৳</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Total</span>
        <span className="font-medium">{grand_total} ৳</span>
      </div>
      <hr />
      <Link to="/cart/checkout" className="flex items-center justify-center px-3 py-2 text-sm font-medium w-full text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
        Checkout
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

      <Link
        to="/menu"
        className="flex items-center justify-center w-full  text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      >
        {" "}
        Continue choose plan
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
};

export default CheckOutDetails;
