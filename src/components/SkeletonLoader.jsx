const SkeletonLoader = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full h-80 bg-gray-200 rounded-xl"></div>
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="flex gap-4 mt-6">
            <div className="h-8 w-16 bg-gray-200 rounded"></div>
            <div className="h-8 w-16 bg-gray-200 rounded"></div>
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
          </div>
          <div className="mt-8 h-10 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
