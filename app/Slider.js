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
import { EffectFade, Navigation, Pagination } from 'swiper/modules'; 
import Test from './Test';


export default function Slider() {
  return (
    <>
      <Swiper pagination={true}  spaceBetween={30}
        effect={'fade'}
         modules={[EffectFade, Pagination]} className="mySwiper">
        <SwiperSlide className='flex-col'><Test/></SwiperSlide> 
        
        <SwiperSlide className='flex-col'><Test/></SwiperSlide> 
       
        <SwiperSlide className='flex-col'><Test/></SwiperSlide> 
       
        <SwiperSlide><Test/></SwiperSlide> 
       
      </Swiper>
    </>
  );
}
