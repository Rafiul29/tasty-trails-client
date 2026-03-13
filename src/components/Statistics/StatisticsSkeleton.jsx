const StatisticsSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-10 lg:w-5/4 mx-auto">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col py-5 items-center justify-center text-center space-y-4 bg-gray-100 dark:bg-gray-800 w-full h-full rounded">
            {/* Icon circle */}
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            <div className="space-y-2 w-full px-4 flex flex-col items-center">
              {/* Number */}
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              {/* Label */}
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSkeleton;
