import React from 'react'

function SkillIcon({icon, name}) {
  return (
    <div className='flex flex-col items-center gap-2 hover:text-white'>
      {icon}
      {name}
    </div>
  )
}

export default SkillIcon