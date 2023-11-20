import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const ProjectItem = ({
  index,
  title,
  description,
  img,
  liveURL,
  sourceCodeURL,
  technologies,
}) => {
  return (
    <li
      key={index}
      className={`lg:flex  ${
        index % 2 !== 0 && "flex-row-reverse"
      } justify-between items-center relative shadow-2xl lg:shadow-none`}>
      {/* Image section of project item */}
      <div className="w-full lg:w-[70%] h-[22rem] lg:h-96 rounded-lg relative -z-[2] ">
        <img
          src={img}
          className="w-full h-full rounded-lg lg:rounded-[0] hover:cursor-pointer"
        />
        <div
          className={` hidden lg:block h-full w-full absolute delay- bg-veryDark
            bg-opacity-[0.6] rounded lg:rounded-[0] z-[5] top-0`}></div>
      </div>
      {/* description of project item  */}
      <div
        className={`w-full h-full lg:w-[30%] absolute bottom- top-0 opacity- lg:relative delay-200`}>
        <div
          className={` ${
            index % 2 == 0 ? "lg:-ml-60" : "lg:-mr-60"
          } bg-black bg-opacity-[0.82] lg:bg-opacity-[0.7]  px-6 lg:px-9 py-4 rounded-lg h-full lg:shadow-lg`}>
          <h2 className="text-sc_color text-xl lg:text-lg font-bold mb-3 text-center">
            {title}
          </h2>
          <p className="md:leading-[1.5] text-[16px]">
            {description}
            <div className="mt-5 mb-10">
              {technologies &&
                technologies.map((item) => (
                  <span className="text-text_Light">{item} | </span>
                ))}
            </div>
          </p>
        </div>
        <div
          className={`flex lg:relative lg:top-14 absolute bottom-2 w-full md:w-auto justify-between sm:justify-end lg:justify-between ${
            index % 2 == 0 && "lg:justify-end"
          }`}>
          <Link
            to={liveURL}
            target="blank"
            className="flex gap-1 text-center font-bold text-text_Light hover:text-sc_color py-2 px-4 lg:px-5">
            {" "}
            <span>See Live</span>
            <LuArrowUpRightFromCircle className="relative top-[0.08rem] text-[1.3rem]" />
          </Link>
          <Link
            to={sourceCodeURL}
            target="blank"
            className="flex gap-1 text-center font-bold text-text_Light hover:text-sc_color py-2 px-4 lg:px-5">
            {" "}
            <span>See Source</span>
            <PiGithubLogoDuotone className="relative top-[0.08rem] text-[1.3rem]" />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
