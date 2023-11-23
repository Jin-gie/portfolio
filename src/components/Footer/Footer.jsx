import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

function Footer() {
  return (
    <footer className='container my-5 footer pb-5'>
      <div className='flex justify-between'>
        <div className=''>© 2023 Erin Bernardoni</div>
        <div className='flex gap-4'>
          <a href='https://linkedin.com/in/erin-bernardoni'>
            <FaLinkedinIn size={20} className='hover:text-white' />
          </a>
          <a href='https://github.com/Jin-gie'>
            <FaGithub size={20} className='hover:text-white' />
          </a>
          <a href='mailto:erin.bernardoni@outlook.fr'>
            <MdAlternateEmail size={20} className='hover:text-white' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer