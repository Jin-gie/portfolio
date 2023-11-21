import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop(props) {
  const {pathname, hash} = useLocation();

  useEffect(() => {    
    if (!hash)
      window.scrollTo(0,0);
    else 
      window.location.replace(hash);
  }, [pathname]);


  return <div className='scroll-auto'></div>
}

export default ScrollToTop