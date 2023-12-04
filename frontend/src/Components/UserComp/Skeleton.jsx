import React from 'react'

export default function Skeleton() {
  return (
    <div className="h-[500px] w-[90%] border-2 border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-200 animate-pulse w-full h-[55%]"></div>
      <div className="p-6">
        <h1 className="mb-4 h-6 animate-pulse bg-gray-200 mt-6 mx-3"></h1>
        <p className="leading-relaxed h-9 animate-pulse bg-gray-200 mx-3"></p>
        <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-200"></p>
        <div className="flex mt-4 bg-gray-200 h-9 mx-3 animate-pulse" />
        <div className="flex mt-4 bg-gray-200 h-6 mx-3 animate-pulse" />
      </div>
    </div>
  );
}
