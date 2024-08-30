import { useGetAllDiscountedMenusQuery } from "../../../features/menus/menusApi";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";

const DiscountedMenus = () => {
  const {
    data: discountMenus,
    isLoading,
    isError,
    error,
  } = useGetAllDiscountedMenusQuery();

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <div className="my-2 h-56">
        <Loading />
      </div>
    );
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && discountMenus?.length === 0) {
    content = <div className="flex justify-center items-center "></div>;
  } else if (!isLoading && !isError && discountMenus.length > 0) {
    content = <>de</>;
  }
  console.log(discountMenus);
  return <div>wr3f3</div>;
};

export default DiscountedMenus;
