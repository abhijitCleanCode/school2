import React from "react";

export function BlogControls({ handlePrev, handleNext, activeButton }) {
  return (
    <div className="flex justify-center gap-4 mt-8 md:mt-12 lg:mt-14 mb-16">
      <button className="w-[75px] h-[18px] rounded-full bg-[#002855]"></button>
      <button
        onClick={handlePrev}
        className={`w-4 h-4 rounded-full hover:bg-gray-400 ${
          activeButton === "prev"
            ? "bg-gray-600 hover:bg-gray-900"
            : "bg-gray-300"
        }`}
      ></button>

      <button
        onClick={handleNext}
        className={`w-4 h-4 rounded-full hover:bg-gray-400 ${
          activeButton === "next"
            ? "bg-gray-600 hover:bg-gray-900"
            : "bg-gray-300"
        }`}
      ></button>
    </div>
  );
}