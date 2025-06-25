import React from "react";
import img from "../Image/Image.jpg";
import Aboutcard from "./About-card";
import { ImEmbed2 } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa6";
import img1 from "../Image/vs1.jpeg";
import img2 from "../Image/git1.png";
import img3 from "../Image/github.jpeg";
import img4 from "../Image/figma.png";

function About() {
  const tools = [
    {
      imgages1: img1,
    },
    {
      imgages1: img3,
    },
    {
      imgages1: img4,
    },
    {
      imgages1: img2,
    },
  ];
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center w-screen text-white gap-2 overflow-hidden"
    >
      <nav className="font-medium" data-aos="fade-up">
        <h1>Introduction</h1>
      </nav>
      <nav className="text-5xl font-medium" data-aos="fade-up">
        <h1>
          About <span className="text-[#9463ca]">me</span>
        </h1>
      </nav>
      <div className="w-full h-[100%] flex md:mt-8 flex-col xl:flex-row items-center justify-center">
        <div className="md:w-[40%] w-full h-full flex items-center justify-center">
          <div
            id="card"
            className="w-[260px] mt-10 md:mt-0 h-[320px] bg-amber-50 rounded-2xl flex items-center justify-center"
            data-aos="fade-up"
            md:data-aos="fade-right"
            lg:data-aos="fade-right"
          >
            <img
              id="card"
              src={img}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="md:w-[60%] w-full h-full flex flex-col items-center justify-evenly">
          <div className="flex flex-col items-center md:items-start gap-10">
            <div className="md:w-full xl:w-[80%] h-[60%] w-[80%] mt-6 flex justify-center md:justify-start items-center">
              <p className="md:text-[13px] text-[15px]" data-aos="zoom-in">
                I am a passionate Frontend Developer with expertise in React.js
                and Tailwind CSS, dedicated to building responsive and
                user-friendly web applications. I specialize in creating clean,
                efficient, and scalable code to deliver seamless user
                experiences. Currently, I'm actively enhancing my portfolio by
                developing innovative projects and staying up-to-date with the
                latest web technologies.
              </p>
            </div>
            <div
              className="flex flex-col md:flex-row items-center h-[30%] justify-start gap-5 w-full"
              data-aos="fade-up"
            >
              <Aboutcard
                icon={<ImEmbed2 />}
                heading={"Languages"}
                text={"HTML, CSS, JavaScript, React js, Tailwind css"}
              />
              <Aboutcard
                icon={<FaGraduationCap />}
                heading={"Education"}
                text={"B.Tech in Computer Science"}
              />
              <Aboutcard
                icon={<ImEmbed2 />}
                heading={"Projects"}
                text={"Built more than 5 projects"}
              />
            </div>
            <div className="w-full h-[20%] flex flex-col items-center xl:items-start gap-4 font-bold text-[#616974]">
              <div className="text-[12px]">
                <h1>Tools i use</h1>
              </div>
              <div
                className="flex items-center justify-center gap-4"
                data-aos="fade-up"
              >
                {tools.map((pic) => (
                  <div
                    id="card"
                    className="w-[50px] h-[50px] rounded-md cursor-pointer"
                  >
                    <img
                      src={pic.imgages1}
                      className="w-full rounded-md"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
