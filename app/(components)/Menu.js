'use client'

import Image from "next/image";
import MenuIcon from "@/public/icons/hamberger-menu.svg";

export default function Menu () {
    return (
        <div>
            <Image className="w-[32px] h-[27px] ml-[8px]" src={MenuIcon} alt="menu"/>
        </div>
    )
}