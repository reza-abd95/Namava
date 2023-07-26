'use client'
import React from 'react';
import Link from "next/link";

export default function HeaderNav () {
    return (
            <nav className="px-[15px]">
                <ul className="mb-[10px]">
                    <Link className="hidden no-underline text-white pl-[15px]" href="#"> خانه </Link>
                    <Link className="hidden no-underline text-white pl-[15px]" href="#"> فیلم ها </Link>
                    <Link className="hidden no-underline text-white pl-[15px]" href="#"> دسته بندی </Link>
                </ul>
            </nav>
    )
}