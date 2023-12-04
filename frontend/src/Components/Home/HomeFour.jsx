import React from 'react';
import propertyLists from "./index.js";


export default function HomeFour() {
  return (
    <div className="w-full py-8">
      <div className="container mx-auto">
        <h2 className="py-6 font-semibold text-2xl px-6">
          All Things Property
        </h2>

        <div className="grid grid-cols-1 px-6 gap-3 sm:grid-cols-2 md:grid-cols-3 gap-y-8">

          {
            propertyLists[2].map((list, index) =>{
              const {title, url, desc} = list;
              return (
                <div
                key={index}
                className="flex justify-center cursor-pointer rounded items-start flex-col py-4 w-full border bg-[#f4f4f4]">
                  <div className="mx-auto h-[150px]">
                    {url}
                  </div>
                  <h1 className="px-4 font-semibold text-2xl">
                   {title}
                  </h1>
                  <p className="px-4 pt-2 text-lg">
                    {desc}
                  </p>
                  <button
                  className='ml-4 w-[130px] text-white rounded mt-2 bg-indigo-600 p-2'
                  >
                    Explore More
                  </button>
                </div>
              );
            })
          }                 
        </div>
      </div>
    </div>
  );
}
