import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
function Projectcard({ img, heading, para, link }) {
  return (
    <div
      id="card"
      className="w-[270px] h-[250px] bg-[#1c1a2b] text-white flex items-center justify-center rounded-md"
    >
      <div className="w-[90%] h-[90%] flex flex-col gap-5">
        <div className="w-full h-[50%] flex items-center justify-center">
          <img src={img} alt="" className="w-full object-cover rounded-md" />
        </div>
        <div className="w-full h-[50%] flex flex-col gap-2">
          <div className="text-[12px] font-bold">{heading}</div>
          <div className="text-[10px] text-[#657583] w-[85%]">
            <p>{para}</p>
          </div>
          <div className="flex items-center justify-between w-[85%]">
            <button className="px-2 py-1 border-1 text-[#9463ca] rounded-2xl text-[10px]">
              Details
            </button>
            <a href={link}>
              <button className="p-2 border-1 rounded-full bg-white text-black text-[10px]">
                <ImArrowUpRight2 />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;
