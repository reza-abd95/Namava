
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/images/Logo.png"

export default function Logo () {
    return (
        <div>
            <Link href="#"><Image className="w-[47px] h-[16px] des:w-[63px] des:h-[22px]" src={LogoImage} alt="logo"/></Link>
        </div>
    )
}