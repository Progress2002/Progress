import React from 'react'
import ProjectData from '../projects.json';

const Project = () => {
  const { Projects } = ProjectData;
  return (
    <div className='min-h-full my-20'>
      <div className="lg:container mx-7 md:mx-20 lg:mx-auto">
        <h1>Projects</h1>
        <ul>
          {ProjectData.Projects.map((project, index) => (
            <li key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img src={project.img}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project
