'use client'

import MovieForSlider from "../MovieForSlider"
export default function SearchResult({movies}) {

    return (
        <div className=" text-white w-full mt-[48px] px-6 ml:px-7 des:px-10 flex flex-wrap">
            {
                movies.map((item,index) => {
                    return(
                    <div key={index+1} className="w-1/3 ml:w-1/4 tab:w-1/5  des:w-[14.2%]  px-1 py-4 ml:px-2 des:3">
                       <MovieForSlider data={item}/>
                    </div>
                    )
                })
            }
        </div>
    )
}