import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({
  index,
  title,
  description,
  img,
  liveURL,
  sourceCodeURL,
  technologies,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  console.log(isFocus);
  return (
    <li
      key={index}
      className={`flex  ${
        index % 2 !== 0 && "flex-row-reverse"
      } justify-between items-center hover:${isFocus && "cursor-pointer"}`}
      onMouseOver={() => setIsFocus(true)}
      onMouseOut={() => setIsFocus(false)}>
      <div className="w-[70%] h-96 relative -z-[2] ">
        <img src={img} className="w-full h-full hover:cursor-pointer" />
        <div
          className={`h-full w-full absolute delay-100 bg-veryDark bg-opacity-[0.6] ${
            isFocus && "bg-opacity-[0.3] "
          } hover:cursor-pointer z-[5] top-0`}></div>
      </div>
      <div className="w-[30%] ">
        <div
          className={` ${
            index % 2 == 0 ? "-ml-60" : "-mr-60"
          } bg-black bg-opacity-[0.7] delay-100 ${
            isFocus && "bg-opacity-[0.9]"
          } px-9 py-4 rounded-lg`}>
          <h2 className="text-sc_color text-lg font-bold mb-3 text-center">
            {title}
          </h2>
          <p className="md:leading-[1.5]">
            {description}
            <div className="mt-5">
              {technologies &&
                technologies.map((item) => (
                  <span className="text-text_Light">{item} | </span>
                ))}
            </div>
          </p>
        </div>
        <div
          className={`flex relative top-14  ${
            index % 2 == 0 && "justify-end"
          }`}>
          <Link
            to={liveURL}
            target="blank"
            className="flex gap-3 text-center font-bold text-text_Light hover:text-sc_color hover:underline py-2 px-4 lg:px-5">
            {" "}
            <span>See live</span>
            {/* <LuSend className="relative top-[0.08rem] text-[1.3rem]" /> */}
          </Link>
          <Link
            to={sourceCodeURL}
            target="blank"
            className="flex gap-3 text-center font-bold text-text_Light hover:text-sc_color hover:underline py-2 px-4 lg:px-5">
            {" "}
            <span>See Source</span>
            {/* <LuSend className="relative top-[0.08rem] text-[1.3rem]" /> */}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
