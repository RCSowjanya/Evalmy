import React from "react";
import bgimg from "../Images/zen_banner_1.jpg";
import Innernav from "../Components/Innernav";
import { FaRegCheckCircle } from "react-icons/fa";
import bg from "../Images/bg.jpg";
import { FaCircle } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from "./Navbar";
import { HashLink } from "react-router-hash-link";
const Insight = () => {
  return (
    <div>
      <div className="ml-[10%] max-[1000px]:ml-0">
        <div className="">
          <img
            src={bgimg}
            className="w-full bg-cover bg-center  h-screen "
            alt="bg-img"
          />

          <Innernav />
        </div>
        <div className="absolute text-center left-0 right-0 top-[50%] translate-y-[-50%] text-white">
          <div className="">
            <h1 className="text-4xl text-white pb-[3%] font-extrabold">
              Insight & Analysis
            </h1>
            <p className="px-[17%] text-xl pb-[3%] max-[600px]:pb-[6%]">
              Evalmybrand helps Businesses in analyzing complex social metrics
              and transforming it into interactive dashboards that are easy to
              understand and act upon
            </p>
          </div>
          <div className="flex  justify-center gap-3 max-[600px]:flex-col max-[600px]:justify-start max-[600px]:pl-[2%]">
            <div className="flex max-[600px]:pl-[6%]">
              <FaRegCheckCircle />
              <p className="pl-2 mt-[-2%]">Actionable Insight</p>
            </div>
            <div className="flex max-[600px]:pl-[6%]">
              <FaRegCheckCircle />
              <p className="pl-2 mt-[-2%]">Interactive Dashboards </p>
            </div>
            <div className="flex max-[600px]:pl-[6%]">
              <FaRegCheckCircle />
              <p className="pl-2 mt-[-2%]">Precision driven AI model</p>
            </div>
            <div className="flex max-[600px]:pl-[6%]">
              <FaRegCheckCircle />
              <p className="pl-2 mt-[-2%]"> Timely Reports</p>
            </div>
          </div>
          <button className="mt-[3%] px-3">Get started &#129058;</button>
        </div>
        <div className="text-black">
          <Navbar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-[8%]">
          <div className="px-[2%]">
            <h1 className="text-4xl font-extrabold leading-15">
              Data is the new fuel to Power
              <span className="text-indigo-500"> brand growth</span>
            </h1>
            <p className="my-[4%] leading-10 text-xl">
              Social Space is highly rapid the amount of data that generates
              huge to handle and complex to understand
            </p>
            <ul className="space-y-5 ml-4 max-[1000px]:mb-[2%] ">
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
          <div className="absolute right-0 max-[1000px]:static">
            <img src={bg} className="max-[1000px]:w-full" alt="bg-img" />
          </div>
        </div>

        <div className=" mt-[20%] mb-[6%] text-center ">
          <p className="text-xl text-indigo-500 font-bold  space-y-8">
            "Social media is just a buzz word until you have the power of being
            social.With great power comes great responsibility.Responsibility to
            progress better and value customer interests"
          </p>
        </div>
        <HashLink
          to="/#products"
          scroll={(el) => {
            const yOffset = -180;
            const y =
              el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
        >
          <FaArrowLeftLong
            size={30}
            className="max-[1000px]:hidden absolute left-0 ml-[3%] bottom-[50%] cursor-pointer"
          />
        </HashLink>
      </div>
    </div>
  );
};

export default Insight;
