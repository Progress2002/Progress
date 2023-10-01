import React from "react";
import Technology from "./Technology";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { FaSass, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiRubyonrails,
  SiMongodb,
  SiJest,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiRuby } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsGit, BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";

const Technologies = () => {
  const style = "relative w-7 h-7 md:h-9 md:w-9 lg:w-10 lg:h-10";
  return (
    <ul className="grid w-full grid-cols-3 gap-4 lg:grid-cols-4">
      <Technology icon={<ImHtmlFive className={style} />} text="HTML5" />
      <Technology icon={<ImCss3 className={style} />} text="CSS3" />
      <Technology icon={<FaSass className={style} />} text="Sass" />
      <Technology icon={<FaReact className={style} />} text="React" />
      <Technology
        icon={<IoLogoJavascript className={style} />}
        text="JavaScript"
      />
      <Technology
        icon={<SiTailwindcss className={style} />}
        text="Tailwindcss"
      />
      <Technology icon={<TbBrandNextjs className={style} />} text="NextJs" />
      <Technology icon={<DiRuby className={style} />} text="Ruby" />
      <Technology
        icon={<SiRubyonrails className={style} />}
        text="Ruby on Rails"
      />
      <Technology icon={<SiMongodb className={style} />} text="Mongodb" />
      <Technology
        icon={<BiLogoPostgresql className={style} />}
        text="Postgresql"
      />
      <Technology icon={<SiJest className={style} />} text="Jest" />
      <Technology icon={<BsGit className={style} />} text="Git" />
      <Technology icon={<BsGithub className={style} />} text="Github" />
      <Technology icon={<FiFigma className={style} />} text="Figma" />
    </ul>
  );
};

export default Technologies;
