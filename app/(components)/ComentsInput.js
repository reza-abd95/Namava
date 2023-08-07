import {useState} from "react";


export default function  CommentsInput () {
    const [message, setMessage] = useState("");
    const handleChange = (event) => {
        setMessage(event.target.value);
    }
    return(
            <div className=" w-full h-[200px] tab:h-[225px] mt-[200px] pt-[32px] pb-[19px] px-[20px] text-[16px]  bg-[#222327] flex flex-col justify-center items-center  ml:px-[24px] tab:pt-[40px] tab:px-[32px] des:w-[1000px] des:rounded-t-[6px] des:px-[24px]  ">
                <div className="mb-[48px] px-[20px] text-white des:text-[18px] des:pl-[62px]">نظرات کاربران</div>
                <div className="w-full flex items-center justify-start ml:justify-start">
                    <div className="ml:w-[7.5%] tab:w-[6%] tab:mb-[2px] des:w-[4.5%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40"
                             className=" t-profile-0-1-1525 ml:mt-[2px] tab:w-[40px] tab:h-[40px]  ">
                            <path  className="fill-white w-[17.5%]"
                                  d="M1429.6,630.193a19.238,19.238,0,1,0,19.239,19.238A19.26,19.26,0,0,0,1429.6,630.193Zm0,6.383a6.783,6.783,0,1,1-6.782,6.782A6.79,6.79,0,0,1,1429.6,636.576Zm12.7,22.675a15.8,15.8,0,0,1-12.7,6.4,16.2,16.2,0,0,1-12.632-6.37,4.141,4.141,0,0,1-.7-3.937,8.936,8.936,0,0,1,5.3-5.2,2.552,2.552,0,0,1,2.335.239,9.864,9.864,0,0,0,11.379,0,2.564,2.564,0,0,1,2.352-.234,8.936,8.936,0,0,1,5.3,5.241A4.141,4.141,0,0,1,1442.3,659.251Z"
                                  transform="translate(-1409.595 -629.43)"></path>
                            <rect width="40" height="40" fill="none"></rect>
                        </svg>
                    </div>
                    <input className=" w-[70%] ml:w-[82%] tab:w-[83%] des:w-[86.5%] mt-[1px] h-[40px] rounded-[6px] font-iranyekanRegular placeholder:text-[12px] placeholder:text-[#666666] align-middle placeholder:align-middle py-[11px] ml:py-[9px] px-[12px] ml:px-[16px]  mr-[16px] ml:mr-[13px] ml-[8px] border-0 outline-0 ml:pb-[12px] tab:p-[26px] tab:mr-[15px] " onChange={handleChange} value={message} id="message" name="message" type="text" placeholder="نظرتان درباره این فیلم چیست؟"/>
                    <svg onClick={() => setMessage("")}  className="mt-[4px] tab:w-[40px] tab:h-[40px] tab:mr-[15px]  " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40">
                        <defs></defs>
                        <g className="fill-[#666666]" id="Group_2312" data-name="Group 2312" transform="translate(-188.002 -426)">
                            <path className="text-white bg-white " id="Subtraction_3"
                                  d="M20 40a20.005 20.005 0 0 1-7.783-38.428 20.005 20.005 0 0 1 15.57 36.856A19.875 19.875 0 0 1 20 40zm6.876-29.689a1.479 1.479 0 0 0-.69.175L9.212 19.36a1.471 1.471 0 0 0 0 2.607l16.976 8.873a1.451 1.451 0 0 0 1.971-.592 1.424 1.424 0 0 0-.03-1.47l-3.99-6.624a2.884 2.884 0 0 1 0-2.983l3.99-6.623a1.424 1.424 0 0 0 .03-1.471 1.485 1.485 0 0 0-1.281-.766z"
                                  data-name="Subtraction 3" transform="translate(188 426)">
                            </path>
                        </g>
                    </svg>

                </div>
                <div className="w-full flex items-center align-middle justify-start ml:justify-center  mt-[12px] tab:mt-[8px] tab:mb-[10px] des:mt-[12px] ">
                    <label id="radio" className="block relative pl-[35px] cursor-pointer ml:ml-[18px] ml:pt-[1px] ml:w-[85%] ml:mr-[45px] tab:w-[87%] des:w-[90.5%] tab:mr-[42px] tab:mb-[1px]">
                        <input className="absolute opacity-0 cursor-pointer w-[21px] checked:bg-blue-500 h-[20px]" type="radio" checked="checked" name="radio"/>
                        <span className="absolute bottom-0 right-0 border border-white rounded-[6px] h-[20px] w-[20px] bg-[#222327] ml:mb-[1px]"></span>
                        <span className="relative font-iranyekanRegular text-[10px] ml:text-[12px]   text-white mr-[28px] mb-[15px] ">این نظر حاوی اسپویلر است و داستان فیلم را لو می‌دهد.</span>
                    </label>
                </div>
            </div>

    )

}