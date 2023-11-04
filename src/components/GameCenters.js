import React from "react";
import Fade from "react-reveal/Fade";

const GameCenters = () => {
  return (

    <Fade bottom>
    <div className="w-full items-center  ">
      <p className="text-[15px] font-bold text-center ">Our Game Centers</p>
      <p className="text-sm text-center font-light my-2 ">
        Our games centers are located in the heart of the city, where you can
        enjoy the best gaming experience.
      </p>
      <div className="flex flex-wrap justify-center xl:grid grid-cols-3 sm:space-x-6 lg:justify-between items-center">
        <img
          src={require("../images/center1.png")} alt=" "
          className="mt-[2rem] hover:animate-pulse cursor-pointer"
        />
        <img
          src={require("../images/center2.png")} alt=" "
          className="mt-[2rem] hover:animate-pulse cursor-pointer"
        />
        <img
          src={require("../images/center3.png")} alt=" "
          className="mt-[2rem] hover:animate-pulse cursor-pointer"
        />
        <img
          src={require("../images/center4.png")} alt=" "
          className="mt-[2rem] hover:animate-pulse cursor-pointer"
        />
        <img
          src={require("../images/center5.png")} alt=" "
          className="mt-[2rem] hover:animate-pulse cursor-pointer"
        />
        <img
          src={require("../images/center6.png")} alt=" "
          className="mt-[2rem] hover:animate-pulse cursor-pointer"
        />
      </div>

      <div className="w-full flex items-center justify-center my-[4rem]">
        <button className="w-[6rem] h-[2rem] my-3 bg-[#160e46] text-sm mt-[2rem] font-bold rounded-[10px] ">
          SEE ALL
        </button>
      </div>
    </div>
    </Fade>
  );
};

export default GameCenters;
