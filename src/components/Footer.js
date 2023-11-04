import React from "react";

const Footer = () => {
  return (
    <div className=" w-full py-4 xl:h-[10rem] bg-white text-black ">
      <div className="w-full h-full xl:max-w-[1250px] mx-auto px-4 flex flex-col xl:flex-row items-center">
        <div className="flex-1">
            <p className="font-bold text-[17px] text-center xl:text-start">Stay in the loop</p>
            <p className="text-sm text-center xl:text-start mt-2">
                Subscribe to recieve daily news and updates from TDA. We promise not to spam you!
            </p>
        </div>

        <div className="px-[1rem] flex items-center xl:items-end mt-4 xl:mt-0">
            <div className="h-[3rem] w-full xl:w-[26rem] bg-black  rounded-lg flex items-center p-1  ">
                <input type="text" placeholder="Enter your Email" className="border-0 outline-0 text-sm flex-1 px-2 bg-transparent text-white placeholder-gray-400"/>
                <button className="h-full px-4 xl:w-[8rem] bg-[#d80027] rounded-lg text-sm">Continue</button>
            </div>

        </div>
        </div>
    </div>
  );
};

export default Footer;
