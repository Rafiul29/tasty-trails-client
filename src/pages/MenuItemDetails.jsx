import notFoundImage from "../assets/notfound.png";
import { useParams } from "react-router-dom";
import { useGetMenuItemQuery } from "../features/menus/menusApi";
import Error from "../components/ui/Error";
import MenuItem from "../components/menu/MenuItem";
import Footer from "../components/common/Footer";
import ReviewForm from "../components/Review/ReviewForm";
import MenuItemReviews from "../components/Review/MenuItemReviews";
import MenuItemSkeleton from "../components/menu/MenuItemSkeleton";

const MenuItemDetails = () => {
  const { id } = useParams();
  const {
    data: menuItemDetails,
    isLoading,
    isError,
    error,
  } = useGetMenuItemQuery(id);

  let content = null;

  if (isLoading) {
    content = (
      <div className="my-10">
        <MenuItemSkeleton />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="flex flex-col justify-center items-center h-[calc(100vh-25rem)]">
        <img style={{ width: "400px" }} src={notFoundImage} alt="Not found" />
        <Error message={error?.data?.detail || "Item not found"} />
      </div>
    );
  } else if (menuItemDetails?.id) {
    content = <MenuItem menuitem={menuItemDetails} />;
  }

  return (
    <main className="main-padding space-y-10">
      <div className="wrapper">{content}</div>

      {/* Only show reviews if data has loaded successfully */}
      {!isLoading && !isError && (
        <div className="space-y-10">
          <ReviewForm menuItemId={id} />
          <MenuItemReviews menuItemId={id} />
        </div>
      )}

      <Footer />
    </main>
  );
};

export default MenuItemDetails;
