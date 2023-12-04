import React, { useState } from "react";
import homeSix from  "./index.js";
import Diaglog from "../Diaglog.jsx";
import { FaUserCircle } from "react-icons/fa";

export default function HomeSix() {

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full py-8">
      <div className="container mx-auto">
        <h2 className="py-6 font-semibold text-2xl px-6">
          Our Top Mortgage Broker
        </h2>

        <div className="grid grid-cols-1 px-6 gap-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {
            homeSix[0].map((li, index) =>{
              const {title, desc} = li;              
              return (
                <div
                  key={index}
                  className="flex justify-center items-start flex-col py-4 w-full rounded border bg-white shadow-lg"
                >
                  <div className="flex h-[150px] mx-auto bg-indigo-500 rounded-full ">{ <FaUserCircle className="text-white" size={"150px"}/> }</div>
                  <h1 className="px-4 font-semibold text-2xl mt-4">{title}</h1>
                  <p className="px-4 pt-4">{desc}</p>
                  <div className="flex px-2 mt-2 w-full">
                    <button 
                    onClick={()=>setOpen(!open)}
                    className="p-2 bg-indigo-600 rounded-lg text-white w-full">Request a call back</button>
                  </div>
                </div>
              );
            })
          }                  
        </div>
        {open && <Diaglog handleToggleDialog={()=>setOpen(!open)} />}
      </div>
    </div>
  );
}
