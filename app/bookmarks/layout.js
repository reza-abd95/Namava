'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import '../globals.css'

export default function UsersLayout({children}) {
    const currentRoute = usePathname();
    console.log(currentRoute)

    return (
        <div className=" w-full">
            <div className=" pt-20"></div>
            <div className="w-full px-6 ml:px-10 des:px-12 pt-10 pb-8 text-sm">
                <ul className="flex flex-col gap-8 ms:flex-row ms:gap-0 list-none ">
                    <li className=" ml-6"><Link  href="/bookmarks" className={currentRoute === "/bookmarks" ? "header__active-bookmarks "  : "header__non-active-bookmarks"}> لیست من</Link></li>
                    <li><Link  href="/bookmarks/liked" className={currentRoute === "/bookmarks/liked" ? "header__active-bookmarks "  : "header__non-active-bookmarks"}> لایک شده</Link></li>
                </ul>
            </div>

        {children}
        </div>
    )
}