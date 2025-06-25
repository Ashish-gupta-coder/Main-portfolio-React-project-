import React from "react";
import "../../App.css";
function Aboutcard({ icon, heading, text }) {
  return (
    <div
      id="card"
      className="md:w-[200px] w-[280px] h-[150px] rounded-md bg-[#1c1a2b] cursor-pointer text-white flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 md:gap-2 w-[80%] h-[70%]">
        <div className="flex flex-col text-center items-center justify-center gap-2">
          <span className="md:text-[30px] text-[30px] text-[#9463ca]">
            {icon}
          </span>
          <p className="md:text-[15px] text-[22px] font-bold">{heading}</p>
        </div>
        <div className="md:text-[9px] text-[#657583] font-medium">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}

export default Aboutcard;
