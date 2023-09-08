import React from "react";
import NavItem from "./NavItem";
import ResumeBtn from "../ResumeBtn";
import { FaBarsStaggered } from "react-icons/fa6";

const DesktopNav = ({ isActiveRoute, isActive, setIsActive }) => {
  return (
    <div>
      <ul className="hidden md:block">
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
        <li>
          <ResumeBtn />
        </li>
      </ul>
      <button
        className="md:hidden text-2xl duration-300 hover:bg-gray hover:bg-opacity-10 p-3 rounded-full active:bg-opacity-50 "
        type="button"
        role="toggle mobile navigation"
        onClick={() => setIsActive(!isActive)}>
        <FaBarsStaggered />
      </button>
    </div>
  );
};

export default DesktopNav;
