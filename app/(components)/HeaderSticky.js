'use client'

import "../globals.css";
import Logo from "@/app/(components)/Logo";
import HeaderNav from "@/app/(components)/HeaderNav";
import SearchBox from "@/app/(components)/SearchBox";
import MenuSticky from "./MenuSticky";
import ProfileBoxSticky from "./ProfileBoxSticky";
import {useCallback, useEffect, useRef, useState} from "react";


export default function HeaderSticky() {
    const header = useRef(null);
    const [scrollUp,setScrollUp] = useState(null)
    const [isInside,setIsInside] = useState(null)
    const prevScrollRef = useRef(null)

    const handleScroll = useCallback(() => {
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
    })

    useEffect(() => {
        prevScrollRef.current = window.scrollY;
        const INSIDE = (window.scrollY < 80);
        setIsInside(INSIDE)
        window.addEventListener('scroll', handleScroll);
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
            <div ref={header} className="header-fixed" >
                <div className=" text-[12px]  flex justify-between items-center flex-row w-full h-[70px] px-[20px] ml:h-[80px] ml:px-[24px]   tab:h-[60px] tab:px-[32px]  des:h-[80px] des:px-[43px] large:h-[100px] large:px-[57px]">
                    <div className="flex items-center justify-center flex-row">
                        <MenuSticky />
                        <Logo/>
                        <HeaderNav/>
                    </div>
                    <div className="flex">
                        <SearchBox/>
                        <ProfileBoxSticky />
                    </div>
                </div>
            </div>
        </>

    )
}