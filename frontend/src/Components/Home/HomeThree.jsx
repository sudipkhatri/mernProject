import React from 'react';
import { FaHandshake } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";

export default function HomeThree() {
  return (
    <div>
      <div
        className="w-full mx-auto px-4 lg:pt-24 lg:pb-28 bg-[#f4f4f4]
      flex flex-col justify-center items-center sm:mt-8 h-auto"
      >
        <div className="flex mt-10 flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Find Your Perfect Home</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4">
              Dive into a tailored search experience. With our advanced filters
              and local expertise, discover properties that align seamlessly
              with your preferences and lifestyle.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center bg-white py-8 rounded rounded-xl">
            <div
              className="text-gray-900 p-3 w-20 h-20 shadow-lg
             rounded-full bg-indigo-600 inline-flex items-center justify-center"
            >
              <FaHandshake className="fill-white" size={"45px"} />
            </div>
            <h6 className="text-xl mt-5 font-semibold">
              Maximize Your Returns
            </h6>
            <p className="mt-2 mb-4">
              Dive into a tailored search experience. With our advanced filters
              and local expertise, discover properties that align seamlessly
              with your preferences and lifestyle.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center bg-white py-8 rounded rounded-xl">
            <div className="bg-indigo-600  p-3 w-20 h-20 shadow-lg rounded-full inline-flex items-center justify-center">
              <SiGooglemarketingplatform className="fill-white" size={"45px"} />
            </div>
            <h5 className="text-xl mt-5 font-semibold">Grow your market</h5>
            <p className="mt-2 mb-4">
              Partner with us to unlock the true value of your property. Our
              dedicated team, combined with strategic marketing, ensures a swift
              sale at the best possible price.
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center bg-white py-8 rounded rounded-xl">
            <div className="bg-indigo-600  p-3 w-20 h-20 shadow-lg rounded-full inline-flex items-center justify-center">
              <MdManageAccounts className="fill-white" size={"45px"} />
            </div>
            <h5 className="text-xl mt-5 font-semibold">
              Stress-Free Property Management
            </h5>
            <p className="mt-2 mb-4 t">
              Renting out your property? Leave the complexities to us. From
              tenant screening to maintenance, we provide end-to-end management
              solutions for peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
