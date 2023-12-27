import React, { useState } from "react";

const Sales = () => {
  return (
    <div className="bg-gray-400">
      <div className="flex items-center justify-center h-screen max-[600px]:h-auto py-[7%]">
        <div className="w-[90%] bg-white rounded-lg">
          <h1 className="text-black text-4xl font-extrabold p-[2%]">
            Talk to sales
          </h1>
          <hr />
          <div className="grid grid-cols-2 grid-rows-3 gap-6 px-[4%] mb-[2%] max-[600px]:grid-cols-1 max-[600px]:py-[5%]">
            <div className="">
              <label
                for="First Name"
                className="block text-gray-900 text-md font-bold mb-[2%] mt-[4%]"
              >
                First Name
              </label>
              <input
                type="name"
                id="name"
                name="first name"
                className="border border-slate-400 rounded w-full py-4 pl-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="">
              <label
                for="Last Name"
                className="block text-gray-900 text-md font-bold mb-[2%] mt-[4%]"
              >
                Last Name
              </label>
              <input
                type="name"
                id="name"
                name="last name"
                className=" border border-slate-400 rounded w-full py-4 pl-9 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="">
              <label
                for="First Name"
                className="block text-gray-900 text-md font-bold mb-[2%] mt-[4%]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-slate-400 rounded w-full py-4 pl-3  text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="">
              <label
                for="Last Name"
                className="block text-gray-900 text-md font-bold mb-[2%] mt-[4%]"
              >
                Organization Name
              </label>
              <input
                type="name"
                id="name"
                name="organization name"
                className="border border-slate-400 rounded w-full py-4  text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="">
              <label
                for="industry"
                class="block text-gray-900 text-md font-bold mb-[2%] "
              >
                Industry Type
              </label>
              <div className="mt-2">
                <select
                  id="industry"
                  name="industry"
                  autocomplete="industry-type"
                  className="border border-slate-400 rounded w-full py-4 text-gray-900 font-semibold leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select Industry Type</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
            <div className="">
              <label
                for="industry"
                class="block text-gray-900 text-md font-bold mb-[2%] "
              >
                Select Date & Time
              </label>
              <input
                className="border border-slate-400 rounded w-full py-4 pl-3  text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                type="datetime-local"
                id="birthdaytime"
                name="birthdaytime"
              />
            </div>
          </div>
          <div className="flex place-content-end gap-3 mt-[3%] pb-[5%] mr-11 max-[600px]:justify-center max-[600px]:mr-0">
            <a href="/">
              <button className="px-6 py-1">Cancel</button>
            </a>
            <button className="px-6 py-1">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
