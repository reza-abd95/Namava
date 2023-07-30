'use client'

import useScrollingUp from "@/app/hooks/useScrollingUp";
import "../globals.css";
import Menu from "@/app/(components)/Menu";
import Logo from "@/app/(components)/Logo";
import HeaderNav from "@/app/(components)/HeaderNav";
import SearchBox from "@/app/(components)/SearchBox";
import ProfileBox from "@/app/(components)/ProfileBox";


export default function HeaderSticky() {
    const scrolledUp = useScrollingUp();
    return (
        <>
            <div className={`${scrolledUp ? "sticky-header" : "sticky-before"}`} >
                <div className="header_gradient  flex justify-between items-center flex-row w-full h-[70px] px-[20px]  pt-1 tab:h-[60px] tab:px-[32px] tab:py-0 tab:pt-[4px] des:h-[80px] des:px-[43px]">
                    <div className="flex items-center justify-center flex-row">
                        <Menu/>
                        <Logo/>
                        <HeaderNav/>
                    </div>
                    <div className="flex">
                        <SearchBox/>
                        <ProfileBox/>
                    </div>

                </div>
            </div>
        </>

    )
}