import React from 'react'

function ProjectHero(props) {
  return (
    <div className='container lg:mt-40'>
      <div className='lg:relative'>
        <img src={props.img} alt='Mockup of the project Weegift' />
        <div className='lg:absolute lg:top-0 lg:right-0 lg:bg-background-black/[.88] lg:w-1/2 h-full flex flex-col justify-center lg:px-10 px-3'>
          <h1 className='mb-0'>{props.project}</h1>
          <p>{props.desc}</p>

          <h2 className='mb-0'>Cadre</h2>
          <p>{props.cadre}</p>

          <h2 className='mb-0'>Temps alloué</h2>
          <p>{props.temps}</p>

          <h2 className='mb-0'>Outils</h2>
          <p>{props.outils}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectHero