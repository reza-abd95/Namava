'use client'


import DropdownMenu from "./footer/DropdownMenu";
import { useEffect, useState } from "react";
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
        {title: 'تماس با ما',show: false},
    ]
    const deviceWidth = window.outerWidth
    useEffect(() => {
        
        window.addEventListener('resize',() => {setWidth(window.outerWidth)})
    },[deviceWidth])
    let n = 1
    if (deviceWidth >= 360) {
        links[0]['show'] = true
        links[1]['show'] = true
        links.push({title: 'ارسال فیلمنامه',show: false})
        links.push({title: 'دانلودها',show: false})
        n = 3
    } if (deviceWidth >= 500) {
        links[2]['show'] = true
        n =4
    } if (deviceWidth >= 800) {
        links[3]['show'] = true
        links[4]['show'] = true
        n =6
    } if (deviceWidth >= 1280) {
        links[5]['show'] = true
        links[6]['show'] = true
        links[7]['show'] = true
        n = 9
    }
    
    const visibleLinks = []
    const hiddenLinks = []
    for (const item of links) {
        if (item.show) {
            visibleLinks.push(item.title)
        }else {
            hiddenLinks.push(item.title)
        }
    }
    setTimeout(() => {
        return 'hidden'
    }, 500)

    const [open, setOpen] = useState(false);
    return (
        <div className={`FooterNavbar ${isFixed? 'fixed bottom-0':'relative'}`}>
            <div className="FooterNavbar__menu">
                {
                    visibleLinks.map(item => {
                        return <Link href='#' className={`NavbarMenu__items`}>{item}</Link>
                    })
                }
                <DropdownMenu
                 items={hiddenLinks}
                 open={open}
                 setOpen={setOpen}
                 isFixed={isFixed}
                 />
            </div>
            
             <ul className={`DropdownMenu__menu ${open? `DropdownMenu__menu-open`: `${setTimeout(function () {

this.addClass('show'); //pseudo code

}, 1000)}`}`}>
                <li onClick={() => setOpen(!open)} className='DropdownMenu__items DropdownMenu__menu-close'>
                    <span>سایر لینک‌ها</span>
                    <Image src={ArrowDown}/>
                </li>
                {   
                    hiddenLinks.map(item => {
                        return <li><Link href='#' className={`DropdownMenu__items`}>{item}</Link></li>
                    })
                }
            </ul>
            
        </div>
    )
}