"use client";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Test() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <div className="relative">
    <Image
        width={1000}
        height={1000}
        src={
          windowWidth > 500
            ? "/images/avatarDesktop.jpg"
            : "/images/avatarMobile.jfif"
        }
        alt="avatar"
      />
    </div>
      
      <div className="absolute top:0 left:0 no-underline" href="#">
        <div className="flex-col">
          <Logo />
          <h2>آواتار</h2>
          <div className=" flex flex-row max-[500px]:hidden">
            <div className="bg-yellow-500 w-12 h-9 flex items-center justify-center rounded-md">
              <p>+۱۲</p>
            </div>
            <p>۲۰۲۲</p>
            <p>۱۲۰ دقیقه</p>
            <div className="w-14 h-4 flex flex-row">
              <img className="w-10 h-4" src="./icons/imdb.png" alt="imdb" />
              <p>6.7</p>
            </div>
            <div className="w-4 h-4 flex flex-row">
              <img src="./icons/like.svg" alt="like" />
              <p>۹۱٪</p>
            </div>
            <div className="w-4 h-4 flex-row">
              <img src="./icons/subtitle.svg" alt="subtitle" />
              <p>زیرنویس</p>
            </div>
          </div>
          <div className="w-1/3 h-1/3 max-[500px]:hidden">
            
            <p>
              یک افسر نیروی دریایی به نام جیک سالی برای انجام ماموریتی خاص به
              سیاره پاندورا فرستاده می شود، اما زمانی که جیک با اهالی و بومیان
              آنجا ارتباط برقرار می کند، تصمیم می گیرد برای محافظت از آنها و لغو
              عملیات مبارزه کند
            </p>
          </div>
          <div className="w-4 h-4 flex-row max-[500px]:hidden">
            <img src="./icons/info-circle.svg" alt="more" />
            <p>توضیحات بیشتر</p>
          </div>
          <div className="max-[500px]:hidden">
            <p>
              ستارگان:Chris Pine-Michelle Rodriguez-Regé-Jean Page-Justice Smith
            </p>
          </div>
          <p>با دوبله اختصاصی نماوا</p>
        </div>
      </div>
    </>
  );
}

// import Logo from './Logo';
// import Link from "next/link";
// import Image from "next/image";
// export default  function Test(){
//     return(
//         <>
// <Link href='#'><Image
//         width={1000}
//         height={1000}
//           src="/images/avatarMobile.jfif"
//           alt="avatar"
//         /></Link>
//          <Logo />
//         </>
//     )
// }
