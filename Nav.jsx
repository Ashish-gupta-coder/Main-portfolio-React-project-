import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

function Nav() {
  let [menu, setmenu] = useState(false);

  return (
    <nav className="w-screen h-[12vh] fixed flex items-center justify-around gap-5 text-white bg-[#0e0c1f] overflow-hidden z-10 ">
      {/* Logo */}
      <a href="/">
        <div className="font-extrabold text-3xl">
          <h1
            id="heading"
            className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out"
            data-aos="fade-down"
          >
            Ash<span className="text-[#6a40bb] hover:text-white">ish.</span>
          </h1>
        </div>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center">
        <ul className="flex items-center text-white justify-center gap-8">
          <a href="/">
            <li
              className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out"
              data-aos="fade-down"
            >
              Home
            </li>
          </a>
          <a href="#about">
            <li
              className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out"
              data-aos="fade-down"
            >
              About
            </li>
          </a>
          <a href="#service">
            <li
              className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out"
              data-aos="fade-down"
            >
              Service
            </li>
          </a>
          <a href="#project">
            <li
              className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out"
              data-aos="fade-down"
            >
              Projects
            </li>
          </a>
        </ul>
      </div>

      {/* Mobile Menu & Connect Button */}
      <div className="flex items-center justify-center gap-5">
        {/* Mobile Menu Icon */}
        <RiMenuUnfold2Fill
          data-aos="fade-down"
          className="text-3xl md:hidden cursor-pointer"
          onClick={() => setmenu(true)}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-[80%] h-full bg-[#1c1a2b] text-white flex flex-col items-center justify-center transform transition-transform duration-1000 ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <MdOutlineClose
            className="absolute top-5 right-8 text-4xl bg-[#6a40bb] text-white p-1 rounded-md cursor-pointer"
            onClick={() => setmenu(false)}
          />

          {/* Mobile Menu Items */}
          <ul
            id="mobile"
            className="flex flex-col gap-8 text-xl font-medium"
            data-aos="fade-left"
          >
            <a href="/">
              <li className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out">
                About
              </li>
            </a>
            <a href="#service">
              <li className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out">
                Service
              </li>
            </a>
            <a href="#project">
              <li className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out">
                Projects
              </li>
            </a>
            <a href="#contact">
              <li className="cursor-pointer hover:text-[#6a40bb] transition duration-300 ease-in-out">
                Contact me
              </li>
            </a>
          </ul>
        </div>

        {/* Connect Button (Desktop Only) */}
        <a href="#contact">
          <button
            id="btn"
            data-aos="fade-down"
            className="hidden md:flex items-center justify-center gap-2 cursor-pointer bg-[#6a40bb] hover:text-[#6a40bb] hover:bg-transparent hover:border-[#6a40bb] border-[#6a40bb] border transition duration-500 ease-in-out text-white rounded-2xl w-[120px] h-[35px]"
          >
            Connect <HiArrowUpRight />
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
