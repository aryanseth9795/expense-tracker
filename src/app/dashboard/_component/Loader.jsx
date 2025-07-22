import React from "react";

const ShimmerLoaderHorizontal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {Array(9)
        .fill()
        .map((_, index) => (
          <div className="bg-white rounded-lg shadow-md p-4 animate-pulse" key={index}>
            <div className="rounded-full bg-gray-300 h-12 w-12 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              <div className="h-3 bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerLoaderHorizontal;
