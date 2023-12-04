import React from "react";
import { ImDownload } from "react-icons/im";
import { Link } from "react-router-dom";

const ResumeBtn = ({ text }) => (
  <button
    className="bg-animate text-white text-base text-center bg-opacity-60
      duration-300 rounded bg-gray w-fit   hover:bg-animate-hover transition-all font-medium">
    <Link
      to="https://media.publit.io/file/Progress-Ezeamaka.pdf"
      target="blank"
      className="flex gap-2 md:gap-3 text-center text-text hover:text-white py-2 px-4">
      {" "}
      <span>{text}</span>
      <ImDownload className="relative top-[0.28] text-2xl" />
    </Link>
  </button>
);

export default ResumeBtn;
