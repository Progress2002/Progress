import React from "react";
import { ImDownload } from "react-icons/im";
import { Link } from "react-router-dom";

const ResumeBtn = () => {
  return (
    <button className=" text-white text-lg text-center bg-opacity-60 duration-300 hover:bg-sc-color py-2 px-5 rounded bg-gray w-fit ">
      <Link
        to="https://media.publit.io/file/Progress-Ezeamaka-Resume.html"
        target="blank" className="flex gap-2 text-center text-white ">
        {" "}
        <span className="text-white">Resume</span>
        <ImDownload className="relative top-1" />
      </Link>
    </button>
  );
};

export default ResumeBtn;
