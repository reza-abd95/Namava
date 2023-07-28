

import { useEffect, useState } from 'react'
import { off, on } from '../utils/index'
/**
 * useScrollingUp
 * @returns {boolean}
 */
const useScrollingUp = () => {
  let prevScroll= document.documentElement.scrollTop;
  const [scrollingUp, setScrollingUp] = useState(false)
  const handleScroll = () => {
    const currScroll = document.documentElement.scrollTop;
    const isScrolled = prevScroll > currScroll
    setScrollingUp(currScroll === 0 ? false : isScrolled)
    prevScroll = currScroll

  }
  useEffect(() => {
    on(document, 'scroll', handleScroll, { passive: true })
    return () => {
      off(document, 'scroll', handleScroll, { passive: true })
    }
  }, [])
  console.log('sssssssss')
  return scrollingUp
}

export default useScrollingUp
