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
    const {total_users,total_menus,complete_orders,total_sales}=statistics?.result||{}
    content = (
      <>
        <h2 className="text-3xl md:text-4xl text-center tracking-wider font-semibold mb-5">
          Our Statistics
        </h2>
        <div className="flex justify-around flex-wrap gap-5">
          <div className="text-center space-y-2">
            <p className="text-xl font-medium">Total Users</p>
            <Number n={total_users} />
          </div>
          <div className="text-center space-y-2">
            <p className="text-xl font-medium">Total Menus</p>
            <Number n={total_menus} />
          </div>
          <div className="text-center space-y-2">
            <p className="text-xl font-medium">Complete Order</p>
            <Number n={complete_orders} />
          </div>
          <div className="text-center space-y-2">
            <p className="text-xl  font-medium">Total Sales</p>
            <Number n={total_sales} />
          </div>
        </div>
      </>
    );
  }
  console.log(statistics);

  return (
    <section className="py-10">
      <div className="wrapper">
        {content}
      </div>
    </section>
  );
};

export default Statistics;
