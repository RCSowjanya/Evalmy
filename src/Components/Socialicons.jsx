import React from "react";
import twitter from "../Images/twitter-logo.webp";
import facebook from "../Images/facebook-logo.png";
import android from "../Images/a-image.png";
import linkedin from "../Images/linkedin-logo.png";
import playstore from "../Images/playstore-logo.png";
import youtube from "../Images/youtube-logo.png";
import instagram from "../Images/instagram-logo.jpg";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
function Socialicons() {
  return (
    <div>
      <div className="relative text-center my-[10%] px-[4%] z-[-2]">
        <button className="border border-slate-400 rounded-full bg-red-200 text-[#7e47a8] p-2">
          Leverage Your brand presence with EvalmyBrand
        </button>
        <h1 className="text-6xl font-extrabold mt-[4%]">
          Being <span className="font-light text-6xl">just</span> Social is a
          monologue.
        </h1>
        <h1 className="text-6xl font-extrabold mt-[2%]">Don't be just!</h1>
        <p className="mt-[3%] text-xl">
          Communicate through your brand to it's fullest ability with
          EvalmyBrand.We understand listen and monitor your brand insights
          better...
        </p>
        <div className="flex max-[600px]:flex-col gap-4 justify-center my-[3%]">
          <button className="px-7">Get Started</button>
          <a href="https://youtu.be/1QYXW5Ex-4A" target="_blank">
            <div class="flex items-center justify-center border border-black rounded-md p-2">
              <MdOutlineSlowMotionVideo className="mr-2 mt-1" />
              <p>How It Works?</p>
            </div>
          </a>

          <div className="max-[600px]:hidden flex  justify-center">
            <img
              src={twitter}
              alt="twitter-logo"
              className="w-11 absolute top-[46%] left-[10%]"
            />
            <img
              src={facebook}
              alt="facebook-logo"
              className="w-11 absolute bottom-[-4%] right-[11%]"
            />
            <img
              src={android}
              alt="android-logo"
              className="w-11 absolute top-[0%] left-[18%]"
            />
            <img
              src={linkedin}
              alt="linkedin-logo"
              className="w-11 absolute bottom-[-27%] left-[50%]"
            />
            <img
              src={playstore}
              alt="playstore-logo"
              className="w-11 absolute top-[0%] right-[18%]"
            />
            <img
              src={youtube}
              alt="youtube-logo"
              className="w-11 absolute top-[46%] right-[10%]"
            />
            <img
              src={instagram}
              alt="instagram-logo"
              className="w-11 absolute bottom-[-4%] left-[11%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socialicons;
