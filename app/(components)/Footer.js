'use client'
import Image from 'next/image'
import Link from 'next/link'



import AboutUs from './footer/AboutUs'
import DownloadApp from './footer/DownloadApp'
import ContactUs from './footer/ContactUs'
import FooterNavbar from './FooterNavbar'
import { useRef ,useState,useEffect} from 'react'



export default function Footer() {
  const target = useRef()
  const footer = useRef()
  const [isIntersecting, setIsIntersecting] = useState(false);
  // const [fully,setFully] =useState(false)
  // useEffect(() =>{
  //   const observer = new IntersectionObserver(([entry]) => {
  //     setFully(entry.isIntersecting)
  //   },
  //   {threshold: 1}
  //   )

  //   observer.observe(footer.current)
  //   return () => observer.disconnect()
  // },[fully])
  // if (fully) {
  //   window.scroll
  // }
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        setIsIntersecting(entry.isIntersecting); 
      },
      {
        root: null,
        threshold: 0
      }
    );
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [isIntersecting]);
    return (
        <div className='Footer__container'>
            <FooterNavbar isFixed={!isIntersecting}/>
            <div ref={footer} className={`Footer__holder`}>
                <div ref={target} className="Footer">
                  <DownloadApp/>
                  <AboutUs/>
                  <ContactUs/>
                </div>
            </div>
            
          </div>
    )
}
