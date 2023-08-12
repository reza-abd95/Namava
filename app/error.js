'use client'

import Link from "next/link";

export default function Error({error, reset}) {
    return (
        <div className="w-full h-screen bg-blue-500 flex flex-col justify-center items-center ">
            <h1 className="font-iranyekanBold text-[25px] mb-[10px]">اوپسسس...</h1>
            <h2 className="font-iranyekanBold text-[20px] mb-[20px]">یک چیزی اشتباه است!</h2>
            <button className="cursor-pointer w-[200px] h-[50px] bg-yellow-500 hover:bg-yellow-600 rounded-xl font-iranyekanRegular text-[20px] " onClick={() => reset()}>دوباره تلاش کنید.</button>
            <Link href="/"> <button className="cursor-pointer w-[250px] h-[50px] bg-yellow-500 hover:bg-yellow-600 rounded-xl font-iranyekanRegular text-[20px] mt-2 ">بازگشت به صفحه ی اصلی</button></Link>

        </div>

    )
}