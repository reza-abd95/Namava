'use client'


import React , { useState, useEffect } from 'react';
import windowDimensions from '../hooks/useWindowDimensions';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import FilmCrew from './FilmCrew';

export default function FilmCrewSlider({data}) {
  const  windowWidth  = windowDimensions();
  const [slidesPer, setSlidePer] = useState(1.1);
  const [space, setSpace] = useState(15);
  const [centered, setCentered] = useState(true);



  useEffect(() => {
    switch (true) {
      case windowWidth > 1279:
        setSlidePer(7.5);
        setCentered(true);
        setSpace(15)

        break;
      case windowWidth > 799:
        setSlidePer(5.3);
        setCentered(true);
        setSpace(15)
        break;
      case windowWidth> 499:
        setSlidePer(4);
        setCentered(false);
        setSpace(35)

        break;
      default:
        setSlidePer(3.3);
        setCentered(true);
        setSpace(15)

    }
    
  }, [windowWidth]);

  return (
    
    <div>
      <p className=" text-white text-right mr-14 text-lg "> ستارگان </p>
      <Swiper
        initialSlide = {3}
        slidesPerView={slidesPer}
        centeredSlides={centered}
        spaceBetween={space}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex justify-center items-center w-full h-auto mb-20 mt-5">
          {data.map(item =>{
          return(

            <SwiperSlide className="movie-slide"> 
              <FilmCrew data={item}/>
            </SwiperSlide>

          )
          })}


        </Swiper>
  
        </div>
        
      
    );
  
}

