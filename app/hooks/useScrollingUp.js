'use client'

import { useEffect, useState } from 'react'
import { off, on } from '../utils/index'
/**
 * useScrollingUp
 * @returns {boolean}
 */
const useScrollingUp = () => {
  //if it is SSR then check you are now on the client and window object is available
  //let prevScroll;
  // if (process.browser) {
  //   prevScroll = window.pageYOffset
  // }
  let prevScroll=window.pageYOffset;
  const [scrollingUp, setScrollingUp] = useState(false)
  const handleScroll = () => {
    const currScroll = window.pageYOffset;
    const isScrolled = prevScroll > currScroll
    setScrollingUp(currScroll === 0 ? false : isScrolled)
    prevScroll = currScroll
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
