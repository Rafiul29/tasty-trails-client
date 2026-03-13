const CartTableSkeleton = () => {
  return (
    <div className="animate-pulse grid grid-cols-1 lg:grid-cols-9 gap-5">
      <div className="lg:col-span-7">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left shadow-2xl">
            <thead className="bg-gray-50 dark:bg-zinc-800">
              <tr>
                {["Image", "Product", "Qty", "Price", "Action"].map((header, i) => (
                  <th key={header} className={`px-6 py-3 ${i === 0 ? 'px-12 md:px-16' : ''}`}>
                    <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-16"></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }).map((_, rowIndex) => (
                <tr key={rowIndex} className="bg-white border-b dark:bg-zinc-900 dark:border-zinc-800">
                  <td className="p-4 px-12 md:px-16">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-32 mb-2"></div>
                    <div className="h-3 bg-gray-100 dark:bg-zinc-800 rounded w-20"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-8 bg-gray-100 dark:bg-zinc-800 rounded w-20"></div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-16"></div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="h-8 bg-gray-200 dark:bg-zinc-800 rounded w-8"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md space-y-4">
          <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="h-4 bg-gray-100 dark:bg-zinc-800 rounded w-16"></div>
              <div className="h-4 bg-gray-100 dark:bg-zinc-800 rounded w-12"></div>
            </div>
            <div className="flex justify-between border-t pt-2 mt-2">
              <div className="h-5 bg-gray-200 dark:bg-zinc-800 rounded w-20"></div>
              <div className="h-5 bg-gray-200 dark:bg-zinc-800 rounded w-16"></div>
            </div>
          </div>
          <div className="h-10 bg-gray-200 dark:bg-zinc-800 rounded-lg w-full mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CartTableSkeleton;
