const MenuItemSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col md:flex-row gap-8 w-full">
      {/* Image Placeholder */}
      <div className="bg-gray-200 h-64 md:h-96 w-full md:w-1/2 rounded-xl"></div>
      
      {/* Text Content Placeholder */}
      <div className="flex-1 space-y-6 py-1">
        <div className="h-10 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        <div className="h-12 bg-gray-200 rounded-lg w-40 mt-8"></div>
      </div>
    </div>
  );
};

export default MenuItemSkeleton