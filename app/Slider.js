'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './slider.css';

// import required modules
import { EffectFade, Autoplay, Pagination , Navigation} from 'swiper/modules'; 
import Test from './Test';
import Test2 from './Test2';

export default function Slider() {
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
  return (
    <>
         <div className="custom-navigation">
        <button onClick={goPrev}> prev</button>
        <button onClick={goNext}>next</button>
      </div>
      <Swiper 
      ref={swiperRef}
      pagination={true}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
         spaceBetween={30}
        effect={'fade'}
         modules={[Autoplay,EffectFade, Pagination,Navigation]} className="mySwiper">
        <SwiperSlide><Test2/></SwiperSlide> 
        
        <SwiperSlide><Test/></SwiperSlide> 
       
        <SwiperSlide ><Test2/></SwiperSlide> 
       
        <SwiperSlide><Test/></SwiperSlide> 
        <SwiperSlide><Test2/></SwiperSlide> 
        <SwiperSlide><Test/></SwiperSlide>

      </Swiper>
    </>
  );
}
