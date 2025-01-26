import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="mt-10 relative h-[615px] bg-[#FFB40080] flex flex-col justify-center items-center text-center overflow-hidden sm:px-16 px-6 sm:py-16 py-10 mx-auto">
      {/* Background circles */}
      <div className="absolute -top-20 -left-10 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-blue-900 rounded-full"></div>
      <div className="absolute -top-20 -right-10 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-blue-900 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-[100px] h-[100px] bg-blue-900 rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-[100px] h-[100px] bg-blue-900 rounded-full"></div>

      {/* Content */}
      <div className="z-10 text-[#002855]">
        <h1 className="text-[40px] md:text-[70px] font-bold mb-4">
          JOIN ASTRAGROVE
        </h1>
        <p className="text-[20px] md:text-[30px] font-medium mb-6">
          Learn about how to apply and begin your child&apos;s educational
          journey with us.
        </p>
        <button className="px-6 py-2 text-white bg-[#FFB400] rounded-[20px] text-[40px]">
          <Link to="/joinus">ADMISSION</Link>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
