'use client'

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function HeaderNav () {
    const pathname = usePathname();
    return (
        <nav className=" pr-[15px] tab:pt-[6px] des:pt-[2px] des:pr-[32px]">
            <ul className="mb-[10px] des:mb-0 flex flex-row list-none">
                <li><Link  href="/" className={  `hidden font-iranyekanRegular cursor-pointer hover:text-[#6EB8FF] no-underline text-white ml-[15px] ms:hidden tab:flex des:ml-[30px] large:text-[14px] ${pathname === "/" ? "active" : ""}`}> خانه </Link></li>
                <li><Link  href="../movies" className={`hidden font-iranyekanRegular cursor-pointer hover:text-[#6EB8FF] no-underline text-white ml-[15px] ms:hidden tab:flex  tab:pr-[2px] des:ml-[30px] large:text-[14px] ${pathname === "/movies" ? "active" : ""}`}> فیلم ها </Link></li>
                <li><Link href="../categories" className={`hidden font-iranyekanRegular cursor-pointer hover:text-[#6EB8FF] no-underline text-white ml-[15px] ms:hidden tab:flex des:ml-[30px] large:text-[14px] ${pathname === "/categories" ? "active" : ""} `} > دسته بندی </Link></li>
            </ul>
        </nav>
    )
};
