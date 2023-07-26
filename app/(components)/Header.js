'use client'

import Link from "next/link";
import Image from "next/image";
import "../globals.css"
import Logo from "../../public/images/Logo.png"
import MenuIcon from "../../public/icons/hamberger-menu.svg"
import Profile from "../../public/icons/profile-icon.png"
import Search from "../../public/icons/search-line.svg"

export default function Header() {
    const onmouseover = () => {

    }
    return (
          <div className="bg-black bg-gradient-to-b from-rgba(18,18,18,0) absolute left-0 right-0 to-0% flex justify-between items-center flex-row w-full h-[70px] px-[20px]  pt-1 ">
              <div className="flex items-center justify-center flex-row ">
                  <div>
                      <Image className="w-[32px] h-[27px] ml-[10px]" src={MenuIcon} alt="menu"/>
                  </div>
                  <div>
                     <Link href="#"><Image className="w-[47px] h-[16px]" src={Logo} alt="logo"/></Link>
                  </div>
                  <nav className="">
                      <ul>
                          <Link className="ms:hidden" href="#">خانه</Link>
                          <Link className="ms:hidden" href="#">دسته بندی</Link>
                          <Link className="ms:hidden" href="#">فیلم ها</Link>
                      </ul>
                  </nav>
              </div>
              <div className="" >
                  <Image className="w-[28px] h-[30px] cursor-pointer" src={Search} alt="search"/>
                  <Image className="w-[30px] h-[31px] rounded-full mr-[8px]" src={Profile} alt="profile" onClick={onmouseover}/>
              </div>

          </div>
    )
  }
  