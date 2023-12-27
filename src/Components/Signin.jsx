import React from "react";
import logo from "../Images/evalmybrand-Logo-black.png";
import { Link } from "react-router-dom";
import signinsocial from "../Images/signin-social.jpg";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
const Signin = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center max-[600px]:flex-col">
        <div className="basis-1/2 mx-[6%]">
          <Link to="/">
            <img src={logo} alt="evalmy-logo" className="ml-[-4]" />
          </Link>
          <h1 className="my-[6%] text-4xl font-extrabold">Sign In</h1>
          <p className="text-xl text-slate-400 mb-[6%]">
            Enter Below detailes to Sign in into your account
          </p>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-md font-bold mb-[5%] relative"
            >
              Email Address<span class="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded-md  w-full py-4 pl-11 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <MdOutlineMail
              size={22}
              className="text-slate-400 absolute mt-[-3%] ml-[1%] max-[600px]:mt-[-10%]"
            />
          </div>
          <div class="mb-4">
            <label
              for="Password"
              class="block text-gray-900 text-md font-bold mb-[5%] mt-[6%]"
            >
              Password<span class="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow  appearance-none border rounded w-full py-4 pl-9 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
            <FiLock
              size={22}
              className="text-slate-400 absolute mt-[-3%] ml-[1%] max-[600px]:mt-[-10%]"
            />
          </div>
          <p className="flex place-content-end text-[#7e47a8] font-extrabold text-md">
            Forgot Password
          </p>
          <button className="w-full mt-8 py-3 ">Sign In</button>
          <div className="flex gap-2 mt-4">
            <p className="text-slate-500">Not yet registered?</p>
            <p className="text-[#7e47a8] font-extrabold">Create Account</p>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={signinsocial} alt="signinsocial" />
        </div>
      </div>
    </div>
  );
};

export default Signin;
