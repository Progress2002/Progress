import React from "react";
import HiremeBtn from "../components/HiremeBtn";
import ResumeBtn from "../components/ResumeBtn";
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="min-h-screen mb-7">
      <div className="lg:container mx-7 lg:mx-auto">
        <Slide direction="up" triggerOnce="true">
          <p className="text-sc_color text-lg mb-4 mt-7 font-bold">
            Hey there, 👋I'm
          </p>
          <h1
            className="flex items-center text-text space-x-5 text-3xl
            sm:text-[3.5rem] lg:text-[5rem] md:leading-[1.3] font-bold  ">
            <span className="w-fit pb-3">Progress</span>
            <span
              className="text-sc_color relative  before:absolute
                before:bottom-0 before:w-full before:h-1 md:before:h-2
                before:rounded-full before:bg-sc_color pb-3">
              Ezeamaka.
            </span>
          </h1>
          <div direction="up">
            <p
              className="text-text_Light mt-4 text-3xl sm:text-4xl lg:text-6xl font-semibold md:leading-[1.5]"
              style={{ opacity: 1 }}>
              I engineer web wonders.
            </p>
          </div>
        </Slide>
        <Slide direction="up" className="max-w-[40.75rem]" triggerOnce="true" duration="1500">
          <p
            className="text-text_Light text-lg md:text-xl md:leading-[1.5] mt-6"
            style={{ opacity: 1 }}>
            As a <span className="text-sc_color">Full-stack</span> web
            developer, I possess a diverse skill set that empowers me to create
            and deploy{" "}
            <span className="text-sc_color font-semibold">
              dynamic user interfaces
            </span>{" "}
            and <span className="text-sc_color font-semibold">immersive</span>{" "}
            experiences, leaving a lasting impact on both clients and companies.
            Leveraging cutting-edge technologies and design systems, I craft
            interactive solutions that exceed expectations and align seamlessly
            with business objectives. My dedication to user satisfaction drives
            me to deliver the best, most functional, and enduring solutions that
            merge aesthetic appeal with practical functionality.
          </p>
        </Slide>
        <Slide direction="up">
          <div className="flex gap-5 md:gap-8 mt-12 mb-10">
            <HiremeBtn />
            <ResumeBtn text="View Resume" />
          </div>
          <div>
            <button
              className=" text-base text-center bg-opacity-60
                duration-300 rounded w-fit border-2 border-gray hover:border-white transition-all font-medium">
              <Link
                to="/about"
                className="flex gap-2 md:gap-3 text-center text-text_Light font-bold hover:text-white py-2 px-5">
                {" "}
                <span>Learn About Me</span>
                <FaAddressCard className="relative top-[0.2rem] text-xl" />
              </Link>
            </button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
