import React from "react";
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom";

const HiremeBtn = () => {
  return (
    <button className="bg-animate text-white text-base text-center bg-opacity-60
      duration-300 rounded bg-gray w-fit   hover:bg-animate-hover transition-all font-medium">
      <Link
        to="/contactme"
        className="flex gap-3 text-center text-text hover:text-white py-2 px-4 lg:px-5">
        {" "}
        <span>Hire Me</span>
        <LuSend className="relative top-[0.08rem] text-[1.3rem]" />
      </Link>
    </button>
  );
};

export default HiremeBtn;
