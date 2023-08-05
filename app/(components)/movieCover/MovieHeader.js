"use client";


import MovieLogo from "../mainSlider/MovieLogo";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Like from "./Like";
import DisLike from "./DisLike";
import './css.css'
import WishlistButton from "./WishlistButton"

export default function MovieHeader() {
   //isAdd handling
   
    //handling button's icon
    const [showFirstSvg, setShowFirstSvg] = useState(true);

    const handleClickAdd = () => {
      setShowFirstSvg(!showFirstSvg);
    };
    const [showFirstSvg2, setShowFirstSvg2] = useState(true);
    const [showFirstSvg3, setShowFirstSvg3] = useState(true);
    const handleClickLike = () => {
      if(showFirstSvg2===false){
          setShowFirstSvg2(true)
      }
      else {
        setShowFirstSvg2(false);
        setShowFirstSvg3(true)
    }

     
     
    };
    
   

    const handleClickDisLike = () => {
      if(showFirstSvg3===false){
        setShowFirstSvg3(true)
    }
    else {
      setShowFirstSvg3(false);
      setShowFirstSvg2(true)
  }

   
    };
 

    //handling background change
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
    
      <div className="text-[#fff]">
        <div className="w-full h-full relative flex flex-col ml:max-h-[534px] tab:max-h-none justify-center tab:justify-start items-center tab:items-stretch ">
          <div className="relative mb-[168px] ms:mb-[118px]  ml:mb-[298px]  tab:mb-[100px] des:mb-0  " >
            <Image
              className="w-full h-full "
              width={1000}
              height={1000}
              src={
                windowWidth > 499
                  ? "/images/avatarDesktop.jpg"
                  : "/images/avatarMobile.jfif"
              }
              alt="avatar"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
          </div>
          <div className="absolute flex flex-col justify-center items-center top-[36%] ms:top-[40%] tab:justify-start tab:items-stretch ml:top-[120px] tab:top-[75px]">
            <div className="max-[799px]:hidden tab:w-[20%] tab:mr-8 tab:mb-6 des:mr-11 des:w-[22%]"><MovieLogo/></div>
           <div className="flex flex-col justify-center items-center px-[14px] tab:justify-start tab:items-stretch text-center ml:text-start ml:px-[20px] tab:px-8 des:px-11">
            <h2 className='text-[14px] ml:text-[16px] mb-2 ml:mb-0 tab:text-[19px] tab:mb-3 des:text-[21px] large:text-[24px]'>آواتار</h2>
             <div className=" flex flex-row justify-between items-center w-full max-w-[90%] ml:max-w-[350px] my-2">
               
                <div className="bg-yellow-500 px-2 rounded-[4px] py-[3px] flex items-center text-center ml:px-3 ml:py-[5px]">
                <p className="text-[10.5px] ml:text-[12px] text-center des:text-[14px] large:text-[17px]">+۱۲</p>
              </div>
              <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">۲۰۲۲</p>
              <p className='text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]'>۱۲۰ دقیقه</p> 
              <div className=" h-3 flex flex-row items-center">
                <img
                className="ml-1 h-3 ml:h-[14px]"
                  src="./icons/imdb.png"
                  alt="imdb"
                /> 
                   <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">6.7</p>
              </div>
               
              <div className=" w-7 h-7 ml-2 p-0.5  flex flex-row items-center">
              <Image
              className="ml-1 mb-1 ml:w-5 ml:h-5"
                  width={10}
                  height={10}
                  src="./icons/like.svg"
                  alt="like"
                />
                <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">۹۱٪</p>
              </div>
              <div className=" w-7 h-6 ml-2 p-0.5  flex flex-row items-center">
              <Image
              className="ml-1 ml:w-5 ml:h-5"
                  width={10}
                  height={10}
                  src="./icons/subtitle.svg"
                  alt="subtitle"
                />
                <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">زیرنویس</p>
              </div>  
            </div> 
             
             <p className="text-[12px] text-center ml:leading-5 max-w-[317px] ml:max-w-[452px] tab:text-start tab:max-w-[525px] des:text-[15px] des:w-[550px] large:text-[17px] large:w-[700px]">
              یک افسر نیروی دریایی به نام جیک سالی برای انجام ماموریتی خاص به
              سیاره پاندورا فرستاده می شود، اما زمانی که جیک با اهالی و بومیان
              آنجا ارتباط برقرار می کند، تصمیم می گیرد برای محافظت از آنها و لغو
              عملیات مبارزه کند
            </p>  
            <p className="text-[12px] text-center mt-4 ml:mb-2 max-w-[317px] tab:max-w-[525px] tab:text-start leading-loose ml:max-w-[452px]  tab:mb-2 tab:mt-3 des:text-[15px] large:text-[17px]">
              به زودیsا دوبله اختصاصی نماوا نماوا
            </p> 
            <div className=" my-[21px] max-w-[100px] tab:hidden flex items-center justify-center h-[42px] bg-[#414141] opacity-[80%] hover:opacity-[100%] hover:bg-[#6e6e6e] rounded-[4px]">
                <p className="text-[12px] px-4 cursor-pointer" >پیش‌ نمایش</p>
              </div>
              <p className="max-[499px]:hidden tab:hidden mb-2 text-[12px] large:text-[14px]" >
              ستارگان:Chris Pine-Michelle Rodriguez-Regé-Jean Page-Justice Smith
            </p> 
            <p className="max-[499px]:hidden tab:hidden mb-2.5 text-[12px] large:text-[14px]" >
              کارگردان:James Cameron
            </p> 
             <div className="flex flex-row items-center mb-4 tab:mb-2 tab:mt-3 ">
               <div className=" my-[21px] tab:my-0 max-[799px]:hidden flex items-center justify-center ml-4 h-[42px] bg-[#414141] opacity-[70%] hover:opacity-[100%] hover:bg-[#6e6e6e] rounded-[4px]">
                <p className="text-[12px] px-5 cursor-pointer" >پیش‌ نمایش</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center ml-11 tab:ml-4">
             
              <WishlistButton/>
              <p className="text-[10px] text-center max-w-full text-[#9699A6] mt-1 tab:hidden">لیست من</p>
              </div>
               

             
              <div className="flex flex-col justify-center items-center text-center ml-11 tab:ml-4">

            
               <div
               onClick={handleClickLike}
                className="text-[20px] relative tooltip flex  items-center justify-center cursor-pointer bg-[#414141] opacity-[70%] hover:opacity-[100%] hover:bg-[#6e6e6e] w-[42px] h-[42px] rounded-full"
                >
              
        <div className=" flex items-center justify-center absolute top-[53px] right-[-36px] tooltip_text text-[15px] invisible opacity-0 rounded-[4px] h-[48px] w-[110px] left-1 bg-white text-black transition-opacity duration-1000">
            دوست داشتم
        </div>
    
                <Like showFirstSvg2={showFirstSvg2}/>
              </div> 
               
              <p className=" text-[10px] text-center max-w-full text-[#9699A6] mt-1 tab:hidden ">دوست داشتم</p>
              </div>
               


              <div className="flex flex-col justify-center items-center text-center ">
              <div
               onClick={handleClickDisLike}
                className="text-[20px] relative tooltip flex  items-center justify-center cursor-pointer bg-[#414141] opacity-[70%] hover:opacity-[100%] hover:bg-[#6e6e6e] w-[42px] h-[42px] rounded-full"
                >
              
        <div className=" flex items-center justify-center absolute top-[53px] right-[-36px] tooltip_text text-[15px] invisible opacity-0 rounded-[4px] h-[48px] w-[110px] left-1 bg-white text-black transition-opacity duration-1000">
            دوست نداشتم
        </div>
                <DisLike  showFirstSvg3={showFirstSvg3}/>
              </div> 
              <p className="text-[10px] text-center max-w-full text-[#9699A6] mt-1 tab:hidden">دوست نداشتم</p>
              </div>
                           
              
            </div> 
             <p className="max-[799px]:hidden text-[10px] des:text-[12px] leading-8 large:text-[14px]" >
              ستارگان:Chris Pine-Michelle Rodriguez-Regé-Jean Page-Justice Smith
            </p>  
            <p className="max-[799px]:hidden text-[10px] des:text-[12px] large:text-[14px]" >
              کارگردان:James Cameron
            </p> 
          </div>
          </div>
          </div>
          </div>
     
    </>
  );
}


