import { useGetStatisticsQuery } from "../../features/statistics/statisticsApi";
import Number from "../Animated/Number";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
const Statistics = () => {
  const {
    data: statistics,
    isLoading,
    isError,
    error,
  } = useGetStatisticsQuery();

  // what do render
  let content = null;
  if (isLoading) {
    content = content = (
      <div className="my-2 h-56">
        <Loading />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && !statistics?.result) {
    content = (
      <div className="flex justify-center items-center ">not impletemted</div>
    );
  } else if (!isLoading && !isError && statistics?.result) {
    const { total_users, total_menus, complete_orders, total_sales } =
      statistics?.result || {};
    content = (
      <>
        <h2 className="text-3xl md:text-4xl text-center tracking-wider font-semibold mb-5">
          Our Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-10 lg:w-5/4 mx-auto">
          <div className="flex flex-col py-5 items-center justify-center text-center space-y-3  bg-gray-100 w-full h-full rounded">
            <svg
              className="w-10 h-10 text-orange-500 "
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
                strokeWidth="2"
                d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <div className="space-y-1">
              <Number n={total_users} />
              <p className="text-md "> Users</p>
            </div>
          </div>
          <div className="flex flex-col py-5 items-center justify-center text-center space-y-3  bg-gray-100 w-full h-full rounded ">
            <svg
             className="w-10 h-10 text-orange-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
            </svg>

            <div className="space-y-1">
              {" "}
              <Number n={total_menus} />
              <p className="text-md"> Menus</p>
            </div>
          </div>
          <div className="flex flex-col py-5 items-center justify-center text-center space-y-3  bg-gray-100 w-full h-full rounded ">
            <svg
             className="w-10 h-10 text-orange-500 "
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

            <div className="space-y-1">
              <Number n={complete_orders} />
              <p className="text-md "> Orders</p>
            </div>
          </div>
          <div className="flex flex-col py-5 items-center justify-center text-center space-y-3  bg-gray-100 w-full h-full rounded ">
            <svg 
             className="w-10 h-10 text-orange-500 "
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

            <div className="space-y-1">
              <Number n={total_sales} />
              <p className="text-md "> Sales</p>
            </div>
          </div>
        </div>
      </>
    );
  }


  return (
    <section className="md:py-10 py-5">
      <div className="wrapper">{content}</div>
    </section>
  );
};

export default Statistics;
