import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WarningBox({ onConfirm, onCancel }) {
  return (
    <div className="fixed z-10 overflow-y-scroll top-0 right-0 mx-auto left-0">
      <div className="flex items-center justify-center min-h-[80vh] pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-gray-200 flex flex-col justify-center items-center gap-4 w-full px-4 py-3 text-center">
            <h2 className="font-semibold text-lg">Are you sure?</h2>
            <div className="flex py-2">
              <button
                onClick={onCancel}
                type="button"
                className="py-2 px-4 border text-black border-teal-400 outline-none rounded hover:bg-teal-700 hover:text-white mr-2 shadow"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                type="button"
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PostCard({
  id,
  users,
  title,
  description,
  imageUrl,
  address,
  price,
  handleToggleDialog,
}) {
  const [isWarningVisible, setIsWarningVisible] = useState(false);
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleEdit = () => {
    navigate(`/post/update/${id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5001/api/post/${id}`,
         {headers: {authorization: token}}
      );
      navigate("/dash");
    } catch (err) {
      setError(err.message);
      setIsWarningVisible(false); // Close warning box on error
    }
  };

  return (
    <div className="w-[90%] relative bg-white shadow-md rounded-xl">
      <img src={imageUrl} alt={title} className="object-cover rounded-t-xl" />
      <div className="flex justify-between px-2 py-3">
        <div className="flex items-start flex-col">
          <p className="text-lg font-bold text-black py-2 block capitalize">
            {title}
          </p>
          <span className="text-gray-600 w-full uppercase text-xs">
            {description}
          </span>
          <p className="text-lg font-bold text-black mt-2 block capitalize">
            {address}
          </p>
          <p className="text-lg font-semibold text-black cursor-auto mt-2">
            ${price} per week
          </p>
          {!userId && (
            <button
              onClick={handleToggleDialog}
              className="w-[120px] p-3 mt-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-500"
            >
              Book Now
            </button>
          )}
        </div>
        {users === userId && (
          <div className="flex justify-start items-start gap-2">
            <button
              className="p-2 bg-teal-600 text-white rounded-full"
              onClick={handleEdit}
            >
              <CiEdit size={"20px"} />
            </button>
            <button
              className="p-2 bg-teal-600 text-white rounded-full"
              onClick={() => setIsWarningVisible(true)}
            >
              <MdDeleteForever size={"20px"} />
            </button>
          </div>
        )}
      </div>
      {isWarningVisible && (
        <WarningBox
          onConfirm={handleDelete}
          onCancel={() => setIsWarningVisible(false)}
        />
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
}
