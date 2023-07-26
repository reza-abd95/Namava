'use client'
import React from 'react';
import Link from "next/link";

export default function HeaderNav () {
    return (
            <nav className="px-[15px]">
                <ul className="mb-[10px]">
                    <Link className="ms:invisible cursor-pointer hover:text-[#6EB8FF] tab:visible no-underline text-white ml-[15px]" href="#"> خانه </Link>
                    <Link className="ms:invisible cursor-pointer hover:text-[#6EB8FF] tab:visible no-underline text-white ml-[15px]" href="#"> فیلم ها </Link>
                    <Link className="ms:invisible cursor-pointer hover:text-[#6EB8FF] tab:visible no-underline text-white ml-[15px]" href="#"> دسته بندی </Link>
                </ul>
            </nav>
    )
}