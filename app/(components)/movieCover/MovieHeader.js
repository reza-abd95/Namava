"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect, Suspense } from "react";
import Like from "./Like";
import DisLike from "./DisLike";
import "./css.css";
import WishlistButton from "./WishlistButton";
import windowDimensions from "@/app/hooks/useWindowDimensions";
import ageNumberFaHandler from "@/app/utils/ageNumberFaHandler";
import ageColorHandler from "@/app/utils/ageColorHandler";
import MovieLogo from "../mainSlider/MovieLogo";
//--------------Video Player---------------//
import { togglelike } from "@/app/redux/likeSlice";
import { useDispatch, useSelector } from "react-redux";
import MainSliderLoading from "../mainSlider/MainSliderLoading";

//handling background change

export default function MovieHeader({
  movieId,
  image,
  imageMobile,
  movieTime,
  age,
  logoUrl,
  movieName,
  movieyear,
  imdb,
  like,
  isDubbed,
  hasSub,
  description,
  director,
  actorsName,
}) {
  const windowWidth = windowDimensions();
  const selector = useSelector((state) => state.like);
  const dispatch = useDispatch();
  const ageColor = ageColorHandler(age);
  const ageFaNumber = ageNumberFaHandler(age);
  //handling button's icon

  const [showFirstSvg2, setShowFirstSvg2] = useState();
  const [showFirstSvg3, setShowFirstSvg3] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (movieId) {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    const index = selector.findIndex((item) => item == movieId);
    if (index == -1) {
      setShowFirstSvg2(true);
    } else {
      setShowFirstSvg2(false);
    }
  }, [selector]);
  //--------------------Videio Player---------------------//
  const [width, setWidth] = useState(window.innerWidth);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleOnPlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };
  const handleOnClose = () => {
    setIsPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };
  let dimention;
  if (windowWidth < 500) {
    dimention = 17;
  } else if (windowWidth < 800) {
    dimention = 20;
  } else {
    dimention = 30;
  }

  //--------------------Videio Player---------------------//
  const handleClickLike = () => {
    if (showFirstSvg2 === false) {
      setShowFirstSvg2(true);
      console.log(selector);
      dispatch(togglelike(+movieId));
    } else {
      dispatch(togglelike(+movieId));
      setShowFirstSvg2(false);
      setShowFirstSvg3(true);
      console.log(selector);
    }
  };

  const handleClickDisLike = () => {
    if (showFirstSvg3 === false) {
      setShowFirstSvg3(true);
    } else {
      setShowFirstSvg3(false);
      setShowFirstSvg2(true);
    }
    if (showFirstSvg3 === true && showFirstSvg2 === false) {
      dispatch(togglelike(+movieId));
    }
  };

  return (
<>
     {loading ? (
          <Suspense>
            <MainSliderLoading/>
          </Suspense>
        ):( 

      <div className="text-[#fff]  bg-[#121212] ">
      {/*-------------------------------------------------------*/}
      <div
        onClick={handleOnClose}
        className={`SlideShow__background ${isPlaying ? "" : "hidden"}`}
      >
        <div className="flex items-center justify-center">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="SlideShow__imageHolder relative rounded-none overflow-visible"
          >
            <svg
              onClick={handleOnClose}
              className="absolute left-0 top-[-28px] ml:top-[-40px] tab:top-[-52px] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width={`${dimention}`}
              height={`${dimention}`}
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
              />
            </svg>
            <div>
              <video ref={videoRef} disablePictureInPicture controls>
                <source
                  src="https://static.namava.ir/Content/Upload/Images/897468ed-8cb7-44dc-b482-a7cf831684f8.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/*-------------------------------------------------------*/}
      <div className="w-full h-full relative flex flex-col ml:max-h-[534px] tab:max-h-none mb-8 justify-center tab:justify-start items-center tab:items-stretch ">
        <div className="relative mb-[168px]  ml:mb-[240px] tab:mb-[160px] min-[900px]:mb-[90px] des:mb-0">
          <Image
            className="w-full h-full "
            width={windowWidth > 499 ? 1920 : 1000}
            height={windowWidth > 499 ? 900 : 1350}
            src={windowWidth > 499 ? image : imageMobile}
            alt={movieName}
          />
          <div className="absolute w-[50%] inset-0 bg-gradient-to-l from-[#121212] to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
        </div>
        <div className="absolute flex flex-col justify-center items-center top-[36%] ms:top-[55%] ml:block ml:top-[80px] tab:top-[90px] large:top-[20%]">
          <div className="hidden tab:flex w-[40%] mb-[44px] ml:w-[25%] ml:mr-[20px] ml:mb[50px] tab:mr-8 tab:mb-6 des:mr-11 large:w-[35%]">
            <MovieLogo
              className="hidden tab:flex"
              src={logoUrl}
              alt={movieName}
            />
          </div>
          <div className="flex flex-col justify-center items-center px-[14px] tab:justify-start tab:items-stretch text-center ml:text-start ml:px-[20px] tab:px-8 des:px-11">
            <h2 className="text-[14px] ml:text-[16px] mb-2 ml:mb-0 tab:text-[19px] tab:mb-3 des:text-[21px] large:text-[24px]">
              {movieName}
            </h2>
            <div className=" flex flex-row justify-between items-center w-full max-w-[90%] ml:max-w-[400px] mt-1 mb-3">
              <div
                className={
                  "px-2 rounded-[4px] py-[3px] flex items-center text-center ml:px-3 ml:py-[5px] tab:px-[14px] tab:py-[6px] des:py-[7px]" +
                  " " +
                  ageColor
                }
              >
                <p className="text-[10.5px] ml:text-[12px] text-center des:text-[14px] large:text-[17px] text-black">
                  {ageFaNumber}
                </p>
              </div>
              <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">
                {movieyear}
              </p>
              <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">
                {" "}
                {movieTime} دقیقه{" "}
              </p>
              <div
                className={
                  "h-4 flex-row justify-center items-center" + " " + imdb
                    ? "flex"
                    : "hidden"
                }
              >
                <img
                  className="ml-1 h-2 mt-[2px] ml:h-[14px]"
                  src="../images/imdb.png"
                  alt="imdb"
                />
                <p className="text-[10.5px] ml:text-[12px] des:text-[14px] font-bold large:text-[17px]">
                  {imdb}
                </p>
              </div>

              <div
                className={
                  "w-7 h-7 ml-2 p-0.5 flex-row items-center" + " " + like
                    ? "flex"
                    : "hidden"
                }
              >
                <Image
                  className="ml-1 mb-1 ml:w-5 ml:h-5"
                  width={10}
                  height={10}
                  src="../icons/like.svg"
                  alt="like"
                />
                <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">{`${like} %`}</p>
              </div>
              <div
                className={
                  `w-7 h-6 ml-2 p-0.5 flex-row items-center` + " " + hasSub
                    ? "flex"
                    : "hidden"
                }
              >
                <Image
                  className="ml-1 ml:w-5 ml:h-5"
                  width={10}
                  height={10}
                  src="../icons/subtitle.svg"
                  alt="subtitle"
                />
                <p className="text-[10.5px] ml:text-[12px] des:text-[14px] large:text-[17px]">
                  زیرنویس
                </p>
              </div>
            </div>

            <p className="text-[12px] text-center  ml:leading-5 max-w-[317px] ml:max-w-[452px] tab:text-start tab:max-w-[525px] des:max-w-none des:text-[15px] des:w-[550px] large:text-[17px] large:w-[700px]">
              {description}
            </p>
            <p className="text-[12px] text-center mt-4 ml:mb-2 max-w-[317px] tab:max-w-[525px] tab:text-start leading-loose ml:max-w-[452px]  tab:mb-2 tab:mt-3 des:text-[15px] large:text-[17px]">
              دوبله اختصاصی نماوا
            </p>
            <div
              onClick={handleOnPlay}
              className=" my-[21px] cursor-pointer max-w-[100px] tab:hidden flex items-center justify-center h-[42px] bg-[#414141] opacity-[80%] hover:opacity-[100%] hover:bg-[#6e6e6e] rounded-[4px]"
            >
              <p className="text-[12px] px-4">پیش‌ نمایش</p>
            </div>
            <p className="hidden ml:flex tab:hidden mb-2 text-[12px] large:text-[14px]">
              ستارگان:
              {actorsName.map((actorName) => {
                return actorName + " , ";
              })}
            </p>
            <p className="hidden ml:flex  tab:hidden mb-4 text-[12px] large:text-[14px]">
              کارگردان: {director}
            </p>
            <div className="flex flex-row items-center mb-4 tab:mb-2 tab:mt-3 ">
              <div
                onClick={handleOnPlay}
                className=" my-[21px] cursor-pointer tab:my-0 hidden tab:flex items-center justify-center ml-4 h-[42px] bg-[#414141] opacity-[70%] hover:opacity-[100%] hover:bg-[#6e6e6e] rounded-[4px]"
              >
                <p className="text-[12px] px-5">پیش‌ نمایش</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center ml-12 tab:ml-4">
                <WishlistButton movieId={movieId} />
                <p className="text-[10px] text-center max-w-full text-[#9699A6] mt-1 tab:hidden">
                  لیست من
                </p>
              </div>

              <div className="flex flex-col justify-center items-center text-center ml-9 tab:ml-4">
                <div
                  onClick={handleClickLike}
                  className="text-[20px] relative tooltip flex  items-center justify-center cursor-pointer bg-[#414141] opacity-[70%] hover:opacity-[100%] hover:bg-[#6e6e6e] w-[42px] h-[42px] rounded-full"
                >
                  <div className="hidden  tab:flex items-center justify-center absolute top-[53px] right-[-36px] tooltip_text text-[15px] invisible opacity-0 rounded-[4px] h-[48px] w-[110px] left-1 bg-white text-black transition-opacity duration-1000">
                    دوست داشتم
                  </div>

                  <Like showFirstSvg2={showFirstSvg2} />
                </div>

                <p className=" text-[10px] text-center max-w-full text-[#9699A6] mt-1 tab:hidden ">
                  دوست داشتم
                </p>
              </div>

              <div className="flex flex-col justify-center items-center text-center ">
                <div
                  onClick={handleClickDisLike}
                  className="text-[20px] relative tooltip flex  items-center justify-center cursor-pointer bg-[#414141] opacity-[70%] hover:opacity-[100%] hover:bg-[#6e6e6e] w-[42px] h-[42px] rounded-full"
                >
                  <div className="hidden  tab:flex items-center justify-center absolute top-[53px] right-[-36px] tooltip_text text-[15px] invisible opacity-0 rounded-[4px] h-[48px] w-[110px] left-1 bg-white text-black transition-opacity duration-1000">
                    دوست نداشتم
                  </div>
                  <DisLike showFirstSvg3={showFirstSvg3} />
                </div>
                <p className="text-[10px] text-center max-w-full text-[#9699A6] mt-1 tab:hidden">
                  دوست نداشتم
                </p>
              </div>
            </div>
            <p className="hidden tab:flex text-[10px] des:text-[12px] leading-8 large:text-[14px]">
              ستارگان:
              {actorsName.map((actorName) => {
                return actorName + " , ";
              })}
            </p>
            <p className="hidden tab:flex text-[10px] des:text-[12px] large:text-[14px]">
              کارگردان: {director}
            </p>
          </div>
        </div>
      </div>
      </div>


        )}

      
</>
  );
}




