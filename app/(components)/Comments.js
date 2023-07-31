import React from 'react';
import Image from "next/image";
import Profile from "../../public/icons/profile-icon.png"

const Comments = () => {
    return (
        <div className=" mt-[600px] py-[32px] px-[20px] text-[16px] w-full absolute h-[1000px] bg-[#222327] flex flex-col justify-start items-center">
            <div className="px-[20px] text-white">نظرات کاربران</div>
            <div className="flex items-start justify-end bg-yellow-500">
                <Image className="w-[32px] h-[32px] rounded-full" src={Profile} alt="profile"/>
            </div>
        </div>
    );
};

export default Comments;
