import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useAuthAdmin } from "../../hooks/useAuthAdmin";
import { userLoggedOut } from "../../features/auth/authSlice";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = useAuth();
  const isAdmin = useAuthAdmin();
  const { user, accessToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate=useNavigate();
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
        navigate('/')
      });
  };

  return (
    <header className="py-3 text-gray-900  dark:text-white  dark:hover:bg-gray-700 group  flex justify-between items-center  border-b px-8">
      {/* <form className="flex items-center max-w-sm">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Search .."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 ms-2 text-sm font-medium text-white bg-orange-500 rounded-lg border border-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form> */}
      <span></span>
      <div className="flex items-center">
        <div className="relative">
          <div className="flex gap-1">
            <small className="text-sm flex flex-col items-center">
              <span className="font-medium">
                {user?.first_name} {user?.last_name}
              </span>
              <span>{user?.role}</span>
            </small>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              id="dropdownNavbarLink"
              className="flex items-center justify-center w-8 h-8 p-2 text-gray-900 rounded-full md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-white md:dark:hover:text-orange-400 dark:focus:text-white  
                    hover:bg-orange-600 
                    duration-500 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              {!isDropdownOpen ? (
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
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              ) : (
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
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              )}
            </button>
          </div>
          {isDropdownOpen && (
            <div
              id="dropdownNavbar"
              className="z-10 absolute mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-28 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                {isLoggedIn && isAdmin && (
                  <li>
                    <Link
                      to="/dashboard/admin/profile"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Profile
                    </Link>
                  </li>
                )}
                {isLoggedIn && !isAdmin && (
                  <li>
                    <Link
                      to="/dashboard/user/profile"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Profile
                    </Link>
                  </li>
                )}

                <button
                  onClick={handleLogout}
                  className="block px-3 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
