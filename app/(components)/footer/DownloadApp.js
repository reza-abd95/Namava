import Image from 'next/image'
import Link from 'next/link'


import NamavaIcon from '../../../public/icons/Namava-icon.svg'
import NamavaSmalIcon from '../../../public/icons/Namava-s-icon.svg'
import BazarIcon from '../../../public/icons/Bazar-icon.svg'
import SibAppIcon from '../../../public/icons/SibApp-icon.svg'
import PlayStoreIcon from '../../../public/icons/PlayStore-icon.svg'
import { useState, useEffect } from 'react'
import windowDimensions, {} from '../../hooks/useWindowDimensions'
import AppStore from './Appstore'
export default function DownloadApp() {
    const width = windowDimensions()
    return (
        <div className='DA__container'>
            <div className='DA__title'>
               <Link href='#' className='DA__title__logo'>
                  <Image src={(width > 1280)? NamavaIcon:NamavaSmalIcon} alt='Namava'/>
               </Link>
               <Link href='#' className='DA__title__text'>دانلود اپلیکیشن</Link>
            </div>
            <div className='AppStore__holder'>
                <AppStore name={'بازار'} icon={BazarIcon} alt={'Bazar'}/>
                <AppStore name={'سیب اپ'} icon={SibAppIcon} alt={'Sib App'}/>
                <AppStore name={'پلی استور'} icon={PlayStoreIcon} alt={'Play Store'}/>
              <Link href='#' className='AppStore__more'>بیشتر</Link>
            </div>
        </div>
    )
}