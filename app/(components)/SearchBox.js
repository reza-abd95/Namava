'use client'


import Image from "next/image";
import Search from "@/public/icons/search-line.svg";
import {useRouter} from "next/navigation";

export default function SearchBox () {
    const router = useRouter();
    const clickHandler = () =>{
        router.push('/search')
    }
    return (
        <div>
            <Image onClick={clickHandler} className="click w-[28px] h-[30px] cursor-pointer mt-[2px] ml:ml-[8px] tab:h-[28px]   tab:ml-[11px] des:mt-0 des:w-[38px] des:h-[38px]" src={Search} alt="search"/>
        </div>
    )
}

