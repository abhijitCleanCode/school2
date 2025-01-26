import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
import img10 from "./images/img10.png";
import CallToAction from "./CallToAction";

const AcademicsSection = () => {
  // Slider settings
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  // };

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className=" sm:m-14 m-4 pt-[72px] pb-12 md:pb-0">
        <div className="text-center sm:mb-14">
          <h1 className="text-[25px] md:text-[35px] font-bold text-black md:mx-auto pb-4 md:p-0">
            Academics at <span className="text-[#FFB400]">AstraGroove </span>
            School
          </h1>

          {/* <p className="text-[17px] sm:[30px]  sm:text-black-600 font-semibold mt-4 max-w-6xl mx-auto"> */}
          <p className="text-[17px] h-52  lg:text-[25px] font-[400] text-black-600 md:mt-4 lg:max-w-6xl lg:mx-auto">
            At AstraGrove School, we are committed to delivering an engaging and
            well-rounded academic experience that equips students with the
            knowledge, skills, and confidence to excel. Our curriculum blends
            traditional academic rigor with innovative approaches, fostering
            critical thinking, creativity, and a lifelong love of learning.
          </p>
        </div>
      </div>
      {/* Grade Levels  */}
      <div className="m-[16px] sm:m-[52px] xl:p-8">
        {/* Grade Levels */}
        <div className="pb-6">
          <section className="">
            <h2 className=" text-[25px] lg:text-4xl font-[500] text-blac  mb-5 lg:mb-10 flex">
              <spna
                className="h-[10px]  w-[39px] lg:w-[70px] 
      m-2 mt-4 bg-yellow-400
     "
              ></spna>
              Grade Levels
            </h2>
            {/* --------------------small----- */}
            <div className="pb-8 ">
              {/* <div className="w-auto mdhidden"> */}
              <div className="w-auto lg:hidden">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {/* Primary School (Grades 1-5)*/}
                  <SwiperSlide className="pb-8">
                    <div className="  bg-white  ">
                      <img src={img1} alt="Primary School (Grades 1-5)" />
                      <div>
                        <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                          Primary School (Grades 1-5)
                        </h3>
                        <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-4">
                          An exciting phase that focuses on foundational skills
                          in reading, writing, mathematics, and exploration of
                          the sciences and arts.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/*Middle School (Grades 6-8)*/}
                  <SwiperSlide className="pb-8">
                    <div className="  bg-white sm:shadow-md rounded-lg ">
                      <img
                        src={img2}
                        alt="Middle School (Grades 6-8)"
                        className=""
                      />
                      <div>
                        <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                          Middle School (Grades 6-8)
                        </h3>
                        <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-4">
                          A hands-on approach to learning that emphasizes
                          critical thinking, teamwork, and the development of
                          personal responsibility.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/*High School (Grades 9-12)*/}
                  <SwiperSlide className="pb-8">
                    <div className=" bg-white sm:shadow-md rounded-lg">
                      <img
                        src={img3}
                        alt="High School (Grades 9-12)"
                        className=""
                      />
                      <div>
                        <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                          High School (Grades 9-12)
                        </h3>
                        <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-4">
                          Advanced coursework, college readiness programs, and
                          career-oriented projects to prepare students for
                          higher education and beyond.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* ----------------------large----- */}
            {/* <div className="hidden md:grid md:grid-cols-1 gap-8 lg:grid-cols-3  lg:gap-6  w-auto"> */}
            <div className="hidden lg:grid gap-8 lg:grid-cols-3  lg:gap-6  w-auto">
              {/* Primary School (Grades 1-5)*/}
              <div className=" w-[314px] bg-white shadow-lg  rounded-lg xl:w-[366px] lg:w-[300px] lg:h-[416px] ">
                <img src={img1} alt="Primary School (Grades 1-5)" />
                <div>
                  <h3 className="text-[18px] lg:font-[400] text-center mt-4 lg:text-[22px]">
                    Primary School (Grades 1-5)
                  </h3>
                  <p className="text-black-600 text-[17px] text-center lg:text-[20px] font-[300] p-2">
                    An exciting phase that focuses on foundational skills in
                    reading, writing, mathematics, and exploration of the
                    sciences and arts.
                  </p>
                </div>
              </div>

              {/*Middle School (Grades 6-8)*/}
              <div className=" w-[314px] bg-white shadow-lg  rounded-lg xl:w-[366px] lg:w-[300px] lg:h-[416px]">
                <img src={img2} alt="Middle School (Grades 6-8)" className="" />
                <div>
                  <h3 className="text-[18px] lg:font-[400] text-center mt-4 lg:text-[22px]">
                    Middle School (Grades 6-8)
                  </h3>
                  <p className="text-black-600 text-[17px] text-center lg:text-[20px] font-[300] p-2">
                    A hands-on approach to learning that emphasizes critical
                    thinking, teamwork, and the development of personal
                    responsibility.
                  </p>
                </div>
              </div>

              {/*High School (Grades 9-12)*/}
              <div className=" w-[314px] bg-white sm:shadow-lg  rounded-lg xl:w-[366px] lg:w-[300px] lg:h-[416px]">
                <img src={img3} alt="High School (Grades 9-12)" className="" />
                <div>
                  <h3 className="text-[18px] lg:font-[400] text-center mt-4 lg:text-[22px]">
                    High School (Grades 9-12)
                  </h3>
                  <p className="text-black-600 text-[17px] text-center lg:text-[20px] font-[300] p-2">
                    Advanced coursework, college readiness programs, and
                    career-oriented projects to prepare students for higher
                    education and beyond.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Curriculum Highlights */}
        <div className="pt-8 pb-8 ">
          <section className="lg:m-[px]">
            <h2 className="text-[20px] sm:text-[25px]  lg:text-[35px] font-[500] text-black  mb-4 sm:mb-10 flex">
              <spna
                className="h-[10px] w-[39px] lg:w-[70px] 
      m-2 sm:mt-4 lg:mt-6 bg-[#002855]
      "
              ></spna>
              Curriculum Highlights
            </h2>
            <p className=" text-black mb-6 text-[17px] lg:text-[25px] font-[400]">
              Our curriculum encourages exploration and deep understanding
              across core subjects with a focus on practical knowledge and
              analytical abilities. Key areas include
            </p>
            {/* --------------------small----- */}
            <div className="pb-8">
              <div className="w-auto lg:hidden">
                <Swiper
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {/* STEM Education*/}
                  <SwiperSlide className="pb-8">
                    <div className=" bg-white">
                      <img src={img4} alt="STEM Education" />
                      <div>
                        <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                          STEM Education
                        </h3>
                        <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-2">
                          Through hands-on projects and problem-solving, we
                          prepare students for a tech-driven future.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/*Languages and Communication*/}
                  <SwiperSlide className="pb-8">
                    <div className=" bg-white">
                      <img
                        src={img5}
                        alt="Languages and Communication"
                        className=""
                      />
                      <div>
                        <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                          Languages and Communication
                        </h3>
                        <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-4">
                          Our language programs enhance communication skills and
                          cultural awareness.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/*Social Sciences and Humanities*/}
                  <SwiperSlide className="pb-8">
                    <div className=" bg-white  ">
                      <img
                        src={img6}
                        alt="Social Sciences and Humanities"
                        className=""
                      />
                      <div>
                        <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                          Social Sciences and Humanities
                        </h3>
                        <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-4">
                          Students gain insights into society and develop a
                          sense of civic responsibility.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* ----------------------large----- */}
            <div className="hidden lg:grid lg:grid-cols-3  lg:gap-2  w-auto ">
              {/*STEM Education*/}
              <div className="  w-[314px] bg-white shadow-lg  rounded-lg xl:w-[366px] lg:w-[300px] lg:h-[416px] ">
                <img src={img4} alt="STEM Education" />
                <div>
                  <h3 className="text-[18px] lg:font-[400] text-center mt-4 lg:text-[22px]">
                    STEM Education
                  </h3>
                  <p className="text-black-600 text-[17px] text-center lg:text-[20px] font-[300] p-2">
                    Through hands-on projects and problem-solving, we prepare
                    students for a tech-driven future.
                  </p>
                </div>
              </div>

              {/*Languages and Communication */}
              <div className=" w-[314px] bg-white shadow-lg  rounded-lg xl:w-[366px] lg:w-[300px] lg:h-[416px]">
                <img
                  src={img5}
                  alt="Languages and Communication"
                  className=""
                />
                <div>
                  <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                    Languages and Communication
                  </h3>
                  <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-2">
                    Our language programs enhance communication skills and
                    cultural awareness.
                  </p>
                </div>
              </div>

              {/*Social Sciences and Humanities*/}
              <div className="  w-[314px] bg-white shadow-lg  rounded-lg xl:w-[366px] lg:w-[300px] lg:h-[416px] ">
                <img
                  src={img6}
                  alt="Social Sciences and Humanities"
                  className=""
                />
                <div>
                  <h3 className="text-[18px] lg:font-[400] text-center mt-4 lg:text-[22px]">
                    Social Sciences and Humanities
                  </h3>
                  <p className="text-black-600 text-[17px] text-center lg:text-[20px] font-[300] p-2">
                    Students gain insights into society and develop a sense of
                    civic responsibility.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Learning Environment */}

      <div className="lg:pb-16">
        {/* -----small--- */}
        <h2 className=" text-[25px] font-[500] text-black m-6 flex md:hidden">
          <spna
            className="h-[10px] w-[39px]
      m-2 mt-[14px] bg-[#FF0000]"
          ></spna>
          Learning Environment
        </h2>

        <div className=" flex flex-col-reverse sm:flex sm:flex-row   bg-[#FFB40080] lg:h-[451px]">
          <div className="">
            {/* -----large--- */}
            <h2 className="hidden md:text-[35px] font-semibold text-black-800  md:flex md:m-4 lg:pl-16 lg:pr-4 lg:pt-16">
              {" "}
              <spna
                className=" h-[15px] sm:w-[70px]  bg-[#FF0000]
      sm:mt-4 md:mr-4 "
              ></spna>
              Learning Environment
            </h2>
            <p className="w-auto text-black-700 text-[17px] md:text-[25px]  font-[400] p-4 sm:pt-4 sm:pl-16 sm:pr-4 sm:pb-4 ">
              AstraGroove embraces a student-centered approach that adapts to
              different learning styles. Our modern classrooms and facilities
              are equipped with the latest technology to enhance interactive
              learning. Small class sizes allow for personalized attention and
              foster strong student-teacher connections.
            </p>
          </div>
          <div className="w-auto sm:w-[1512px] sm:h-auto">
            <img
              src={img7}
              alt="Learning Environment"
              className="sm:h-full object-cover "
            />
          </div>
        </div>
      </div>

      {/* Student Facilities */}

      <div className="m-[18px] sm:m-[38px]">
        <section className="xl:m-[68px]">
          <h2 className=" text-[20px] sm:text-[25px] lg:text-[35px] font-[500] text-black mb-6 flex pt-6">
            <spna
              className="h-[10px] w-[39px] lg:w-[70px] 
      m-2 sm:mt-4 lg:mt-6 bg-[#11AC0C]"
            ></spna>
            Student Facilities
          </h2>
          <p className="text-black mb-6 text-[17px] lg:text-[25px] font-[400]">
            AstraGrove School provides state-of-the-art facilities designed to
            support students’ academic and personal growth
          </p>
          {/* --------------------small----- */}
          <div className="pb-8">
            <div className="w-auto lg:hidden">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {/* Library and Resource Center*/}
                <SwiperSlide className="pb-8">
                  <div className="  bg-white  ">
                    <img src={img8} alt="Library and Resource Center" />
                    <div>
                      <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                        Library and Resource Center
                      </h3>
                      <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-4">
                        Our library offers an extensive collection of books,
                        digital resources, and study materials, fostering a love
                        for reading and independent learning.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                {/*Science and Computer Labs*/}
                <SwiperSlide className="pb-8">
                  <div className=" bg-white sm:shadow-md rounded-lg">
                    <img
                      src={img9}
                      alt="Science and Computer Labs"
                      className=""
                    />
                    <div>
                      <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                        Science and Computer Labs
                      </h3>
                      <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-4">
                        Fully equipped labs provide hands-on learning
                        experiences in science, robotics, and coding.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                {/*Sports and Fitness Facilities*/}
                <SwiperSlide className="pb-8">
                  <div className=" bg-white sm:shadow-md rounded-lg ">
                    <img
                      src={img10}
                      alt="High School (Grades 9-12)"
                      className=""
                    />
                    <div>
                      <h3 className="text-[18px] sm:font-[400] text-center mt-4 sm:text-[22px]">
                        Sports and Fitness Facilities
                      </h3>
                      <p className="text-black-600 text-[17px] text-center sm:text-[20px] font-[300] p-4 ">
                        Our expansive sports grounds, gym, and indoor courts
                        support physical education and extracurricular sports.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* ----------------------large----- */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-3 xl:gap-6 w-auto">
            {/* Library and Resource Center */}
            <div className="  w-[314px] bg-white shadow-lg  rounded-lg xl:w-[366px] lg:w-[300px] lg:h-[416px] ">
              <img src={img8} alt="Library and Resource Center" className="" />
              <div>
                <h3 className="text-[18px] lg:font-[400] text-center mt-4 lg:text-[22px]">
                  Library and Resource Center
                </h3>
                <p className="text-black-600 text-[17px] text-center lg:text-[20px] font-[300] p-2">
                  Our library offers an extensive collection of books, digital
                  resources, and study materials, fostering a love for reading
                  and independent learning.
                </p>
              </div>
            </div>

            {/*Science and Computer Labs */}
            <div
              className=" w-[314px] bg-white shadow-lg  rounded-lg xl:w-[366px] 
         lg:w-[300px] lg:h-[416px] "
            >
              <img src={img9} alt="Science and Computer Labs" className="" />
              <div>
                <h3 className="text-[18px] lg:font-[400] text-center mt-4 lg:text-[22px]">
                  Science and Computer Labs
                </h3>
                <p className="text-black-600 text-[17px] text-center lg:text-[20px] font-[300] p-2">
                  Fully equipped labs provide hands-on learning experiences in
                  science, robotics, and coding.
                </p>
              </div>
            </div>

            {/*Sports and Fitness Facilities*/}
            <div
              className="  w-[314px] bg-white shadow-lg  rounded-lg xl:w-[366px] 
         lg:w-[300px] lg:h-[416px] "
            >
              <img
                src={img10}
                alt="Sports and Fitness Facilities"
                className=""
              />
              <div>
                <h3 className="text-[18px] lg:font-[400] text-center mt-4 lg:text-[22px]">
                  Sports and Fitness Facilities
                </h3>
                <p className="text-black-600 text-[17px] text-center lg:text-[20px] font-[300] p-2">
                  Our expansive sports grounds, gym, and indoor courts support
                  physical education and extracurricular sports
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lg:pt-14 lg:pb-10">
        <div className="text-center m-8 xl:m-14">
          <h1 className="text-[25px] lg:text-[30px] font-[500] text-black mx-auto">
            Why Choose AstraGrove for Your Child’s Academic Journey?
          </h1>
          <p className="text-[17px] lg:text-[25px] font-[400] text-black-600 mt-4 lg:max-w-6xl mx-auto">
            At AstraGrove School, we provide a nurturing environment and
            comprehensive facilities that empower students to excel both
            academically and personally. Our holistic approach prepares students
            to navigate life’s challenges with confidence, compassion, and
            resilience.
          </p>
        </div>
      </div>

      <CallToAction />
      <div className="mt-10 sm:px-16 px-6 sm:py-16 py-10 space-y-8 flex flex-col justify-center mx-auto items-center">
        <p className="text-[25px] md:text-[50px] text-center align-center flex justify-center items-center capitalize leading-[36.28px] md:leading-[72.55px] text-style-kaushan">
          India&apos;s No.1 school <br /> nurturing excellence and inspiring
          future leaders.
        </p>
      </div>
    </div>
  );
};

export default AcademicsSection;
