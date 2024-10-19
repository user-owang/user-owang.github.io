import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import "./App.css";
import { Routes } from "react-router-dom";

function App() {
  const typeRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: [
        "Software Engineer",
        "Web Developer",
        "Frontend Enthusiast",
        "bamf",
      ],
      typeSpeed: 50,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="banner">
        <div>
          <span className="text-white">I am a </span>
          <span className="text-primary" ref={typeRef}></span>
        </div>
        <img src="/banner.jpg" className="banner-img" />
      </div>
      {/* <Routes>
        <Routes></Routes>
      </Routes> */}
    </>
  );
}

export default App;
