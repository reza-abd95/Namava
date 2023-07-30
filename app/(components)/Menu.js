

import Image from "next/image";
import MenuIcon from "@/public/icons/hamberger-menu.svg";
import MobileMenu from "./MobileMenu";

export default function Menu () {
    return (
        <>
            <div>
                <Image className="w-[32px] h-[27px] ml-[8px] tab:hidden " src={MenuIcon} alt="menu"/>
            </div>
            <div>
                
            </div>
        </>
    )
}