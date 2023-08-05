

import { off, on } from '../utils/index'
import { useEffect, useState, useRef } from 'react'


const useScrollingUp = () => {
  const [scrollingUp, setScrollingUp] = useState(false)
  const prevScrollRef = useRef(0)


  const handleScroll = () => {
    const currScroll = window.scrollY
    const isScrolled = prevScrollRef.current > currScroll
    setScrollingUp(currScroll === 0 ? false : isScrolled)
    prevScrollRef.current = currScroll
  }
  useEffect(() => {
    on(window, 'scroll', handleScroll, { passive: true })
    return () => {
      off(window, 'scroll', handleScroll, { passive: true })
    }
  }, [])
  return scrollingUp

}


export default useScrollingUp
