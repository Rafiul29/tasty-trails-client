import { useState } from "react";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";
import { useAuthAdmin } from "../../hooks/useAuthAdmin";
import { useGetUserCartItemQuery } from "../../features/carts/cartsApi";
import { useGetBalanceQuery } from "../../features/users/userApi";
import { data } from "autoprefixer";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLoggedIn = useAuth();
  const isAdmin = useAuthAdmin();
  const dispatch = useDispatch();

  // user information
  const { user, accessToken } = useSelector((state) => state.auth);
  const { user_id } = user || {};

  const { data: userAccount } = useGetBalanceQuery(user_id);

  console.log(userAccount);

  //cart items
  const { data: cartItems } = useGetUserCartItemQuery(user_id, {
    skip: !user_id,
  });

  // logout
  const handleLogout = () => {
    fetch(`${import.meta.env.VITE_APP_API_URL}/api/auth/logout/`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          dispatch(userLoggedOut());
          localStorage.removeItem("auth");
          setIsDropdownOpen(!isDropdownOpen);
        } else {
          dispatch(userLoggedOut());
          localStorage.removeItem("auth");
          setIsDropdownOpen(!isDropdownOpen);
        }
      });
  };

  return (
    <nav className="bg-white border-b shadow-md fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl dark:bg-gray-900 dark:border-gray-700 h-18">
      <div className="wrapper  flex flex-wrap items-center justify-between mx-auto py-4 ">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-2xl whitespace-nowrap font-medium dark:text-white">
            TastyTrails
          </span>
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col md:items-center  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/menu"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white 
                duration-500 md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Menu
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link
                  to="/favourite"
                  className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  duration-500 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Favoruite
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  duration-500 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact-us"
                className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  duration-500 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact us
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <span
                  className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
              duration-500 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {userAccount?.length > 0 && (
                    <span>({userAccount[0].balance}৳)</span>
                  )}
                </span>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link
                  to="/carts"
                  className="relative block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
             md:hover:text-orange-600 md:p-0 dark:text-white 
               duration-500 md:dark:hover:text-orange-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <svg
                    className="block w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span className="flex justify-center items-center bg-orange-500 text-white h-6 w-6 rounded-full  absolute -top-1 left-6 md:-top-4 md:left-2">
                    {cartItems?.length == 0 ? 0 : cartItems?.length}
                  </span>
                </Link>
              </li>
            )}
           
            {!isLoggedIn && (
              <li>
                <Link
                  to="/login"
                  className="md:inline block mt-2  md:mt-0 text-white bg-orange-500 hover:bg-orange-600 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                >
                  Login
                </Link>
              </li>
            )}

            {!isLoggedIn && (
              <li>
                <Link
                  to="/register"
                  className="block mt-2 md:inline text-white bg-orange-500 hover:bg-orange-600 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
                >
                  Register
                </Link>
              </li>
            )}
            <li>
              <div className="relative">
                {isLoggedIn && (
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    id="dropdownNavbarLink"
                    className="flex items-center justify-center w-10 h-10 p-2 text-gray-900 rounded-full md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:focus:text-white  
                    hover:bg-orange-600 
                    duration-500 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    {/* <FaUserCircle className="w-6 h-6" aria-hidden="true" /> */}
                    <svg
                      className="w-8 h-8 text-gray-800 dark:text-white
                      duration-500  hover:text-orange-600 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </button>
                )}
                {isDropdownOpen && (
                  <div
                    id="dropdownNavbar"
                    className="z-10 absolute mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {isLoggedIn && (
                        <li>
                          <Link
                            to="/profile"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Profile
                          </Link>
                        </li>
                      )}
                      {isLoggedIn && (
                        <li>
                          <Link
                            to="/deposit"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Deposit
                          </Link>
                        </li>
                      )}
                      {isLoggedIn && isAdmin && (
                        <li>
                          <Link
                            to="/all/menu"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            All Menu
                          </Link>
                        </li>
                      )}
                      {isLoggedIn && isAdmin && (
                        <li>
                          <Link
                            to="/add/menu"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Add Menu
                          </Link>
                        </li>
                      )}
                      {isLoggedIn && (
                        <li>
                          <Link
                            to="/orders"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Orders
                          </Link>
                        </li>
                      )}
                      {isAdmin && (
                        <li>
                          <Link
                            to="/all/orders"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            All Orders
                          </Link>
                        </li>
                      )}
                    </ul>
                    {isLoggedIn && (
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    )}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
