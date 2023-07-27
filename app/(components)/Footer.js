import Image from 'next/image'
import Link from 'next/link'



import AboutUs from './footer/AboutUs'
import DownloadApp from './footer/DownloadApp'
import ContactUs from './footer/ContactUs'
export default function Footer() {
    return (
          <div className="bg-[#1A1A1A] flex flex-col px-3 py-2">
            <DownloadApp/>
            <AboutUs/>
            <ContactUs/>
          </div>
    )
}
  