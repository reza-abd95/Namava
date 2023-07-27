import Image from 'next/image'
import Link from 'next/link'

export default function SocialMedia({icon}) {

    return (
        <Link href='#' className='px-5'><Image src={icon}/></Link>
    )
}