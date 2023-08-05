

import "../globals.css"
import HeaderNav from "@/app/(components)/HeaderNav";
import Logo from "@/app/(components)/Logo";
import Menu from "@/app/(components)/Menu";
import SearchBox from "@/app/(components)/SearchBox";
import ProfileBox from "@/app/(components)/ProfileBox";


export default function Header() {
    return (


        <div >
            <div className="header_gradient text-[12px] z-10 absolute  flex justify-between items-center flex-row w-full h-[70px] px-[18px] ml:h-[80px] ml:px-[22px] tab:h-[60px] tab:px-[30px] tab:py-0 des:h-[80px]  des:px-[41px] large:h-[100px] large:px-[55px]">
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
        </div>
    )
}
  