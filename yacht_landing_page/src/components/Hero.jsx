import React from "react";
import yacht from "../../public/yacht.jpg";
import arrow from "../../public/arrow.png";
const Hero = () => {
  return (
    <div className=" p-4 px-8 my-4 w-full">
      <h1 className="text-white text-5xl  leading-[3.5rem] font-playfair tracking-wide  text-center md:text-6xl md:leading-[5rem]">
        <span className="block">Experience </span>
        <span>
          the <span className="text-yellow-500">ultimate</span> luxury
        </span>
      </h1>
      <div  className="flex flex-col md:flex-row my-8 justify-center  gap-6 items-center md:justify-evenly">
        <div className="self-start" > 
          <span className="block text-white">More than</span>
          <span className="text-yellow-500">250 yachts</span>
        </div>
        <img src={yacht} alt="" className="max-w-[550px] w-full  " />
     
          <a
            href="#none"
            className="text-yellow-500 self-end  flex gap-2  items-center relative bg-black z-1 p-2 circle "
          >
            <img src={arrow} alt="" aria-hidden="true" className="w-8" />
            Look all yachts
          </a>
      
      </div>
    </div>
  );
};

export default Hero;
