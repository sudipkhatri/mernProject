import React from 'react';
import {AiOutlineArrowDown} from "react-icons/ai";

export default function About() {
  return (
    <section className="flex pt-2 items-center bg-stone-100 min-h-screen h-auto font-poppins bg-white">
      <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex justify-start items-start flex-col px-4 mb-10 md:text-center">
          <p className="mb-2 flex sm:justify-center items-center gap-2 text-lg animate-bounce font-semibold text-black dark:text-gray-400">
            About Us
            <span className="text-white w-[25px] h-[25px] flex justify-center items-center bg-indigo-600  rounded-full">
              <AiOutlineArrowDown />
            </span>
          </p>
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
            What we do
          </h2>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
            <h2 className="mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
              Your Complete Realestate Solutions.
            </h2>
            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
              Established in 2023, Estate has grown to become a trusted name in
              the Australia real estate market. Our dedicated team of
              professionals has successfully closed deals on thousands of
              properties, ensuring our clients get the best value whether
              they're buying, selling, or renting. Our commitment is to
              transparency, excellence, and ensuring our clients' peace of mind.
            </p>
            <ul className="mb-10">
              <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-indigo-600  dark:text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </span>
                Property Buying
              </li>
              <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-indigo-600  dark:text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </span>
                Property Selling
              </li>
              <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-indigo-600  dark:text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </span>
                Rentals
              </li>
              <li className="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400">
                <span className="mr-3 text-indigo-600  dark:text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </span>
                Property Management
              </li>
            </ul>
            {/* <a href="#"
                        className="px-4 py-2 text-gray-100 bg-blue-500 rounded-md dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                        Learn more
                    </a> */}
          </div>
          <div className="relative w-full px-4 mb-10 md:w-1/2 lg:mb-0">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"
              alt=""
              className="relative z-40 object-cover w-full rounded-md md:h-96 h-44"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
