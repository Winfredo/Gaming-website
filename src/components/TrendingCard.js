import React from "react";
import { BsFire } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const TrendingCard = ({ image }) => {
  return (
    <Fade bottom>
      <div className="flex flex-col items-center mt-[2rem]">
        <div className=" flex flex-col rounded-2xl cursor-pointer  overflow-hidden">
          <img
            src={image}
            alt="a gaming wallpaper"
            className="hover:scale-110 duration-300"
          />
        </div>

        <div className="flex items-center space-x-1 mt-4">
          <BsFire />
          <p className="font-medium">40 Followers</p>
        </div>
      </div>
    </Fade>
  );
};

export default TrendingCard;
