'use client'
import Logo from './Logo';
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';

export default  function Test(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
<Link href='#' className='relative'><Image
  width={1000}
  height={1000 }
  src={windowWidth > 500 ? "/images/extractd.jpg":"/images/extractm.jfif"}
  alt="avatar"
/>
</Link>
         <Logo /> 
        </>
    )
}


// import Logo from './Logo';
// import Link from "next/link";
// import Image from "next/image";
// export default  function Test(){
//     return(
//         <>
// <Link href='#'><Image
//         width={1000}
//         height={1000}
//           src="/images/jang.jpg"
//           alt="avatar"
//         /></Link>
//          <Logo /> 
//         </>
//     )
// }