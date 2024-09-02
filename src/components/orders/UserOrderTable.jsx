import moment from "moment";
import OrderModal from "./OrderModal";
import { useState } from "react";

const UserOrderTable = ({ orders }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState(undefined);

  const handleOrderDetails = (id) => {
    setOrderId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <div>
        {isModalOpen && orderId && (
          <OrderModal orderId={orderId} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
     
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order Number
              </th>
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
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Discount
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
            {orders?.results?.map((order) => (
              <tr
                key={order.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.order_number}
                </th>
                <td className="px-6 py-4 ">
                  {order.delivery_address.phone_no}
                </td>
                <td className="px-6 py-4 ">
                  {order.delivery_address.address_line_1}
                </td>
                <td className="px-6 py-4 ">{order.status}</td>
                
                <td className="px-6 py-4 ">৳ {order.order_total}</td>
                <td className="px-6 py-4 ">৳ {order.total_discount}</td>
                <td className="px-6 py-4 ">
                  {moment(order.order_date).fromNow()}
                </td>

                <td className="px-6 py-4 space-x-3">
                  <button
                    onClick={() => handleOrderDetails(order.id)}
                    type="button"
                    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                  >
                    <svg
                      className="w-5 h-5 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserOrderTable;
