import React from 'react'
import './HomeHeader.css';
import Photo from "../../assets/photo_circle.png";
import { IconChevronCompactDown } from '@tabler/icons-react';
import { Link } from 'react-scroll';
import PDF from "../../assets/Erin_Bernardoni_CV.pdf";

const Header = () => {

  return (
    <div className='container flex flex-col justify-between' id="header">
      <div></div>

      {/* Description */}
      <div className='flex justify-center'>
        <div className='text-center flex flex-col items-center max-w-md gap-4'>
          <div><img loading="lazy" src={Photo} alt="Moi" className='grayscale hover:grayscale-0 w-[146px] h-[146px]'/></div>
          <h2 className='mb-0'>UX Designer & Développeuse Fullstack</h2>
          <p>Sensible à l'expérience utilisateur et aux problématiques liées à l'accessibilité, je conçois des interfaces intuitives et accessibles.</p>
            <a href={PDF} rel='noopener noreferrer' target='_blank' type='button' className='button button__left__right'>
              Mon CV
            </a>
        </div>
      </div>

      {/* Arrow at bottom to discover more */}
      <Link 
            to={"about"}
            smooth={true}
            duration={500}
            className='hover:cursor-pointer'
      >
        <div className='flex flex-col items-center'>
            <p>Découvrir plus</p>
            <div className='flex flex-col'>
              <IconChevronCompactDown color='#1E1E1E' size={50} className='-mb-9'/>
              <IconChevronCompactDown color='#535353' size={50} className='-mb-9'/>
              <IconChevronCompactDown color='white' size={50}/>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default Header