import { useState } from "react";
import { FaClipboard, FaTachometerAlt, FaInbox, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMenuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [isOrdersDropdownOpen, setOrdersDropdownOpen] = useState(false);

  const toggleMenuDropdown = () => {
    setMenuDropdownOpen(!isMenuDropdownOpen);
  };

  const toggleOrdersDropdown = () => {
    setOrdersDropdownOpen(!isOrdersDropdownOpen);
  };

  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="w-48 h-screen border-r"
      aria-label="Sidebar"
    >
      <div className="h-full pb-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className="border-b p-3">
          <Link
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
            to="/"
          >
            <span className="font-medium text-md">Tasty Trails</span>
          </Link>
        </div>
        <ul className="space-y-2 font-normal pt-5 px-4">
          {/* Menu Dropdown */}
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleMenuDropdown}
            >
              <FaClipboard className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Menu
              </span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown content */}
            {isMenuDropdownOpen && (
              <ul className="py-2 space-y-2">
                <li>
                  <Link
                    to="/dashboard/admin/all/menu"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Menus
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/add/menu"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add Menu
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Orders Dropdown */}
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleOrdersDropdown}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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
                  d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                />
              </svg>

              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                Orders
              </span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {/* Dropdown content */}
            {isOrdersDropdownOpen && (
              <ul className="py-2 space-y-2">
                <li>
                  <Link
                    to="/dashboard/admin/all/orders"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Orders
                  </Link>
                </li>
                {/* Add more order-related links here */}
              </ul>
            )}
          </li>

          {/* Other Sidebar Items */}
          <li>
            <Link
              to="/inbox"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaInbox className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaUsers className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </Link>
          </li>
          {/* Add more sidebar items here */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
