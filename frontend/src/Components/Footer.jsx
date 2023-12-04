import React from 'react';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import {FaXTwitter} from "react-icons/fa6";


export default function Footer() {
  return (
    <div className=''>
      <footer className="relative bg-black pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px; transform: translateZ(0px)" }}
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
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 p-4">
              <h4 className="text-3xl text-gray-200 font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-2 mb-2 text-gray-200">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-6 flex">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 flex items-center
                   justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaXTwitter className="fill-black" size={"25px"} />
                </button>
                <button
                  className="bg-white text-blue-600 flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <AiFillFacebook size={"25px"} />
                </button>
                <button
                  className="bg-gradient-to-r from-[#f9ce34] to-[#ee2a7b]
                   text-gray-900 flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <AiOutlineInstagram className="fill-[#fff]" size={"25px"} />
                </button>
                <button
                  className="bg-white text-gray-900 flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <AiFillYoutube className="fill-[#c4302b]" size={"25px"} />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 p-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Rent
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Buy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-200 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright © 2023 Estate By
                <a
                  href="https://www.creative-tim.com"
                  className="text-gray-200 hover:text-gray-900"
                >
                  {" "}
                  Sudip Khatri
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
