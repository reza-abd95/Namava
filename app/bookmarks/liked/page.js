'use client'
import EmptyBookmark from '@/app/(components)/EmptyBookmark';
import MovieForSlider from '@/app/(components)/MovieForSlider'
import React from 'react'
import { useSelector } from 'react-redux';


export default function Liked() {
  const selector = useSelector(state => state.like)

  
  return (
        <div className="min-h-[710px] pb-20">


            <div className={" block"}>
              {selector.map(item => {
                return(
                  <p className=' text-white text-sm'>{item}</p>
                )
              })}
              <EmptyBookmark/>
            </div>
{/* 
            <div className={` text-white w-full px-6 ml:px-7 des:px-10 flex flex-wrap  items-center `}>
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
            </div> */}


        </div>
  )
}
