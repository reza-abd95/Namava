'use client'

import React , { useState, useEffect, Suspense } from 'react';
import windowDimensions from '../hooks/useWindowDimensions';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation } from 'swiper/modules';

export default function CategorySlider({data}) {
  


  const  windowWidth  = windowDimensions();
  const [slidesPer, setSlidePer] = useState(1.1);
  const [centered, setCentered] = useState(true);


  useEffect(() => {
    switch (true) {
      case windowWidth > 1279:
        setSlidePer(3.15);
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
        setSlidePer(1.15);
        setCentered(true);
    }
    
  }, [windowWidth]);



  return (
    <div className=' mb-12'>
      
      <Swiper
        initialSlide = {1}
        loop = {true}
        autoHeight = {true}
        slidesPerView={slidesPer}
        centeredSlides={centered}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex justify-center items-center w-full"

      >
        {data.map(item  =>{
          return(

            <SwiperSlide key={item.id} className=" w-full  text-center text-18 bg-white flex justify-center items-center rounded cursor-pointer"> 
              <Image  className="block w-full  rounded"
                      src={windowWidth < 500 ? item.imageMobileUrl : item.imageUrl}
                      width={1000}
                      height={400}
                      alt={item.title}
                      />
            </SwiperSlide>

          )
          })}


        
        </Swiper>
  
      </div>
        
      
    );
  
}




{/* <SwiperSlide className=" w-full h-full text-center text-18 bg-white flex justify-center items-center rounded cursor-pointer"> 
<Image  className="block w-full h-full rounded"
        src="/images/mehmooni.jpg"
        width={1000}
        height={1000}
        alt="mehmooni.jpg"/>
</SwiperSlide> */}
