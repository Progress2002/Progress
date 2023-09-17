import React from "react";
import FooterLink from "./FooterLink";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const DesktopFooter = () => {
  return (
    <footer className="hidden md:block">
      <ul className=" hidden lg:flex flex-col fixed bottom-0 left-5 gap-3 after:h-24 after:w-[2px] after:mx-auto after:bg-white">
        <FooterLink
          icon={<AiFillGithub />}
          address="https://github.com/Progress2002"
        />
        <FooterLink
          icon={<AiFillLinkedin />}
          address="https://www.linkedin.com/in/progress-c-ezeamaka/"
        />
        <FooterLink
          icon={<BsTwitter />}
          address="https://twitter.com/Progress_2002"
        />
      </ul>
      <div className="flex flex-col fixed bottom-0 right-1 after:h-20 w-28 after:w-[2px] after:mx-auto after:bg-white after:mt-4">
        <Link className=" duration-300 rotate-90 mb-52 text-base text-text hover:text-sc_color font-pop " to="mailto:ezeamakachisom2002@gmail.com">ezeamakachisom2002@gmail.com</Link>
      </div>
    </footer>
  );
};

export default DesktopFooter;
