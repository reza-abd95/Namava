'use client'

import Image from "next/image"
import ArrowLeft from '../../../public/icons/ArrowLeft.svg'
import ArrowRight from '../../../public/icons/ArrowRight.svg'
import CloseButton from '../../../public/icons/ShowSliderCloseButton.svg'
import CloseButtonMd from '../../../public/icons/ShowSliderCloseButton-md.svg'
import CloseButtonLg from '../../../public/icons/ShowSliderCloseButton-lg.svg'
import { useEffect, useState } from "react"
import windowDimensions from "@/app/hooks/useWindowDimensions"
export default function SlideShow({images,isVisible,setIsVisible}) {
    const width = windowDimensions()
    const handleOnNext = (e) => {
        e.stopPropagation()
        if (isVisible.imageId === images.length) {
            setIsVisible({...isVisible,['imageId']: 1})
        } else {
            setIsVisible({...isVisible,['imageId']: isVisible.imageId + 1})
        }
        
    }
    const handleOnPrev = (e) => {
        e.stopPropagation()
        if (isVisible.imageId === 1) {
            setIsVisible({...isVisible,['imageId']: 6})
        } else{
            setIsVisible({...isVisible,['imageId']: isVisible.imageId-1})
        }
        
    }
    if (width < 500) {
        var button = CloseButton
    }else if (width < 800) {
        var button = CloseButtonMd
    }else {
        var button = CloseButtonLg
    }
    const index = isVisible.imageId - 1
    return (
        <div onClick={() => 
        setIsVisible({...isVisible,['visible']:false,['imageId']:null})}
        className={`SlideShow__background ${isVisible.visible? '':'hidden'}`}>
            <div className="SlideShow__container">
                <Image className="SlideShow__closeButton" src={button} alt="button"/>
                <div onClick={handleOnPrev} className="SlideShow__buttons">
                    <Image src={ArrowRight} alt="arrow"/>
                </div>
                <div className="SlideShow__imageHolder">
                    <Image width={1000} height={750} className="SlideShow__imageStyle" src={(images[index]? "https://static.namava.ir/Content/Upload/Images/" + images[index]: "https://static.namava.ir/Content/Upload/Images/" + images[1])} alt="movieImages"/>
                </div>
                <div onClick={handleOnNext} className="SlideShow__buttons">
                    <Image src={ArrowLeft} alt="arrow"/>
                </div>
            </div>
        </div>
    )
}