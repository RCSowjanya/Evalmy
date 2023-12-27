import React from "react";
import arrowimg from "../Images/arrow-img.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Newsletter = () => {
  return (
    <div className="bg-[#7e47a8] flex items-center my-[8%] text-white justify-between px-[3%] py-[6%] max-[600px]:flex-col">
      <div className="">
        <h1 className="text-4xl font-extrabold">Subscribe to Our Newsletter</h1>
        <p className="text-xl mt-[2%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <img
        className="w-40 max-[600px]:my-[7%]"
        src={arrowimg}
        alt="arrow-img"
      />
      <div className="relative">
        <input
          className="p-5 w-80 rounded-md "
          type="email"
          placeholder="Enter Email Address"
        ></input>
        <FaArrowRightLong
          size={20}
          className="bg-[#7e47a8] rounded-md absolute right-0 mr-3 mt-[-17%] w-11 h-11 p-4"
        />
      </div>
    </div>
  );
};

export default Newsletter;
