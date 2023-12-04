import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/index.js";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
//import { FcGoogle } from "react-icons/fc";

export default function Auth() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const sendRequest = async (type = "login") => {
    try {
      const res = await axios.post(
        `http://localhost:5001/api/user/${type}`,
        input
      );
      return res.data;
    } catch (err) {      
      if (err.response && err.response.data) {
        if (err.response.status === 400) {
          setError(err.response.data.message);          
        } else {
          setError("An error occurred. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await sendRequest(isSignUp ? "signup" : "login");
    if (data) {
      !isSignUp && localStorage.setItem("userId", data._id);
      !isSignUp && localStorage.setItem("token", data.token);
      isSignUp && localStorage.setItem("userId", data._id);
      isSignUp && localStorage.setItem("token", data.token);      
      dispatch(authActions.login({}));
      navigator("/dash");
    }
  };

  return (
    <div className="bg-[#f4f4f4] flex justify-center items-center min-h-[90vh]">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="px-8 mt-8">
            <h2 className="text-3xl font-semibold text-indigo-600 py-2">Login</h2>
            <p className="text-base font-semibold">If you have an account please login.</p>
          </div>
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                    className="block w-full p-3 rounded bg-gray-200"
                  />
                </div>
              )}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="flex justify-start text-xl items-center gap-1 mb-2 text-sm font-medium text-gray-600"
                >
                  <MdEmail className="text-indigo-600" size={"25px"} /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="block w-full p-3 rounded bg-gray-200 outline-none border focus:border-indigo-600"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="flex justify-start text-xl gap-1 items-center mb-2 text-sm font-medium text-gray-600"
                >
                  <RiLockPasswordFill
                    className="text-indigo-600 gap-1"
                    size={"25px"}
                  />{" "}
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                  className="block w-full p-3 rounded bg-gray-200 outline-none border focus:border-indigo-600"
                />
              </div>
              {error && <span className="text-red-600">{error}</span>}
              <button
                type="submit"
                className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>
          </div>
          <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <button
              className="font-medium text-indigo-500"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Already have an account? Login" : "Create account"}
            </button>
            <a href="/" className="text-gray-600">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
