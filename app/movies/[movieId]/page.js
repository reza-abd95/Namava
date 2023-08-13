import React from 'react'
import Comments from "@/app/(components)/Comments";
import AboutMovie from "@/app/(components)/movie/AboutMovie";
import MoviePictures from "@/app/(components)/movie/MoviePictures";
import MovieHeader from '@/app/(components)/movieCover/MovieHeader';

import {getMoviesData , getCategoriesData , getActorData , getAgentsData} from "@/app/utils/getdata";
import MovieSlider from '@/app/(components)/MovieSlider';
import FilmCrewSlider from '@/app/(components)/FilmCrewSlider';
import MovieCrewSlider from '@/app/(components)/MovieCrewSlider';

export async function generateMetadata({params}) {
  const moviesRowData = await getMoviesData();
  const moviesData = moviesRowData.record;
  const movieId = params.movieId;
  const movie = moviesData.find((movie)=>{
    return movie.id == movieId;
  })
  return {
    title: movie.title,
    description : movie.description
  }
}
export default async function MovieId({params}) {
  const actorsRowData = await getActorData();
  const categoriesRowData = await getCategoriesData();
  const moviesRowData = await getMoviesData();
  const agentsRowData = await getAgentsData();
  const agentsData = agentsRowData.record;
  const actorsData = actorsRowData.record;
  const categoriesData = categoriesRowData.record;
  const moviesData = moviesRowData.record;
  const movieId = params.movieId;
  const movieData = moviesData.find((movie)=>{
    return movie.id == movieId;
  })
  const otherCategoriesId = movieData.otherCategoriesId;
  const actorsId = movieData.actors;
  const agentsId = movieData.agents;
  const categoryId = movieData.categoryId;
  const categoryMovie = moviesData.filter((movie)=>{
    return movie.categoryId == categoryId
  })
  // create Categories Name data in Array

  let otherCategoryName = []
  for (let index = 0; index < otherCategoriesId.length; index++) {
    const catId = otherCategoriesId[index];
    for (let index2 = 0; index2 < categoriesData.length; index2++) {
      const catData = categoriesData[index2];
      if (catId == catData.id) {
        otherCategoryName.push(catData.name)
      }
    }
  }

  // create Actors Name data in Array
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
  const actorsNewName = [];
  for (let index = 0 ; index < 5 ; index++) {
    const element = actorsName[index];
    actorsNewName.push(element)
  }
  // create Agents data in Array
  const agents = []
  for (let index = 0; index < agentsId.length; index++) {
    const agentId = agentsId[index];
    for (let index2 = 0; index2 < agentsData.length; index2++) {
      const agentData = agentsData[index2];
      if (agentId == agentData.id) {
        agents.push(agentData)
      }
    }
  }
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
        actorsName ={actorsNewName}
        movieId={movieId}
      />

      <MoviePictures images={movieData.otherImages} movieName = {movieData.titleEn}/>
      <AboutMovie 
        name= {movieData.title}
        nameEn = {movieData.titleEn}
        story = {movieData.story}
        otherCategorieName = {otherCategoryName}
        langDubbing = {movieData.langDubbing}
        langSubtitle = {movieData.langSubtitle}
      />
      <MovieSlider title={`بر اساس فیلم ${movieData.title}`} data= {categoryMovie} link={`/categories/${movieData.categoryId}`}/>
      <FilmCrewSlider title={`بازیگران فیلم ${movieData.title}`} data={actors}/>
      <MovieCrewSlider title={`عوامل فیلم ${movieData.title}`} data={agents}/>
      <Comments movieId = {movieId}/>
    </div>
  )
}
