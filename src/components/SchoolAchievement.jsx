import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import { certificate1, certificate2, certificate3 } from "../assets";
import Title from "./Title";

const SchoolAchievement = () => {
  return (
    <section className="mt-10 sm:px-16 px-6 sm:py-16 py-10 md:max-w-7xl mx-auto space-y-8">
      <Title color="#FFB400" title="School Achievements" />

      <div className="flex justify-center items-center mx-auto w-4/5 md:w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="font-kanit mx-auto custom-swiper"
        >
          <SwiperSlide>
            <div className="relative group w-full lg:w-full md:h-[444px] overflow-hidden">
              {/* Image */}
              <img
                src={certificate1}
                alt="certificate"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full lg:w-full md:h-[444px]">
              <img
                src={certificate2}
                alt="certificate"
                className="w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full lg:w-full md:h-[444px]">
              <img
                src={certificate3}
                alt="certificate"
                className="w-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SchoolAchievement;
