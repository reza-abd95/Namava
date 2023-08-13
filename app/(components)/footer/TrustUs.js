import Link from "next/link"
import Image from 'next/image'
export default function TrustUs({icon}) {

    return (
        <Link href='#' className='TrustUs__container'>
            <Image className='TrustUs__image' src={icon} alt='Icon'/>
        </Link >
    )
}