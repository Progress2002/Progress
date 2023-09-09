import React from "react";
import { ImDownload } from "react-icons/im";
import { Link } from "react-router-dom";

const ResumeBtn = () => {
  return (
    <button className="bg-animate text-white text-lg text-center bg-opacity-60
      duration-300 py-2 px-5 rounded bg-gray w-fit   hover:bg-animate-hover transition-all">
      <Link
        to="https://media.publit.io/file/Progress-Ezeamaka-Resume.html"
        target="blank"
        className="flex gap-2 text-center text-white ">
        {" "}
        <span className="text-white">Resume</span>
        <ImDownload className="relative top-1" />
      </Link>
    </button>
  );
};

export default ResumeBtn;
