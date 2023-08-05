import EmptyBookmark from '@/app/(components)/EmptyBookmark';
import MovieForSlider from '@/app/(components)/MovieForSlider'
import React from 'react'

export default function Liked() {

  
  // let emptyDisplay = "";
  // let cardDisplay ="";

  // if (true){
  //   emptyDisplay = "hidden" 
  //   cardDisplay = "flex"
  // }else{
  //   emptyDisplay = "flex"
  //   cardDisplay = "hidden" 
  // }

  
  return (
        <div className="min-h-[710px] pb-20">


            <div className={" block"}>
              <EmptyBookmark/>
            </div>

            <div className={` text-white w-full px-6 ml:px-7 des:px-10 flex flex-wrap  items-center `}>
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
               
                <div className=" w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                    <MovieForSlider/>
                </div> 
                
            </div>


        </div>
  )
}
