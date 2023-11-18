import React from 'react'
import "./ProjectCard.css"
import { useNavigate } from 'react-router-dom';

function ProjectCard(props) {
  const navigate = useNavigate();
  const project = props.el;

  return (
    <div className='w-72 min-h-[340px] border border-solid border-white project-container' onClick={() => {navigate("/" + props.path)}}>
      <img loading='lazy' src={project.picture} alt="Mockup of Weegift" />
      <div className='flex flex-col items-center text-center'>
        <h3 className='text-white'>{project.title}</h3>
        <p className='subtitle'>{project.subtitle}</p>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard