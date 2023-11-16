import React from 'react'
import Nav from '../../Nav/Nav'
import Header from '../../HomeHeader/HomeHeader'
import Button from '../Button'
import Footer from '../../Footer/Footer'
import { IconChevronsUp } from '@tabler/icons-react'

function Page(props) {
  return (
    <div>
      <Nav sections={props.sections} />

      {props.content}

      <div className='graphic-circle' id="graph-circle-1"></div>
      <Button text={<IconChevronsUp size={30}/>} link="#" className="fixed bottom-16 right-16 button__bottom__top"/>

      <Footer />
    </div>
  )
}

export default Page