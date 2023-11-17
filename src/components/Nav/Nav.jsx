import React, { useState, useEffect, useRef } from 'react'
import "./Nav.css";
import { useNavigate } from 'react-router-dom';
import { Link as LinkNav } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

function Nav(props) {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();


  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.7,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const index = props.sections.findIndex((section) => section.ref === `#${entry.target.id}`);
  //         setSelected(index);
  //         console.log(selected)
  //       }
  //     });
  //   }, options);

  //   props.sections.forEach((section) => {
  //     const target = document.querySelector(section.ref);
  //     if (target) {
  //       observer.observe(target);
  //     }
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [props.sections]);

  console.log(props.sections)

  return (
    <div id='nav__home' className='w-full bg-black py-1 opacity-90'>
      <div className='container flex justify-between items-center'>
        <div>
          <LinkNav to="/" onClick={() => {window.scrollTo(0,0)}}>
            <h1 className='mb-0 hover:text-white'>&lt;Erin Bernardoni /&gt;</h1>
          </LinkNav>
        </div>
        <div className='flex gap-4'>
          {
            props.sections.map((section, index) => (
              <LinkScroll 
                to={section.ref}
                key={index}
                id={`nav-${index}`}
                className={selected === index ? "nav_selected nav_item hover:cursor-pointer" : "nav_unselected nav_item hover:cursor-pointer"}
                smooth={true}
                duration={500}
              >
                {section.to_display}
              </LinkScroll>
            ))
          }
        </div>
      </div>
    </div>

    // OLD NAV (LEFT SIDE)
    // <div id="nav__home" className='flex items-center gap-4'>
    //   <div className='graphic-circle' id="graph-circle-nav"></div>
    //   <div className='flex flex-col gap-4'>
    //     {
    //       sections.map((section, index) => (
    //         <a
    //           key={index}
    //           href={section.ref}
    //           id={`nav-${index}`}
    //           className={selected === index ? "nav_selected nav_item" : "nav_unselected nav_item"}
    //         >
    //           {section.to_display}
    //         </a>
    //       ))
    //     }
    //   </div>
    // </div>
  );
}

export default Nav