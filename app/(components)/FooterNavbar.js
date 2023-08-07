'use client'


import DropdownMenu from "./footer/DropdownMenu";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ArrowDown from '../../public/icons/ArrowDown-footer.svg'
import Image from "next/image";

export default function FooterNavbar({isFixed}) {
    const [width,setWidth] = useState(window.outerWidth)
    const links = [
        {title: 'اپلیکیشن‌ها',show: false},
        {title: 'فرصت‌های شغلی',show: false},
        {title: 'تبلیغات در نماوا',show: false},
        {title: 'خرید اشتراک',show: false},
        {title: 'کارت هدیه',show: false},
        {title: 'نماوا مگ',show: false},
        {title: 'سوالات متداول',show: false},
        {title: 'تماس با ما',show: false},
        {title: 'قوانین',show: false},
        {title: 'درباره نماوا',show: false},
        {title: 'شرایط مصرف اینترنت',show: false},
       
    ]

    if (width >= 360) {

        links[0]['show'] = true
        links[1]['show'] = true
        links.push({title: 'ارسال فیلمنامه',show: false})
        links.push({title: 'دانلودها',show: false})
    } if (width >= 500) {
        links[2]['show'] = true

    } if (width >= 800) {
        links[3]['show'] = true
        links[4]['show'] = true
      
    } if (width >= 1280) {

        links[5]['show'] = true
        links[6]['show'] = true
        links[7]['show'] = true
      
    } if (width >= 1920) {
        links[8]['show'] = true
        links[9]['show'] = true
        links[10]['show'] = true
        links[11]['show'] = true
        links[12]['show'] = true
        
    }
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.outerWidth))
    },[width])
    
    const visibleLinks = []
    const hiddenLinks = []
    for (const item of links) {
        if (item.show) {
            visibleLinks.push(item.title)
        }else {
            hiddenLinks.push(item.title)
        }
    }
    width
    const closed = useRef()
    const elementClosed = useRef()
    const [open, setOpen] = useState(false);
    
    return (
        <div ref={closed} className={`FooterNavbar`}>
            <div className="FooterNavbar__menu">
                {
                    visibleLinks.map((item,index) => {
                        return <Link key={index+1} href='#' className={`NavbarMenu__items`}>{item}</Link>
                    })
                }
                <DropdownMenu
                 open={open}
                 setOpen={setOpen}
                 width={width}
                 />
            </div>
            
            <ul className={`DropdownMenu__menu ${open? 'DropdownMenu__menu-open':''}`}>
                <li
                 onClick={() => {
                    
                    setOpen(!open)
                }}
            className={`DropdownMenu__items DropdownMenu__menu-close`}>
                    <span>سایر لینک‌ها</span>
                    <Image src={ArrowDown} alt="arrow"/>
                </li>
                {   
                    hiddenLinks.map((item,index) => {
                        return <li><Link key={index+1} ref={elementClosed} href='#' className={`DropdownMenu__items ${open? 'py-3':''}`}>{item}</Link></li>
                    })
                }
            </ul>
            <div onClick={() => setOpen(false)} className={`FooterNavbar__backgroundOpen ${open? '': 'hidden'}`}></div>
            
        </div>
    )
}