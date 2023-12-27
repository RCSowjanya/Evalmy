import React, { useState } from "react";
import Navbar from "./Navbar";
import logo from "../Images/evalmybrand.png";
import brandlogo from "../Images/brand-logo.png";
import { MdClose } from "react-icons/md";
import { BsMouse } from "react-icons/bs";
import Products from "./Products";
import { Link } from "react-router-dom";

import Socialicons from "./Socialicons";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Scalingup from "./Scalingup";
import Testmonials from "./Testmonials";
import Socialmedia from "./Socialmedia";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
function Home() {
  const [showComponent, setShowComponent] = useState(true);

  const handleClose = () => {
    setShowComponent(false);
  };
  return (
    <div>
      <div className="bg-black h-screen">
        {/*logo and button*/}
        <div className="flex items-center justify-between p-3 h-32">
          <img src={logo} className="max-[600px]:hidden" alt="evalmy-logo" />
          <img
            src={brandlogo}
            className="min-[650px]:hidden"
            alt="evalmy-brand-logo"
          />
          <Link to="/sales">
            <button className="bg-[#7e47a8] text-white p-2 rounded-md text-base font-semibold">
              Request For Demo
            </button>
          </Link>
        </div>
        {/*heading and video*/}
        <div className="heading pl-[6%] pt-[8%] max-[600px]:px-[6%]  text-white">
          <h1 className="text-6xl  font-black">
            Are You More Than Social Yet?
          </h1>

          <div class="py-11 font-bold text-3xl  [text-wrap:balance]">
            <span class="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul class="block animate-text-slide-3 text-left leading-tight [&_li]:block">
                <li>Engage</li>
                <li>Tech</li>
                <li>Corporate</li>
                <li aria-hidden="true">Engage</li>
              </ul>
            </span>
            <span className="text-white">
              Trusted by the most innovative minds in
            </span>
          </div>
          <div className="flex max-[600px]:flex-col gap-7">
            <Link to="/sales">
              <button>Request For Demo</button>
            </Link>
            <a href="https://youtu.be/1QYXW5Ex-4A">
              <div class="flex items-center justify-center border-2 border-white text-white rounded-md p-2">
                <MdOutlineSlowMotionVideo className="mr-2 mt-1" />
                <p>How It Works?</p>
              </div>
            </a>
          </div>
          <BsMouse
            size={60}
            className="max-[600px]:hidden text-white animate-bounce  absolute bottom-0 mb-[3%] left-[50%] transform translateX(-50%)"
          />
        </div>
      </div>
      {/*strip*/}
      {showComponent && (
        <div className="bg-[#7e47a8] flex items-center justify-between max-[600px]:hidden h-16">
          <div class="flex gap-3 pl-24">
            <button className="rounded-full bg-white text-black font-extrabold w-20">
              New
            </button>
            <span className="pt-2">
              EvalmyBrand is introducing Youtube.Now you can get deeper insight
              from youtube <span>Benifits &#8594; </span>
            </span>
          </div>
          <MdClose onClick={handleClose} className="mr-6" />
        </div>
      )}
      {/*Navbar and login buttons*/}
      <div>
        <Navbar />
        <Socialicons />
        <Products />
        <Scalingup />
        <Testmonials />
        <Socialmedia />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
