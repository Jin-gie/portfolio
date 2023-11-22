import React from 'react'
import projects from '../../../projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import Carousel from 'react-multi-carousel'

function OtherProjects(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };

  return (
    <section>
        <div className='container'>
          <h1>Mes autres projets</h1>
          <div className='flex justify-center'>
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              partialVisibile={true}
              ssr={true}
              infinite={true}
              autoPlay={false}
              deviceType={props.deviceType}
              containerClass='carousel-other-projects'
              itemClass='carousel-other-projects-item'
            >
              {
                Object.keys(projects)
                  .filter((key) => key !== props.current_project)
                  .map((key, index) => (
                    <ProjectCard el={projects[key]} path={key} key={key} />
                ))
              }
            </Carousel>
          
          </div>
        </div>
      </section>
  )
}

export default OtherProjects