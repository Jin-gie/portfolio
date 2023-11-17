import React from 'react'
import projects from '../../../projects'
import ProjectCard from '../ProjectCard/ProjectCard'

function OtherProjects(props) {
  return (
    <section>
        <div className='container'>
          <h1>Mes autres projets</h1>
          <div className='flex gap-8 flex-wrap'>
            {
              Object.keys(projects)
                .filter((key) => key !== props.current_project)
                .map((key, index) => (
                  <ProjectCard el={projects[key]} path={key} key={key} />
              ))
            }
          </div>
        </div>
      </section>
  )
}

export default OtherProjects