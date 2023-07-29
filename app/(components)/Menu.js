'use client'

import Image from "next/image";
import MenuIcon from "@/public/icons/hamberger-menu.svg";


export default function Menu () {
    return (
        <div>
            <Image className="w-[33px] h-[26px] ml-[8px] tab:hidden " src={MenuIcon} alt="menu"/>
        </div>
    )
}