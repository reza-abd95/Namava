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
        <div>
            <div className='flex text-[#ffffff] py-2'>
               <div href='#' className='bg-[#0F7EE1] w-[48px] h-[48px] rounded-md flex items-center justify-center mx-2'>
                  <Image src={NamavaSmalIcon}/>
               </div>
               <h3 href='#' className='flex items-center text-xs mx-2 no-underline text-[#FFFFFF]'>دانلود اپلیکیشن</h3>
            </div>
            <div className='flex items-center py-2'>
              <AppStore icon={BazarIcon} name={'بازار'}/>
              <AppStore icon={SibAppIcon} name={'سیب اپ'}/>
              <AppStore icon={PlayStoreIcon} name={'پلی استور'}/>
              <Link href='#' className='text-[#6eb8ff] text-sm flex items-center justify-center mx-2 font-iranyekanBold no-underline'>بیشتر</Link>
            </div>
        </div>
    )
}