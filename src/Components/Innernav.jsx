import React from "react";
import brandlogo from "../Images/brand-logo.png";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Innernav = () => {
  return (
    <div className="text-white">
      <div className="flex items-center justify-between  absolute top-0 left-0 right-0">
        <img
          src={brandlogo}
          className="max-[1000px]:hidden  ml-[2%] mt-[1%]"
          alt="brandlogo"
        />
        <div>
          <ul className="hidden lg:flex  space-x-5  ">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>

            <li>
              <HashLink
                to="/#products"
                scroll={(el) => {
                  const yOffset = -180;
                  const y =
                    el.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                Products
              </HashLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex pr-4">
          <Link to="/signin">
            <button className="border-none bg-transparent text-white mr-4">
              Login
            </button>
          </Link>
          <button className="px-8 py-3">Request For Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Innernav;
