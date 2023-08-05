import Image from "next/image";
import image1 from "@/public/images/2.jpg";
import Link from "next/link";
import React from "react";


export default function CategoryItem() {
    return (

        <Link className="no-underline text-white w-[48%] ml:w-[48.5%] tab:w-[32%] des:w-[23.97%] large:w-[19.28%]" href="/categories/1">
            <div className="flex  w-[100%] h-[100%]  align-middle items-center justify-start">
                <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image1}
                       alt="action"/>
                <span
                    className="absolute mr-[12px] font-iranyekanRegular text-[14px] ml:mr-[24px] ml:text-[18px] tab:text-[20px] ">پردیس نماوا</span>
            </div>
        </Link>


    )
}