import React from 'react'
import { getMoviesData } from '@/app/utils/getdata';
import LikeCont from './LikeCont';


export default async function Liked() {
  const movieData = await getMoviesData()
  const movies = movieData.record
  
  return (
       <LikeCont movies={movies}/>
  )
}
