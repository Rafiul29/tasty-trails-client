import menuNotFoundImage from "../assets/notFoundMenu.png";
import notFoundImage from "../assets/notFound.avif";
import { useSelector } from "react-redux";
import { useGetUserFavouriteMenuQuery } from "../features/favourite/favouriteApi";
import Loading from "../components/ui/Loading";
import Error from "../components/ui/Error";
import FavouriteMenuTable from "../components/Favourite/FavouriteMenuTable";

const Favourite = () => {
  const { user } = useSelector((state) => state.auth);
  const { user_id } = user || {};
  console.log(user_id);
  const {
    data: favouriteMenu,
    isLoading,
    isError,
    error,
  } = useGetUserFavouriteMenuQuery(user_id);

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
  } else if (!isLoading && !isError && favouriteMenu?.length === 0) {
    content = (
      <div className="flex justify-center items-center ">
        <img
          className="object-cover"
          src={notFoundImage}
          alt="Not found image"
        />
      </div>
    );
  } else if (!isLoading && !isError && favouriteMenu.length > 0) {
    content = (
      <>
        <h2 className="text-center text-4xl text-gray-700">
          Your Favourite Dishes Await
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Menu name
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>
                
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {favouriteMenu.map((favMenu) => (
                <FavouriteMenuTable key={favMenu.id} favMenu={favMenu} />
              ))}
            </tbody> 
          </table>
        </div>
      </>
    );
  }

  return (
    <main className="main-padding">
      <div className="wrapper space-y-5">{content}</div>
    </main>
  );
};

export default Favourite;
