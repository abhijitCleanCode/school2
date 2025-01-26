import React from "react";

export function Blog({ geetamImg, Name, Para }) {
  return (
    <div className="text-center">
      <img src={geetamImg} className="w-full rounded-t-xl max-w-[302px] md:max-w-[366px]" alt="" />
      <div className="border-2 border-t-[0.1px] rounded-b-2xl">
        <h2 className="mt-4 text-xl md:text-[20px] lg:text-[25px] lg:mb-2 font-normal">{Name}</h2>
        <p className="text-gray-800 text-lg md:text-xl my-1 mb-3 lg:my-3 lg:mb-5 font-light">{Para}</p>
      </div>
    </div> 
  );
}