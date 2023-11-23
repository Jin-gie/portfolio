import React from 'react'

function ProjectTimeline({timelineSteps}) {
  return (
    timelineSteps.map((step, index) => {
      return (
        <div className="flex mb-8" key={index}>
          <div className="text-center mr-4">
            <div className="bg-background-black text-title-color rounded-full p-4">
              {step.icon}
            </div>
          </div>
          <div className="w-4/5">
            <h3 className="text-xl font-semibold mb-2 text-title-color">{step.title}</h3>
            <p className="text-text-color" dangerouslySetInnerHTML={{ __html: step.description.replace(/\n/g, '<br>') }} />
          </div>
        </div>
      )
    })
  )
}

export default ProjectTimeline