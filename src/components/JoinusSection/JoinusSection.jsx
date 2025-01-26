import React from "react";
import img from "../JoinusSection/Group 86.svg";
import img1 from "../JoinusSection/Group 85.svg";
const JoinusSection = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className=" sm:m-14 m-4 pt-[12px] pb-12 md:pb-0">
          <div className="text-center sm:mb-14">
            <h1 className="text-[25px] md:text-[35px] font-bold text-black md:mx-auto pb-4 md:p-0">
              Join AstraGrove School
            </h1>

            <p className="text-[17px] lg:text-[25px] font-[400] text-black-600 md:mt-4 lg:max-w-6xl lg:mx-auto">
              Thank you for considering AstraGrove School for your child’s
              educational journey. We look forward to welcoming new students who
              share our values and commitment to learning.
            </p>
          </div>
          {/* ---       Admission Process-- */}
          <div className="m-[16px] sm:m-[52px] xl:p-8">
            <div className="pb-6">
              <section className="">
                <h2 className=" text-[22px] sm:text-[25px] lg:text-4xl font-[500] text-black  lg:mb-10 flex">
                  <spna
                    className="h-[10px]  w-[39px] lg:w-[70px] 
      m-2 mt-3 sm:mt-4 bg-[#FFB400]
     "
                  ></spna>
                  Admission Process
                </h2>
                {/* ---large-- screen--- */}
                <img
                  src={img}
                  alt=""
                  className="hidden md:flex md:items-center"
                />
                {/* --small screen--- */}
                <img
                  src={img1}
                  alt=""
                  className="flex items-center md:hidden"
                />
              </section>
            </div>
          </div>
          {/* --- Tuition and Fees-- */}
          <div className="m-[16px] sm:m-[52px] xl:p-8">
            <div className="pb-6">
              <section className="">
                <h2 className=" text-[25px] lg:text-4xl font-[500] text-blac  mb-5 lg:mb-10 flex">
                  <spna
                    className="h-[10px]  w-[39px] lg:w-[70px] 
      m-2 mt-4 bg-[#FFB400]
     "
                  ></spna>
                  Tuition and Fees
                </h2>
                <p className="lg:text-[25px] sm:text-[18px] md:[22px] font-[400] text-blac  mb-5 lg:mb-10 flex">
                  AstraGrove School is committed to providing an accessible
                  education for all families. Detailed tuition and fees are
                  available upon request.
                </p>
                <button className="bg-[#FFB400] px-4 py-2 rounded-md text-white mt-2 lg:text-[25px] sm:text-[18px] md:[22px]  font-[400]">
                  Contact Now
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinusSection;
