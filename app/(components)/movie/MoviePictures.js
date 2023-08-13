'use client'
import Image from "next/image";
import SlideShow from "./SlideShow";
import { useState } from "react";
import MoviePicture from "./MoviePicture";



export default function MoviePictures({images, movieName}) {
    const [isVisible,setIsVisible] = useState({visible: false, imageId: null})
    const handleOnClick = (e) => {

        setIsVisible({...isVisible,['visible']: true,['imageId']: Number(e.target['id'])})
    }
    return (
        <div className="MoviePictures__container">
            <span className="MoviePictures__text">
                تصاویر و جزئیات
            </span>
            <div className="MoviePictures__box">    
                
                {
                images.map((image,index) => {
                    return <MoviePicture image={image} index={index} handleOnClick={handleOnClick} movieName={movieName}/>

                })
                }
            </div>
            <SlideShow isVisible={isVisible} setIsVisible={setIsVisible} images={images}/>
        </div>
    )
}