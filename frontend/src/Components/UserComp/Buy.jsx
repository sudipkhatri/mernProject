import { React, useState, useEffect } from "react";
import axios from "axios";
import Diaglog from "../Diaglog";

export default function Buy() {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let unSubscribe = false;
    sendRequest().then((data) => {
      if (!unSubscribe) {
        setValue(data.allPost);
      }
    });
    return () => (unSubscribe = true);
  }, []);

  const sendRequest = async () => {
    try {
      const res = await axios
        .get("http://localhost:5001/api/blog/")
        .catch((err) => console.log(err));
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const result = value && value.filter((val) => val.status === "Buy");

  return (
    <div className="w-full">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-1 mt-10 mb-5">
        {result &&
          result.map((val, index) => {
            const { title, description, image, location, status } = val;
            return (
              <div
                key={index}
                className="w-[90%] bg-white shadow-md rounded-xl"
              >
                <img
                  src={image}
                  alt="Product"
                  className=" object-cover rounded-t-xl"
                />
                <div className="px-4 py-3">
                  <p className="text-lg font-bold text-black block capitalize">
                    {title}
                  </p>
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {description}
                  </span>
                  <p className="text-lg font-bold text-black mt-3 block capitalize">
                    {location}
                  </p>
                  <div className="flex items-start flex-col">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      Available for {status}
                    </p>
                    <button
                      onClick={() => setOpen(!open)}
                      type="submit"
                      className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow hover:bg-indigo-500"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {open && <Diaglog open={() => setOpen(!open)} />}
    </div>
  );
}
