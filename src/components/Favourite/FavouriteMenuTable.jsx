import { Link } from "react-router-dom";
import { useDeleteFavouriteMutation } from "../../features/favourite/favouriteApi";

const FavouriteMenuTable = ({ favMenu }) => {
  const { id: favId, menu_item: { id: menuId, name, price, image,discount } = {} } =
    favMenu || {};

  const [deleteFavourite, { data }] = useDeleteFavouriteMutation();

  const handleFavourite = (favId) => {
    deleteFavourite(favId);
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-8 w-12 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </th>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {name}{" "}
      </td>
      <td className="px-6 py-4 text-orange-500 font-semibold">{Number(price-price*discount/100)}৳</td>

      <td className="px-6 py-4 flex  items-center gap-3 ">
        <Link
          to={`/menu/${menuId}`}
          className=" text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
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
        </Link>
        <button
          onClick={() => handleFavourite(favId)}
          type="button"
          className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default FavouriteMenuTable;
