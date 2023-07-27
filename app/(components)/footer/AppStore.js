import Link from "next/link"
import Image from "next/image"
export default function AppStore({icon,name}) {
    
    return (
        <Link href='#' className='w-[48px] h-[48px] rounded-md bg-[#37383E] flex items-center justify-center mx-2'><Image src={icon}/></Link>
    )
}