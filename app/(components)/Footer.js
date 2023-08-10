'use client'
import Image from 'next/image'
import Link from 'next/link'



import AboutUs from './footer/AboutUs'
import DownloadApp from './footer/DownloadApp'
import ContactUs from './footer/ContactUs'
import FooterNavbar from './FooterNavbar'
import { useRef ,useState,useEffect} from 'react'



export default function Footer() {
  
    return (
        <div className='Footer__container'>
            <div className={`Footer__holder`}>
                <div className="Footer">
                  <DownloadApp/>
                  <AboutUs/>
                  <ContactUs/>
                </div>
            </div>
            

          </div>
    )
}
