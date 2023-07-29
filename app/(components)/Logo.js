
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../public/images/Logo.png"

export default function Logo () {
    return (
        <div>
            <Link href="/"><Image className="w-[47px] h-[16px] mr-[1px] mt-[2px] tab:w-[48px] des:w-[63px] des:mr-[2px] des:h-[21px]" src={LogoImage} alt="logo"/></Link>
        </div>
    )
}
