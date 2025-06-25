import React from "react";
import { MdOutgoingMail } from "react-icons/md";

function Contact() {
  return (
    <div id="contact" className="w-full min-h-screen text-white flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="w-full text-center flex flex-col gap-5 items-center justify-center">
        <h1 className="font-bold text-4xl md:text-5xl" data-aos="fade-up">
          Get in <span className="text-[#9463ca]">touch</span>
        </h1>
        <p className="text-sm md:text-[13px] text-[#616974] leading-6" data-aos="fade-up">
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-[90%]  md:w-[40%] px-4">
        <form action="https://formspree.io/f/mwplrnnb"  method="POST"
          className="max-w-2xl mx-auto mt-10"
        >
          <div className="gap-6 mb-8 flex flex-col md:flex-row">
            <input name="Username" data-aos="fade-right"
              type="text"
              placeholder="Enter your name"
              required
              className="flex-1 p-3 outline-none bg-[#1c1a2b] rounded-md"
            />
            <input name="Email" data-aos="fade-left"
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-3 outline-none bg-[#1c1a2b] rounded-md"
            />
          </div>
          <textarea name="message" data-aos="fade-up"
            rows="6"
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none bg-[#1c1a2b] rounded-md mb-6"
          ></textarea>
          <button
            type="submit" data-aos="zoom-in"
            className="py-2 px-5 flex items-center justify-center bg-[#6a40bb] text-white rounded-full mx-auto hover:text-[#6a40bb] hover:bg-transparent hover:border-[#6a40bb] hover:border-1 transition duration-500 ease-in-out"
          >
            Submit now
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="w-[80%] text-center flex flex-col gap-5 items-center justify-center mt-10" >
        <h1 className="font-bold text-4xl md:text-5xl" >
          Ashish<span className="text-[#9463ca]">.</span>
        </h1>
        <p className="text-sm md:text-base text-[#616974] flex items-center justify-center gap-1">
        <MdOutgoingMail className="text-2xl" />
          coder3174@gmail.com
        </p>
        <hr className="w-full border-[#616974] my-4" />
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm gap-4">
          <p>© 2025 Ashish Gupta. All rights reserved.</p>
          <ul className=" flex items-center justify-center gap-2 md:hidden">
            <li>Github</li>
            <li>Linkedin</li>
            <li>Tweeter</li>
          </ul>
          <ul className="justify-center gap-8 hidden md:flex">
            <li className="hover:underline cursor-pointer">Terms of Services</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Connect with me</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
