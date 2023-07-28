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
import Test from '/Test';

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide >
        <div 
      style={{
        background: `url('./images/jang.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

        width: '100%',
        height: '100%',
    
      }}
  ></div>
        </SwiperSlide>
        {/* <SwiperSlide>
        <div className='bg-red-500' 
      style={{
        background: `url('./images/jang.jpg')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        
        width: '100%',
        height: '360px',
        position: 'relative',
      }}
    >
        <h2
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(100%, -90%)',
          padding: '10px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        title
      </h2>
      <p
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(100%, -90%)',
          padding: '10px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        description
      </p>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
       خرید بلیط
      </button>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(20%, 20%)',
          padding: '10px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        پیش نمایش
      </button>
    </div>
        </SwiperSlide> */}
        <SwiperSlide className='flex-col'><Test/></SwiperSlide> 

        <SwiperSlide className='flex-col'><Test/></SwiperSlide> 
      </Swiper>
    </>
  );
}
