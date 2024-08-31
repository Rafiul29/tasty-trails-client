import MostFavouriteMenuItems from "../Favourite/MostFavouriteMenuItems/MostFavouriteMenuItems";
import DiscountedMenus from "../menu/DiscountedMenus/DiscountedMenus";
import RecentOrderMenuItems from "../orders/RecentOrderMenuItems/RecentOrderMenuItems";

const ExploreSection = () => {
  return (
      <section className="py-5 ">
        <div className="wrapper">
        <h2 className="text-2xl tracking-wider font-medium mb-3">
            Today's Top Picks
          </h2>
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
  );
};

export default ExploreSection;
