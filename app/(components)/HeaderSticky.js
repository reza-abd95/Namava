'use client'

import useScrollingUp from "@/app/hooks/useScrollingUp";
import "../globals.css";
// import Menu from "@/app/(components)/Menu";
import Logo from "@/app/(components)/Logo";
import HeaderNav from "@/app/(components)/HeaderNav";
import SearchBox from "@/app/(components)/SearchBox";
import MenuSteacky from "./MenuSteacky";
import ProfileBoxSteaky from "./ProfileBoxSteaky";
import { useEffect, useRef, useState } from "react";
import { document } from "postcss";


export default function HeaderSticky() {
    const header = useRef(null)
    const [scrollUp,setScrollUp] = useState(null)
    const [isInside,setIsInside] = useState(null)
    const prevScrollRef = useRef(null)
    const handleScroll = () => {
        const currentScroll = window.scrollY
        const isScrolled = currentScroll > prevScrollRef.current
        prevScrollRef.current = currentScroll
        if ( currentScroll === 0 ) {
          setIsInside(true)
        } 
        else if (isScrolled) {
            if (currentScroll > 80) {
                setScrollUp(false)
                setIsInside(false)
            } else {
                setScrollUp(false)
            }
            
        } else {
            setScrollUp(true)
        }
    }
      useEffect(() => {
        prevScrollRef.current = window.scrollY
        const INSIDE = (window.scrollY < 80)? true: false
        setIsInside(INSIDE)
        window.addEventListener('scroll', handleScroll)
      },[])
    if (header.current) {

      
      if (isInside) {
        header.current.classList.remove('sticky-header')
        header.current.classList.remove('sticky-before')
      } else {

        if (!scrollUp) {
          header.current.classList.add('sticky-before')
          header.current.classList.remove('sticky-header')
        }
        else {
          header.current.classList.add('sticky-header')
        }
      }
      
    }
    return (
        <>
            <div ref={header} className='header-fixed' >
                <div className="header_gradient text-[12px]  flex justify-between items-center flex-row w-full h-[70px] px-[20px]  pt-1 tab:h-[60px] tab:px-[32px] tab:py-0 tab:pt-[4px] des:h-[80px] des:px-[43px]">
                    <div className="flex items-center justify-center flex-row">
                        <MenuSteacky />
                        <Logo/>
                        <HeaderNav/>
                    </div>
                    <div className="flex">
                        <SearchBox/>
                        <ProfileBoxSteaky />
                    </div>
                </div>
            </div>
        </>

    )
}