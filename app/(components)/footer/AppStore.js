import Link from "next/link"
import Image from "next/image"
export default function AppStore({icon,name}) {
    
    return (
        <Link href='#' className='AppStore'>
            <Image src={icon}/>
            <div className="AppStore__details">
                <span className="AppStore__icon__text">دریافت از</span>
                <h4 className="AppStore__name">{name}</h4>
            </div>
        </Link>
    )
}