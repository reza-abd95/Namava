import TwitterIcon from '../../../public/icons/Twitter-icon.svg'
import TelegramIcon from '../../../public/icons/Telegram-icon.svg'
import InstagramIcon from '../../../public/icons/Instagram-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import SocialMedia from './SocialMedia'
export default function ContactUs() {

    return (
        <div className='px-2 py-3'>
            <div className='flex justify-center py-3'>
                <SocialMedia icon={TwitterIcon}/>
                <SocialMedia icon={InstagramIcon}/>
                <SocialMedia icon={TelegramIcon}/>
            </div>
            <p className='text-[#aaaaaa] text-[10px] leading-5 py-2 font-iranyekanRegular'>خدمات ارایه شده در نماوا، دارای مجوز های لازم از مراجع مربوطه می باشد و هر گونه بهره برداری و سوء استفاده از محتوای نماوا، پیگرد قانونی دارد.</p>
        </div>
    )
}