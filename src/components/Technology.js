import React from "react";
import { Fade } from "react-awesome-reveal";

const Technology = ({ icon, text }) => (
  <li className="grid h-24 duration-200 rounded-md md:h-32 lg:h-36 bg-buttonBg place-items-center hover:scale-105">
    <Fade delay={200}>
      <div>{icon}</div>
    </Fade>
    <Fade delay={300}>
      <div className="text-base font-normal tracking-wide text-white capitalize md:text-xl lg:text-2xl">
        {text}
      </div>
    </Fade>
  </li>
);

export default Technology;
