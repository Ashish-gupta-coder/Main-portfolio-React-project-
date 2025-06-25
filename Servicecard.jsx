import React from "react";

import { MdOutlineArrowRightAlt } from "react-icons/md";
function Service({ icon, heading, paragraph }) {
  return (
    <div
      id="card"
      className="w-[270px] h-[210px] rounded-xl bg-[#1c1a2b] text-white flex flex-col items-center justify-center"
    >
      <div className="w-[80%] flex flex-col gap-5 ">
        <div className="w-full h-[30%] flex flex-col items-center justify-center gap-3">
          <span className="text-3xl text-[#9463ca]">{icon}</span>

          <h1 className="font-medium text-[15px] text-white">{heading}</h1>
        </div>
        <div className="text-[10px] text-start w-[90%] text-[#657583]">
          <p>{paragraph}</p>
        </div>
        <div>
          <button className="flex items-center justify-center gap-1 text-[11px] text-[#9463ca] border-1 px-4 py-1.5 rounded-2xl">
            Read more{" "}
            <MdOutlineArrowRightAlt className="flex items-center justify-center text-[15px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
