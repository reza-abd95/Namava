'use client'

import Image from "next/image";
import Profile from "@/public/icons/profile-icon.png";

export default function ProfileBox () {
    const onmouseover = () => {

    }
    return (
        <div>
            <Image className="w-[30px] h-[31px] rounded-full mr-[8px]" src={Profile} alt="profile" onClick={onmouseover}/>
        </div>
    )
}