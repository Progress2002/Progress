import React from "react";
import NavItem from "./NavItem";
import ResumeBtn from "../ResumeBtn";
import { FaBarsStaggered } from "react-icons/fa6";
import { Slide, Fade, AttentionSeeker } from "react-awesome-reveal";
import logo from './logo.png'
import { Link } from "react-router-dom";


const DesktopNav = ({ isActiveRoute, isActive, setIsActive }) => {
  return (
    <div className="bg-body/80 text-white shadow-xl z-20 fixed -top-1
     w-full flex justify-between items-center h-16 md:h-20 md:px-20 px-4 backdrop-blur-md">
      <Slide direction="left" triggerOnce="true">
        <div>
        <Link className="w-h-11 h-11 block" to="/">
          <img className="w-full h-full" src={logo} alt="Logo"/>
        </Link>
      </div>
      </Slide>
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
      <Slide className="md:hidden" direction="right" triggerOnce="true">
      <button
        className=" text-3xl duration-300 active:bg-gray  px-3 rounded-full active:bg-opacity-20 "
        type="button"
        role="toggle mobile navigation"
        onClick={() => setIsActive(!isActive)}>
        <FaBarsStaggered />
      </button>
      </Slide>
    </div>
  );
};

export default DesktopNav;
