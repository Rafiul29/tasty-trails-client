import React from 'react'
import { useGetAllFavouriteMenuQuery } from '../../../features/favourite/favouriteApi'
import Loading from '../../ui/Loading';
import Error from '../../ui/Error';

const MostFavouriteMenuItems = () => {
  const {data:allFavouriteMenuItems,isLoading,isError,error}=useGetAllFavouriteMenuQuery()
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
    } else if (!isLoading && !isError && allFavouriteMenuItems?.length === 0) {
      content = <div className="flex justify-center items-center "></div>;
    } else if (!isLoading && !isError && allFavouriteMenuItems.length > 0) {
      console.log(allFavouriteMenuItems)
      content = <>de</>;
    }
  

  return (
    <div>MostFavouriteMenuItems</div>
  )
}

export default MostFavouriteMenuItems