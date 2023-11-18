import React from 'react'
import { Link as LinkScroll } from 'react-scroll'

function NavDesktop(props) {
  return (
    <ul className='hidden lg:flex gap-4 mb-0'>
      {
        props.sections.map((section, index) => (
          <li>
            <LinkScroll 
              to={section.ref}
              key={index}
              id={`nav-${index}`}
              // className={selected === index ? "nav_selected nav_item hover:cursor-pointer" : "nav_unselected nav_item hover:cursor-pointer"}
              className='nav_item hover:cursor-pointer hover:font-bold'
              smooth={true}
              duration={500}
              spy={true}
              activeClass={"nav_selected"}
              spyThrottle={100}
              hashSpy={true}
              offset={-75}
            >
              {section.to_display}
            </LinkScroll>
          </li>
        ))
      }
    </ul>
  )
}

export default NavDesktop