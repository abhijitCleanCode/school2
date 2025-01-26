import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { card_img } from "../assets";
import { Title } from ".";
import { getAllEvents } from "../services/api";

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getAllEvents();

        setEvents((prev) => [...prev, ...response]);
        console.log("Fetched events:", response);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="mt-10 sm:px-16 px-6 sm:py-16 py-10 md:max-w-7xl mx-auto space-y-8">
      <Title color="#FF0000" title="Upcoming Events" />

      <Swiper
        modules={[Navigation, Pagination]}
        // navigation={{ enabled: true }}
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
        className="font-kanit custom-swiper"
      >
        <SwiperSlide>
          <div className="w-full lg:max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img
              src={card_img}
              alt="Sports equipment on grass"
              width={400}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-[22px] font-normal">
                AstraGrove Science Symposium
              </h2>
              <p className="text-sm text-[#34495E] mt-[8px]">
                20th November, 2024
              </p>
              <p className="text-[#34495E] mt-[16px]">
                A day of exploration and innovation for young scientists.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img
              src={card_img}
              alt="Sports equipment on grass"
              width={400}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-[22px] font-normal">Annual Sports Meet</h2>
              <p className="text-sm text-[#34495E] mt-[8px]">
                15th December, 2024
              </p>
              <p className="text-[#34495E] mt-[16px]">
                A day of exploration and innovation for young scientists.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:max-w-sm rounded-lg overflow-hidden shadow-lg">
            <img
              src={card_img}
              alt="Sports equipment on grass"
              width={400}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-[22px] font-normal">Annal Quiz Game</h2>
              <p className="text-sm text-[#34495E]">5th January, 2025</p>
              <p className="text-[#34495E] mt-2">
                A day of exploration and innovation for young scientists.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Event;
