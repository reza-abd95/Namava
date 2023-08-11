"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import HeaderSliderComponent from "./HeaderSliderComponent";
import windowDimensions from "@/app/hooks/useWindowDimensions";

export default function MainSlider({ categoryId, movieData, subject, actors }) {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const windowWidth = windowDimensions();
  const [movieItem, setMovieItem] = useState([]);

  useEffect(() => {
    if (subject == "categoryPath") {
      setMovieItem(movieData.filter((item) => item.categoryId == categoryId));
    } else if (subject == "homePath") {
      setMovieItem(movieData.filter((item) => item.id < 12));
    }
  }, []);

  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-inactive-color": "#5a5a5a",
        }}
        ref={swiperRef}
        pagination={windowWidth > 799 ? false : true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={false}
        spaceBetween={30}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper w-full h-auto flex items-center justify-center relative mb-5 tab:mb-8 min-w-[1050px]:mb-0"
      >
        {movieItem.map((item) => {
          return (
            <SwiperSlide className="w-full h-full">
              <HeaderSliderComponent
                key={item.id}
                data={item}
                actors={actors}
                className="object-cover w-full h-full block"
              />
            </SwiperSlide>
          );
        })}

        <div
          id="button"
          className=" min-[800px]:flex max-[799px]:hidden bottom-[6px] left-8 absolute z-20 min-[1050px]:bottom-[14%] des:left-10 large:left-14 large:bottom-[20%] "
        >
          <button
            className="opacity-70 w-10 h-10 large:w-[60px] large:h-[60px] rounded-full border-none bg-[#414141] "
            onClick={goPrev}
          >
            <img
              className="w-full h-full p-1.5 large:p-2 opacity-50 hover:opacity-100"
              src="/icons/ltr.svg"
              alt="prev"
            />
          </button>

          <button
            className=" opacity-70 w-10 h-10 large:w-[60px] large:h-[60px] rounded-full border-none bg-[#414141] mr-3 large:mr-5"
            onClick={goNext}
          >
            <img
              className="w-full h-full p-1.5 large:p-2 opacity-50 hover:opacity-100"
              src="/icons/rtl.svg"
              alt="next"
            />
          </button>
        </div>
      </Swiper>
    </>
  );
}
