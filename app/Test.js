"use client";
import Logo from "./Logo";
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
      {/* <div className="relative">
    <Image
    className="w-full h-full "
        width={1000}
        height={1000}
        src={
          windowWidth > 500
            ? "/images/avatarDesktop.jpg"
            : "/images/avatarMobile.jfif"
        }
        alt="avatar"
      />
   
      
    
        <div > */}
      {/* <div  className="h-3">
   <img
          
          src="/images/avatarLogo.png"
          alt="avatar"
        />
    </div> */}
      {/* <div className="absolute">
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
        </div></div> */}
      <div>
        <div className="w-full h-full relative flex flex-col ">
          <Image
            className="w-full h-full"
            width={1000}
            height={1000}
            src={
              windowWidth > 500
                ? "/images/avatarDesktop.jpg"
                : "/images/avatarMobile.jfif"
            }
            alt="avatar"
          />
<div className="w-full tab:pb-20.1 pb-40 relative max-[499px]:hidden min-[900px]:pb-7 des:hidden" style={{ background: "linear-gradient(to top, #121212, #040706)" }}>
      
    </div>
          

          <div className="ms:mt-10 absolute top-1/4 left-1/3 ml:top-5 ml:left-0 ml:right-5 w-1/3 ml:w-1/5 min-[900px]:top-4 min-[900px]:mt-15 min-[900px]:w-1/6 des:p-3 tab:right-8 tab:top-14">
            <Logo/>
          </div>
          <div className="tab:right-8 ml:block ml:top-2/3 tab:top-1/2 tab:mt-9 ml:bottom-1/2 absolute top-2/3 left-5 right-5 flex flex-col justify-center items-center">
            <h2 className="mb-5 ml:mb-3  text-white">آواتار</h2>
            <div className=" flex flex-row max-[1279px]:hidden">
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
           <p className="text-white">به زودی با دوبله اختصاصی نماوا به زودی با دوبله اختصاصی نماوا</p>
           
            
            <p className="text-white  max-[799px]:hidden">
              یک افسر نیروی دریایی به نام جیک سالی برای انجام ماموریتی خاص به
              سیاره پاندورا فرستاده می شود، اما زمانی که جیک با اهالی و بومیان
              آنجا ارتباط برقرار می کند، تصمیم می گیرد برای محافظت از آنها و لغو
              عملیات مبارزه کند
            </p>
          
           <div className="max-[800px]:hidden mt-3 flex flex-row">
           <div className="w-7 h-7 ml-3">
            <Image width={10} height={10} src="./icons/info-circle.svg" alt="more" />
          </div>
          <p className="text-white">توضیحات بیشتر</p>
           </div>
           <p className="max-[500px]:hidden text-white mt-3">ستارگان:Chris Pine-Michelle Rodriguez-Regé-Jean Page-Justice Smith</p>
           
           
            </div>
          {/* <div className="absolute top-2/3">
          <p >jcbjdbscjxb</p>
          </div> */}
         
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
