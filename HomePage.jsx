import React from 'react'
import Home from '../assets/Component/Home'
import About from '../assets/Component/About'
import Service from '../assets/Component/Service'
import Projects from '../assets/Component/Projects'
import Contact from '../assets/Component/Contact'

export default function HomePage() {
  return (
    <div>
      <Home/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
    </div>
  )
}
