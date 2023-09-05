import React from 'react'
import ProjectData from '../projects.json';

const Project = () => {
  return (
    <div>
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
  )
}

export default Project
