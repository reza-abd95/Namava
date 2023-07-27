import Image from 'next/image'
import Link from 'next/link'

export default function SocialMedia({icon}) {

    return (
        <Link href='#' className='SocialMedia'><Image src={icon}/></Link>
    )
}