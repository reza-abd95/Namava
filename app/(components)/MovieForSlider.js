'use client'

import Image from "next/image"

export default function MovieForSlider() {
    return (
      <div>              
        <div className='relative inline-block'>
          <Image  className="block max-w-full h-auto rounded "
                  src={"/images/GOTG.jpg"}
                  width={1000}
                  height={1000}
                  alt='mehmooni' />
          <div className='top-0 left-0 w-full h-full bg-slate-950 bg-opacity-50 absolute opacity-0 hover:opacity-100 transition-all duration-500 delay-300	 '>
            <div>
              سلام به همه 
            </div>
          </div>
        </div>
        <p className="text-right pt-3 text-xs">نگهبانان کهکشان 3 </p>
      </div>
    )
  }
  