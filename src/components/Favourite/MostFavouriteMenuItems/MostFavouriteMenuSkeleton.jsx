const MostFavouriteMenuSkeleton = () => {
  return (
    <div className="rounded-md flex lg:flex-col lg:gap-1 gap-3 bg-gray-100 dark:bg-gray-800 animate-pulse p-2 lg:p-0">
      {/* Image Skeleton */}
      <div className="lg:h-24 lg:w-full md:h-16 md:w-16 h-14 w-14 overflow-hidden md:rounded-md bg-gray-300 dark:bg-gray-700"></div>
      
      <div className="content-center lg:p-2 space-y-2 flex-1">
        {/* Title Skeleton */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        {/* Price Skeleton */}
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default MostFavouriteMenuSkeleton;
