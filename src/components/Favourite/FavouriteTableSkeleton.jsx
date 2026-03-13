const FavouriteTableSkeleton = () => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 animate-pulse">
      <td className="px-6 py-4">
        <div className="h-8 w-12 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-48"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-16"></div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="h-8 w-8 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </td>
    </tr>
  );
};

export default FavouriteTableSkeleton;
