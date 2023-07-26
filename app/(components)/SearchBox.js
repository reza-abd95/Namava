'use client'


import Image from "next/image";
import Search from "@/public/icons/search-line.svg";

export default function SearchBox () {
    return (
        <div>
            <Image className="w-[28px] h-[30px] cursor-pointer" src={Search} alt="search"/>
        </div>
    )
}

