

import "../globals.css"
import HeaderNav from "@/app/(components)/HeaderNav";
import Logo from "@/app/(components)/Logo";
import Menu from "@/app/(components)/Menu";
import SearchBox from "@/app/(components)/SearchBox";
import ProfileBox from "@/app/(components)/ProfileBox";


export default function Header() {
    return (
        <>
            <div className="header_gradient absolute  flex justify-between items-center flex-row w-full h-[70px] px-[20px]  pt-1 tab:h-[60px] tab:px-[32px] tab:py-0 tab:pt-[4px] des:h-[80px] des:px-[43px]">
                <div className="flex items-center justify-center flex-row">
                    <Menu/>
                    <Logo/>
                    <HeaderNav/>
                </div>
                <div className="flex">
                    <SearchBox/>
                    <ProfileBox/>
                </div>
            </div>
        </>
    )
}
  