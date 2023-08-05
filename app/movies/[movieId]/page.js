'use client'

import React from 'react'
import Comments from "@/app/(components)/Comments";
import AboutMovie from "@/app/(components)/movie/AboutMovie";
import MoviePicturs from "@/app/(components)/movie/MoviePictures";
import SlideShow from "@/app/(components)/movie/SlideShow";
import { useState } from "react";
import LOTR1 from '../../../public/images/LOTR1.jpg'
import LOTR2 from '../../../public/images/LOTR2.jpg'
import LOTR3 from '../../../public/images/LOTR3.jpg'
import LOTR4 from '../../../public/images/LOTR4.jpg'
import LOTR5 from '../../../public/images/LOTR5.jpg'
import LOTR6 from '../../../public/images/LOTR6.jpg'
import MovieHeader from '@/app/(components)/movieCover/MovieHeader';
import MovieSlider from '@/app/(components)/MovieSlider';
import FilmCrewSlider from '@/app/(components)/FilmCrewSlider';


const images = [LOTR1,LOTR2,LOTR3,LOTR4,LOTR5,LOTR6]
export default function MoiveId() {
  const [isVisible, setIsVisible] = useState({visible: false, imageId: null})
  return (
    <div>
      <MovieHeader/>
      <MoviePicturs images={images} isVisible={isVisible} setIsVisible={setIsVisible}/>
      <AboutMovie/>
      <SlideShow images={images} isVisible={isVisible} setIsVisible={setIsVisible}/>
      <FilmCrewSlider/>

      <MovieSlider/>
      <Comments/>
    </div>
  )
}
