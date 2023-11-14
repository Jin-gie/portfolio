import React from 'react'
import './Header.css';
import Photo from "../../assets/photo_circle.png";
import { IconChevronCompactDown } from '@tabler/icons-react';
import Button from '../Reusable/Button';

const Header = () => {
  let marginBetweeArrows = '-mb-10';

  return (
    <div className='container flex flex-col justify-between' id="header">
      {/* My Name */}
      <div>
        <h1>&lt;Erin Bernardoni /&gt;</h1>
      </div>

      {/* Description */}
      <div className='flex justify-center'>
        <div className='text-center flex flex-col items-center max-w-md gap-4'>
          <div><img src={Photo} alt="Moi" className='grayscale hover:grayscale-0'/></div>
          <h2 className='mb-0'>UX Designer & Développeuse Fullstack</h2>
          <p>Sensible à l'expérience utilisateur et aux problématiques liées à l'accessibilité, je conçois des interfaces intuitives et accessibles.</p>
          <Button text="Mon CV"/>
        </div>
      </div>

      {/* Arrow at bottom to discover more */}
      <a href="#about">
        <div className='flex flex-col items-center'>
          <p>Découvrir plus</p>
          <div className='flex flex-col'>
            <IconChevronCompactDown color='#1E1E1E' size={50} className='-mb-9'/>
            <IconChevronCompactDown color='#535353' size={50} className='-mb-9'/>
            <IconChevronCompactDown color='white' size={50}/>

          </div>
        </div>
      </a>
    </div>
  )
}

export default Header