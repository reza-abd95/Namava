// import Logo from '/Logo';
// import Link from "next/link";
// import Image from "next/image";
// export default  function Test(){
//     return(
//         <>
// <Link href='#'><Image
        //   className="w-[47px] h-[16px] des:w-[63px] des:h-[22px]"
//         width={1000}
//         height={1000}
//           src="/images/avatarMobile.jfif"
//           alt="avatar"
//         /></Link>
//          <Logo /> 
//         </>
//     )
// }
'use client'
import React, { useState, useEffect } from 'react';
import Logo from '/Logo';
import Link from "next/link";
import Image from "next/image";

const Test = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // برای اجرای عملیات cleanup، `[]` را برگردانید.

  return (
    <>
      <Link href='#'>
        <Image
          width={windowWidth > 500 ? 1000 : 47}
          height={windowWidth > 500 ? 1000 : 16}
          src={windowWidth > 500 ? "/images/avatarMobile.jfif" : "/images/avatarDesktop.jpg"}
          alt="avatar"
        />
      </Link>
      <Logo /> 
    </>
  );
};

export default Test;
