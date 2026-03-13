const MenuCardSkeleton = () => {
  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      {/* Image Skeleton */}
      <div className="rounded-t-lg h-36 w-full bg-gray-300 dark:bg-gray-700"></div>

      <div className="p-3 space-y-3">
        {/* Title Skeleton */}
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
        </div>

        {/* Rating Skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-24"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-8"></div>
        </div>

        {/* Footer Skeleton */}
        <div className="flex justify-between items-center gap-4 pt-2">
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg w-28"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuCardSkeleton;
