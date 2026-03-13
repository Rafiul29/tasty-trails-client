const DiscountedMenuSkeleton = () => {
  return (
    <div className="p-2 rounded-md flex justify-between lg:gap-5 gap-3 bg-gray-100 dark:bg-gray-800 animate-pulse">
      <div className="flex flex-col justify-center w-full space-y-2">
        {/* Title Skeleton */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
        
        <div className="flex items-center justify-between gap-10 mt-1">
          {/* Price Skeleton */}
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-24"></div>
          {/* Discount Badge Skeleton */}
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-8"></div>
        </div>
      </div>
      
      {/* Image Skeleton */}
      <div className="lg:h-20 lg:w-20 md:h-16 md:w-16 h-14 w-14 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
    </div>
  );
};

export default DiscountedMenuSkeleton;
