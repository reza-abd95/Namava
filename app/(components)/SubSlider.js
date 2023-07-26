'use client'

import Image from 'next/image'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation } from 'swiper/modules';

export default function SubSlider() {

    return (
      <>

        <Swiper
          slidesPerView={3.2}
          centeredSlides={true}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image  src="/images/mehmooni.jpg"
                    width={1000}
                    height={1000} />
          </SwiperSlide>
          <SwiperSlide>
            <Image  src="/images/mehmooni.jpg"
                    width={1000}
                    height={1000} />
          </SwiperSlide>
          <SwiperSlide>
            <Image  src="/images/mehmooni.jpg"
                    width={1000}
                    height={1000} />
          </SwiperSlide>
          <SwiperSlide>
            <Image  src="/images/mehmooni.jpg"
                    width={1000}
                    height={1000} />
          </SwiperSlide>
          <SwiperSlide>
            <Image  src="/images/mehmooni.jpg"
                    width={1000}
                    height={1000} />
          </SwiperSlide>
        </Swiper>
  
        
      </>
    );
  
}

