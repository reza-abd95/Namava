'use client'


import React , { useState, useEffect } from 'react';
import windowDimensions from '../hooks/useWindowDimensions';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation } from 'swiper/modules';

export default function MovieSlider() {
  const  windowWidth  = windowDimensions();
  const [slidesPer, setSlidePer] = useState(1.1);
  const [centered, setCentered] = useState(true);


  useEffect(() => {
    switch (true) {
      case windowWidth > 1279:
        setSlidePer(7.5);
        setCentered(true);
        break;
      case windowWidth > 799:
        setSlidePer(2);
        setCentered(false);
        break;
      case windowWidth> 499:
        setSlidePer(2);
        setCentered(false);
        break;
      default:
        setSlidePer(1.2);
        setCentered(true);
    }
    
  }, [windowWidth]);

  return (
    <div>
      <Swiper
        initialSlide = {3}
        slidesPerView={slidesPer}
        centeredSlides={centered}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex justify-center items-center w-full h-auto my-20"

      >
          <SwiperSlide className="text-white w-full h-full text-center text-18  flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={"/images/GOTG.jpg"}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
                    <p className="text-right pt-3 text-xs">نگهبانان کهکشان 3 </p>
          </SwiperSlide>

          <SwiperSlide className=" w-full h-full text-center text-18 flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={"/images/GOTG.jpg"}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18 flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={"/images/GOTG.jpg"}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18  flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={"/images/GOTG.jpg"}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18  flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={"/images/GOTG.jpg"}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18  flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={"/images/GOTG.jpg"}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18  flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={"/images/GOTG.jpg"}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18  flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={"/images/GOTG.jpg"}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18  flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={"/images/GOTG.jpg"}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          
        </Swiper>
  
        </div>
        
      
    );
  
}

