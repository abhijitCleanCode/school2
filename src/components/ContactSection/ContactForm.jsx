export function ContactForm() {
  return (
    <div className="mt-8 md:mt-0 lg:mr-6 z-10 text-black">
      <input
        type="text"
        placeholder="Name"
        className="pl-2 text-[15px] md:text-[17px] lg:text-[20px] font-light placeholder-black mt-3 w-full md:w-[283px] lg:w-[383px] py-[6px] md:py-[14px] rounded-md block"
      />
      <input
        type="text"
        placeholder="Email"
        className="pl-2 text-[15px] md:text-[17px] lg:text-[20px] font-light placeholder-black mt-3 w-full md:w-[283px] lg:w-[383px]  py-[6px] md:py-[14px] rounded-md block"
      />
      <input
        type="text"
        placeholder="Subject"
        className="pl-2 text-[15px] md:text-[17px] lg:text-[20px] font-light placeholder-black mt-3 w-full md:w-[283px] lg:w-[383px]  py-[6px] md:py-[14px] rounded-md block"
      />
      <input
        type="text"
        placeholder="Message"
        className="pl-2 text-[15px] md:text-[17px] lg:text-[20px] font-light placeholder-black mt-3 w-full md:w-[283px] lg:w-[383px]  py-[6px] md:py-[14px] pb-12 rounded-md block"
      />
      <button className="bg-[#ffb400] text-white text-[17px] md:text-[20px] md:px-4 lg:px-6 lg:text-[25px] font-normal px-4 py-[3px] mt-3 rounded-md">
        Send
      </button>
    </div>
  );
}
