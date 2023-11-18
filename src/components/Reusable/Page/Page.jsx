import React from 'react'
import Nav from '../../Nav/Nav'
import Footer from '../../Footer/Footer'
import { IconChevronsUp } from '@tabler/icons-react'
import { animateScroll as scroll } from 'react-scroll'

function Page(props) {
  return (
    <div>
      <Nav sections={props.sections} />

      {props.content}

      {/* <div className='graphic-circle' id="graph-circle-1"></div> */}

      <button
        onClick={() => {scroll.scrollToTop()}}
        className='button fixed lg:bottom-16 bottom-8 lg:right-16 right-8 button__bottom__top hover:cursor-pointer'
        aria-label='Go to top of the page'
      >
        <IconChevronsUp size={30}/>
      </button>

      <Footer />
    </div>
  )
}

export default Page