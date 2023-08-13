"use client";

import MovieLogo from "./MovieLogo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ageNumberFaHandler from "@/app/utils/ageNumberFaHandler";
import ageColorHandler from "@/app/utils/ageColorHandler";
import BackGroundImage from "./BackGroundImage";
import Link from "next/link";
import { useCallback } from "react";

export default function HeaderSliderComponent({ data, actorsData }) {
  const {
    id,
    age,
    title,
    imageUrl,
    imageMobileUrl,
    logoUrl,
    year,
    movieTime,
    like,
    imdb,
    description,
    actors,
  } = data;
  const router = useRouter();
  const clickHandler = useCallback(() => {
    router.replace(`/movies/${id}`);
  })
  const getActorNames = () => {
    const ad = actors.slice(0,5);
    const actorNames = ad?.map((id) => {
      const actor = actorsData.find((a) => a.id === id);
     return actor ? actor.name : "";
    });
     return actorNames?.join("، ");
  };

  const ageColor = ageColorHandler(age);
  const ageFaNumber = ageNumberFaHandler(age);

  return (
    <>
      <div className="text-[#fff] bg-[#121212]">
        <div className="w-full h-full relative flex flex-col ">
          <BackGroundImage
            imageUrl={imageUrl}
            imageMobileUrl={imageMobileUrl}
            title={title}
          />
          <div className="absolute flex flex-col justify-center items-center top-[36%] ms:top-[55%] ml:block ml:top-[80px] tab:top-[90px] large:top-[20%]">
            <div className="w-[40%] ml:w-[25%] mb-[10px] ml:mr-[20px] ml:mb[50px] tab:mr-8 tab:mb-6 des:mr-11 des:mb-[44px] large:w-[35%]">
              <MovieLogo onClick={clickHandler} src={logoUrl} alt={title} />
            </div>
            <div className="flex flex-col justify-center items-center px-[14px]  text-center ml:block ml:text-start ml:px-[20px] tab:px-8 des:px-11">
              <Link href={`/movies/${id}`}>
                <h2 className="mb-6 ml:mb-4 tab:text-[19px] tab:mb-3 des:text-[21px] large:text-[24px] cursor-pointer  my-2">
                  {title}
                </h2>
              </Link>
              <div className="hidden des:flex flex-row justify-between items-center mb-3 w-[410px]">
                <div
                  className={
                    "px-2 rounded-[4px] py-[3px] flex items-center text-center ml:px-3 ml:py-[5px] tab:px-[14px] tab:py-[6px] des:py-[7px]" +
                    " " +
                    ageColor
                  }
                >
                  <p className="text-[10.5px] text-[black] ml:text-[12px] text-center des:text-[14px] large:text-[17px]">
                    {ageFaNumber}
                  </p>
                </div>
                <p className="text-[15px] des:text-[14px] large:text-[17px]">
                  {year}
                </p>
                <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">
                  {movieTime} دقیقه
                </p>
                <div className=" h-4 flex flex-row justify-center items-center">
                  <img
                    className="ml-1 h-3 ml:h-[13px]"
                    src="../images/imdb.png"
                    alt="imdb"
                  />
                  <p className="text-[10.5px] ml:text-[12px] des:text-[14px] font-bold large:text-[17px]">
                    {imdb}
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
                  <p className="text-[14px] large:text-[17px]">{like}٪</p>
                </div>
                <div className=" w-7 h-6 ml-2 p-0.5  flex flex-row items-center">
                  <Image
                    className="ml-1 ml:w-5 ml:h-[18px]"
                    width={10}
                    height={10}
                    src="../icons/subtitle.svg"
                    alt="subtitle"
                  />
                  <p className="text-[14px] large:text-[17px]">زیرنویس</p>
                </div>
              </div>
              <Link href={`/movies/${id}`}>
                <p className="text-[12px] leading-[25px] w-[530px] hidden tab:block des:text-[14px] des:w-[550px] cursor-pointer large:text-[17px] large:w-[700px]">
                  {description}
                </p>
              </Link>
              <Link href={`/movies/${id}`}>
                <p className="text-[12px] leading-loose cursor-pointer ml:mb-[48px] tab:mb-5 tab:mt-3 des:text-[14px] des:mt-5 large:text-[17px]">
                  به زودی با دوبله اختصاصی نماوا
                </p>
              </Link>
              <Link href={`/movies/${id}`}>
                <div className=" w-[138px] tab:flex flex-row items-center mt-2 mb-2 hidden text-[12px] cursor-pointer  hover:text-blue-500 ">
                  <p className="mt-2 ml-2 font-thin text-[35px]">🛈</p>
                  توضیحات بیشتر
                </div>
              </Link>
              <p className="hidden ml:block text-[12px] large:text-[14px]">
                ستارگان: {getActorNames()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
