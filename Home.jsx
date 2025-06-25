import React from "react";
import img from "../Image/Image.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import Resume from "../Image/Ashish_gupta_resume.pdf";

function Home() {
  return (
    <div
      id="home"
      className="w-screen h-screen flex items-center justify-center text-white overflow-hidden"
    >
      <div className="w-[80%] flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center">
            <img
              src={img}
              alt=""
              className="w-full rounded-full"
              data-aos="zoom-in"
            />
          </div>
          <span data-aos="fade-up">Hi! I'm Ashish Gupta 👋 </span>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-5"
          data-aos="fade-up"
        >
          <h1 className="text-5xl text-center font-bold">
            Frontend web <span className="text-[#6a40bb]">developer</span>
          </h1>
          <p className="text-[12px] font-medium text-center text-[#616974] leading-6">
            "I'm a passionate Frontend Developer specializing in React.js and
            Tailwind CSS. I excel in building modern, responsive web <br />
            applications with a focus on clean code."
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 font-medium">
          <a href="#contact">
            {" "}
            <button
              className="w-[130px] h-[35px] bg-[#6a40bb] hover:border-[#616974] hover:border-1 hover:bg-transparent text-white rounded-2xl text-[12px] flex items-center justify-center gap-1 cursor-pointer"
              data-aos="fade-right"
            >
              Connect with me{" "}
              <FaLongArrowAltRight className="flex items-center justify-center" />
            </button>
          </a>
          <a href={Resume} download>
            <button
              className="w-[130px] h-[35px] border-[#616974] hover:bg-[#6a40bb] border-1 rounded-2xl text-[12px] flex items-center justify-center gap-1 text-[#e6e9ed] cursor-pointer"
              data-aos="fade-left"
            >
              <span>my resume</span>{" "}
              <span>
                <HiOutlineDownload />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
