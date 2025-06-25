import React from 'react'
import Projectcard from './Project-card'
import pic1 from "../Image/Video.jpeg"
import pic2 from "../Image/NFT.jpeg"
import pic3 from "../Image/clock1.png"
import pic4 from "../Image/To1.png"
import pic5 from "../Image/Qr1.png"

function Projects() {
  return (
    <div id='project' className='w-full h-screen text-white flex flex-col items-center px-4'>
      <div className='max-w-4xl flex flex-col text-center gap-5 items-center justify-center'>
        <h1 className='font-bold text-4xl md:text-5xl' data-aos="fade-up">
          My latest <span className='text-[#9463ca]'>work</span>
        </h1>
        <p className='text-sm md:text-base text-[#616974]' data-aos="fade-up">
          Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
        </p>
      </div>


      

      {/* Horizontal Scroll Section */}
      <div className='flex gap-8 max-w-5xl w-full h-[80%] items-center overflow-x-auto scrollbar-hide snap-x snap-mandatory aos-init aos-animate' data-aos="fade-up">
        <div className='flex space-x-8'>
          <Projectcard className="snap-center" img={pic1} heading={"Video Calling & Chat Website! "} para={"Video calling and chat website using React.js, Tailwind CSS, and Zego Cloud website! 🎥💬"} link={"https://join-room.netlify.app/"}/>
          <Projectcard className="snap-center" img={pic2} heading={"NFT Website Landing Page!"} para={" NFT website landing page using React.js ⚛️ and Tailwind CSS 🎨"} link={"https://nft-website1.netlify.app/"}/>
          <Projectcard className="snap-center" img={pic3} heading={"Clock Website! ⏰"} para={" Clock website using HTML,CSS, and JavaScript!"} link={"https://ashish-gupta-coder.github.io/Clock/"}/>
          <Projectcard className="snap-center" img={pic4} heading={"To-Do List Website"} para={"To-Do List Website using HTML, CSS, and JavaScript!"} link={"https://ashish-gupta-coder.github.io/To-do-list/"}/>
          <Projectcard className="snap-center" img={pic5} heading={"QR code Generator"} para={"QR code Generator using React.js and Tailwind Css"} link={"https://qr-generator-web11.netlify.app/"}/>
         
        </div>
      </div>
    </div>
  )
}

export default Projects
