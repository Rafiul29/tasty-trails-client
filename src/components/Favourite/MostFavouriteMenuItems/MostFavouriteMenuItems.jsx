
import { useGetAllMostFavouriteMenuQuery } from '../../../features/favourite/favouriteApi'
import Loading from '../../ui/Loading';
import Error from '../../ui/Error';
import MostFavoruriteMenuCard from './MostFavoruriteMenuCard';

const MostFavouriteMenuItems = () => {
  
  const {data:allFavouriteMenuItems,isLoading,isError,error}=useGetAllMostFavouriteMenuQuery({'page':1,'page_size':10})

  console.log(allFavouriteMenuItems)

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
    } else if (!isLoading && !isError && allFavouriteMenuItems?.results?.length === 0) {
      content = <div className="flex justify-center items-center "></div>;
    } else if (!isLoading && !isError && allFavouriteMenuItems?.results?.length > 0) {
      content = (
        <>
         <h2 className=" text-md md:text-lg  text-gray-900 mb-3 font-medium">
          Most Favourite items
        </h2>
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-4 overflow-hidden">
            {allFavouriteMenuItems?.results?.map((mostfavmenu) => (
              <MostFavoruriteMenuCard
                key={mostfavmenu.id}
                mostfavmenu={mostfavmenu}
              />
            ))}
          </div>

          {/* <div className=" flex justify-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">{page}</span>
            <button
              onClick={handleNextPage}
              disabled={!orderdMenuItems?.next}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div> */}
        </div>
        </>
      )
    }
  

  return (
    <div>{content}</div>
  )
}

export default MostFavouriteMenuItems