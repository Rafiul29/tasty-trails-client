import { useState } from "react";
import { useGetMenuItemQuery } from "../../features/menus/menusApi";
import {
  useDeleteCartItemMutation,
  useUpdateCartItemMutation,
} from "../../features/carts/cartsApi";

const CartItem = ({ cart }) => {
  const { id, menu_item, user, quantity } = cart || {};

  const { data: menuItemDetails } = useGetMenuItemQuery(menu_item);

  // update quantity
  const [updateCartItem, { data, isError, isLoading, error }] =
    useUpdateCartItemMutation();

    // delete cart item
  const [deleteCartItem] = useDeleteCartItemMutation();

  //decrese cart quantity
  const handleDecreseQty = (id) => {
    updateCartItem({
      id: id,
      data: {
        user: user,
        menu_item: menu_item,
        quantity: quantity - 1,
      },
    });
  };

  // increase quantity
  const handleIncreaseQty = (id) => {
    updateCartItem({
      id: id,
      data: {
        user: user,
        menu_item: menu_item,
        quantity: quantity + 1,
      },
    });
  };

  // delete handle cart item
  const handleDeleteCartItem = (id) => {
    deleteCartItem(id);
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img
            src={menuItemDetails?.image}
            className="w-16 h-20 md:w-32 max-w-full max-h-full rounded-md"
            alt="Apple Watch"
          />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-700 dark:text-white">
          {menuItemDetails?.name}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            {/* decrease quantity */}
            <button
              onClick={() => handleDecreseQty(id)}
              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-orange-500 bg-white border border-orange-300 rounded-full focus:outline-none hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 dark:bg-orange-800 dark:text-orange-400 dark:border-orange-600 dark:hover:bg-orange-700 dark:hover:border-orange-600 dark:focus:ring-orange-700"
              type="button"
            >
              <span className="sr-only">Quantity button</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>

            <div>
              <input
                type="text"
                id="first_product"
                className="bg-gray-50 w-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={quantity}
                required
                // value={quantity}
              />
            </div>
            {/* increase quantity */}
            <button
              onClick={() => handleIncreaseQty(id)}
              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-orange-500 bg-white border border-orange-300 rounded-full focus:outline-none hover:bg-orange-100 focus:ring-4 focus:ring-orange-200 dark:bg-orange-800 dark:text-orange-400 dark:border-orange-600 dark:hover:bg-orange-700 dark:hover:border-orange-600 dark:focus:ring-orange-700"
              type="button"
            >
              <span className="sr-only">Quantity button</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 text-orange-500 font-semibold">
          {menuItemDetails?.price * quantity} ৳
        </td>
        <td className="px-6 py-4">
          <button
            onClick={() => handleDeleteCartItem(id)}
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <svg
              className="w-5 h-5"
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
    </>
  );
};

export default CartItem;
