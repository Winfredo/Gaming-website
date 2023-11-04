import React from "react";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:h-screen items-center w-full">
      <Fade bottom>
      <div className="flex flex-col flex-1 h-full items-center xl:items-start justify-center text-white text-center xl:text-start space-y-6 ">
        <p className="text-[#e87d0e] font-medium  ">Proved by prodesigner</p>
        <h1 className="text-[2rem] font-bold w-full xl:w-[25rem] ">
          Work that we produce for our clients
        </h1>

        <p className="text-xs w-full xl:w-[19rem] text-gray-200 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <button className="text-sm w-[10rem] py-2 rounded-full bg-gradient-to-r from-[#d80027] to-[#fb9e3c]  " >
            Get More Details
        </button>
      </div>
      </Fade>


      <Fade bottom>
      <div className="flex items-center justify-center mt-5 w-[22rem] overflow-hidden" >
        <img src={require("../images/cod.jpeg")} />
      </div>
      </Fade>
    
    </div>
  );
}; 

export default Hero;
