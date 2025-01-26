import { BlogsData } from "./BlogsData";

export function Faculty() {
  return (
    <div className="mx-7 mt-24 md:mt-28">
      <div className="flex items-center sm:ml-20 md:ml-0 gap-4 lg:ml-12 xl:ml-16">
        <span className="border-t-8 border-blackBorder px-6 md:px-10 md:border-t-12"></span>
        <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl ">
          Our Faculty
        </h2>
      </div>
      <p className="text-lg md:text-xl lg:text-2xl font-light mx-auto mt-3 max-w-[300px] md:max-w-none md:mx-12 lg:mx-24">
        Our team of highly qualified and dedicated educators is committed to
        providing an engaging and challenging curriculum. From STEM to the arts,
        our teachers bring real-world experience and a passion for inspiring the
        next generation of leaders.
      </p>

      <BlogsData />
    </div>
  );
}
