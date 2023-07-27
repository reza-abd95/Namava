'use client'
import React from 'react';
import Link from "next/link";

export default function HeaderNav () {
    return (
            <nav className="pr-[15px] des:pr-[30px]">
                <ul className="mb-[10px] des:mb-0">
                    <Link className="cursor-pointer hover:text-[#6EB8FF] no-underline text-white ml-[15px] ms:invisible tab:visible des:ml-[30px] " href="#"> خانه </Link>
                    <Link className="cursor-pointer hover:text-[#6EB8FF] no-underline text-white ml-[15px] ms:invisible tab:visible des:ml-[30px] " href="#"> فیلم ها </Link>
                    <Link className="cursor-pointer hover:text-[#6EB8FF] no-underline text-white ml-[15px] ms:invisible tab:visible des:ml-[30px]" href="#"> دسته بندی </Link>
                </ul>
            </nav>
    )
}