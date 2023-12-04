import React from "react";
import blogs from "./index.js";

export default function HomeFive() {
  return (
    <div className="w-full py-8">
      <div className="container mx-auto">
        <h2 className="py-6 font-semibold text-2xl px-6">
          Check Our Latest News
        </h2>

        <div className="grid grid-cols-1 px-6 gap-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogs[1].map((blog, index) => {
            const { title, url, desc } = blog;
            return (
              <div
                key={index}
                className="flex justify-center items-start rounded cursor-pointer flex-col w-full bg-[#f4f4f4]"
              >
                <div className="flex h-50">
                  <img src={url} alt="" className="w-full h-full rounded" />
                </div>
                <h1 className="pt-2 px-3 font-semibold text-2xl">{title}</h1>
                <p className="py-2 px-3">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
