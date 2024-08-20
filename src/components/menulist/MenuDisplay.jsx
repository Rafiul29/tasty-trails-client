import {useSelector } from "react-redux";
import { useGetAllMenusQuery } from "../../features/menus/menusApi";
import Error from "../ui/Error";
import Loading from "../ui/Loading";
import Menucard from "./Menucard";


const MenuDisplay = () => {

  const {name:catanme}=useSelector(state=>state.category)

  const {
    data: menulists,
    isLoading,
    isError,
    error,
  } = useGetAllMenusQuery(catanme);



  
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error?.data} />;
  } else if (!isLoading && !isError && menulists?.length === 0) {
    content = <div>No menu found</div>;
  } else if (!isLoading && !isError && menulists.length > 0) {
    content = menulists.map((menu, i) => <Menucard key={i} menu={menu} />);
  }

  return (
    <div className="bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-5 gap-4 place-items-center">
        {content}
      </div>
    </div>
  );
};

export default MenuDisplay;
