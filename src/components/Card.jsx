import React from "react";
import { close_comma, open_comma } from "../assets";

const Card = ({
  borderColor,
  cornerColor1,
  cornerColor2,
  text,
  parentName,
}) => {
  return (
    <div
      className={`relative w-full h-full md:h-[276px] lg:max-w-sm rounded-tl-[15px] rounded-br-[15px] border overflow-hidden py-[28px] px-[24px]`}
      style={{
        borderColor: borderColor,
        borderWidth: "2px",
      }}
    >
      {/* Top right Corner */}
      <div
        className="absolute w-24 h-24 rounded-full"
        style={{
          backgroundColor: cornerColor1,
          top: -20,
          right: -20,
          zIndex: -20,
        }}
      ></div>
      <div className="px-[24px]">
        <span>
          <img src={open_comma} alt="'" />
        </span>
        <p className="text-[17px] font-[300] font-kanit leading-[25px] px-4">
          {text}
        </p>{" "}
        <h2 className="px-[24px] mt-2 text-[20px]">{parentName}</h2>
        <span className="float-right">
          <img src={close_comma} alt="'" />
        </span>
      </div>
      {/* Bottom Right Corner */}
      <div
        className="absolute w-24 h-24 rounded-full"
        style={{
          backgroundColor: cornerColor2,
          bottom: -20,
          left: -20,
          zIndex: -20,
        }}
      ></div>
    </div>
  );
};

export default Card;
