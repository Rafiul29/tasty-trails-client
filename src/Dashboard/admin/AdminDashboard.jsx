import { Link } from "react-router-dom";
import { useGetAllMenusQuery } from "../../features/menus/menusApi";
import { useGetStatisticsQuery } from "../../features/statistics/statisticsApi";
import RecentMenus from "../RecentMenus";
import BarChart from "./Barchart";

const AdminDashboard = () => {
  const {
    data: statistics,
    isLoading,
    isError,
    error,
  } = useGetStatisticsQuery();
  const { data: menulists } = useGetAllMenusQuery({
    search: "",
    page: 1,
    page_size: 5,
  });

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <div className="p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center  bg-orange-500 text-white">
          <div className="space-y-1 text-center">
            <p className="text-4xl">{statistics?.result?.total_users}</p>
            <p className="text-md text-sm">Customers</p>
          </div>
          <svg
            className="w-16 h-16  text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div className="p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center  bg-sky-500 text-white">
          <div className="space-y-1 text-center">
            <p className="text-4xl">{statistics?.result.total_menus}</p>
            <p className="text-md text-sm">Total Menus</p>
          </div>
          <svg
            className="w-16 h-16  text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
          </svg>
        </div>
        <div className="p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center  bg-pink-500 text-white">
          <div className="space-y-1 text-center">
            <p className="text-4xl">{statistics?.result.complete_orders}</p>
            <p className="text-md text-sm">Total Orders</p>
          </div>
          <svg
            className="w-16 h-16  text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m-6-8h6m2-4h-8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z"
            ></path>
          </svg>
        </div>
        <div className="p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center  bg-purple-500 text-white">
          <div className="space-y-1 text-center">
            <p className="text-4xl">{statistics?.result.total_sales}</p>
            <p className="text-md text-sm">Total Sales</p>
          </div>
          <svg
            className="w-16 h-16  dark:text-white"
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
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
            />
          </svg>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-5 gap-2 mt-10">
        <div className="">
          <BarChart />
        </div>
        <div className=" border  p-3 bg bg-white space-y-3 rounded-lg shadow-md">
          <div className="flex justify-between items-center border-b pb-3 ">
            <h6 className="text-sm lg:text-3xl ">Recent Menus</h6>

            <Link to="/dashboard/admin/all/menu" className="flex items-center">
              <span className="text-sm ">Views All</span>
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
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
          <RecentMenus menulists={menulists?.results} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
