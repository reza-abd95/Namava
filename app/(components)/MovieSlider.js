'use client'


import React , { useState, useEffect } from 'react';
import windowDimensions from '../hooks/useWindowDimensions';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation } from 'swiper/modules';
import MovieForSlider from './MovieForSlider';

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
        setSlidePer(5.3);
        setCentered(true);
        break;
      case windowWidth> 499:
        setSlidePer(4.2);
        setCentered(false);
        break;
      default:
        setSlidePer(3.3);
        setCentered(true);
    }
    
  }, [windowWidth]);

  return (
    
    <div>
      <p className=" text-white text-right mr-14 text-lg "> اکشن </p>
      <Swiper
        initialSlide = {3}
        slidesPerView={slidesPer}
        centeredSlides={centered}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper flex justify-center items-center w-full h-auto mb-20 mt-5"
      >
          <SwiperSlide className="movie-slide"> 
            <MovieForSlider/>
          </SwiperSlide>
          
          <SwiperSlide className="movie-slide"> 
            <MovieForSlider/>
          </SwiperSlide>

          <SwiperSlide className="movie-slide"> 
            <MovieForSlider/>
          </SwiperSlide>
          
          <SwiperSlide className="movie-slide"> 
            <MovieForSlider/>
          </SwiperSlide>

          <SwiperSlide className="movie-slide"> 
            <MovieForSlider/>
          </SwiperSlide>

          <SwiperSlide className="movie-slide"> 
            <MovieForSlider/>
          </SwiperSlide>
          

          <SwiperSlide className="movie-slide"> 
            <MovieForSlider/>
          </SwiperSlide>

          <SwiperSlide className="movie-slide"> 
            <MovieForSlider/>
          </SwiperSlide>

          <SwiperSlide className="movie-slide"> 
            <MovieForSlider/>
          </SwiperSlide>


          
          
        </Swiper>
  
        </div>
        
      
    );
  
}

