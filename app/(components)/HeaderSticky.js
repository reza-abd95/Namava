'use client'

import "../globals.css";
// import Menu from "@/app/(components)/Menu";
import Logo from "@/app/(components)/Logo";
import HeaderNav from "@/app/(components)/HeaderNav";
import SearchBox from "@/app/(components)/SearchBox";
import MenuSticky from "./MenuSticky";
import ProfileBoxSticky from "./ProfileBoxSticky";
import {useEffect, useRef, useState} from "react";


export default function HeaderSticky() {
    const header = useRef(null);
    const [style,setStyle] = useState('fixed');
    const prevScrollRef = useRef(0);


    const handleScroll = () => {
        const currentScroll = window.scrollY
        const isScrolled = currentScroll > prevScrollRef.current
        prevScrollRef.current = currentScroll
        if ( currentScroll === 0 ) {
            setStyle('fixed')
        }
        else if (isScrolled) {
            if (currentScroll > 80) {
                setStyle('floating')
            } else {
                setStyle('fixed')
            }

        } else {
            setStyle('sticky')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    },[]);
    if (header.current) {


        if (style==='fixed') {
            header.current.classList.remove('sticky-header')
            header.current.classList.remove('sticky-before')
        }else if (style=== 'floating') {
            header.current.classList.add('sticky-before')
            header.current.classList.remove('sticky-header')
        }
        else {
            header.current.classList.add('sticky-header')
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