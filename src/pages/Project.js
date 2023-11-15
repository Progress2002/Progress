import React from "react";
import ProjectData from "../projects.json";
import ProjectItem from "../components/ProjectItem";
import { Slide, Fade } from "react-awesome-reveal";

const Project = () => {
  const { Projects } = ProjectData;
  return (
    <div className="min-h-full my-20 lg:container">
      <div className=" text-start mx-7 md:mx-20 lg:mx-auto">
        <h2 className="mb-16 text-4xl font-semibold text-center text-text md:text-5xl ">
          <span className="w-fit pb-2 mr-4">My Recent</span>
          <span
            className="text-sc_color relative  before:absolute
                before:bottom-0 before:w-full before:h-1 md:before:h-2
                before:rounded-full before:bg-sc_color pb-3">
            Projects
          </span>
        </h2>
        <ul className="flex flex-col gap-20">
          {Projects.map((project, index) => (
            <Slide direction="up" triggerOnce="true" delay={100}>
              <ProjectItem
                index={index}
                title={project.title}
                description={project.description}
                img={project.img}
                liveURL={project.links.live}
                sourceCodeURL={project.links.source_code}
                technologies={project.technologies}
              />
            </Slide>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
