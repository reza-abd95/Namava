
import Image from 'next/image'
import Link from 'next/link'

export default function TrustUs({image}) {

    return (
        <Link href='#' className='TrustUs__container'>
            <Image className='TrustUs__image' src={image}/>
        </Link >
    )
}