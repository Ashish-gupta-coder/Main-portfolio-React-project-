import { Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./assets/Component/Nav";

import HomePage from "./Page/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About/>} /> */}
      </Routes>
    </>
  );
}

export default App;
