import React from "react";
import bgimg from "../Images/zen_banner_1.jpg";
import Innernav from "./Innernav";
import Navbar from "./Navbar";
import { FaCircle } from "react-icons/fa";
import bg from "../Images/bg.jpg";
import { FaFacebookF } from "react-icons/fa";
import avatar from "../Images/avatar.png";
const About = () => {
  return (
    <div>
      <div className="relative">
        <img src={bgimg} className="bg-center w-full" alt="bg-img" />
        <Innernav />
        <h1 className="text-5xl text-white mx-auto  font-extrabold absolute  top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ">
          About Us
        </h1>
      </div>
      <Navbar />
      <div className="ml-[10%]">
        <h1 className="my-[5%] text-4xl font-extrabold">
          If intent is the destination, then data is the fuel to reach there.
        </h1>
        <p className="text-xl mb-[2%] leading-10">
          Brands are built on solid ideas,plans, and execution. The idea is
          fundamental to the existence of a company.As Part of planning and
          execution,the brand must develop products and deliver them to their
          customers.The world we live in today is driven by data,and data-driven
          decision-making is at the heart of planning and execution.
        </p>
        <p className="text-xl leading-10">
          We at EVMB utilise powerful AI Algorithms, Natural Language processing
          and sentiment analysis to provide insights about your brand to
          accelerate planning and execution.Thus,fueled by data & insight from
          our Powerful AI base model,EVMB helps you reach your brand goals.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[8%]">
          <div className="">
            <h1 className="text-4xl font-extrabold mb-[6%]">
              Connecting you better with Your customers is our goal as we decode
              the social matrix for you.
            </h1>
            <ul className="space-y-7 ml-4 max-[1000px]:mb-[4%] ">
              <li className="flex">
                <FaCircle size={8} className="mr-3 text-indigo-500" />
                <p className="mt-[-1%]">
                  Know your metrics & top performing classes
                </p>
              </li>
              <li className="flex">
                <FaCircle size={8} className="mr-3 text-indigo-500" />
                <p className="mt-[-1%]">
                  Investigate and act on declining metrics
                </p>
              </li>
              <li className="flex">
                <FaCircle size={8} className="mr-3 text-indigo-500" />
                <p className="mt-[-1%]">Analyse Competitor Trends</p>
              </li>
              <li className="flex">
                <FaCircle size={8} className="mr-3 text-indigo-500" />
                <p className="mt-[-1%]">Understand Customer Perspective</p>
              </li>
              <li className="flex">
                <FaCircle size={8} className="mr-3 text-indigo-500" />
                <p className="mt-[-1%]">Analyze your monitor metrics</p>
              </li>
              <li className="flex">
                <FaCircle size={8} className="mr-3 text-indigo-500" />
                <p className="mt-[-1%]">Get quick alert on virality</p>
              </li>
            </ul>
          </div>
          <div className="">
            <img
              className=" right-0 max-[1000px]:w-full"
              src={bg}
              alt="about-bg"
            />
          </div>
        </div>
      </div>
      {/*our team*/}
      <div className="bg-indigo-500 py-[8%]">
        <div className="text-center text-white ">
          <h2 className="text-4xl font-extrabold">Our Team</h2>
          <p className="py-[1%] text-xl">
            The leaders don't create Followers.They create More Leaders.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 pt-[8%] justify-center">
            <div className="border border-indigo-500">
              <img src={avatar} className="" alt="" />
              <div className="p-[2%]">
                <h1>XXXX XXXXX</h1>
                <h6>Managing Director</h6>
                <div className="flex gap-3 items-center justify-center mt-[3%]">
                  <FaFacebookF className="bg-white rounded-full text-indigo-700" />
                  <FaFacebookF className="bg-white rounded-full text-indigo-700" />
                  <FaFacebookF className="bg-white rounded-full text-indigo-700" />
                </div>
              </div>
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
