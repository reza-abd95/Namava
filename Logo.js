
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute">
      <Link href="#">
        <Image
          src="/images/avatarLogo.png"
          alt="avatar"
          width={100}
        height={100}
        />
      </Link>
    </div>
  )};