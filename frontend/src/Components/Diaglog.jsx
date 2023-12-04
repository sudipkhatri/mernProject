import React, {useState} from 'react'

export default function Diaglog({ handleToggleDialog }) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handlChange = (e) => {
    e.preventDefault();
    setValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="fixed z-10 overflow-y-scroll top-0 w-full left-0">
      <div
        className="flex items-center justify-center min-h-[80vh] pt-4 px-4 
      pb-20 text-center sm:block sm:p-0"
      >
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left 
          overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle 
          sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <label className="font-medium text-gray-800">Name</label>
            <input
              type="text"
              onChange={handlChange}
              name="name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />

            <label className="font-medium text-gray-800">Email</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              name="email"
              onChange={handlChange}
              placeholder="********@*****.***"
              required
            />

            <label className="font-medium text-gray-800">Number</label>
            <input
              type="text"
              onChange={handlChange}
              name="number"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            />
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Your Message
            </label>
            <textarea
              rows="10"
              onChange={handlChange}
              name="message"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              required
            ></textarea>
          </div>
          <div className="bg-gray-200 px-4 py-3 text-right">
            <button
              onClick={handleToggleDialog}
              type="button"
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
            >
              <i className="fas fa-times"></i> Cancel
            </button>
            <button
              onClick={handleClick}
              type="button"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
            >
              <i className="fas fa-plus"></i> Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
