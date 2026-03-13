const CategoryCardSkeleton = () => {
    return (
      <div className="flex flex-col justify-center items-center gap-1 bg-gray-50 dark:bg-gray-800 p-2 border border-gray-100 dark:border-gray-700 rounded-md h-30 w-24 animate-pulse">
        {/* Circle Image Skeleton */}
        <div className="h-16 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        
        {/* Text Skeleton */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mt-1"></div>
      </div>
    );
  };
  
  export default CategoryCardSkeleton;
  
