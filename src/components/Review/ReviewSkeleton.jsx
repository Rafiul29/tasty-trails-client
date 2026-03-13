const ReviewSkeleton = () => {
  return (
    <div className="animate-pulse block p-4 bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 space-y-4">
      {/* Name Placeholder */}
      <div className="h-6 bg-gray-200 dark:bg-zinc-700 rounded w-1/3"></div>

      {/* Stars & Date Placeholder */}
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 w-4 bg-gray-200 dark:bg-zinc-700 rounded-sm"></div>
          ))}
        </div>
        <div className="h-4 bg-gray-100 dark:bg-zinc-700 rounded w-24"></div>
      </div>

      {/* Comment Placeholder */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-100 dark:bg-zinc-700 rounded w-full"></div>
        <div className="h-4 bg-gray-100 dark:bg-zinc-700 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
