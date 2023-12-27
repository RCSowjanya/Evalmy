import React from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestmonialsData, { testData } from "../Components/TestmonialsData";

function Testmonials() {
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
      <Element name="testmonials" className="">
        <div className="text-center">
          <h3 className="text-blue-400 text-2xl font-bold">Testmonials</h3>
          <h2 className="text-4xl font-extrabold my-[2%]">
            Our Customers' Acclaim
          </h2>
          <p className="text-xl px-4 leading-10 ">
            We offer the best solutions to our customers' business needs and
            they love us more than we do.Evalmybrand works with a single point
            agends to provide the top notch solutions to all its customers and
            help them grow exponentially.
          </p>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {testData.map((e) => {
            const { logo, description, img, founder, designation } = e;
            return (
              <div className="border border-slate-400 h-full p-22 relative p-3 ">
                <img src={logo} className="w-32 py-[5%] pl-[2%]" />
                <p className="pb-[20%]">{description}</p>
                <div className="flex bottom-0 pl-4 absolute mb-[2%] ">
                  <img src={img} className="w-11 h-11 rounded-full mr-6 " />
                  <div className="">
                    <h6 className="">{founder}</h6>
                    <p className="">{designation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Element>
    </div>
  );
}

export default Testmonials;
