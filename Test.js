'use client'
import Logo from '/Logo';
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
export default  function Test(){
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
      
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
      
       
        window.addEventListener('resize', handleResize);
      
        return () => {
          
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
      
    return(
        <>
<Link href='#'><Image
  width={windowWidth > 500 ? 1000 : 47}
  height={windowWidth > 500 ? 1000 : 16}
  src={windowWidth > 500 ? "/images/avatarDesktop.jpg":"/images/avatarMobile.jfif"}
  alt="avatar"
/>
</Link>
         <Logo /> 
        </>
    )
}


// import Logo from '/Logo';
// import Link from "next/link";
// import Image from "next/image";
// export default  function Test(){
//     return(
//         <>
// <Link href='#'><Image
//         width={1000}
//         height={1000}
//           src="/images/avatarMobile.jfif"
//           alt="avatar"
//         /></Link>
//          <Logo /> 
//         </>
//     )
// }