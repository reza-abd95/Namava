"use client";

import MovieLogo from "./MovieLogo";
import Image from "next/image";
import windowDimensions from "@/app/hooks/useWindowDimensions";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function HeaderSliderComponent({ data, actors }) {
  const windowWidth = windowDimensions();
  const router = useRouter();
  function clickhandler(){
    router.push(`movies/${data.id}`)
  }
  const getActorNames = () => {
    const ad=data.actors;

    const actorNames = ad?.map(id => {
      const actor = actors.find(a => a.id === id);
      return actor ? actor.name : "";
    });
    return actorNames?.join("، ");
  };
 
  return (
    <>
      <div className="text-[#fff]">
        <div className="w-full h-full relative flex flex-col ">
          <div className="relative mb-[12px] ml:mb-[32%] min-[600px]:mb-[20%] min-[700px]:mb-[11%] tab:mb-[64px] min-[900px]:mb-2 min-[1050px]:mb-0">
            <Image
              className="w-full h-full"
              width={999}
              height={468}
              src={windowWidth > 499 ? data.imageUrl : data.imageMobileUrl}
              alt={data.title}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
          </div>
          <div className="absolute flex flex-col justify-center items-center top-[26%] ml:block ml:top-[60px] tab:top-[85px]">
            <div className="w-[45%] mb-[44px] ml:w-[28%]  ml:mr-[20px] ml:mb[50px] tab:w-[20%] tab:mr-8 tab:mb-6 des:mr-11 des:w-[22%]">
              <Link href={`/movies/${data.id}`}>
                <MovieLogo  className="cursor-pointer" />
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center px-[14px]  text-center ml:block ml:text-start ml:px-[20px] tab:px-8 des:px-11">
              
                <h2 onClick={clickhandler} className="mb-6 ml:mb-4 tab:text-[19px] tab:mb-3 des:text-[21px] large:text-[24px] cursor-pointer  my-2">
                  {data.title}
                </h2>
              
              <div className="max-[1279px]:hidden flex flex-row justify-between items-center w-[410px]">
                <div className="bg-yellow-500 px-2 rounded-[4px] py-[3px] flex items-center text-center ml:px-3 des:px-[14px] des:py-[6px] ml:py-[5px]">
                  <p className="text-[15px] text-center des:text-[14px] large:text-[17px]">
                    {data.age}
                  </p>
                </div>
                <p className="text-[15px] des:text-[14px] large:text-[17px]">
                  {data.year}
                </p>
                <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">
                  {data.movieTime} دقیقه
                </p>
                <div className=" h-4 flex flex-row items-center">
                  <img
                    className="ml-1 h-3 ml:h-[14px]"
                    src="../images/imdb.png"
                    alt="imdb"
                  />
                  <p className="text-[10.5px] ml:text-[12px] des:text-[14px] font-bold large:text-[17px]">
                    {data.imdb}
                  </p>
                </div>

                <div className=" w-7 h-7 ml-2 p-0.5  flex flex-row items-center">
                  <Image
                    className="ml-1 mb-1 ml:w-5 ml:h-5"
                    width={10}
                    height={10}
                    src="../icons/like.svg"
                    alt="like"
                  />
                  <p className="text-[15px] des:text-[14px] large:text-[17px]">
                    {data.like}٪
                  </p>
                </div>
                <div className=" w-7 h-6 ml-2 p-0.5  flex flex-row items-center">
                  <Image
                    className="ml-1 ml:w-5 ml:h-5"
                    width={10}
                    height={10}
                    src="../icons/subtitle.svg"
                    alt="subtitle"
                  />
                  <p className="text-[15px] des:text-[14px] large:text-[17px]">
                    زیرنویس
                  </p>
                </div>
              </div>
              
                <p onClick={clickhandler} className="text-[13px] w-[500px] max-[799px]:hidden  des:text-[15px] des:w-[550px] cursor-pointer large:text-[17px] large:w-[700px]">
                  {data.description}
                </p>
              
             
                <p onClick={clickhandler} className="text-[13px] leading-loose cursor-pointer ml:mb-[48px] tab:mb-9 tab:mt-3 des:text-[15px] large:text-[17px]">
                  به زودی با دوبله اختصاصی نماوا به زودی با دوبله اختصاصی نماوا
                </p>
              
              <div className="  flex flex-row items-center mt-5 mb-4 max-[799px]:hidden ">
                <div className=" ml-2 p-0.5 cursor-pointer  hover:text-blue-500">
                  <Image
                    width={22}
                    height={22}
                    src="./icons/info-circle.svg"
                    alt="more"
                  />
                </div>
                
                  <p onClick={clickhandler} className="text-[13px] des:text-[15px]">توضیحات بیشتر</p>
                
              </div>
              <p className="max-[499px]:hidden text-[12px] large:text-[14px]">
              ستارگان: {getActorNames()} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
