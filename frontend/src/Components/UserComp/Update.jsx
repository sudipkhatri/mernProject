import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Update() {

  const token = localStorage.getItem("token");

    const [input, setInput] = useState({
        title: '',
        description: '',
        price: '',
        address: '',
        imageUrl: '',
    })

    const id = useParams().id;
    let navigate = useNavigate();

    useEffect(() => {
      const defaultInput = async() => {
        const res = await axios
          .get(
            `http://localhost:5001/api/post/${id}`,
            {headers: {authorization: token}}
          )
          .catch((error) => console.log(error));
        const data = await res.data.postData;
        setInput({
          title: data.title,
          description: data.description,
          imageUrl: data.imageUrl,
          price: data.price,
          address: data.address,
        });
      };
      defaultInput();
    }, [id]);

    const sendRequest = async () => {
      const res = await axios
        .patch(
          `http://localhost:5001/api/post/update/${id}`,
          {
            title: input.title,
            description: input.description,
            imageUrl: input.imageUrl,
            price: input.price,
            address: input.address,
          },
          { headers: { authorization: token } }
        )
        .catch((error) => console.log(error));
        const data = res.data;
        return data;
        
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => navigate("/dash"));
    };

    const handleChange = (e) => {
      e.preventDefault();
      setInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    

  return (
    <div className="w-full min-h-[90vh] border-t py-8">
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
            value={input.title}
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
            value={input.imageUrl}
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
            value={input.price}
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
            value={input.address}
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
            value={input.description}
            onChange={handleChange}
            required
          />
          <button
            className="w-[120px] mt-2 border-teal-200 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
