import React from "react";
import NavItem from "./NavItem";
import ResumeBtn from "../ResumeBtn";
import { FaBarsStaggered } from "react-icons/fa6";
import { Slide, Fade } from "react-awesome-reveal";


const DesktopNav = ({ isActiveRoute, isActive, setIsActive }) => {
  return (
    <div className="bg-body/80 text-white shadow-xl z-20 fixed -top-1
     w-full flex justify-end h-16 md:h-20 md:px-20 px-4 backdrop-blur-md">
      <Slide direction="down" triggerOnce="true">
      <ul className="hidden md:flex gap-7 items-center ">
        <NavItem isActiveRoute={isActiveRoute} path="/" value="Home" />
        <NavItem isActiveRoute={isActiveRoute} path="/about" value="About" />
        <NavItem
          isActiveRoute={isActiveRoute}
          path="/project"
          value="Project"
        />
        <NavItem
          isActiveRoute={isActiveRoute}
          path="/contactme"
          value="Contact Me"
        />
        <Slide direction="down" delay={100}>
        <Fade delay={100}>
        <li>
          <ResumeBtn text='Resume'/>
        </li>
        </Fade>
        </Slide>
      </ul>
      </Slide>
      <button
        className="md:hidden text-3xl duration-300 active:bg-gray  px-3 rounded-full active:bg-opacity-20 "
        type="button"
        role="toggle mobile navigation"
        onClick={() => setIsActive(!isActive)}>
        <FaBarsStaggered />
      </button>
    </div>
  );
};

export default DesktopNav;
