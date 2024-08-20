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
    content = <div className="my-2 h-56">
      <Loading />
    </div>;
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && menulists?.length === 0) {
    content = (
      <div className="flex justify-center items-center ">
        <img className="object-cover" src={menuNotFoundImage} alt="Not found image" />
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

  return <div className="">{content}</div>;
};

export default MenuDisplay;
