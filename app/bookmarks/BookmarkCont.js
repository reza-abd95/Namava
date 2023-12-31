'use client'
import EmptyBookmark from '@/app/(components)/EmptyBookmark'
import MovieForSlider from '@/app/(components)/MovieForSlider'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function BookmarkCont({movies}) {
    const [displayEmpty , setDisplayEmpty] = useState()
    const [displayList , setDisplayList] = useState()
    const selector = useSelector(state => state.bookmark)
    const list = movies.filter(movie => selector.includes(movie.id))

    useEffect(() => {
        if(Object.keys(selector).length > 0){
            setDisplayEmpty("hidden")
            setDisplayList("flex")
            
        }else{
            setDisplayEmpty("flex")
            setDisplayList("hidden")
        }
      },[selector]);

  
  return (
    <div className="min-h-[710px] pb-20">

        <div className={`${displayEmpty}`}>
            <EmptyBookmark/>
        </div>

        <div className={` text-white w-full px-6 ml:px-7 des:px-10 ${displayList} flex-wrap`}>

            {list.map(movie => 
                    <div key={movie.id} className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                        <MovieForSlider  data={movie}/>
                    </div>
            )}
        
        </div>


</div>
  )
}
