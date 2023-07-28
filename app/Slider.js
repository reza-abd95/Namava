'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Test from '@/Test';

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide ><Test/></SwiperSlide> 
        <SwiperSlide ><Test/></SwiperSlide> 
        <SwiperSlide ><Test/></SwiperSlide> 
        <SwiperSlide><Test/></SwiperSlide> 
      </Swiper>
    </>
  );
}
