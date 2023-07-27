import TwitterIcon from '../../../public/icons/Twitter-icon.svg'
import TelegramIcon from '../../../public/icons/Telegram-icon.svg'
import InstagramIcon from '../../../public/icons/Instagram-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import SocialMedia from './SocialMedia'
export default function ContactUs() {

    return (
        <div className='ContactUs__container'>
            <div className='ContactUs__SocialMedia'>
                <SocialMedia icon={TwitterIcon}/>
                <SocialMedia icon={InstagramIcon}/>
                <SocialMedia icon={TelegramIcon}/>
            </div>
            <p className='ContactUs__text'>خدمات ارایه شده در نماوا، دارای مجوز های لازم از مراجع مربوطه می باشد و هر گونه بهره برداری و سوء استفاده از محتوای نماوا، پیگرد قانونی دارد.</p>
        </div>
    )
}