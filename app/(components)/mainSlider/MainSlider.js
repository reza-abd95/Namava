"use client";
import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";


// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import HeaderSliderComponent from "./HeaderSliderComponent";


export default function MainSlider() {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

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

      <Swiper
      
      style={{
        "--swiper-pagination-color": "#fff",
        "--swiper-pagination-bullet-inactive-color": "#5a5a5a",
      }}
        ref={swiperRef}
        pagination={windowWidth > 799
                ? false
                : true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
         
        }
      }
      loop={true}
        navigation={false}
        spaceBetween={30}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper w-full h-auto flex items-center justify-center relative"
      >
      

        <SwiperSlide className="w-full h-full">
          <HeaderSliderComponent className='object-cover w-full h-full block' />
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
        <img
              className='object-cover w-full h-full block'
                  src="./images/extractd.jpg"
                  alt="more"
                />
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
           <HeaderSliderComponent className='object-cover w-full h-full block' />        
        </SwiperSlide>
        
        <SwiperSlide className="w-full h-full">
        <HeaderSliderComponent className='object-cover w-full h-full block' />        </SwiperSlide>
        <div id="button" className=" min-[800px]:flex max-[799px]:hidden bottom-[6px] left-8 absolute z-20 min-[1050px]:bottom-[14%] des:left-10 large:left-14 large:bottom-[20%] ">

        <button
          className="opacity-70 w-10 h-10 large:w-[60px] large:h-[60px] rounded-full border-none bg-[#414141] "
          onClick={goPrev}
        >
          <img
            className="w-full h-full p-1.5 large:p-2 opacity-50 hover:opacity-100"
            src="/icons/ltr.svg"
            alt="prev"
          />
        </button>

        <button
          className=" opacity-70 w-10 h-10 large:w-[60px] large:h-[60px] rounded-full border-none bg-[#414141] mr-3 large:mr-5"
          onClick={goNext}
        >
          <img
            className="w-full h-full p-1.5 large:p-2 opacity-50 hover:opacity-100"
            src="/icons/rtl.svg"
            alt="next"
          />
        </button>
      </div>
      </Swiper>
    </>
  );
}
