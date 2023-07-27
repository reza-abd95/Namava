import Image from 'next/image'
import Link from 'next/link'


import NamavaIcon from '../../../public/icons/Namava-icon.svg'
import NamavaSmalIcon from '../../../public/icons/Namava-s-icon.svg'
import BazarIcon from '../../../public/icons/Bazar-icon.svg'
import SibAppIcon from '../../../public/icons/SibApp-icon.svg'
import PlayStoreIcon from '../../../public/icons/PlayStore-icon.svg'
import AppStore from './AppStore'

export default function DownloadApp() {

    return (
        <div className='DA__container'>
            <div className='DA__title'>
               <div href='#' className='DA__title__logo'>
                  <Image src={NamavaSmalIcon}/>
               </div>
               <h3 href='#' className='DA__title__text'>دانلود اپلیکیشن</h3>
            </div>
            <div className='AppStore__holder'>
              <AppStore icon={BazarIcon} name={'بازار'}/>
              <AppStore icon={SibAppIcon} name={'سیب اپ'}/>
              <AppStore icon={PlayStoreIcon} name={'پلی استور'}/>
              <Link href='#' className='AppStore__more'>بیشتر</Link>
            </div>
        </div>
    )
}