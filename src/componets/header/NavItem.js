import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ path, value, isActiveRoute, isActive, setIsActive }) => {
  return (
    <li
      className="text-lg text-white capitalize duration-300 hover:text-sc-color font-normal"
      style={{ color: isActiveRoute(path) ? "#ff6b00" : "inherit" }}
      onClick={setIsActive ? () => setIsActive(!isActive) : ""}>
      <Link to={path}>{value}</Link>
    </li>
  );
};

export default NavItem;
