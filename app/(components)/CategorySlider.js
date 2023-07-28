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

export default function SubSlider() {
  const  windowWidth  = windowDimensions();
  const [slidesPer, setSlidePer] = useState(1.1);
  const [centered, setCentered] = useState(true);
  const [imager, setImage] = useState("");


  useEffect(() => {
    switch (true) {
      case windowWidth > 1279:
        setSlidePer(3.15);
        setCentered(true);
        setImage("/images/mehmooni.jpg");
        break;
      case windowWidth > 799:
        setSlidePer(2);
        setCentered(false);
        setImage("/images/mehmooni.jpg");
        break;
      case windowWidth> 499:
        setSlidePer(2);
        setCentered(false);
        setImage("/images/mehmooni-sm.jpg");
        break;
      default:
        setSlidePer(1.2);
        setCentered(true);
        setImage("/images/mehmooni-sm.jpg");
    }
    
  }, [windowWidth]);

  return (
    <div>
      <Swiper
        initialSlide = {1}
        slidesPerView={slidesPer}
        centeredSlides={centered}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex justify-center items-center w-full h-auto my-20"

      >
          <SwiperSlide className="text-white w-full h-full text-center text-18 bg-white flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={imager}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18 bg-white flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={imager}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18 bg-white flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={imager}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18 bg-white flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={imager}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          
          <SwiperSlide className="w-full h-full text-center text-18 bg-white flex justify-center items-center rounded cursor-pointer"> 
            <Image  className="block w-full h-full rounded"
                    src={imager}
                    width={1000}
                    height={1000}
                    alt='mehmooni' />
          </SwiperSlide>
          

        </Swiper>
  
        </div>
        
      
    );
  
}

