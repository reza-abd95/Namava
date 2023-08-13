import React from 'react'
import { getMoviesData } from '@/app/utils/getdata';
import BookmarkCont from './BookmarkCont';


export default async function BookMarked() {
  const movieData = await getMoviesData()
  const movies = movieData.record
  
  return (
       <BookmarkCont movies={movies}/>
  )
}
