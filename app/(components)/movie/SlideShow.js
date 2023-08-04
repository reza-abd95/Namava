'use client'

import Image from "next/image"
import ArrowLeft from '../../../public/icons/ArrowLeft.svg'
import ArrowRight from '../../../public/icons/ArrowRight.svg'
import CloseButton from '../../../public/icons/ShowSliderCloseButton.svg'
import CloseButtonMd from '../../../public/icons/ShowSlideCloseButton-md.svg'
import CloseButtonLg from '../../../public/icons/ShowSliderCloseButton-lg.svg'
import { useEffect, useState } from "react"
export default function SlideShow({images,isVisible,setIsVisible}) {
    let index = isVisible.imageId
    const [width,setWidth] = useState(window.outerWidth)
    const handleOnNext = (e) => {
        e.stopPropagation()
        if (index === images.length) {
            index = 0
        }
        setIsVisible({...isVisible,['imageId']: index+1})
    }
    const handleOnPrev = (e) => {
        e.stopPropagation()
        if (index === 1) {
            index = images.length + 1
        }
        setIsVisible({...isVisible,['imageId']: index-1})
    }
    useEffect(() => {
        window.addEventListener('resize',() => {
            setWidth(window.outerWidth)
        })
    },[width])
    if (width < 500) {
        var button = CloseButton
    }else if (width < 800) {
        var button = CloseButtonMd
    }else {
        var button = CloseButtonLg
    }
    return (
        <div onClick={() => 
        setIsVisible({...isVisible,['visible']:false,['initialIndex']:null})}
        className={`SlideShow__background ${isVisible.visible? '':'hidden'}`}>
            <div className="SlideShow__container">
            <Image className="SlideShow__closeButton" src={button}/>
                <div onClick={handleOnPrev} className="SlideShow__buttons">
                    <Image src={ArrowRight}/>
                </div>
                <div className="SlideShow__imageHolder">
                    <Image className="SlideShow__imageStyle" src={images[index - 1]}/>
                </div>
                <div onClick={handleOnNext} className="SlideShow__buttons">
                    <Image src={ArrowLeft}/>
                </div>
            </div>
        </div>
    )
}