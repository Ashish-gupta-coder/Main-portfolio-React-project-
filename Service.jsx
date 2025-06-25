import React from "react";
import Servicecard from "./Servicecard";
import { ImEmbed2 } from "react-icons/im";
import { GiPencilBrush } from "react-icons/gi";
import { FaAppStore } from "react-icons/fa";

function Service() {
  return (
    <div
      id="service"
      className="w-full lg:h-screen flex flex-col gap-10 px-4 py-10 overflow-hidden"
    >
      {/* Header Section */}
      <div className="w-full flex flex-col items-center text-center text-white">
        <div className="max-w-3xl flex flex-col items-center justify-center">
          <h2
            className="text-sm font-medium uppercase tracking-wide"
            data-aos="fade-up"
          >
            What I Offer
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-up">
            My <span className="text-[#9463ca]">services</span>
          </h1>
          <p
            className="text-sm md:text-base text-[#616974] max-w-lg mt-6"
            data-aos="fade-up"
          >
            Frontend Developer | Expert in React.js & Tailwind CSS | Crafting
            sleek, responsive UIs 🚀
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="flex flex-wrap items-center justify-center w-full  gap-6 md:gap-10 mt-10"
        data-aos="fade-up"
      >
        <Servicecard
          icon={<ImEmbed2 />}
          heading="Web Development"
          paragraph="Skilled in building responsive web applications with React.js and Tailwind CSS, focusing on sleek UI/UX design...."
        />
        <Servicecard
          icon={<GiPencilBrush />}
          heading="UI/UX Design"
          paragraph="Frontend Developer & UI/UX Designer | Crafting intuitive, user-centric interfaces with React.js & Tailwind CSS...."
        />
        <Servicecard
          icon={<FaAppStore />}
          heading="App Development"
          paragraph="App Developer specializing in React Native, creating high-performance mobile apps with smooth UI and responsive design...."
        />
      </div>
    </div>
  );
}

export default Service;
