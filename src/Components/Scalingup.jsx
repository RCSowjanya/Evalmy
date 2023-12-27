import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
function Scalingup() {
  return (
    <div>
      <div className="bg-[#7e47a8] px-[2%] py-[5%] my-[4%] text-center text-white space-y-11">
        <h4 className="text-4xl font-extrabold ">
          Interested in Scaling Up Your Business With us?
        </h4>
        <p className="text-2xl text-slate-400 leading-10">
          Drop Us an email or talk to Us to Learn more about What Evalmybrand
          offers to help you grow in your Social Space.You can try our quick
          demo or watch our <span className="text-white">how it Works?</span> to
          Know us better
        </p>
        <div className="flex md:items-center md:justify-center md:gap-8 max-[600px]:flex-col max-[600px]:pl-5 max-[600px]:space-y-6 ">
          <div className="flex">
            <FaRegCheckCircle size={20} className="text-white mr-2 mt-1 " />
            <p className="text-2xl">14-day trial</p>
          </div>
          <div className="flex">
            <FaRegCheckCircle size={20} className="text-white mr-2 mt-1" />
            <p className="text-2xl">No Credit card Required</p>
          </div>
          <div className="flex">
            <FaRegCheckCircle size={20} className="text-white mr-2 mt-1" />
            <p className="text-2xl">Cancel anytime</p>
          </div>
        </div>
        <div className="rounded-lg space-x-4">
          <button className="bg-white text-[#7e47a8] w-32 mb-4">
            Get Free Trial
          </button>
          <button className="border-2 border-white w-32">Talk to Sales</button>
        </div>
      </div>
    </div>
  );
}

export default Scalingup;
