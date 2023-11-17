import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop(props) {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);


  return <div className='scroll-auto'></div>
}

export default ScrollToTop