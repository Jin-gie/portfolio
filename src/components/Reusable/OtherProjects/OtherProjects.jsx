import React from 'react'
import projects from '../../../projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Link } from 'react-router-dom'

function OtherProjects({project_to_show}) {

  return (
    <section>
        <div className='container'>
          <h1>Voir un autre projet similaire</h1>
          <div className='flex justify-start mb-12'>
            <ProjectCard el={projects[project_to_show]} path={project_to_show} key={project_to_show} />
          </div>
          <Link to={"/#projects"} className='hover:text-white hover:underline hover:underline-offset-2'>Voir tous les autres projets</Link>
        </div>
      </section>
  )
}

export default OtherProjects