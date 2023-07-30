'use client'

import Image from "next/image"

export default function MovieForSlider() {
    function clickHandler() {
      console.log("miad")
    }
    return (
      <div onClick={clickHandler}>              
        <div className='relative inline-block'>
          <Image  className="block max-w-full h-auto rounded "
                  src={"/images/GOTG.jpg"}
                  width={1000}
                  height={1000}
                  alt='mehmooni' />
          <div className='top-0 left-0 w-full h-full bg-slate-950 bg-opacity-50 absolute opacity-0 tab:hover:opacity-100 transition-all duration-500 delay-300	 '>
            <div className=" w-full h-full flex flex-col justify-end items-start pr-4 pb-4 text-sm">
              <div >فیلم-2023</div>
              <div className=" flex justify-center align-middle items-center pt-2 "><Image src={"/images/heart.png"} width={25} height={15} alt="imdb"className=" pl-2"/>92%</div>
              <div className=" flex justify-center align-middle items-center pt-2 "><Image src={"/images/imdb.png"} width={40} height={15}alt="imdb"className=" pl-2"/>7.5</div>
              <div className=" flex justify-center align-middle items-center pt-2 "><Image src={"/images/sub.png"} width={25} height={15} alt="imdb" className=" pl-2"/> زیرنویس </div>
            </div>
          </div>
        </div>
        <p className="text-right pt-3 text-xs">نگهبانان کهکشان 3 </p>
      </div>
    )
  }
  