import React from "react";
import { imgs } from "../assets/asstes";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1
            className="text-3xl prata-regular  sm:py-3 lg:text-5xl leading-relaxed
          "
          >
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP Now</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <img
        src={imgs.hero}
        className="w-full sm:w-1/2 sm:h-[500px] h-[360px] object-cover sm:object-cover"
        alt="hero"
      />
    </div>
  );
}

export default Hero;
