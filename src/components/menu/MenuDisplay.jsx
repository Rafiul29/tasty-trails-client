import menuNotFoundImage from "../../assets/notFoundMenu.png";

import { useSelector } from "react-redux";
import { useGetAllMenusQuery } from "../../features/menus/menusApi";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Menucard from "./Menucard";

const MenuDisplay = () => {
  const { name: catanme } = useSelector((state) => state.category);

  const {
    data: menulists,
    isLoading,
    isError,
    error,
  } = useGetAllMenusQuery(catanme);

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
  } else if (!isLoading && !isError && menulists?.length === 0) {
    content = (
      <div className="flex justify-center items-center ">
        <img
          className="object-cover"
          src={menuNotFoundImage}
          alt="Not found image"
        />
      </div>
    );
  } else if (!isLoading && !isError && menulists.length > 0) {
    content = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 gap-4 place-items-center">
          {menulists.map((menu, i) => (
            <Menucard key={i} menu={menu} />
          ))}
        </div>
      </>
    );
  }

  return (
    <section className="md:py-10 py-6">
      <div className="wrapper">
        <div className="mb-4">
          <h2 className="text-2xl tracking-wider font-medium">
            Explore Popular Dishes in Your Area
          </h2>
        </div>
        {content}
      </div>
    </section>
  );
};

export default MenuDisplay;
