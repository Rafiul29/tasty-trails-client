import notFoundImage from "../assets/notFound.avif";
import { useParams } from "react-router-dom";
import { useGetMenuItemQuery } from "../features/menus/menusApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import MenuItem from "../components/menu/MenuItem";
import Footer from "../components/common/Footer";

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
      <div className="my-2 h-56">
        <Loading />
      </div>
    );
  } else if (!isLoading && isError) {
    content = (
      <div className=" h-25 w-25 flex flex-col justify-center items-center">
        <img
          style={{ width: "400px" }}
          className=" object-cover"
          src={notFoundImage}
          alt="Not found image"
        />
        <Error message={error?.data?.detail} />
      </div>
    );
  } else if (!isLoading && !isError && menuItemDetails?.id) {
    content = <MenuItem menuitem={menuItemDetails} />;
  }

  return (
   <>
    <main className="main-padding  space-y-10">
      <div className="wrapper ">{content}</div>
      <Footer/>
    </main>
   
   </>
  );
};

export default MenuItemDetails;
