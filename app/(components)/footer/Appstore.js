import Image from 'next/image'
import Link from 'next/link'

export default function AppStore({icon,alt,name}) {

    return(
        <Link href='#' className='AppStore'>
            <Image src={icon} alt={alt}/>
            <div className="AppStore__details">
                <span className="AppStore__icon__text">دریافت از</span>
                <h4 className="AppStore__name">{name}</h4>
            </div>
        </Link>
    )
}