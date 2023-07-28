
import Link from "next/link";
import Image from "next/image";
// import LogoImage from "./images/avatarLogo.png";

export default function Logo() {
  return (
    <div className="absolute">
      <Link href="#">
        <Image
        //   className="w-[47px] h-[16px] des:w-[63px] des:h-[22px]"
          src="/images/avatarLogo.png"
          alt="avatar"
          width={100}
        height={100}
        />
      </Link>
    </div>
  )};