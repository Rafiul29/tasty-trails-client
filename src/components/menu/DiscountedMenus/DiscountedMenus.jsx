import { useGetAllDiscountedMenusQuery } from "../../../features/menus/menusApi";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import DiscountedMenuCard from "./DiscountedMenuCard";

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
  } else if (!isLoading && !isError && discountMenus?.results?.length === 0) {
    content = <div className="flex justify-center items-center "></div>;
  } else if (!isLoading && !isError && discountMenus?.results?.length > 0) {
    content = (
      <>
        <h2 className=" text-md md:text-lg  text-gray-900 mb-3 font-medium">
          Discount menu items
        </h2>
        <div className="flex flex-col gap-2 h-full  ">
          {discountMenus?.results?.map((dicountmenu) => (
            <DiscountedMenuCard
              key={dicountmenu.id}
              dicountmenu={dicountmenu}
            />
          ))}
        </div>
      </>
    );
  }
  console.log(discountMenus);
  return <div>{content}</div>;
};

export default DiscountedMenus;
