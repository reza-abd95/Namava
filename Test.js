import Logo from '/Logo';
import Link from "next/link";
import Image from "next/image";
// import MobileImage from "/images/avatarMobile.png";
// import DesktopImage from "/images/avatarMobile.png";
export default  function Test(){
    return(
        <>
<Link href='#'><Image
        //   className="w-[47px] h-[16px] des:w-[63px] des:h-[22px]"
        width={1000}
        height={1000}
          src="/images/avatarMobile.jfif"
          alt="avatar"
        /></Link>
         <Logo /> 
        </>
    )
}