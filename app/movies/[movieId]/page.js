

import React from 'react'
import Comments from "@/app/(components)/Comments";
import AboutMovie from "@/app/(components)/movie/AboutMovie";
import MoviePicturs from "@/app/(components)/movie/MoviePictures";
import MovieHeader from '@/app/(components)/movieCover/MovieHeader';

import {getMoviesData , getCategoriesData , getActorData} from "@/app/utils/getdata";
import MovieSlider from '@/app/(components)/MovieSlider';
import FilmCrewSlider from '@/app/(components)/FilmCrewSlider';


export default async function MoiveId({params}) {
  
  const actorsRowData = await getActorData();
  const categoriesRowData = await getCategoriesData();
  const moviesRowData = await getMoviesData();
  const actorsData = actorsRowData.record;
  const categoriesData = categoriesRowData.record;
  const moviesData = moviesRowData.record;
  const movieId = params.movieId;
  const movieData = moviesData.find((movie)=>{
    return movie.id == movieId;
  })
  const otherCategoriesId = movieData.otherCategoriesId;
  const actorsId = movieData.actors;
  const categoryId = movieData.categoryId;
  const categorymovie = moviesData.filter((movie)=>{
    return movie.categoryId == categoryId
  })
  // create Categories Name data in Array

  let otherCategorieName = []
  for (let index = 0; index < otherCategoriesId.length; index++) {
    const catId = otherCategoriesId[index];
    for (let index2 = 0; index2 < categoriesData.length; index2++) {
      const catData = categoriesData[index2];
      if (catId == catData.id) {
        otherCategorieName.push(catData.name)
      }
    }
  }

  // create Categories Name data in Array
  const actors = []
  let actorsName = []
  for (let index = 0; index < actorsId.length; index++) {
    const actorId = actorsId[index];
    for (let index2 = 0; index2 < actorsData.length; index2++) {
      const actorData = actorsData[index2];
      if (actorId == actorData.id) {
        actorsName.push(actorData.name)
        actors.push(actorData)
      }
    }
  }
  console.log("actors is : ", actorsName);
  return (
    <div>
      <MovieHeader 
        movieName={movieData.title}  
        imageMobile={movieData.imageMobileUrl} 
        image={movieData.imageUrl}
        movieTime={movieData.movieTime}
        movieyear = {movieData.year}
        imdb = {movieData.imdb}
        like = {movieData.like}
        isDubbed = {movieData.isDubbed}
        description = {movieData.description}
        director = {movieData.director}
        hasSub = {movieData.hasSub}
        age = {movieData.age}
        logoUrl = {movieData.logoUrl}
        actorsName ={actorsName}
      />
      {/* <div className="h-[400px]"></div> */}
      <MoviePicturs images={movieData.otherImages} movieName = {movieData.titleEn}/>
      <AboutMovie 
        name= {movieData.title}
        nameEn = {movieData.titleEn}
        story = {movieData.story}
        otherCategorieName = {otherCategorieName}
        langDubbing = {movieData.langDubbing}
        langSubtitle = {movieData.langSubtitle}
      />
      <span>{`بر اساس فیلم ${movieData.title}`}</span>
      <MovieSlider data= {categorymovie}/>
      <div></div>
      <FilmCrewSlider data={actors}/>
      <Comments movieId = {movieId}/>
    </div>
  )
}
