import React from 'react'
import Nav from '../../Nav/Nav'
import Header from '../../HomeHeader/HomeHeader'
import Button from '../Button'
import Footer from '../../Footer/Footer'
import { IconChevronsUp } from '@tabler/icons-react'
import { Link, animateScroll as scroll } from 'react-scroll'

function Page(props) {
  return (
    <div>
      <Nav sections={props.sections} />

      {props.content}

      {/* <div className='graphic-circle' id="graph-circle-1"></div> */}

      <button
        onClick={() => {scroll.scrollToTop()}}
        className='button fixed bottom-16 right-16 button__bottom__top hover:cursor-pointer'
      >
        <IconChevronsUp size={30}/>
      </button>

      <Footer />
    </div>
  )
}

export default Page