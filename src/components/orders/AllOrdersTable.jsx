import moment from "moment";
import OrderModal from "./OrderModal";
import { useState } from "react";
import { useUpdateOrdersStatusMutation } from "../../features/orders/ordersApi";

const AllOrdersTable = ({ allOrders }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState(undefined);

  const [updateOrdersStatus, { data, isLoading, isError, error }] =
    useUpdateOrdersStatusMutation();

  const handleOrderDetails = (id) => {
    setOrderId(id);
    setIsModalOpen(true);
  };

  const handelChnageOrderStatus = (e, id) => {
    let status = e.target.value;
    updateOrdersStatus({
      id: id,
      data: {
        status: status,
      },
    });
  };

  return (
    <>
      <div>
        {isModalOpen && orderId && (
          <OrderModal orderId={orderId} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
      <h2 className="text-3xl md:text-4xl text-center">All Orders</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order Number
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
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
                Order Date
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allOrders?.map((order) => (
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
                <td className="px-6 py-4 ">{order.delivery_address.name}</td>
                <td className="px-6 py-4 ">{order.delivery_address.email}</td>
                <td className="px-6 py-4 ">
                  {order.delivery_address.phone_no}
                </td>
                <td className="px-6 py-4 ">
                  {order.delivery_address.address_line_1}
                </td>
                <td className="px-6 py-4 ">{order.status}</td>
                <td className="px-6 py-4 ">
                  {moment(order.address_line_1).format("L")}
                </td>
                <td className="px-6 py-4 space-x-3 flex">
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
                  <form>
                    <select
                      id=""
                      className="w-28 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue={order.status}
                      onChange={(e) => handelChnageOrderStatus(e, order.id)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllOrdersTable;
