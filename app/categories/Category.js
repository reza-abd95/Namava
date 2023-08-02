"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import image1 from "../../public/images/2.jpg"
import image2 from "../../public/images/3.jpg"
import image3 from "../../public/images/4.jpg"
import image4 from "../../public/images/5.jpg"
import image5 from "../../public/images/6.jpg"
import image6 from "../../public/images/7.jpg"

export default function Category() {
    return (
        <div className="w-full mt-[48px] flex flex-wrap justify-center gap-[10px] ml:mt-[58px] ml:gap-[12px] tab:mt-[38px] tab:gap-[14px] des:mt-[58px] des:gap-[16px]  ">
            <Link className="no-underline text-white w-[43%] ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex  w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image1} alt="action"/>
                    <h5 className="absolute mr-[25px]">پردیس نماوا</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%] ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex  w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image1} alt="action"/>
                    <h5 className="absolute mr-[25px]">پردیس نماوا</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image2} alt="action"/>
                    <h5 className="absolute mr-[25px]">دوبله نماوا</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px]" src={image3} alt="action"/>
                    <h5 className="absolute mr-[25px]">کودک</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image4} alt="action"/>
                    <h5 className="absolute mr-[25px]">ایرانی</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px] " src={image5} alt="action"/>
                    <h5 className="absolute mr-[25px]">کره ای</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image6} alt="action"/>
                    <h5 className="absolute mr-[25px]">هندی</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image6} alt="action"/>
                    <h5 className="absolute mr-[25px]">هندی</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image6} alt="action"/>
                    <h5 className="absolute mr-[25px]">هندی</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image6} alt="action"/>
                    <h5 className="absolute mr-[25px]">هندی</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image6}
                           alt="action"/>
                    <h5 className="absolute mr-[25px]">هندی</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%]  align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image6}
                           alt="action"/>
                    <h5 className="absolute mr-[25px]">هندی</h5>
                </div>
            </Link>
            <Link className="no-underline text-white w-[43%]  ml:w-[44%] tab:w-[29.5%] des:w-[22.4%]" href="#">
                <div className="flex w-[100%] h-[100%] align-middle items-center justify-start">
                    <Image className="relative w-[100%] h-[100%] rounded-[3px] des:rounded-[5px]" src={image6}
                           alt="action"/>
                    <h5 className="absolute mr-[25px]">هندی</h5>
                </div>
            </Link>
        </div>

    );
};