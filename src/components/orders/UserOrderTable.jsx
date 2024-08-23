import moment from "moment";

const UserOrderTable = ({ order }) => {
  console.log(order);
  const {
    id,
    order_number,
    status,
    order_date,
    delivery_address: { name, email, phone_no, address_line_1 },
  } = order || {};
  console.log(
    id,
    order_number,
    status,
    order_date,
    name,
    email,
    phone_no,
    address_line_1
  );
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {order_number}
      </th>
      {/* <td className="px-6 py-4 ">
        {name}
      </td>
      <td className="px-6 py-4 ">
        {email}
      </td> */}
      <td className="px-6 py-4 ">{phone_no}</td>
      <td className="px-6 py-4 ">{address_line_1}</td>
      <td className="px-6 py-4 ">{status}</td>
      <td className="px-6 py-4 ">{moment(order_date).format("L")}</td>

      <td className="px-6 py-4 space-x-3">
        <button
          type="button"
          className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
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
  );
};

export default UserOrderTable;
