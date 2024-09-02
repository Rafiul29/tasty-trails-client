import menuNotFoundImage from "../assets/notFoundMenu.png";
import { useSelector } from "react-redux";
import { useGetAllMenusQuery } from "../features/menus/menusApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import AllMenuTable from "../components/menu/AllMenuTable";

const AllMenu = () => {
  const { data: menulists, isLoading, isError, error } = useGetAllMenusQuery({search:"",page:1,page_size:10});

  console.log(menulists)
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
    content = <>{<AllMenuTable menulists={menulists} />}</>;
  }

  return (
    <main className="main-padding">
      <div className="wrapper space-y-5 pb-20">{content}</div>
    </main>
  );
};

export default AllMenu;
