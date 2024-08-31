import MostFavouriteMenuItems from "../components/Favourite/MostFavouriteMenuItems/MostFavouriteMenuItems";
import DiscountedMenus from "../components/menu/DiscountedMenus/DiscountedMenus";
import RecentOrderMenuItems from "../components/orders/RecentOrderMenuItems/RecentOrderMenuItems";

const Partice = () => {
  return (
    <main className="main-padding">
      <section className="py-10">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="lg:col-span-3 md:col-span-4 bg-gray-100/90 lg:p-4  p-3 rounded-md">
              <RecentOrderMenuItems />
            </div>
            <div className="lg:col-span-6 md:col-span-4 bg-gray-100/90 lg:p-4  p-3 rounded-md">
              <MostFavouriteMenuItems />
            </div>
            <div className="lg:col-span-3 md:col-span-4  bg-gray-100/90 lg:p-4  p-3 rounded-md">
              <DiscountedMenus />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partice;
