import React, { useEffect } from 'react'
import "./Nav.css";
import { Link as LinkNav } from 'react-router-dom';
import { Link as LinkScroll, Events, scrollSpy } from 'react-scroll';
import NavDesktop from '../NavDesktop/NavDesktop';
import NavMobile from '../NavMobile/NavMobile';

function Nav(props) {

  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  console.log(props.sections)

  return (
    <div id='nav__home' className='w-full bg-black py-1 opacity-90'>
      <div className='container flex justify-between items-center'>
        <div>
          <LinkNav to="/" onClick={() => {window.scrollTo(0,0)}}>
            <h1 className='mb-0 hover:text-white'>&lt;Erin Bernardoni /&gt;</h1>
          </LinkNav>
        </div>
        <NavDesktop sections={props.sections} />
        <NavMobile sections={props.sections}/>
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