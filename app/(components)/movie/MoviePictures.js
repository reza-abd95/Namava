'use client'

import { useState } from "react";
import SlideShow from "@/app/(components)/movie/SlideShow";
import Image from "next/image";



export default function MoviePicturs({images}) {
    const [isVisible, setIsVisible] = useState({visible: false, imageId: null})
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
                    return <div key={index+1} className="MoviePictures__pictureHolder"> <Image onClick={handleOnClick} id={index+1} className="MoviePictures__pictureStyle" src={image} alt="movieId"/> </div>
                })
                }
            </div>
            <SlideShow images={images} isVisible={isVisible} setIsVisible={setIsVisible}/>
        </div>
    )
}
