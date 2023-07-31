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
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTimeout(() => {
          setIsIntersecting(entry.isIntersecting);
        }, 100);
        
      },
      {
        root: null,
        threshold: 0
      }
    );
    console.log(isIntersecting);
    observer.observe(target.current);

    return () => observer.disconnect();
  }, [isIntersecting]);
    return (
        <div className='Footer__container'>
            <FooterNavbar isFixed={!isIntersecting}/>
            <div className='Footer__holder'>
                <div ref={target} className="Footer">
                  <DownloadApp/>
                  <AboutUs/>
                  <ContactUs/>
                </div>
            </div>
            
          </div>
    )
}
