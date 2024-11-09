import React, { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

const NavBar = ({ active }) => {
  const links = useRef(null);
  const handleMenuClick = (e) => {
    if (links.current) {
      links.current.classList.toggle("hidden");
    }
  };
  return (
    <nav className="main-navbar position-fixed">
      <div className="container mx-auto flex justify-end items-start">
        <div className="left-nav flex items-center ml-3 md:ml-0 ">
          <HashLink to="#top" smooth>
            <img src="/ow-logo-square.svg" className="home-logo" />
          </HashLink>
          <HashLink to="#top" smooth>
            <div className="text-white text-xl md:text-2xl my-3">
              Oliver Wang
            </div>
          </HashLink>
        </div>
        <div className="right-nav flex flex-col items-right justify-end">
          <div
            className="display-block mr-3 flex justify-end md:hidden"
            onClick={handleMenuClick}
          >
            <img src="/menu-base.svg" className="icon my-3" />
          </div>
          <ul
            ref={links}
            className="hidden md:display-block text-right md:flex md:justify-evenly md:items-center md:w-full md:my-3 mr-3 md:mr-0 pb-3 md:pb-0"
          >
            <li
              className={
                active === "about"
                  ? "text-primary text-xl md:text-2xl section-link"
                  : "text-white text-xl md:text-2xl section-link hover:text-primary"
              }
            >
              <HashLink to="#about" smooth>
                About
              </HashLink>
            </li>
            <li
              className={
                active === "projects"
                  ? "text-primary text-xl md:text-2xl section-link"
                  : "text-white text-xl md:text-2xl section-link hover:text-primary"
              }
            >
              <HashLink to="#projects" smooth>
                Projects
              </HashLink>
            </li>
            <li
              className={
                active === "contact"
                  ? "text-primary text-xl md:text-2xl section-link"
                  : "text-white text-xl md:text-2xl section-link hover:text-primary"
              }
            >
              <HashLink to="#contact" smooth>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
