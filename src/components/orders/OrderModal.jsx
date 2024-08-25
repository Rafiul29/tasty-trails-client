import { useOrderItemsQuery } from "../../features/orders/ordersApi";
import Loading from "../ui/Loading";
import notFoundImage from "../../assets/notFound.avif";

const OrderModal = ({ onClose, orderId }) => {
  const { data: OrderMenus, isLoading, isError } = useOrderItemsQuery(orderId);

 
  const total = OrderMenus?.reduce((prev, curr) => {
    return prev + Number(curr.price)*Number(curr.quantity);
  }, 0);
  console.log(total)
  const tax=(total*2/100)

  
  
  let content = null;
  if (isLoading) {
    content = (
      <div className="my-2 h-56">
        <Loading />
      </div>
    );
  } else if (!isLoading && isError) {
    content = (
      <div className=" h-25 w-25 flex flex-col justify-center items-center">
        <img
          style={{ width: "400px" }}
          className=" object-cover"
          src={notFoundImage}
          alt="Not found image"
        />
      </div>
    );
  } else if (!isLoading && !isError && OrderMenus.length > 0) {
    content = (
      <>
        <div className="p-2 md:p-3 grid grid-cols-4 font-medium ">
          <p className="col-span-2">Name</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        {OrderMenus.map((orderMenu) => (
          <div key={orderMenu.id} className="p-2 md:p-3 grid grid-cols-4">
            <p className="col-span-2 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {orderMenu.menu_item.name}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {orderMenu.quantity}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 ">
              {Number(orderMenu.price)*orderMenu.quantity} ৳
            </p>
          </div>
        ))}
      </>
    );
  }

  return (
    <div
      id="default-modal"
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="flex items-center justify-between p-2 md:p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Order Details
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {content}
        <div className="p-2 md:p-4 grid border-t grid-cols-4">
          <div className="col-span-2">
            <button
              onClick={onClose}
              type="button"
              className="self-start text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
            >
              Close
            </button>
          </div>
          <p>Tax: {tax} ৳ </p>
          <p>Total: {total+tax} ৳ </p>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
