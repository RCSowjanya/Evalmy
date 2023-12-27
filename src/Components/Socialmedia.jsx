import React from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { socialData } from "./SocialmediaData";
import { FaArrowRightLong } from "react-icons/fa6";
const Socialmedia = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      gap: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
      gap: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <div className="text-center mt-[8%]">
        <h3 className="text-blue-400 text-2xl font-bold">What's Trending</h3>
        <h2 className="text-4xl font-extrabold my-[2%]">
          Check our Latest trends on Social media's impact on Business!
        </h2>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {socialData.map((e) => {
          return (
            <div className="border border-slate-400 h-full  relative ">
              <img src={e.image} className=" " />
              <p className="pb-[20%] px-[3%]">{e.description}</p>
              <div className="flex ml-[3%]">
                <p className="text-[#7e47a8] text-xl font-bold">Read Now</p>
                <FaArrowRightLong
                  size={20}
                  className="text-[#7e47a8] mt-1 ml-2"
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Socialmedia;
