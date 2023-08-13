'use client'
import {useCallback, useState} from "react";
import CommentLike from "@/app/(components)/CommentLike";
import CommentDislike from "@/app/(components)/CommentDislike";


export default  function UsersComments ({id , user , date , like , dislike , comment}) {
    const [showFirstSvg2, setShowFirstSvg2] = useState(true);
    const [showFirstSvg3, setShowFirstSvg3] = useState(true);
    const handleClickLike = useCallback(() => {
        if(showFirstSvg2===false){
            setShowFirstSvg2(true)
        }
        else {
            setShowFirstSvg2(false);
            setShowFirstSvg3(true)
        }
    })



    const handleClickDisLike = useCallback(() => {
        if(showFirstSvg3===false){
            setShowFirstSvg3(true)
        }
        else {
            setShowFirstSvg3(false);
            setShowFirstSvg2(true)
        }
    })
    return (
            <div key={id} className="w-full px-[20px] pt-[20px] text-[16px] bg-[#222327] flex flex-row justify-start items-start  ml:px-[24px] tab:px-[32px] tab:pt-[18px] des:w-[1000px] rounded-b-[6px] des:px-[24px] des:pt-[30px]   ">
                <div className="w-[17.5%] flex items-start justify-start mt-[1px] ml:w-[11%] tab:mb-[3px]  tab:w-[9%] des:w-[6.5%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40"
                         className="t-profile-0-1-1525 tab:w-[40px] tab:h-[40px] ">
                        <path className="fill-white"
                              d="M1429.6,630.193a19.238,19.238,0,1,0,19.239,19.238A19.26,19.26,0,0,0,1429.6,630.193Zm0,6.383a6.783,6.783,0,1,1-6.782,6.782A6.79,6.79,0,0,1,1429.6,636.576Zm12.7,22.675a15.8,15.8,0,0,1-12.7,6.4,16.2,16.2,0,0,1-12.632-6.37,4.141,4.141,0,0,1-.7-3.937,8.936,8.936,0,0,1,5.3-5.2,2.552,2.552,0,0,1,2.335.239,9.864,9.864,0,0,0,11.379,0,2.564,2.564,0,0,1,2.352-.234,8.936,8.936,0,0,1,5.3,5.241A4.141,4.141,0,0,1,1442.3,659.251Z"
                              transform="translate(-1409.595 -629.43)"></path>
                        <rect width="40" height="40" fill="none"></rect>
                    </svg>
                </div>
                <div className="w-full pb-[50px] flex flex-col items-start justify-center mt-[3px] ml:pb-[17px]  ">
                    <div className=' pb-[22px] tab:pb-[18px]'>
                        <span className="text-[12px] font-iranyekanRegular text-[#AAAAAA] ">{user}</span>
                        <span className="text-[12px] font-iranyekanRegular text-[#AAAAAA]">{date}</span>
                    </div>
                    <span className='text-[12px] font-iranyekanRegular text-white '>{comment}</span>
                    <div className="flex flex-row justify-start items-center w-full gap-[35px] mt-[30px] pr-[5px] tab:mt-[25px] border-b border-[#37383E] pb-[30px] ">
                        <span onClick={handleClickLike} className="flex flex-row gap-4 font-iranyekanRegular text-[12px] text-[#AAAAAA] tab:justify-center tab:items-center">
                            {/*<Image className="w-[18px] h-[18px] transform -scale-x-100 cursor-pointer tab:w-[26px] tab:h-[26px] tab:mb-[4px]"  src={CommentLike} alt="like"/>*/}
                            <CommentLike like={like} showFirstSvg2={showFirstSvg2}/>
                            </span>
                        <span onClick={handleClickDisLike} className="flex flex-row gap-4 font-iranyekanRegular text-[12px] text-[#AAAAAA] ">
                            {/*<Image className="w-[18px] h-[18px] transform -scale-y-100 cursor-pointer tab:w-[26px] tab:h-[26px]" src={CommentLike} alt="dislike"/>*/}
                            <CommentDislike dislike={dislike} showFirstSvg3={showFirstSvg3} />
                            </span>
                    </div>
                </div>
            </div>

    )
}