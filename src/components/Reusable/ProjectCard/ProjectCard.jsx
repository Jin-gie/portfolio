import React from 'react'
import "./ProjectCard.css"

function ProjectCard(props) {
  const project = props.element;

  return (
    <div className='w-72 min-h-[340px] border border-solid border-white project-container'>
      <img src={project.picture} alt="Mockup of Weegift" />
      <div className='flex flex-col items-center text-center'>
        <h3 className='text-white'>{project.title}</h3>
        <p className='subtitle'>{project.subtitle}</p>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard