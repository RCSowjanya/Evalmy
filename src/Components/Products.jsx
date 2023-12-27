import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { pData } from "./ProductsData";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div>
      <div id="products" className="mt-[16%]">
        <div className="text-center">
          <h3 className="text-blue-400 text-2xl font-bold">Products</h3>
          <h2 className="text-4xl font-extrabold my-[2%]">
            A one-stop Solution for all Your Social listening needs
          </h2>
          <p className="text-xl px-4">
            Utilise Evalmybrand's AI-Powered Platform to turn unstructured data
            into useful insight and get a holistic view of what customers are
            saying about your brand
          </p>
        </div>

        <div className="grid grid-cols-3 max-[600px]:grid-cols-1 gap-y-11 place-items-center justify-center  mt-[6%]">
          {pData.map((item, index) => {
            return (
              <a key={index} href={item.URL}>
                <div className="border border-slate-400 rounded-sm relative ">
                  <img
                    className="w-72 h-60"
                    src={item.img}
                    alt={`evalmyProduct-${index}`}
                  />
                  <div className="group p-2 bg-[#7e47a8] absolute bottom-0 w-full cursor-pointer ">
                    <div className="flex justify-between">
                      <h1 className="text-md font-bold text-white group-hover:text-blue-500">
                        {item.title}
                      </h1>
                      <FaArrowRight className="text-white mt-1" />
                    </div>
                    <p className="hidden group-hover:block text-white text-sm ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Products;
