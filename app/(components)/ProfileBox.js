'use client'

import Image from "next/image";
import Profile from "@/public/icons/profile-icon.png";

export default function ProfileBox () {
    const mouseOverHandler = () => {
        console.log("sssssssssss")

    }
    return (
        <div>
            <Image className="cursor-pointer w-[30px] h-[31px] rounded-full mr-[8px] tab:h-[31px] des:w-[40px] des:h-[40px]" src={Profile} alt="profile" onMouseOver={mouseOverHandler}/>
        </div>

    )
}