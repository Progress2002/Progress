import React from "react";
import profile from "../components/images/profile.jpeg";
import Technologies from "../components/Technologies";
import { Slide, Fade } from "react-awesome-reveal";

const About = () => (
  <div className="min-h-screen mb-7">
    <div className="lg:container mx-7 md:mx-20 lg:mx-auto">
      <section>
        <Slide direction="up" triggerOnce="true">
          <h1 className="flex items-center text-text space-x-5 text-4xl font-bold mt-10 mb-6 lg:mt-24 lg:mb-16 ">
            <span className="w-fit pb-2">About</span>
            <span
              className="text-sc_color relative  before:absolute
              before:bottom-0 before:w-full before:h-[0.20rem]
              before:rounded-full before:bg-sc_color pb-3">
              Me
            </span>
          </h1>
        </Slide>
        <div className="flex flex-col gap-9 lg:flex-row xl:justify-between ">
          <div className="lg:w-[60%]">
            <Slide direction="up" triggerOnce="true">
              <h2
                className="flex items-start mb-6 space-x-2 text-xl font-normal
                lg:text-2xl font-pop lg:space-x-3">
                Hi👋, I'm{" "}
                <span className="text-sc_color inline-flex ml-4 font-bold">
                  Progress Ezeamaka,
                </span>
              </h2>
            </Slide>
            <Slide direction="up" triggerOnce="true">
              <p className="mb-6 text-lg font-normal text-text lg:text-xl">
                As a sophomore computer science student, I specialize in
                crafting and launching dynamic user interfaces and experiences
                as a Full-stack Web Developer. I harness the latest technologies
                and design systems to create interactive solutions that
                captivate both clients and companies.
              </p>
            </Slide>
            <Slide direction="up" triggerOnce="true">
              <p className="mb-6 text-lg font-normal text-text lg:text-xl">
                My core goal is to deliver top-notch, user-friendly, and highly
                functional long-term solutions that not only align with the
                company's needs but also surpass client expectations. My
                unwavering dedication to user satisfaction drives me to create
                seamless and engaging experiences that seamlessly integrate
                aesthetic appeal with practical functionality.
              </p>
            </Slide>
            <Slide direction="up" triggerOnce="true">
              <p className="mb-6 text-lg font-normal text-text lg:text-xl">
                My passion for transforming creativity and knowledge into
                websites has been my driving force for months. During this time,
                I've empowered various clients to establish their online
                presence. I am also an avid enthusiast of open-source software,
                continually seeking internships and projects to further enhance
                my skills and gain valuable experience in Full-stack Web
                Development.
              </p>
            </Slide>
          </div>
          <div className="mt-9 lg:mt-24 w-full lg:w-[40%] flex justify-center  ">
            <Slide direction="up" triggerOnce="true">
              <Fade delay={300} triggerOnce="true">
                <div
                  className="w-full md:w-[30rem] lg:w-full lg:justify-start
                    h-[28rem] md:h-[37rem] lg:h-[30rem] xl:h-[34rem] relative rounded-md  border-2 bg-sc_color
                    border-sc_color backdrop-blur-sm z-20 before:absolute
                      before:w-full before:duration-700 before:left-5 before:top-5 before:-bottom-5
                      before:-z-20 before:rounded-md hover:before:-left-5 hover:before:-top-5
                       hover:before:bottom-3 before:border-2  before:border-sc_color before:hover:bg-white/10">
                  <img
                    src={profile}
                    alt="profile image"
                    className="w-full h-full"
                  />
                </div>
              </Fade>
            </Slide>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center my-20 md:pt-10 lg:pt-14">
        <div className="mb-4 text-center">
          <h2 className="mb-4 text-2xl font-semibold tracking-wide text-white capitalize lg:text-4xl">
            Technologies That I Use
          </h2>
          <p className="text-lg text-text">
            Here are some technologies i am using or have used recently
          </p>
        </div>
        <div className="w-full pt-10 mx-auto">
          <Technologies />
        </div>
      </section>
    </div>
  </div>
);

export default About;
