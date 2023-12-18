import React, { useState } from "react";
import "../App.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
//import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../Store";
import { NavLink as Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Header() {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.isLoggedIn);

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleClick = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className="">
      <nav className="bg-white py-2 md:py-4 z-10 w-full absolute md:static">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-bold text-xl text-indigo-600 ">
              ESTATE
            </Link>
            <button
              onClick={handleToggleClick}
              className="px-3 py-1 rounded transition-all duration-300 text-gray-600 opacity-70 hover:opacity-100 md:hidden"
            >
              {isCollapsed ? (
                <AiOutlineMenu size={"30px"} />
              ) : (
                <RxCross2 size={"30px"} />
              )}
            </button>
          </div>

          <div
            className={`${
              isCollapsed ? "hidden" : "flex transition ease-out duration-200"
            }
            md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}
          >
            <Link
              to={userID ? "/dash" : "/"}
              className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
            >
              {userID ? "All Posts" : "Home"}
            </Link>

            {!userID ? (
              <Link
                to="/rent"
                className="relative p-2 lg:px-4 btn4 overflow-hidden md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                <span className="absolute inset-x-0 h-[2.5px] bottom-0 bg-black"></span>
                Rent | Buy
              </Link>
            ) : (
              <Link
                to="/mypost"
                className="relative p-2 lg:px-4 btn4 overflow-hidden md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                <span className="absolute inset-x-0 h-[2.5px] bottom-0 bg-black"></span>
                My Posts
              </Link>
            )}
            {userID && (
              <Link
                to="/add"
                className="relative p-2 lg:px-4 btn4 overflow-hidden 
              md:mx-2 text-gray-600 rounded hover:bg-gray-200 
              hover:text-gray-700 transition-colors duration-300
              flex justify-center items-center gap-1"
              >
                <span className="absolute inset-x-0 h-[2.5px] bottom-0 bg-black"></span>
                Add <IoIosAddCircleOutline size={"20px"} />
              </Link>
            )}

            {!userID && (
              <Link
                to="/contact"
                className="relative p-2 lg:px-4 btn4 overflow-hidden md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                <span className="absolute inset-x-0 h-[2.5px] bottom-0 bg-black"></span>
                Contact
              </Link>
            )}

            <Link
              to="/login"
              onClick={() => dispatch(authActions.logout())}
              className="p-2 lg:px-4 md:mx-2 text-black text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              {userID ? "Logout" : "Login"}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
