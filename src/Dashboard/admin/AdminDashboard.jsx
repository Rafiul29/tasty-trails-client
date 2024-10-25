import { useGetStatisticsQuery } from "../../features/statistics/statisticsApi";

const AdminDashboard = () => {
  const {
    data: statistics,
    isLoading,
    isError,
    error,
  } = useGetStatisticsQuery();

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center  bg-orange-400 text-white">
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
      <div className="p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center  bg-sky-400 text-white">
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
      <div className="p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center  bg-pink-400 text-white">
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
      <div className="p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center  bg-purple-400 text-white">
        <div className="space-y-1 text-center">
          <p className="text-4xl">{statistics?.result.total_sales}</p>
          <p className="text-md text-sm">Total Sales</p>
        </div>
        <svg 
            className="w-16 h-16  text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 4h-8m2-10h4m4-2H5a2 2 0 00-2 2v14l3-3h14a2 2 0 002-2V5a2 2 0 00-2-2z"
              />
            </svg>
      </div>
    </div>
  );
};

export default AdminDashboard;
