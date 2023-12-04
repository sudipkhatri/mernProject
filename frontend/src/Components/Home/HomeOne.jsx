import React from 'react'

export default function HomeOne() {
  return (
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "85vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg")',
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative  mx-auto my-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full pt-20 sm:pt-28 lg:w-6/12 px-4 m-auto text-center">
              <div className="sm:pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Find Your Australian Dream Home
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Welcome to Estate, where your property dreams come to life.
                  Discover an array of homes, apartments, and properties
                  tailored to fit your lifestyle. Whether you're buying,
                  selling, or renting, we are here to support every step of your
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px; transform: translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
  );
}
