import React from "react";

import { intro_img } from "../assets";
import {
  Header,
  Banner,
  Title,
  Review,
  CallToAction,
  Footer,
  Event,
  SchoolAchievement,
} from "../components";

const Home = () => {
  return (
    <>
      <Banner />

      <section className="mt-100 sm:px-16 px-6 sm:py-16 py-10 space-y-8 flex flex-col justify-center mx-auto items-start">
        <div className="flex flex-wrap gap-8 items-center justify-center mx-auto font-kanit w-[90%] md:w-full">
          <div className="flex flex-col space-y-[16px]">
            <Title color="#FFB400" title="Introduction" />
            <div className="border-8 rounded-md border-[#FFB400] w-[90%] h-[90%] lg:w-[411px] lg:h-[396px]">
              <img
                src={intro_img}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:max-w-2xl">
            <p className="text-[18px] md:text-[25px]">
              At AstraGrove School, foster a dynamic learning environment where
              every child&apos;s potential is nurtured. Our innovative
              curriculum, led by passionate educators, encourages curiosity,
              critical thinking, and collaboration. We focus on both academic
              and personal growth, developing students into compassionate,
              confident, and skilled individuals. Through enriching programs and
              supportive guidance, we prepare our students to tackle future
              challenges with creativity, resilience, and integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 sm:px-16 px-6 sm:py-16 py-10 md:max-w-7xl mx-auto space-y-8">
        <Title color="#002855" title="Mission and Values" />

        <ul className="bg-[#002855] grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-solid md:divide-n-1 gap-[25px] py-[32px] px-[32px] md:px-[16px] font-kanit">
          <li className="text-center space-y-4 p-4">
            <h2 className="text-white text-[25px]">Mission</h2>
            <p className="text-[25px] leading-[37px] text-white/70">
              To inspire academic excellence, character growth, and a lifelong
              passion for learning in every student.
            </p>
          </li>
          <li className="text-center space-y-4 p-4">
            <h2 className="text-white text-[25px]">Vission</h2>
            <p className="text-[25px] leading-[37px] text-white/70">
              To be a leading educational institution that nurtures intellectual
              curiosity and promotes individual growth.
            </p>
          </li>
          <li className="text-center space-y-4 p-4">
            <h2 className="text-white text-[25px]">Values</h2>
            <p className="text-[25px] leading-[37px] text-white/70">
              Integrity, curiosity, inclusivity, and resilience drive growth and
              foster innovation.
            </p>
          </li>
        </ul>
      </section>

      <Event />

      <SchoolAchievement />

      <Review />

      <CallToAction />

      <div className="mt-10 sm:px-16 px-6 sm:py-16 py-10 space-y-8 flex flex-col justify-center mx-auto items-center">
        <p className="text-[25px] md:text-[50px] text-center align-center flex justify-center items-center capitalize leading-[36.28px] md:leading-[72.55px] text-style-kaushan">
          India&apos;s No.1 school <br /> nurturing excellence and inspiring
          future leaders.
        </p>
      </div>
    </>
  );
};

export default Home;
