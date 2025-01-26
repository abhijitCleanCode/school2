

import SirImage from "../PrincipalSection/sir.png";

export function Principals() {
  return (
    <div className="mt-5 mx-7 md:mt-36">
      <div className="flex items-center sm:ml-20 md:ml-0 gap-4 lg:ml-2 xl:ml-16">
        <span className="border-t-8 border-schoolGold px-6 md:px-10 md:border-t-12"></span>
        <h2 className="text-2xl whitespace-nowrap font-medium md:text-3xl lg:text-4xl ">Principal’s Message</h2>
      </div>
      <div className="flex flex-col items-center mx-auto my-10 md:flex-row md:justify-center md:gap-10">
        <img
          src={SirImage}
          className="w-full max-w-[280px] md:max-w-[388px] border-12 rounded-md border-schoolGold"
          alt=""
        />
        <div className="md:w-1/2 max-w-[280px] mt-5 md:max-w-none md:text-left">
          <p className="text-lg font-light md:text-xl lg:text-2xl">
            Welcome to AstraGrove School, where learning goes beyond the
            classroom. At AstraGrove, we believe in cultivating not only the
            mind but also the heart and spirit of every child. Our focus is on
            fostering inquisitive thinkers, confident communicators, and
            responsible citizens. We are excited to partner with you in your
            child’s educational journey.
          </p>
          <h2 className="mt-3 text-xl font-medium italic lg:text-2xl">Mr. V.P. Singh</h2>
        </div>
      </div>
    </div>
  );
}
