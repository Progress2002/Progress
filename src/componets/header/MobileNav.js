import React, { useEffect } from "react";
import NavItem from "./NavItem";
import ResumeBtn from "../ResumeBtn";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ isActiveRoute, isActive, setIsActive }) => {
  useEffect(() => {
    document.body.style.overflowY = isActive ? "hidden" : "auto";
  }, [isActive]);
  return (
    <div
      className="mobile-nav md:hidden fixed h-screen top-0 bottom-0
       bg-black right-0 w-3/4 flex justify-center items-center duration-700 ease"
      style={{ right: isActive ? "0%" : "-100%" }}>
      <button
        className="absolute top-7 right-1 text-4xl text-white duration-300
         hover:text-gray active:bg-gray  px-2 py-2 rounded-full active:bg-opacity-20"
        onClick={() => setIsActive(!isActive)}>
        <CgClose />
      </button>
      <ul
        className="w-96 flex flex-col justify-center items-center gap-7"
        role="menu">
        <NavItem
          isActiveRoute={isActiveRoute}
          path="/"
          value="Home"
          setIsActive={setIsActive}
          isActive={isActive}
        />
        <NavItem
          isActiveRoute={isActiveRoute}
          path="/about"
          value="About"
          setIsActive={setIsActive}
          isActive={isActive}
        />
        <NavItem
          isActiveRoute={isActiveRoute}
          path="/project"
          value="Projects"
          setIsActive={setIsActive}
          isActive={isActive}
        />
        <NavItem
          isActiveRoute={isActiveRoute}
          path="/contactme"
          value="Contact Me"
          setIsActive={setIsActive}
          isActive={isActive}
        />
        <li>
          <ResumeBtn />
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
