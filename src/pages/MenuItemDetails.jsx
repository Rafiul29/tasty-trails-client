import { useParams } from "react-router-dom";
import { useGetMenuItemQuery } from "../features/menus/menusApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import MenuItem from "../components/menu/MenuItem";

const MenuItemDetails = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: menuItemDetails,
    isLoading,
    isError,
    error,
  } = useGetMenuItemQuery(id);

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={"No menu item found"} />;
  } else if (!isLoading && !isError && !menuItemDetails?.id) {
    content = <Error message={error} />;
  } else if (!isLoading && !isError && menuItemDetails?.id) {
    content = <MenuItem menuitem={menuItemDetails} />;
  }

  return <div>
    {content}
  </div>;
};

export default MenuItemDetails;
