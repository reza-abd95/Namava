'use client'

import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function MovieForSlider({data}) {
  const router = useRouter()

    function clickHandler() {
      router.replace(`/movies/${data.id}`)
    }
    
    return (
      <div onClick={clickHandler} className=" cursor-pointer">              
        <div className='relative inline-block text-white'>
          <Image  className="block max-w-full h-auto rounded "
                  src={data.imagePageUrl}
                  width={412}
                  height={604}
                  alt={data.imagePageUrl}
                  loading="lazy"
                  />
          <div className='top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black  absolute opacity-0 tab:hover:opacity-100 transition-all duration-500 delay-300	 '>
            <div className=" w-full h-full flex flex-col justify-end items-start pr-4 pb-4 text-sm">
              <div >فیلم - {data.year}</div>
              <div className=" flex justify-center align-middle items-center pt-2 "><Image src={"/images/heart.png"} width={25} height={15} alt="imdb"className=" pl-2"/>{data.like}%</div>
              <div className=" flex justify-center align-middle items-center pt-2 "><Image src={"/images/imdb.png"} width={40} height={15}alt="imdb"className=" pl-2"/>{data.imdb}</div>
              <div className=" flex justify-center align-middle items-center pt-2 "><Image src={"/images/sub.png"} width={25} height={15} alt="imdb" className=" pl-2"/> زیرنویس </div>
            </div>
          </div>
        </div>
        <p className="text-right pt-3 text-xs">{data.title}</p>
      </div>
    )
  }
  