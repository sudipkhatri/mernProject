import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const navigator = useNavigate();
  const token = localStorage.getItem("token");
  const [input, setInput] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    address: "",
  });
  const postRequest = async () => {
    const res = await axios
      .post("http://localhost:5001/api/post/add", {
        title: input.title,
        description: input.description,
        imageUrl: input.imageUrl,
        price: input.price,
        address: input.address,
        users: localStorage.getItem("userId"),
      },
      {headers: {authorization:token}}
      )
      .catch((error) => console.log(error));    
    const data = await res.data;
    return data;
  };
  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest().then(navigator("/dash"));
  };

  return (
    <div className="container mx-auto min-h-[80vh] py-6 border-t">
      <div className="flex sm:w-1/2 lg:w-2/4 bg-[#f4f4f4] py-8 rounded-lg 2xl:w-1/4 flex-col gap-4 mx-auto flex-col mt-8">
        <div className="flex w-3/4 mx-auto">
          <h2 className="font-semibold text-3xl pb-4"> Add Details Below</h2>
        </div>
        <form
          className="flex flex-col w-3/4 mx-auto justify-center gap-3 items-start"
          onSubmit={handleSubmit}
        >
          <label className="font-semibold" htmlFor="html">
            Title:
          </label>
          <input
            className="border w-full rounded p-2 border-teal-400 outline-none"
            type="text"
            name="title"
            placeholder=""
            onChange={handleChange}
            required
          />
          <label className="font-semibold" htmlFor="html">
            Video URL:
          </label>
          <input
            className="border w-full rounded p-2 border-teal-400 outline-none"
            type="text"
            name="imageUrl"
            placeholder=""
            onChange={handleChange}
            required
          />
          <label className="font-semibold" htmlFor="html">
            Price:
          </label>
          <input
            className="border w-full rounded p-2 border-teal-400 outline-none"
            type="number"
            name="price"
            placeholder=""
            onChange={handleChange}
            required
          />
          <label className="font-semibold" htmlFor="html">
            Full Address:
          </label>
          <input
            className="border w-full rounded p-2 border-teal-400 outline-none"
            type="text"
            name="address"
            placeholder=""
            onChange={handleChange}
            required
          />
          <label className="font-semibold" htmlFor="html">
            Description:
          </label>
          <textarea
            className="border w-full rounded p-2 border-teal-400 outline-none"
            type="description"
            name="description"
            placeholder=""
            onChange={handleChange}
            required
          />
          <button
            className="w-[120px] mt-2 border-teal-200 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
