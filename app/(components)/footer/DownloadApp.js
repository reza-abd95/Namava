import Image from 'next/image'
import Link from 'next/link'


import NamavaIcon from '../../../public/icons/Namava-icon.svg'
import NamavaSmalIcon from '../../../public/icons/Namava-s-icon.svg'
import BazarIcon from '../../../public/icons/Bazar-icon.svg'
import SibAppIcon from '../../../public/icons/SibApp-icon.svg'
import PlayStoreIcon from '../../../public/icons/PlayStore-icon.svg'
import { useState, useEffect } from 'react'

export default function DownloadApp() {
    const [width,setWidth] = useState(window.outerWidth)
    useEffect(() => {

        window.addEventListener('resize',() => {setWidth(window.outerWidth)})
    },[width])
    return (
        <div className='DA__container'>
            <div className='DA__title'>
               <div href='#' className='DA__title__logo'>
                  <Image src={(width > 1280)? NamavaIcon:NamavaSmalIcon}/>
               </div>
               <h3 href='#' className='DA__title__text'>دانلود اپلیکیشن</h3>
            </div>
            <div className='AppStore__holder'>
                <Link href='#' className='AppStore'>
                    <Image src={BazarIcon}/>
                    <div className="AppStore__details">
                        <span className="AppStore__icon__text">دریافت از</span>
                        <h4 className="AppStore__name">بازار</h4>
                    </div>
                </Link>
                <Link href='#' className='AppStore'>
                    <Image src={SibAppIcon}/>
                    <div className="AppStore__details">
                        <span className="AppStore__icon__text">دریافت از</span>
                        <h4 className="AppStore__name">سیب اپ</h4>
                    </div>
                </Link>
                <Link href='#' className='AppStore'>
                <Image src={PlayStoreIcon}/>
                    <div className="AppStore__details">
                        <span className="AppStore__icon__text">دریافت از</span>
                        <h4 className="AppStore__name">پلی استور</h4>
                    </div>
                </Link>
              <Link href='#' className='AppStore__more'>بیشتر</Link>
            </div>
        </div>
    )
}