'use client'

import Image from "next/image";
import Profile from "@/public/icons/profile-icon.png";

export default function ProfileBox () {
    const mouseOverHandler = () => {
        console.log("sssssssssss")

    }
    return (
        <div>
            <div>
                <Image className="cursor-pointer w-[30px] h-[31px] rounded-full mt-[1px] mr-[8px] tab:h-[30px] tab:w-[31px] des:w-[40px] des:h-[40px]" src={Profile} alt="profile" onMouseOver={mouseOverHandler}/>
            </div>
            <div>
                <div>
                    <div>
                        <p></p>
                        <button></button>
                    </div>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                        <div>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}