import React from "react";

const Title = ({ color = "", title }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="h-[10px] w-[70px]"
        style={{
          backgroundColor: color,
        }}
        aria-hidden="true"
      />
      <h2 className="text-[25px] md:text-[35px] font-medium tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default Title;
