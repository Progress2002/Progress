import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ path, value, isActiveRoute, isActive, setIsActive }) => {
  return (
    <li
      className="text-lg  capitalize duration-100 py-2 cursor-pointer  font-normal
       relative  before:absolute before:bottom-0 before:w-full before:h-1
       before:rounded-full before:hover:bg-sc_color"
      role="menuitem"
      id="nav-item"
      style={{
        color: isActiveRoute(path) && "#ff6b00",
        fontWeight: isActiveRoute(path) && "bolder",
      }}
      onClick={() => setIsActive && setIsActive(!isActive)}>
      <Link to={path}>{value}</Link>
    </li>
  );
};

export default NavItem;
