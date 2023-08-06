'use client'

import Image from "next/image";
import Profile from "@/public/icons/profile-icon.png";
import { useState } from "react";

export default function ProfileBoxSteaky () {
    const [profileState , setprofileState] = useState("hidden");
    const mouseOverHandler = () => {
        setprofileState("flex")
    }
    const closeProfile = () => {
        setprofileState("hidden")
    }
    return (
        <div>
            <div>
                <Image className="cursor-pointer w-[30px] h-[31px] rounded-full mt-[1px] mr-[8px] tab:h-[30px] tab:w-[31px] des:w-[40px] des:h-[40px]" src={Profile} alt="profile" onClick={mouseOverHandler} onMouseOver={mouseOverHandler}/>
            </div>
            <div className={"w-[600px] h-[500px] transition ease-in-out justify-end items-start absolute top-[20px] left-[2%] z-100" + " " + profileState} onMouseLeave={closeProfile} onClick={closeProfile}>
                <div className="w-[272px] rounded-lg mt-[45px] ml:mt-[50px] tab:mt-[44px] des:mt-[57px] overflow-hidden">
                    <div className="triangle-up absolute top-[24px] ml:top-[28px] des:top-[36px] des:left-[3.5%] tab:top-[23px] tab:left-[3.5%]  ml:left-[2%] left-[3%]"></div>
                    <div className="w-full h-[93px] p-[16px] bg-[#D95c5c] flex flex-col justify-center items-stretch">
                        <div className="w-full h-[20px] mb-[10px] text-[14px] text-white flex justify-center items-center text-center">اشتراک فعال ندارید</div>
                        <button className="shadow-lg shadow-[#1616163e] rounded-md bg-slate-50 cursor-pointer border-[0px] w-full px-[20px] h-[30px] text-center hover:bg-[#1993ff] text-black hover:text-white flex justify-center items-center text-[13px]">خرید اشتراک</button>
                    </div>
                    <div className="w-full pt-[12px] pr-[12px] pl-[12px] bg-slate-50">
                        <div className="w-full h-[30px] mb-[10px] pb-[10px] border-b-[1px] border-b-[#00000078] flex justify-center items-center text-zinc-900 hover:text-[#1993ff] fill-white hover:fill-[#1993ff]">
                            <div className="flex justify-center items-center">
                                <img src={"https://static.namava.ir/Content/Upload/Images/e9b409a9-88d8-4ee5-a81e-6cddc50782b0.png"} className="rounded-full" width={30} height={30} alt="profile2" />
                                <p className="text-[12px] w-[132px] mr-[8px]">بزرگسال</p>
                            </div>
                            <div className="flex justify-center items-center text-zinc-900 hover:text-[#1993ff] fill-[#bdbec0] hover:fill-[#1993ff]">
                                <svg width="20" height="20"  xmlns="http://www.w3.org/2000/svg" ><path d="M10.4167 12.5734C9.00811 12.5734 7.86632 11.4212 7.86632 10C7.86632 8.57871 9.00811 7.42646 10.4167 7.42646C11.8252 7.42646 12.967 8.57871 12.967 10C12.967 11.4212 11.8252 12.5734 10.4167 12.5734ZM16.5858 11.1736C16.4097 11.0018 16.3234 10.759 16.3444 10.5127C16.3588 10.342 16.3663 10.1693 16.3663 9.99485C16.3663 9.82482 16.3592 9.65654 16.3453 9.49014C16.3246 9.24405 16.4109 9.00161 16.5868 8.82994L17.2541 8.1789C17.5201 7.91939 17.577 7.51054 17.3919 7.18728L16.8559 6.25025L16.3198 5.31335C16.1348 4.99009 15.7555 4.83523 15.3998 4.93788L14.5132 5.19388C14.2773 5.2619 14.0252 5.21559 13.8243 5.07354C13.5452 4.87639 13.2486 4.70284 12.9373 4.55564C12.7158 4.45098 12.5508 4.25409 12.4914 4.01466L12.2688 3.11615C12.1792 2.75399 11.8567 2.5 11.4867 2.5H10.4144H9.34228C8.9723 2.5 8.64982 2.75399 8.56015 3.11615L8.33754 4.01466C8.27822 4.25409 8.11318 4.45098 7.89169 4.55564C7.5809 4.70259 7.28479 4.87589 7.00621 5.07266C6.80524 5.21446 6.55315 5.26077 6.31736 5.19275L5.43362 4.93763C5.07794 4.83486 4.6985 4.98971 4.51357 5.3131L3.97756 6.25L3.44142 7.1869C3.25637 7.51016 3.3132 7.91901 3.57922 8.17852L4.24246 8.82567C4.41843 8.99734 4.50462 9.24004 4.48397 9.486C4.46992 9.65377 4.46271 9.82344 4.46271 9.99485C4.46271 10.1708 4.47017 10.3447 4.48497 10.5168C4.50611 10.7631 4.41968 11.006 4.24357 11.1778L3.58357 11.8217C3.31755 12.0812 3.26072 12.4901 3.44577 12.8133L3.98191 13.7503L4.51805 14.6873C4.70298 15.0105 5.08229 15.1654 5.43797 15.0626L6.3293 14.8054C6.56472 14.7375 6.81618 14.7834 7.01703 14.9246C7.29176 15.1176 7.58314 15.2879 7.88883 15.4326C8.11032 15.5375 8.27536 15.7342 8.33455 15.9737L8.56015 16.8837C8.64982 17.2459 8.9723 17.5 9.34228 17.5H10.4144H11.4867C11.8567 17.5 12.1792 17.2459 12.2688 16.8837L12.4944 15.9737C12.5536 15.7342 12.7187 15.5375 12.9402 15.4327C13.2463 15.2876 13.5383 15.1171 13.8133 14.9237C14.0143 14.7824 14.2659 14.7362 14.5013 14.8042L15.3954 15.0622C15.751 15.165 16.1304 15.0102 16.3154 14.6869L16.8514 13.75L17.3876 12.813C17.5726 12.4897 17.5158 12.0809 17.2498 11.8214L16.5858 11.1736Z"></path></svg>
                                <p className="text-[12px] w-[45px] mr-[4px]">تنظیمات</p>
                            </div>
                        </div>
                        <div className="w-full h-[30px] flex justify-center items-center mb-[10px] pb-[10px] border-b-[1px] border-b-[#0000001f] text-zinc-900 hover:text-[#1993ff] fill-white hover:fill-[#1993ff]">
                            <img src={"https://static.namava.ir/Content/Upload/Images/bc44135c-bd14-44e9-9970-a33bacee3613.png"} alt="kidProfile" width={"30px"} height={"30px"} className="rounded-full" />
                            <p className="w-[202px] mr-[8px] text-[12px]">کودک</p>
                        </div>
                        <div>
                            <ul className="list-none w-full flex justify-center items-center flex-col">
                                <li className="profileBox__list">
                                    <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.98 7.757H6.364c-1.019 0-1.928.657-2.273 1.643l-1.897 5.417c-.301.859.318 1.765 1.206 1.765h11.118c.675 0 1.277-.435 1.506-1.088l2.116-6.041c.289-.825-.305-1.696-1.158-1.696zm-14.718 4.78l1.149-3.421c.44-1.31 1.608-2.191 2.907-2.191l9.12-.034c.311-.001.497-.36.326-.629-.348-.547-1.058-1.015-1.572-1.015h-3.376c-.903 0-1.752-.251-2.215-1.082-.286-.513-.81-.832-1.368-.832H3.261c-.879 0-1.594.767-1.594 1.709v7.39c0 .357.482.441.595.104z"></path>
                                    </svg>
                                    <p className="profileBox__list-text">لیست من</p>
                                </li>
                                <li className="profileBox__list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" >
                                        <g id="ic_menu_subscription" transform="translate(-330.723 -1342.097)">
                                            <rect id="Rectangle_370" width="20" height="20" transform="translate(330.722 1342.097)" fill="none"></rect>
                                            <path id="Path_4802" d="M341.488,1361.379l-3.162,1.663a1.643,1.643,0,0,1-2.384-1.732l.6-3.521a1.644,1.644,0,0,0-.472-1.454l-2.558-2.494a1.643,1.643,0,0,1,.91-2.8l3.536-.514a1.642,1.642,0,0,0,1.237-.9l1.581-3.2a1.643,1.643,0,0,1,2.946,0l1.581,3.2a1.643,1.643,0,0,0,1.237.9l3.535.514a1.643,1.643,0,0,1,.911,2.8l-2.558,2.494a1.643,1.643,0,0,0-.473,1.454l.6,3.521a1.643,1.643,0,0,1-2.383,1.732l-3.162-1.663A1.642,1.642,0,0,0,341.488,1361.379Z" transform="translate(-1.53 -2.273)"></path>
                                        </g>
                                    </svg>
                                    <p className="profileBox__list-text">خرید اشتراک</p>
                                </li>
                                <li className="profileBox__list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" ><circle cx="10.7" cy="10" r="8.31"></circle></svg>
                                    <p className="profileBox__list-text">گردونه شانس</p>
                                </li>
                                <li className="profileBox__list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" ><g id="Group_2228" transform="translate(-7475 8663)"><rect id="Rectangle_1497" width="20" height="20" transform="translate(7475 -8663)" fill="none"></rect><g id="Group_2227" transform="translate(6247.712 -9984.1)"><path id="Path_5350" d="M1317.021,1408.693h4.589a1.738,1.738,0,0,0,1.738-1.738v-7.872h-6.327Z" transform="translate(-78.848 -69.187)"></path><path id="Path_5349" d="M1238.843,1406.955a1.738,1.738,0,0,0,1.738,1.738h4.589v-9.61h-6.327Z" transform="translate(-8.587 -69.187)"></path><path id="Path_5351" d="M1243.729,1325.07h-2.151a2.181,2.181,0,0,0-.786-2.57h0a2.187,2.187,0,0,0-3.4,1.36l-.011.054-.011-.054a2.187,2.187,0,0,0-3.4-1.36h0a2.18,2.18,0,0,0-.786,2.57h-2.151a1.738,1.738,0,0,0-1.738,1.738v1.5h16.179v-1.5A1.738,1.738,0,0,0,1243.729,1325.07Zm-5.026-.763a.771.771,0,1,1,1.224.763h-1.376s0-.007,0-.011Zm-3.851-.479a.771.771,0,0,1,1.2.479l.15.752s0,.008,0,.011h-1.376A.771.771,0,0,1,1234.853,1323.827Z"></path></g></g></svg>
                                    <p className="profileBox__list-text">کارت هدیه</p>
                                </li>
                                <li className="profileBox__list">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" ><path d="M9.995 19.5a10.33 10.33 0 0 0 8.3-4.181 2.71 2.71 0 0 0 .42-2.523 5.84 5.84 0 0 0-3.467-3.425c-.507-.202-1.08-.145-1.537.153a6.45 6.45 0 0 1-7.436 0c-.453-.297-1.022-.355-1.526-.156a5.84 5.84 0 0 0-3.467 3.4c-.3.88-.128 1.85.455 2.573 1.97 2.58 5.013 4.11 8.258 4.16z"></path><circle cx="9.996" cy="4.933" r="4.433"></circle></svg>
                                    <p className="profileBox__list-text">حساب کاربری</p>
                                </li>
                                <li className="profileBox__list">
                                    <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 .7A9.31 9.31 0 0 0 .69 10.001a9.31 9.31 0 0 0 9.311 9.311 9.31 9.31 0 0 0 9.311-9.311A9.31 9.31 0 0 0 10.001.69zm-.783 4.745c.001-.432.35-.782.783-.782s.782.35.783.782v4.4c0 .208-.082.407-.23.554s-.346.23-.554.23-.407-.082-.554-.23-.23-.346-.23-.554zM10 15.846a5.83 5.83 0 0 1-5.818-5.823c0-1.7.745-3.317 2.04-4.422.328-.277.82-.24 1.1.086s.24.82-.086 1.1a4.25 4.25 0 0 0-1.492 3.231c.003 2.35 1.907 4.253 4.257 4.256 2.35-.003 4.254-1.906 4.257-4.256a4.25 4.25 0 0 0-1.492-3.231c-.325-.282-.362-.773-.083-1.1s.772-.364 1.1-.086c1.294 1.105 2.04 2.72 2.04 4.422a5.83 5.83 0 0 1-5.821 5.822z"></path>
                                    </svg>
                                    <p className="profileBox__list-text">خروج از حساب کاربری</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}