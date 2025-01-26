import React from "react";

const Banner = () => {
  return (
    <>
      <div className="h-[656px] md:h-screen relative">
        {/* Background Image with Gradient */}
        <div className="h-full w-full absolute top-0 left-0 bg-cover bg-center banner-image_bg"></div>

        {/* Centered Content */}
        <section className="relative z-10 h-full flex items-center justify-center sm:px-16 px-6 sm:py-16 py-10">
          <div className="text-center text-[#002855]">
            <h1 className="font-bold leading-[44px] md:leading-[97.15px] text-[40px] md:text-[65px]">
              Welcome to <span className="text-[#FFB400]">AstraGrove</span>{" "}
              School.
            </h1>
            <p className="font-bold text-[20px] md:text-[40px] text-black">
              Nurturing Bright Minds for a Brighter Tomorrow
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
