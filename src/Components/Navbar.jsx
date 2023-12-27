import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../Images/evalmybrand-Logo-black.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 700;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`${
          isScrolled
            ? "fixed bg-white top-0 left-0 right-0 w-full z-50"
            : "relative"
        } transition-all ease-in-out duration-300 shadow-xl h-[80px] p-[3%]`}
      >
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="">
            <img src={logo} alt="evalmy-logo" />
          </div>

          <div>
            <ul className="hidden lg:flex space-x-5 font-bold">
              <li>
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
              <button className="border-none bg-transparent text-black mr-4">
                Login
              </button>
            </Link>
            <button className="px-8 py-3">Request For Demo</button>
          </div>

          <div className="lg:hidden z-50" onClick={handleClick}>
            {!nav ? (
              <RxHamburgerMenu className="w-7" />
            ) : (
              <IoCloseSharp className="w-7" />
            )}
          </div>
        </div>
        <ul
          className={!nav ? "hidden" : " bg-zinc-200 w-full font-bold p-[7%] "}
        >
          <li className="border-b-2 border-zinc-300 w-full  ">
            <NavLink onClick={handleClose} to="/">
              Home
            </NavLink>
          </li>
          <li className="border-b-2 border-zinc-300 w-full ">
            <NavLink onClick={handleClose} to="/about">
              About Us
            </NavLink>
          </li>

          <li className="border-b-2 border-zinc-300 w-full ">
            <HashLink
              onClick={handleClose}
              to="/#products"
              scroll={(el) => {
                const yOffset = -200; // Adjust the offset to your liking
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              Products
            </HashLink>
          </li>

          <li className="border-b-2 border-zinc-300 w-full ">
            <NavLink onClick={handleClose} to="/pricing">
              Pricing
            </NavLink>
          </li>
          <li className="border-b-2 border-zinc-300 w-full ">
            <NavLink onClick={handleClose} to="/contact">
              Contact Us
            </NavLink>
          </li>

          <div className="flex flex-col my-4 ">
            <Link to="/signin">
              <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
                Login
              </button>
            </Link>
            <button className="px-8 py-3">Request For Demo</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
