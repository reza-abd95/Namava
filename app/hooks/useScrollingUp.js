

import { off, on } from '../utils/index'
import { useEffect, useState, useRef } from 'react'




const useScrollingUp = () => {
  const [style, setStyle] = useState(handleScroll())
  
  useEffect(() => {
    on(window, 'scroll', handleScrol, { passive: true })
  }, [])
  return style
}

export default useScrollingUp
