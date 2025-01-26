import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Card, Title } from ".";

const ReviewsSection = () => (
  <section className="mt-10 sm:px-16 px-6 sm:py-16 py-10 md:max-w-7xl mx-auto space-y-8">
    <Title color="#11AC0C" title="Reviews" />

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
      className="font-kanit custom-swiper"
    >
      {/* Card 1 */}
      <SwiperSlide>
        <Card
          borderColor="#FFB40080"
          cornerColor1="#FFB40080"
          cornerColor2="#FFB40080"
          text="AstraGrove School has been a wonderful choice for our child’s education. The teachers are not only highly knowledgeable but genuinely care about each student’s growth."
          parentName="Mr and Mrs Sharma"
        />
      </SwiperSlide>

      {/* Card 2 */}
      <SwiperSlide>
        <Card
          borderColor="#FF000080"
          cornerColor1="#FF000080"
          cornerColor2="#FF000080"
          text="The dedication of the staff at AstraGrove is unmatched. They create a nurturing and positive environment where children feel valued and motivated to learn."
          parentName="Mrs Singh"
        />
      </SwiperSlide>

      {/* Card 3 */}
      <SwiperSlide>
        <Card
          borderColor="#FFB40080"
          cornerColor1="#FFB40080"
          cornerColor2="#FFB40080"
          text="AstraGrove School combines strong academics with a genuine focus on each child’s strengths. Our son enjoys learning and has developed a passion for science."
          parentName="Mr and Mrs Verma"
        />
      </SwiperSlide>
    </Swiper>
  </section>
);

export default ReviewsSection;
