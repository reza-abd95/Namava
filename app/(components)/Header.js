

import "../globals.css"
import HeaderNav from "@/app/(components)/HeaderNav";
import Logo from "@/app/(components)/Logo";
import Menu from "@/app/(components)/Menu";
import SearchBox from "@/app/(components)/SearchBox";
import ProfileBox from "@/app/(components)/ProfileBox";

export default function Header() {
    return (
        <div className="header_gradient z-10 absolute  flex justify-between items-center flex-row w-full h-[70px] px-[18px]  pt-1 ml:h-[80px] ml:px-[22px] tab:h-[60px] tab:px-[30px] tab:py-0 tab:pt-[4px] des:h-[80px] des:pt-[2px] des:px-[41px]">
            <div className="flex items-center justify-center flex-row">
                <Menu/>
                <Logo/>
                <HeaderNav/>
            </div>
            <div className="flex ml-[2px]">
                <SearchBox/>
                <ProfileBox/>
            </div>

        </div>
    )
}
  