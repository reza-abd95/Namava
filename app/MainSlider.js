"use client";
import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./mainslider.css";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Test from "./Test";
import Test2 from "./Test2";

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
      <div className=" min-[800px]:flex max-[799px]:hidden ">
        <button
          className="opacity-50 w-10 h-10 rounded-full border-none bg-gray-300 "
          onClick={goPrev}
        >
          <img
            className="w-full h-full p-1.5 opacity-50 hover:opacity-100"
            src="/icons/ltr.svg"
            alt="prev"
          />
        </button>
        <button
          className="opacity-50 w-10 h-10 rounded-full border-none bg-gray-300 mr-3"
          onClick={goNext}
        >
          <img
            className="w-full h-full p-1.5 opacity-50 hover:opacity-100"
            src="/icons/rtl.svg"
            alt="next"
          />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        pagination={windowWidth > 800
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
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <Test2 />
        </SwiperSlide> */}

        <SwiperSlide>
          <Test className='relative' />
        </SwiperSlide>

        {/* <SwiperSlide>
          <Test2 />
        </SwiperSlide> */}

        <SwiperSlide>
        <Test className='relative' />        </SwiperSlide>
        {/* <SwiperSlide>
          <Test2 />
        </SwiperSlide> */}
        <SwiperSlide>
        <Test className='relative' />        </SwiperSlide>
      </Swiper>
    </>
  );
}
