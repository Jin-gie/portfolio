import React, { useRef, useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { Link as LinkScroll } from 'react-scroll'

function NavMobile(props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div ref={ref} className='lg:hidden'>
      <Hamburger  
        toggled={isOpen}
        size={20}
        toggle={setIsOpen}
      />

      {isOpen && (
        <div className='fixed left-0 shadow-4xl right-0 p-5 pt-0 bg-neutral-950 h-full'>
          <nav>
            <ul className='flex flex-col gap-4 mt-8'>
              {
                props.sections.map((section, index) => (
                  <li key={index}>
                    <LinkScroll 
                      to={section.ref}
                      key={index}
                      id={`nav-${index}`}
                      className='nav_item'
                      smooth={true}
                      duration={500}
                      spy={true}
                      activeClass={"nav_selected"}
                      spyThrottle={100}
                      hashSpy={true}
                      offset={-75}
                      onClick={() => setIsOpen((prev) => !(prev))}
                    >
                      {section.to_display}
                    </LinkScroll>
                  </li>
                ))
              }
            </ul>
          </nav>

        </div>
      )}
    </div>
  )
}

export default NavMobile